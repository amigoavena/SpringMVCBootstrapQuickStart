define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/profile.html' ], function(compiledTemplate) {
	var Profile = Backbone.View.extend({
		user:null,

		render : function(_user) {

			this.user= _user;
			console.log("rendering!");
			$("#content", this.el).html(compiledTemplate)
			console.log("rendered");
			console.log($('#profile-picture img',this.el));
			$('#profile-picture img',this.el).attr('src','https://graph.facebook.com/538066412981906/picture');
			console.log($('#profile-picture img',this.el));
			console.log(APP.User);

			var userInfo = $('<img/>', {
						src:'https://graph.facebook.com/'+APP.User.id+'/picture?height=200&width=200',
						id : 'user-profile'
			});

			$('#profile-pic',this.el).html('');
			$('#profile-pic',this.el).append(userInfo);
			

		}
	});
	// Our module now returns our view
	return Profile;
});