require.config({

	paths : {
		jquery : 'lib/jquery-1.11.0.min',
		underscore : 'lib/underscore-min',
		backbone : 'lib/backbone-min',
		bootstrap : 'lib/bootstrap.min'
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
		}
	}

});

requirejs([ 'app' ], function(App) {

	App.initialize();

});