define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/welcome.html' ], function(compiledTemplate) {
	var ProjectListView = Backbone.View.extend({
		render : function() {
			console.log("rendering!");
			$(this.el).html(compiledTemplate)
			console.log("rendered");
		},
		destroy : function() {
			console.log("destroying Welcome");
		}
	});
	// Our module now returns our view
	return ProjectListView;
});