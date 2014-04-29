define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/admin.html', 'stomp', 'sockjs', 'notify', 'growl' ], function(
		compiledTemplate, Stomp, SockJS) {

	var c = APP.Commons;

	var Admin = Backbone.View.extend({

		id : null,
		sports : [],

		render : function() {
			console.log("Admin rendering!");
			$("#content", this.el).html(compiledTemplate)
			console.log("rendered");
			this.getSports();
		},

		initialize : function(params) {
			var self = this;
			// console.log(params.data.id);
			if (!c.isEmpty(params)) {
				this.id = params.data.id;
			}
			this.render();
			console.log("Admin match initialized");

			$("#addSport", this.el).click(function() {
				self.addSport();
			});
		},

		addSport : function() {
			var self = this;
			console.log("testing");
			var data = {
				sportId : null,
				sportName : $('#sportname', this.el).val()
			};
			console.log(data);
			$.ajax({
				type : "POST",
				url : 'saveSport',
				data : JSON.stringify(data),
				contentType : "application/json; charset=utf-8",
				success : self.getSports(),
				dataType : 'json'
			});
		},

		getSports : function() {
			var self = this;
			$.ajax({
				type : "GET",
				url : 'getSports',
				success : function(data) {
					//console.log(data);
					self.sports = data;
					self.buildSportTable();
					//console.log(self.sports);
				},
				dataType : 'json'
			});
		},

		buildSportTable : function() {
			console.log("buildSportTable");
			$('#sportList').html('');
			for ( var k in this.sports) {
				var sport = this.sports[k];
				console.log(sport);
				$('#sportList').append(
						$("<p />", {
							text: sport.sportName
						})
				);
			}
		},

		addLeague : function() {

		}

	});
	// Our module now returns our view
	return Admin;
});