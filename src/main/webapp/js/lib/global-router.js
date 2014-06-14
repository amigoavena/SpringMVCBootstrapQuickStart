// Filename: app.js
define([ 'views', 'views/welcome', 'views/match', 'views/match.edit',
		'views/league.admin', 'views/profile', 'views/admin', 'json2', 'facebook' ], function(
		VIEWS, Welcome, Match, MatchEdit, LeagueAdmin, Profile, Admin) {

	var c = APP.Commons;

	var Router = Backbone.Router.extend({
		// map the hash urls with function calls
		routes:{
			""								: "openViewDefault",
			":viewId"					: "openView",
			":viewId/:params"	: "openView"
		},

		initialize:function(attribute){
			console.log('Backbone.Router.initialize');
		},

		openViewDefault:function() {
			var defaultView = c.findInArray(VIEWS,'isDefault',true);
			this.openView(defaultView.id);
			APP.Router.navigate(defaultView.url);
		},

		openView:function(viewId,params) {
			var viewObj = c.findInArray(VIEWS,'id',viewId);
			viewObj.data = c.jsonParseUrl(params);
			viewObj.url = viewId + (!c.isEmpty(params) ? '/' + params : '');
			// when there are params to be passed globally
			var appParams = c.jsonParseUrl(window.location.search);
			_.extend(viewObj.data,appParams);

			if(viewId=== "login"){
				var defaultView = c.findInArray(VIEWS,'isDefault',true);
				this.openView(defaultView.id);
				amplify.publish('app:show:login');
			} else if ( viewId === "register") {
				var defaultView = c.findInArray(VIEWS,'isDefault',true);
				this.openView(defaultView.id);
				amplify.publish('app:show:register');
			} else {
				amplify.publish('app:show:view',viewId,viewObj);
			}
			
			/*
			switch(viewObj.type) {
				case 'tab' 		: amplify.publish('app:show:tab',viewId,viewObj);break;
				case 'dialog'	: amplify.publish('app:show:popup',viewId,viewObj);break;
				default			: break;
			}*/
		},

	});

	return Router;
});