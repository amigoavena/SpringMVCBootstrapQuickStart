define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/welcome.html' ], function(compiledTemplate) {
	var BaseView = Backbone.View.extend({
		render : function() {
			$(this.el).html(compiledTemplate)
		},
		destroy : function() {
			console.log("destroying View");
			this.undelegateEvents();
		}
	});
	// Our module now returns our view
	return BaseView;
});