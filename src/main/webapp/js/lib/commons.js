// Filename: app.js
define(
		[ 'json2' ],
		function() {

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