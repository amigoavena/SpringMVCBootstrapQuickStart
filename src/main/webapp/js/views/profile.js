define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/profile.html' ], function(compiledTemplate) {
	var ProjectListView = Backbone.View.extend({
		render : function() {
			console.log("rendering!");
			$("#content", this.el).html(compiledTemplate)
			console.log("rendered");
			console.log($('#profile-picture img',this.el));
			$('#profile-picture img',this.el).attr('src','https://graph.facebook.com/538066412981906/picture');
			console.log($('#profile-picture img',this.el));
			
		}
	});
	// Our module now returns our view
	return ProjectListView;
});