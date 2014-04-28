define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/match.html', 'stomp', 'sockjs', 'notify', 'growl' ], function(
		compiledTemplate, Stomp, SockJS) {
	var Match = Backbone.View.extend({

		stompClient : null,
		socket : null,

		render : function() {
			console.log("rendering!");
			$("#content", this.el).html(compiledTemplate)
			console.log("rendered");
		},

		initialize : function() {
			var self = this;
			console.log("match initialized");
			this.render();
			this.socket = new SockJS('hello');
			stompClient = Stomp.over(this.socket);
			stompClient.connect({}, function(frame) {
				// setConnected(true);
				console.log('Connected: ' + frame);
				stompClient.subscribe('/topic/greetings', function(greeting) {
					console.log(greeting);
					self.showGreeting(JSON.parse(greeting.body).message);
				});
			});

			$("#sendName", this.el).click(function() {
				self.sendName();
			});
		},

		sendName : function() {
			var name = $('#name', this.el).val();
			console.log(name);
			stompClient.send("/app/hello", {}, JSON.stringify({
				'message' : name,
				'from' : 'test'
			}));
		},

		showGreeting : function(message) {
			$.growl('New Message!', {
				ele : 'conversationDiv',
				type : 'success',
				position : {
					from : "top",
					align : "left"
				}
			});
			document.title = message;
			$('#response').html(message);
		}

	});
	// Our module now returns our view
	return Match;
});