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
			amplify.subscribe('fb:login:success',this.facebookLogUser);
			amplify.subscribe('user:loaded',this.userLoaded);
			amplify.subscribe('user:logout:click',this.userLogout);
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
			$.ajax({
				type : "POST",
				url : 'saveFBAccessToken',
				data : JSON.stringify(fbResponse.authResponse),
				contentType : "application/json; charset=utf-8",
				success : function(data){
					console.log(data);
					//amplify.publish('admin:sport:changed');
				},
				dataType : 'json'
			});
			
			FB.api('/me', function(response) {
				amplify.publish('fb:login:success',response);
			});
		},
		
		facebookLogUser: function(fbResponse){
			APP.User = fbResponse;
			amplify.publish("user:loaded");
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
		},
		
		userLoaded : function() {
			console.log(APP.User);
			$('.user-info').html('');
			$('.user-info').toggleClass('dropdown');
			var userMenu = $('<ul/>', {
				id : 'user-menu',
				class: 'dropdown-menu'
			});
			userMenu
				.append($('<li/>')
					.append($('<a/>',{
						href:'#',
						id : 'user-logout',
						text: 'Logout'
			})));
			var userInfo = $('<a />', {
				class: 'dropdown-toggle',
				'data-toggle' : 'dropdown',
				href : '#',
			});
			userInfo.append($('<i/>', {
				class : 'fa fa-user fa-fw'
			}));
			userInfo.append(APP.User.name);
			userInfo.append($('<b/>',{
				class:'caret'
			}));
			
			$('.user-info').append(userInfo);
			$('.user-info').append(userMenu);
			//$('#user-menu').dropdown('hide');
			$('#user-logout').click(function(event){
				event.preventDefault();
				amplify.publish('user:logout:click');
			});
		},
		

		userLogout : function() {
			console.log('logout');
			$('.user-info').html('');
			var logIn = $('<a/>', {
				href : '#',
				'data-target' : '#socialLoginModal',
				'data-toggle' : 'modal'
			});
			logIn.append($('<i/>', {
				class : 'fa fa-user fa-fw'
			}));
			logIn.append('Login');
			$('.user-info').append(logIn);
			APP.User = [];
		}

	});

	return Router;
});