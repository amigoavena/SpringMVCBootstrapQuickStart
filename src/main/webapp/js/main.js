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
		bootstrap : 'lib/bootstrap.min',
		commons : 'lib/commons',
		notify : 'lib/notify.min',
		growl : 'lib/bootstrap-growl.min',
		stomp : 'lib/stomp',
		facebook : '//connect.facebook.net/en_US/all',
		bootstrapValidator : 'lib/bootstrapValidator',
		bootbox : 'lib/bootbox.min',
		sockjs : 'lib/sockjs',
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
		'bootbox' : {
			deps : [ 'jquery', 'bootstrap' ]
		},
		'bootstrapValidator' : {
			deps : [ 'jquery', 'bootstrap' ]
		},
		'growl' : {
			deps : [ 'jquery', 'bootstrap' ]
		},
		'facebook' : {
			exports : 'FB'
		}
	}
}

// _.extend(REQJS_CONF.paths,APP_LIBS.paths)
// _.extend(REQJS_CONF.shim,APP_LIBS.shim)

require.config(REQJS_CONF);

requirejs([ 'commons', 'router', 'facebook' ], function(Commons, Router) {

	_.extend(APP.Commons, new Commons());

	APP.Router = new Object();
	_.extend(APP.Router, new Router());

	FB.init({
		appId : '782219015121928',
	});
	
	/*FB.getLoginStatus(function(response) {
		if(response.status === 'connected'){
			amplify.publish('fb:login:callback',response);
		}
	});*/
	
	//FB.login()
	$('#facebook-btn').click(function(event){
		event.preventDefault();
		$('#socialLoginModal').modal('hide');
		amplify.publish('fb:login:click');
	});
	

	Backbone.history.start();

});