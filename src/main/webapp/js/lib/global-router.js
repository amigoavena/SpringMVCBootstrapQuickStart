// Filename: app.js
define([ 'views', 'views/welcome', 'views/match', 'views/match.edit',
		'views/league.admin', 'views/admin', 'json2', 'facebook' ], function(
		VIEWS, Welcome, Match, MatchEdit, LeagueAdmin, Admin) {

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
			amplify.subscribe('fb:login:click', this.facebookClick);
			amplify.subscribe('fb:login:callback', this.facebookLoginFinalized);
			amplify.subscribe('fb:login:success',this.facebookLogUser)
		},

		facebookClick : function() {
			FB.login(function(response) {
				console.log("logIn!");
				amplify.publish('fb:login:callback',response);
				console.log(response);
			}, {
				scope : 'public_profile,email'
			});
			console.log("facebook action!");
		},
		
		facebookLoginFinalized: function(fbResponse) {
			//amplify.publish('fb:login:click');
			console.log("facebookLoginFinalized");
			FB.api('/me', function(response) {
				amplify.publish('fb:login:success',response);
				
			});
		},
		
		facebookLogUser: function(fbResponse){
			console.log("facebookLogUser");
			console.log(JSON.stringify(fbResponse));
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