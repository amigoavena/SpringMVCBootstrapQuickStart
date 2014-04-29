define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/league.admin.html', 'stomp', 'sockjs', 'notify', 'growl' ], function(
		compiledTemplate, Stomp, SockJS) {
	
	var c = APP.Commons;
	
	var LeagueAdmin = Backbone.View.extend({

		id: null,

		render : function() {
			console.log("LeagueAdmin rendering!");
			$("#content", this.el).html(compiledTemplate)
			console.log("rendered");
		},

		initialize : function(params) {
			var self = this;
			//console.log(params.data.id);
			if(!c.isEmpty(params)){
				this.id = params.data.id;
			}
			this.render();
			console.log("LeagueAdmin match initialized");
		}
		
	});
	// Our module now returns our view
	return LeagueAdmin;
});