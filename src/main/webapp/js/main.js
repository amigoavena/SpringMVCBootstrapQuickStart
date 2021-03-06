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
		//facebook : '//connect.facebook.net/en_US/all',
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
		}/*,
		'facebook' : {
			exports : 'FB'
		}*/
	}
}

// _.extend(REQJS_CONF.paths,APP_LIBS.paths)
// _.extend(REQJS_CONF.shim,APP_LIBS.shim)

require.config(REQJS_CONF);

requirejs([ 'commons', 'router', 'layout_manager', //'facebook',
  ], function(Commons, Router, AppManager) {

	_.extend(APP.Commons, new Commons());

	APP.Router = new Object();

	_.extend(APP.Router, new Router());

	console.log(APP.Router);

	console.log(APP.Router);
	
	var app = new AppManager();
	//app.render();

	console.log("history start?");


	/*
	FB.init({
		appId : '782219015121928',
		//appId: '782178938459269'
	});
	
	/*FB.getLoginStatus(function(response) {
		if(response.status === 'connected'){
			amplify.publish('fb:login:callback',response);
		}
	});
	
	//FB.login()


	$('#facebook-btn').click(function(event){
		event.preventDefault();
		$('#socialLoginModal').modal('hide');
		amplify.publish('fb:login:click');
	});*/

});