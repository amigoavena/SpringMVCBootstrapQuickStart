// Filename: app.js
var APP = APP || {
	'User' : [],
	'Commons' : [],
	'Config' : [],
	'Views' : []
};

var REQJS_CONF = {
	urlArgs: "v=1.0.0" ,
	paths : {
		jquery : 'lib/jquery.min',
		underscore : 'lib/underscore-min',
		backbone : 'lib/backbone-min',
		json2 : 'lib/json2',
		layout_manager : 'lib/layout-manager',
		bootstrap : 'lib/bootstrap.min',
		commons : 'lib/commons',
		notify : 'lib/notify.min',
		growl : 'lib/bootstrap-growl.min',
		stomp : 'lib/stomp',
		React : 'lib/react.min',
		handsomeTable : 'lib/jquery.handsontable.full',
		bootstrapValidator : 'lib/bootstrapValidator',
		bootbox : 'lib/bootbox.min',
		moment : 'lib/moment.min',
		jstz : 'lib/jstz.min',
		sockjs : 'lib/sockjs',
		ajaxConfig : 'ajax.config',
		calendar : 'lib/calendar',
		text : 'lib/text',
		views : 'views'
	},

	shim : {
		'backbone' : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},
		'underscore' : {
			exports : '_'
		},
		'jquery' : {
			exports : '$',
		},
		'bootstrap' : {
			deps : [ 'jquery' ]
		},
		'stomp' : {
			deps : [ 'sockjs' ],
			exports : 'Stomp'
		},
		'ajaxConfig' : {
			deps : ['commons']
		},
		'layout_manager' : {
			deps :['ajaxConfig']
		},
		'bootbox' : {
			deps : [ 'jquery', 'bootstrap' ]
		},
		'bootstrapValidator' : {
			deps : [ 'jquery', 'bootstrap' ]
		},
		'growl' : {
			deps : [ 'jquery', 'bootstrap' ]
		},
		'handsomeTable' : {
			deps : [ 'jquery' ]
		}
	}
}

require.config(REQJS_CONF);

requirejs([ 'layout_manager', 'commons', 'views' ], function(AppManager, Commons, VIEWS ) {

	_.extend(APP.Commons, new Commons());

	_.extend(APP.Views, VIEWS);

	APP.Router = new Object();

	//console.log(APP.Views);

	var appRouter = Backbone.Router.extend({

		routes : {
			 ""						: "openViewDefault"
			,":viewId"				: "openView"
			,":viewId/:params"		: "openView"
			,"*path"				: "openExtra"
		},

		initialize:function(){
			console.log("initialized");
		},
		
		openViewDefault:function() {
			var defaultView = APP.Commons.findInArray(VIEWS,'isDefault',true);
			this.openView(defaultView.id);
			APP.Router.navigate(defaultView.url);
		},

		openExtra:function(path){
			var viewId = path.substr(0,path.indexOf("/"));
			var params = path.substr(path.indexOf("/")+1,path.length);
			console.log("viewId="+viewId);
			console.log("params="+params);
			this.openView(viewId,params);
		},

		openView:function(viewId,params) {
			var viewObj = APP.Commons.findInArray(VIEWS,'id',viewId);

			viewObj.data = APP.Commons.jsonParseUrl(params);
			viewObj.url = viewId + (!APP.Commons.isEmpty(params) ? '/' + params.replace("/", "%2F") : '');
			// when there are params to be passed globally
			var appParams = APP.Commons.jsonParseUrl(window.location.search);
			_.extend(viewObj.data,appParams);

			amplify.publish('app:show:view',viewId,viewObj);
		}
	});

	_.extend(APP.Router, new appRouter());
	
	var app = new AppManager();
	app.render();

	Backbone.history.start();

});