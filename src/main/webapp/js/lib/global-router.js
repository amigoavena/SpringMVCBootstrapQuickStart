// Filename: app.js
define([ 'views', 'views/welcome', 'views/match', 'views/match.edit',
		'views/league.admin', 'views/profile', 'views/admin', 'json2', 'facebook' ], function(
		VIEWS, Welcome, Match, MatchEdit, LeagueAdmin, Profile, Admin) {

	var c = APP.Commons;
	var Router = Backbone.Router.extend({
		routes : {
			'' : 'defaultAction',
			'match/:params' : 'openMatchView',
			'matchEdit/:params' : 'openMatchEdit',
			'matches' : 'openMatchesList',
			'leagueAdmin' : 'openLeagueAdmin',
			'admin' : 'openAdmin',
			'profile' : 'openProfile'
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
			this.extraInitialize();
		},

		extraInitialize: function() {

			$.ajax({
				type : "GET",
				url : 'getUser',
				contentType : "application/json; charset=utf-8",
				success : function(data){
					//console.log(data);
					if(!c.isEmpty(data)){
						APP.User = data;
						amplify.publish("user:loaded");
					}
					//console.log(data);
					//amplify.publish('admin:sport:changed');
				},
				dataType : 'json'
			});

		},

		facebookClick : function() {
			FB.login(function(response) {
				console.log("logIn!");
				amplify.publish('fb:login:callback',response);
			}, {
				scope : 'public_profile,email'
			});
			console.log("facebook action!");
		},
		
		facebookLoginFinalized: function(fbResponse) {
			//amplify.publish('fb:login:click');
			console.log(fbResponse);
			$.ajax({
				type : "POST",
				url : 'saveFBAccessToken',
				data : JSON.stringify(fbResponse.authResponse),
				contentType : "application/json; charset=utf-8",
				success : function(data){
					//console.log(data);
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
			console.log(APP.User);
			$.ajax({
				type : "POST",
				url : 'saveFacebookUser',
				data : JSON.stringify(APP.User),
				contentType : "application/json; charset=utf-8",
				success : function(data){
					//console.log(data);
					//amplify.publish('admin:sport:changed');
					amplify.publish("user:loaded");
				},
				dataType : 'json'
			});
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

		openProfile : function(params) {
			var data = c.urlToJSON(params);
			console.log("openingProfile");
			var profileView = new Profile({
				el : $("#container"),
				data : data
			});
			profileView.render();
		},

		openAdmin : function(params) {
			var data = c.urlToJSON(params);
			var adminView = new Admin({
				el : $("#container"),
				data : data
			});
		},
		
		userLoaded : function() {
			//console.log(APP.User);

			console.log("clearing user-info");
			$('.user-info').html('');
			$('.user-login').html('');

			var userInfo = $('<a/>', {
						href:'#profile',
						id : 'user-profile'
			});
			userInfo.append($('<i/>', {
				class : 'fa fa-user fa-fw'
			}));
			userInfo.append('Welcome '+APP.User.name+'!');
			console.log("appending user-info");

			$('.user-info').append(userInfo);

			var logOut = $('<a/>', {
						href:'#',
						id : 'user-logout'
			});
			logOut.append($('<i/>', {
				class : 'fa fa-sign-out fa-fw'
			}));
			logOut.append('Log Out');
			$('.user-login').append(logOut);


			/*
			
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
			*/
			$('#user-logout').click(function(event){
				event.preventDefault();
				amplify.publish('user:logout:click');
			});
		},
		

		userLogout : function() {
			console.log('logout');
			$('.user-info').html('');
			$('.user-login').html('');

			var logIn = $('<a/>', {
				href : '#',
				'data-target' : '#socialLoginModal',
				'data-toggle' : 'modal'
			});
			logIn.append($('<i/>', {
				class : 'fa fa-user fa-fw'
			}));
			logIn.append('Login');
			$('.user-login').append(logIn);
			$.ajax({
				type : "GET",
				url : 'logOutUser',
				contentType : "application/json; charset=utf-8",
				success : function(data){
					APP.User = [];
				},
				dataType : 'json'
			});
		}

	});

	return Router;
});