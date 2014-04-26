// Filename: app.js
define(['app-config'], function(bootstrap) {
	var initialize = function() {
		// Pass in our Router module and call it's initialize function
		console.log("test");
		//$('#myModal').modal('toggle');
	}

	return {
		initialize : initialize
	};
});