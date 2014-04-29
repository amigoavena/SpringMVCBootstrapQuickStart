// Filename: app-config.js

define([ 'jquery', 'backbone', 'underscore', 'bootstrap' ], function($,
		Backbone, _, Bootstrap) {

	// Enable cross site scripting.
	$.support.cors = true;

	// Disable ajax cache.
	$.ajaxSetup({
		contentType: "application/json; charset=utf-8",
		cache : false
	});

});