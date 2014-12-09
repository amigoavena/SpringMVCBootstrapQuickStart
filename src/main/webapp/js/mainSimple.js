// Filename: app.js
var APP = APP || {
	'User' : [],
	'Commons' : [],
	'Config' : []
};

var REQJS_CONF = {
	paths : {
		jquery : 'lib/jquery-1.11.0.min',
		underscore : 'lib/underscore-min',
		backbone : 'lib/backbone-min',
		json2 : 'lib/json2',
		router : 'lib/global-router',
		layout_manager : 'lib/layout-manager',
		bootstrap : 'lib/bootstrap.min',
		commons : 'lib/commons',
		notify : 'lib/notify.min',
		growl : 'lib/bootstrap-growl.min',
		stomp : 'lib/stomp',
		handsomeTable : 'lib/jquery.handsontable.full',
		bootstrapValidator : 'lib/bootstrapValidator',
		bootbox : 'lib/bootbox.min',
		moment : 'lib/moment.min',
		jstz : 'lib/jstz.min',
		sockjs : 'lib/sockjs',
		ajaxConfig : 'ajax.app-config',
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
		'notify' : {
			deps : [ 'jquery' ]
		},
		'stomp' : {
			deps : [ 'sockjs' ],
			exports : 'Stomp'
		},
		'ajaxConfig' :  ['commons'],
		'layout_manager' : ['ajaxConfig'],
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

requirejs([ 'commons', 'router', 'layout_manager' ], function(Commons, Router, AppManager) {

	_.extend(APP.Commons, new Commons());

	APP.Router = new Object();

	_.extend(APP.Router, new Router());
	
	var app = new AppManager();
	app.render();

	console.log("history start?");

});