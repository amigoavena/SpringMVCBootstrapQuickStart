define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/welcome.html','baseView' ], function(compiledTemplate,BaseView) {
	var WelcomeView = BaseView.extend();
	// Our module now returns our view
	return WelcomeView;
});