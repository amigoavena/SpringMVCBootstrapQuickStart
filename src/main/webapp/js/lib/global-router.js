// Filename: app.js
define([ 'views', 'views/welcome', 'views/match', 'views/match.edit', 'views/league.admin','views/admin', 'json2' ], function(VIEWS,
		Welcome, Match, MatchEdit, LeagueAdmin, Admin) {

	var c = APP.Commons;
	var Router = Backbone.Router.extend({
		routes : {
			'' : 'defaultAction',
			'match/:params' : 'openMatchView',
			'matchEdit/:params' : 'openMatchEdit',
			'matches' : 'openMatchesList',
			'leagueAdmin' : 'openLeagueAdmin',
			'admin' : 'openAdmin'
		// ':viewId' : 'openView',
		// ':viewId/:params' : 'openView',
		},

		defaultAction : function() {
			console.log("defaultAction");
			var welcomeView = new Welcome({
				el : $("#container")
			});
			welcomeView.render();
		},

		initialize : function() {
			console.log("router init");
		},

		openMatchView : function(params) {
			var data = c.urlToJSON(params);
			var matchPageView = new Match({
				el : $("#container"),
				data : data
			});
		},
		
		openMatchEdit : function(params) {
			var data = c.urlToJSON(params);
			var matchEditView = new MatchEdit({
				el : $("#container"),
				data : data
			});
		},
		
		openLeagueAdmin : function(params) {
			var data = c.urlToJSON(params);
			var leagueAdminView = new LeagueAdmin({
				el : $("#container"),
				data : data
			});
		},
		openAdmin : function(params) {
			var data = c.urlToJSON(params);
			var adminView = new Admin({
				el : $("#container"),
				data : data
			});
		}
		
	});

	return Router;
});