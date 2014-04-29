define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/match.edit.html', 'stomp', 'sockjs', 'notify', 'growl' ], function(
		compiledTemplate, Stomp, SockJS) {
	
	var c = APP.Commons;
	
	var MatchEdit = Backbone.View.extend({

		stompClient : null,
		socket : null,
		id: null,

		render : function() {
			console.log("rendering MatchEdit!");
			$("#content", this.el).html(compiledTemplate)
			console.log("MatchEdit rendered!");
		},

		initialize : function(params) {
			var self = this;
			//console.log(params.data.id);
			if(!c.isEmpty(params)){
				this.id = params.data.id;
			}
			this.render();
			/*
			this.socket = new SockJS('hello');
			stompClient = Stomp.over(this.socket);
			stompClient.connect({}, function(frame) {
				// setConnected(true);
				console.log('Connected: ' + frame);
				console.log('subscribing to matchId:'+self.id);
				stompClient.subscribe('/topic/match/'+self.id, function(greeting) {
					console.log(greeting);
					self.showGreeting(JSON.parse(greeting.body).message);
				});
			});*/
			$("#sendName", this.el).click(function() {
				self.sendName();
			});
			console.log("match initialized");
		},

		sendName : function() {
			var name = $('#name', this.el).val();
			console.log(name);
			stompClient.send("/app/matches", {}, JSON.stringify({
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
	return MatchEdit;
});