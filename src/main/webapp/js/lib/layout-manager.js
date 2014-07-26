// Filename: app.js
define([ 'views', 'json2', 'facebook' ], function(
		VIEWS ) {

	var c = APP.Commons;

	var AppManager = Backbone.View.extend({
		/*	
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
		},*/
		currentView:null,
		currentDialog:null,
		el:$('#content'),

		defaultAction : function() {
			console.log("defaultAction");
			var welcomeView = new Welcome({
				el : $("#container")
			});
			welcomeView.render();
		},

		initCustomEvents:function(){
			amplify.subscribe('fb:login:click', this.facebookClick);
			amplify.subscribe('fb:login:callback', this.facebookLoginFinalized);
			amplify.subscribe('fb:login:success',this.facebookLogUser);
			amplify.subscribe('user:loaded',this.userLoaded);
			amplify.subscribe('user:logout:click',this.userLogout);
			amplify.subscribe('app:show:view',this.displayView);
			amplify.subscribe('app:show:login',this.showLogin);
			amplify.subscribe('app:show:register',this.showRegister);
		},

		initialize : function() {
			c.backboneViewBindAll(this);
			console.log("Layout Manager init");
			this.initCustomEvents();
			this.extraInitialize();
		},

		// Render
		render: function(){
			console.log('AppLayout.render');
			var self = this;
			//this.displayView();
			/*
			this.setupLayout();
			this.renderTabs();
			$.when(this.ajaxCalls['get-appconfig']).done(function(){
				self.getCurrentUser();
				self.setAppTitleVer();
				self.checkAppVersion();
			});
			$.when(this.ajaxCalls['get-current-user']).done(function(){
				self.loadMenu();
			});
			*/
		},

		extraInitialize: function() {

			$.ajax({
				type : "GET",
				url : 'getUser',
				contentType : "application/json; charset=utf-8",
				success : function(data){
					//console.log(data);
					if(!c.isEmpty(data)){
						console.log("extraInitialized");
						APP.User = data;
						amplify.publish("user:loaded");
					}
					//console.log(data);
					//amplify.publish('admin:sport:changed');
				},
				dataType : 'json'
			});

		},

		showLogin:function() {
			console.log("showLogin");
			$('#socialLoginModal').modal('show');
		},

		showRegister:function() {
			console.log("showRegister");
			$('#socialSignup').modal('show');
		},

		facebookClick : function() {
			FB.login(function(response) {
				console.log("logIn!");
				amplify.publish('fb:login:callback',response);
			}, {
				scope : 'public_profile,email,publish_actions'
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
			console.log(APP.User);
			profileView.render(APP.User);
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
		},

		displayView:function(_viewId,_data,_reload,_fnCallback) {
			// set default values
			//console.log("displayingView");

			/*_reload = c.toBoolean(_reload,false);

			if(_reload) this.closeTab(_viewId);*/
			//var $newTab = this.addTab(_viewId,_data);

			//var self = this;
			//console.log(this.el);


			this.showWindow(
					this, // the parent will always be the layoutmanager
					this.el,
					_viewId,
					_data,
					_reload,
					_fnCallback);

		},

		test:function(){
			console.log("test");
		},

		/**
		 * Shows windows in a given container
		 * NOTE : One container to one Backbone.View only. Any existing view will be destroyed.
		 * Adds opened windows in a pool
		 *
		 * Structure of a window stored in the queue.
		 * 	| parent contains the parent Backbone.View object
		 * 	| container contains the jQuery DOM object
		 * 	| viewId the string id defined in app.view.js
		 * 	| view contains the Backbone.View itself
		 * 	| data contains the JSON object/Array passed to the view
		 * 	| url contains the hash URL of the Backbone.View instance
		 *
		 * TODO should use Backbone.View.options instead?
		 *
		 * @param _parent the parent view (Backbone.View)
		 * @param _$container the DOM container (jQuery)
		 * @param _viewId the id of the view (string)
		 * @param _data the data parameters to pass to the view (JSON)
		 * @param _isReload should we force override?
		 * @param _fnCallback the callback function
		 */
		showWindow:function(_parent,_$container,_viewId,_data,_isReload,_fnCallback) {
			// set default param values
			if(typeof _isReload == 'undefined') _isReload = false;

			// do not execute if already opened unless is forced for reload
			/*if(!_isReload && this.isWindowOpened(_parent, _$container, _viewId)) {
				return false;
			}*/

			var self = this;
			var objView = c.findInArray(VIEWS,'id',_viewId);
			var newView = null;
			// destroy the previous instance
			//this.closeWindow(_parent, _$container);
			// force container to be empty
			//console.log(_$container);
			$(_$container).html('');
			console.log(_data);
			// add the new view instance
			newView = {
				parent: _parent,
				container: _$container,
				viewId: _viewId,
				url: _data.url,
				data: _data.data
			};

			if(!c.isEmpty(this.currentView)){
				this.closeView(this.currentView);
			}
			// instantiate new view
			require([objView.view],function(ObjectView) {
				ObjectView.prototype.el = _$container;
				newView.view = new ObjectView(_data.data);
				c.backboneViewBindAll(newView.view);
				if(_.isFunction(newView.view.initCustomEvents)) newView.view.initCustomEvents();
				newView.view.render();
				self.currentView =  newView.view;
				if($.isFunction(_fnCallback)) {
					_fnCallback();
				}
			});
		},


		/**
		 * close all views in a window container
		 * @param _parent Backbone.View object
		 * @param _$container the jQuery object
		 */
		closeView:function(_view) {
			var self = this;

			_view.destroy();
			//openedWindow.view.remove(); --this should be the normal way of Backbone.
			_view.stopListening();

			/*this.recurseWindows(
					$.grep(this.openedWindows,function(openedWindow,x){
						return openedWindow.parent == _parent &&
							openedWindow.container.data() == _$container.data();
					}),
					function(openedWindow){
						// destroy the view itself
						openedWindow.view.destroy();
						//openedWindow.view.remove(); --this should be the normal way of Backbone.
						openedWindow.view.stopListening();
						openedWindow.container.empty();
						c.removeInArray(self.openedWindows,openedWindow);
					});
			*/
		},
	});

	return AppManager;
});