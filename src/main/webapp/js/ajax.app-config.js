// Filename: app-config.js

define([ 'jquery', 'backbone', 'underscore', 'bootstrap' ], function($,
		Backbone, _, Bootstrap) {

	// Enable cross site scripting.
	$.support.cors = true;

	// Disable ajax cache.
	$.ajaxSetup({
		contentType: "application/json; charset=utf-8",
		enableLoading : true,
		cache : false
	});

	var c = APP.Common;

	console.log(c);

	function APPAjax() {
		// the array container to hold active ajax requests
		this.pool = [];
		// adds an active ajax request
		this.add = function(jqXHR) {
			this.pool.push(jqXHR);
		};
		// removes a completed ajax request
		this.remove = function(jqXHR) {
			c.removeInArray(APP.Ajax.pool,jqXHR);
		};
		// aborts all active ajax requests
		this.abortAll = function() {
			$(this.pool).each(function(x, jqXHR){
				jqXHR.abort();
			});
		};
	}

	APP.Ajax = new APPAjax();

	$(document).ajaxSend(function(event, jqXHR, settings){
		//console.log('ajaxSend '+settings.url);
		// extended jquery ajax with a custom setting "enableLoading"
		// to globally handle application wide ajax calls
		
		if(settings.enableLoading){
			console.log("ajaxSend");
			amplify.publish('app:show:loading','Processing data...');
		}
		// add to the pool
		//APP.Ajax.add(jqXHR);
	});

	$(document).ajaxComplete(function(event, jqXHR, settings){
		// extended jquery ajax with a custom setting "enableLoading"
		// to globally handle application wide ajax calls
		if(settings.enableLoading){
			console.log("ajaxComplete");
			amplify.publish('app:hide:loading');
		}
		// remove from the pool
		//APP.Ajax.remove(jqXHR);
	});

});