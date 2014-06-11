// Filename: app.js
define(
		[ 'json2' ],
		function() {
			
			(function($) {
				
				/**
				 * @param config
				 * 	dateFormat : default is 'yy-MM-dd HH:mm'
				 */
				$.fn.serializeObject = function (config) {

					if(!config) config = {};

					var domForm = this;
					var result = {};
					var array = this.serializeArray();
					var dateFormat = config.dateFormat ? ['yy-MM-dd HH:mm','yyyy-MM-dd HH:mm:ss'] : config.dateFormat;
					var dataValue = null;
					var domInput = null;

					$.each(array, function() {
						// render the DOM values to proper JSON values
						domInput = $('input[name="'+this.name+'"]',domForm);
						dataValue = this.value;
						switch(domInput.attr('data-type')) {
							case 'date' :
								if(!$.isArray(dateFormat)) dateFormat = [dateFormat];
								$.each(dateFormat,function(){
									dataValue = APP.Common.isEmpty(dataValue) ? "" : getDateFromFormat(dataValue,dateFormat);
									if(dataValue != 0) return false;
								});
								break;
							case 'number' :
								if(!$.isNumeric(dataValue)) dataValue = 0;
								break;
							case 'boolean' :
								dataValue = !APP.Common.isEmpty(dataValue);
								break;
							default : break;
						}
						// handle checkbox values
						if(domInput.attr('type') == 'checkbox' && APP.Common.isEmpty(dataValue)) {
							dataValue = domInput.is(':checked');
						}
						// set the values to the JSON result object
						if (result[this.name]) {
							if (!result[this.name].push) {
								result[this.name] = [result[this.name]];
							}
							result[this.name].push(dataValue || '');
						} else {
							result[this.name] = dataValue || '';
						}
					});
					return result;
				};
				
			})(jQuery);

			function Commons() {
				console.log("Common Initialized");
			}

			Commons.prototype.showModal = function(header, content, callback) {
				var HTML = '<div class="modal fade generic-modal">'
						+ ' <div class="modal-dialog">'
						+ ' <div class="modal-content">'
						+ ' <div class="modal-header">'
						+ ' <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
						+ ' <h4 class="modal-title">'
						+ header
						+ ' </h4>'
						+ ' </div>'
						+ ' <div class="modal-body">'
						+ content
						+ ' </div>'
						+ ' <div class="modal-footer">'
						+ ' <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
						+ ' <button type="button" class="btn btn-primary ok-button-dialog">Ok</button>'
						+ ' </div>' + ' </div><!-- /.modal-content -->'
						+ ' </div><!-- /.modal-dialog -->'
						+ '</div><!-- /.modal -->';
				var container = $('<div></div>').html(HTML);
				var newInstance = jQuery.extend(true, {}, container);
				newInstance.find('.ok-button-dialog').bind('click',
						function() {
							callback();
						});
				var modalElement = newInstance.find('.generic-modal');
				modalElement.modal();
				return modalElement;
			};

			// checks if the object/hash value is in the array
			Commons.prototype.isInArray = function(_array,_fieldName,_value){
				return !this.isEmpty(this.findInArray(_array,_fieldName,_value));
			};

			// removes the first matching object on the array
			Commons.prototype.removeInArray = function(_array,_fieldName,_value) {
				var index = this.indexInArray(_array, _fieldName, _value);
				if(index >= 0) _array.splice(index,1);
			};

			// returns index of matching object
			Commons.prototype.indexInArray = function(_array,_fieldName,_value){
				var index = -1;
				if(!this.isEmpty(_array)) {
					$.each(_array,function(x,obj){
						if((typeof _value == 'undefined' && obj === _fieldName) ||
							(typeof obj[_fieldName] != 'undefined' && obj[_fieldName] === _value) ||
							($.isNumeric(obj[_fieldName]) && $.isNumeric(_value)
									&& Number(obj[_fieldName]) === Number(_value))) {
							index = x;
							return false;
						}
					});
				}
				return index;
			};

			// returns an object based on matched object/hashvalue
			Commons.prototype.findInArray = function(_array,_fieldName,_value){
				var foundObj = new Object();
				$.each(_array,function(x,obj){
					if((typeof _value == 'undefined' && obj === _fieldName) ||
						(typeof obj[_fieldName] != 'undefined' && obj[_fieldName] === _value) ||
						($.isNumeric(obj[_fieldName]) && $.isNumeric(_value)
									&& Number(obj[_fieldName]) === Number(_value))) {
						if(!$.isPlainObject()) {
							foundObj = obj;
						} else {
							$.extend(true,foundObj,obj);
						}

						return false;
					}
				});
				return foundObj;
			};
			
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


			/**
			 * converts urlParam (ex. var1=val1&var2=val2) into a JSON object
			 * @param urlParam
			 */
			Commons.prototype.jsonParseUrl = function(urlParam) {
				var urlParams = {};
				var d = function(s){ return decodeURIComponent(s.replace(/\+/g, " "));};
				var r = /([^?&=]+)=?([^&]*)/g;
				var e;
				if(!this.isEmpty(urlParam)) {
					while (e = r.exec(urlParam)) {
						urlParams[d(e[1])] = d(e[2]);
					}
				}
				return urlParams;
			};

			/**
			 * An efficient way to bind the Backbone.View as 'this' to all its functions
			 * @param object
			 */
			Commons.prototype.backboneViewBindAll = function(object) {
				var bindFunctions = this.getAllFunctionNames(object);

				// bind all except for the Backbone.View functions
				var backboneFunctions = this.getAllFunctionNames(Backbone.View.prototype);
				this.removeInArray(backboneFunctions, 'render'); // include 'render' for binding
				backboneFunctions.push('constructor'); // exclude 'constructor'

				$.each(bindFunctions,function(x,functionName){
					_.bindAll(object,functionName);
				});
			};

			/**
			 * Get all functions names of an object.
			 * @param object
			 * @returns a String array of function names
			 */
			Commons.prototype.getAllFunctionNames = function(object) {
				var functionNames = [];
				$.each(object,function(propertyName,propertyObject){
					if(_.isFunction(propertyObject)) {
						functionNames.push(propertyName);
					}
				});
				return functionNames;
			};

			$.fn.showModal = function(header, content, callback) {
				var HTML = '<div class="modal fade generic-modal">'
						+ ' <div class="modal-dialog">'
						+ ' <div class="modal-content">'
						+ ' <div class="modal-header">'
						+ ' <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
						+ ' <h4 class="modal-title">'
						+ header
						+ ' </h4>'
						+ ' </div>'
						+ ' <div class="modal-body">'
						+ content
						+ ' </div>'
						+ ' <div class="modal-footer">'
						+ ' <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
						+ ' <button type="button" class="btn btn-primary ok-button-dialog">Ok</button>'
						+ ' </div>' + ' </div><!-- /.modal-content -->'
						+ ' </div><!-- /.modal-dialog -->'
						+ '</div><!-- /.modal -->';
				var container = $('<div></div>').html(HTML);
				var newInstance = jQuery.extend(true, {}, container);
				newInstance.find('.ok-button-dialog').bind('click', function() {
					callback();
				});
				var modalElement = newInstance.find('.generic-modal');
				modalElement.modal();
				return modalElement;
			}

			Commons.prototype.isEmpty = function(_object) {
				return (_object == null)
						|| (typeof _object === 'undefined')
						|| ($.trim(_object).length == 0)
						|| (typeof _object != 'number' && $
								.isEmptyObject(_object));
			};

			return Commons;
		});