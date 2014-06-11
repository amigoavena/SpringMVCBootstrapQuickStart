define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/profile.html' ], function(compiledTemplate) {

	var c = APP.Commons;

	var Profile = Backbone.View.extend({
		user:null,

		render : function() {

			console.log("rendered");
			$(this.el).html(compiledTemplate);

			if(!c.isEmpty(APP.User)){
				this.userLoaded();
			}
			
		},

		initCustomEvents:function(){
			amplify.subscribe('user:loaded',this.userLoaded);
		},

		initialize : function(){
			console.log("initialize");
		},

		userLoaded: function(){
			console.log(APP.User);

			if(c.isEmpty(APP.User)){

				return false;


			}

			var userInfo = $('<img/>', {
						src:'https://graph.facebook.com/'+APP.User.id+'/picture?height=200&width=200',
						id : 'user-profile'
			});
			$('#profile-pic',this.el).html('');
			$('#profile-pic',this.el).append(userInfo);
			$('#name',this.el).html(APP.User.name);
		},

		destroy : function() {
			console.log("destroying Admin View");
			amplify.unsubscribe('user:loaded');
			this.undelegateEvents();
		}
	});
	// Our module now returns our view
	return Profile;
});