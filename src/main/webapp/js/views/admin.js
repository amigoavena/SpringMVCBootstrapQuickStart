define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/admin.html', 'stomp', 'sockjs', 'bootbox', 'notify', 'growl' ], function(
		compiledTemplate, Stomp, SockJS, bootbox) {

	var c = APP.Commons;

	var Admin = Backbone.View.extend({

		id : null,
		sports : [],

		render : function() {
			console.log("Admin rendering!");
			$(this.el).html(compiledTemplate)
			console.log("rendered");
			this.getSports();
			var self = this;
			$("#addSport", this.el).click(function() {
				console.log("addSport")
				self.addSport();
			});
		},
		
		initCustomEvents:function(){
			console.log("customEvents!");
		},

		initialize : function(params) {
			
			if (!c.isEmpty(params)) {
				this.id = params.data.id;
			}
			this.initCustomEvents();
			console.log("Admin match initialized");
			console.log($("#addSport", this.el));
		},
		
		refreshSports: function(data){
			var self = this;
			console.log(data);
			console.log("refreshingSports");
			// this.sports = data;
			this.addLeague();
		},

		addSport : function() {
			var self = this;
			var data = {
				sportId : null,
				sportName : $('#sportname', this.el).val()
			};
			$.ajax({
				type : "POST",
				url : 'saveSport',
				data : JSON.stringify(data),
				contentType : "application/json; charset=utf-8",
				success : function(data){
					self.getSports();
				},
				dataType : 'json'
			});
			$('#sportname', this.el).val('');
		},

		getSports : function() {
			console.log("getSports!");
			var self = this;
			$.ajax({
				type : "GET",
				url : 'getSports',
				success : function(data) {
					self.buildSportTable(data);
				},
				dataType : 'json'
			});
		},

		buildSportTable : function(data) {
			console.log("buildSportTable");
			var self = this;
			self.sports = data;
			$('#sportList',this.el).html('');
			for ( var k in this.sports) {
				var sport = this.sports[k];
				var editRef = $('<a />', {
					href : '#sport/id=' + sport.sportId
				}).append($('<span/>', {
					class : 'glyphicon glyphicon-pencil'
				}));
				var editRef = $('<a />', {
					class : 'sportEdit',
					id : sport.sportId,
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
			
			$('.sportEdit').click(function(event){
				event.preventDefault();
				var sportId = $(this).attr('id');
				bootbox.prompt("Please input new sport Name:", function(result) {
				if (result === null) {
					console.log("Prompt dismissed");
				} else {
					if(!c.isEmpty(result)){
						var data = {
							sportId : sportId,
							sportName : result,
						};
						console.log("updating Sport");
						$.ajax({
							type : "POST",
							url : 'updateSport',
							data : JSON.stringify(data),
							contentType : "application/json; charset=utf-8",
							success : function(data){
								self.getSports();
							},
							dataType : 'json'
						});
					}
				}
				});
			});
			$('.sportDelete').click(function(event){
				var sportId = $(this).attr('id');
				event.preventDefault();
				bootbox.confirm("Are you sure to delete the sport?", function(result) {
					if(result){
						$.ajax({
							type : "DELETE",
							url : 'deleteSport?sportId='+sportId,
							success : function(data){
								self.getSports();
							},
							dataType : 'json'
						});
					}
				});
			})
		},

		addLeague : function() {

		},

		destroy : function() {
			console.log("destroying Admin View");
			this.undelegateEvents();
		}

	});
	// Our module now returns our view
	return Admin;
});