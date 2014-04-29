// Filename: app.js
define([ 'json2' ], function() {

	function Commons() {
		console.log("Common Initialized");
	}

	Commons.prototype.urlToJSON = function(url) {
		var params = {};
		var d = function(s) {
			return decodeURIComponent(s.replace(/\+/g, " "));
		};
		var r = /([^?&=]+)=?([^&]*)/g;
		var e;
		if (!this.isEmpty(url)) {
			while (e = r.exec(url)) {
				params[d(e[1])] = d(e[2]);
			}
		}
		return params;
	};

	Commons.prototype.isEmpty = function(_object) {
		return (_object == null) || (typeof _object === 'undefined')
				|| ($.trim(_object).length == 0)
				|| (typeof _object != 'number' && $.isEmptyObject(_object));
	};

	return Commons;
});