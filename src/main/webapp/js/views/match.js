define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/match.html', 'stomp', 'sockjs', 'notify', 'growl' ], function(
		compiledTemplate, Stomp, SockJS) {
	
	var c = APP.Commons;
	
	var Match = Backbone.View.extend({

		stompClient : null,
		socket : null,
		id: null,

		render : function() {
			console.log("rendering!");
			$(this.el).html(compiledTemplate)
			console.log("rendered");
		},

		initialize : function(params) {
			var self = this;
			if(!c.isEmpty(params)){
				this.id = params.id;
			}

			this.socket = new SockJS('hello');
			this.stompClient = Stomp.over(this.socket);
			this.stompClient.connect({}, function(frame) {
				console.log('Connected: ' + frame);
				console.log('subscribing to matchId:'+self.id);
				self.stompClient.subscribe('/topic/match/'+self.id, function(greeting) {
					console.log(greeting);
					self.showGreeting(JSON.parse(greeting.body).message);
				});
			});
			$("#sendName", this.el).click(function() {
				self.sendName();
			});
			console.log("match initialized");
		},

		sendName : function() {
			var name = $('#name', this.el).val();
			console.log(name);
			this.stompClient.send("/app/matches", {}, JSON.stringify({
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
		},

		destroy : function() {
			console.log("destroying Admin View");
			try{
				this.stompClient.disconnect();
			} catch (e){
				console.log(e)
			}
			this.undelegateEvents();
			amplify.unsubscribe('admin:sport:changed');
			amplify.unsubscribe('admin:sport:refresh');
		}

	});
	// Our module now returns our view
	return Match;
});