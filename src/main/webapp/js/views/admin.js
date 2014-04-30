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
			$.ajax({
				type : "POST",
				url : 'saveSport',
				data : JSON.stringify(data),
				contentType : "application/json; charset=utf-8",
				success : self.getSports(),
				dataType : 'json'
			});
			$('#sportname', this.el).val('');
		},

		getSports : function() {
			var self = this;
			$.ajax({
				type : "GET",
				url : 'getSports',
				success : function(data) {
					self.sports = data;
					self.buildSportTable();
				},
				dataType : 'json'
			});
		},

		buildSportTable : function() {
			console.log("buildSportTable");
			$('#sportList').html('');
			for ( var k in this.sports) {
				var sport = this.sports[k];
				var editRef = $('<a />', {
					href : '#sport/id=' + sport.sportId
				}).append($('<span/>', {
					class : 'glyphicon glyphicon-pencil'
				}));
				var editRef = $('<a />', {
					href : '#sport/id=' + sport.sportId
				}).append($('<span/>', {
					class : 'glyphicon glyphicon-pencil'
				}));
				var trashRef = $('<a />', {
					class : 'sportDelete',
					id : sport.sportId,
					href : '#'
				}).append($('<span/>', {
					class : 'glyphicon glyphicon-trash'
				}));
				var tr = $('<tr>').append($('<td>').text(sport.sportName),
						$('<td>').append(editRef), $('<td>').append(trashRef));
				$('#sportList').append(tr);
			}
			
			$('.sportDelete').click(function(event){
				console.log(event);
				var self = this;
				var sportId = $(this).attr('id');
				console.log($(this).attr('id'));
				event.preventDefault();
				$.ajax({
					type : "DELETE",
					url : 'deleteSport?sportId='+sportId,
					success : self.getSports(),
					dataType : 'json'
				});
			})
		},

		addLeague : function() {

		}

	});
	// Our module now returns our view
	return Admin;
});