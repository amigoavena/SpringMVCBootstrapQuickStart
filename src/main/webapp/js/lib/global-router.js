// Filename: app.js
define([ 'views','json2' ], function( VIEWS ) {

	var c = APP.Commons;

	return Backbone.Router.extend({
		routes : {
			"" : "index",
			'*page': 'index'
		},

		initialize:function(){
			console.log("initialized");
		},
		
		index : function() {
			console.log("hello world");
		}
	});
});