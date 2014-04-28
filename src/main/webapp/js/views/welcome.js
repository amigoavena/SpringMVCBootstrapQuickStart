define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/welcome.html' ], function(compiledTemplate) {
	var ProjectListView = Backbone.View.extend({
		render : function() {
			console.log("rendering!");
			$("#content", this.el).html(compiledTemplate)
			console.log("rendered");
		}
	});
	// Our module now returns our view
	return ProjectListView;
});