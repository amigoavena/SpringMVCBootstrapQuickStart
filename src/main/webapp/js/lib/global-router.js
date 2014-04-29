// Filename: app.js
define([ 'views', 'views/welcome', 'views/match', 'json2' ], function(VIEWS,
		Welcome, Match) {

	var c = APP.Commons;
	var Router = Backbone.Router.extend({
		routes : {
			'' : 'defaultAction',
			'match/:params' : 'openMatchView',
			'matchEdit/:params' : 'openMatchEdit',
			'matches' : 'openMatchesList'
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
		},

		openMatchView : function(params) {
			var data = c.urlToJSON(params);
			var matchPageView = new Match({
				el : $("#container"),
				// Pass parameter to the view.
				data : data
			});
			matchPageView.initialize();
		},

		// Shows invoice page.
		openView : function(viewId, params) {
			console.log("open " + viewId);
			var invoicePageView = new Invoice({
				el : $("#container"),
				// Pass parameter to the view.
				id : id
			});
			invoicePageView.render();
			ss
		},
	});

	return Router;
});