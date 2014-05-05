define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/league.html', 'stomp', 'sockjs', 'notify', 'growl' ], function(
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
			console.log("League match initialized");
			
			$('#addLeague').click(function(event){
				event.preventDefault();
				$('#leagueForm').validator('validate')
				var data = {
					leagueId : $('#leagueId', this.el).val(),
					leagueName : $('#leagueName', this.el).val(),
					sportId : $('#leagueName', this.el).val(),
					address : $('#address', this.el).val(),
					address2 : $('#address2', this.el).val()
				};
				console.log(JSON.stringify(data));
				console.log("addLeague");
			});
		}
		
	});
	// Our module now returns our view
	return LeagueAdmin;
});