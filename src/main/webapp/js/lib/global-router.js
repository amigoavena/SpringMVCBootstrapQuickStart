// Filename: app.js
define([ 'views' ], function( VIEWS ) {

	var c = APP.Commons;

	var Router = Backbone.Router.extend({
		// map the hash urls with function calls

		initialize:function(attribute){
			console.log('Backbone.Router.initialize');
		},

		routes: {
			'*page': 'index',
			'*page': 'index'
		},

		index: function () {
			console.log('index page');
		}

	});

	return Router;
});