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
			$("#content", this.el).html(compiledTemplate)
			console.log("rendered");
			this.getSports();
		},
		
		initCustomEvents:function(){
			console.log("customEvents!");
		},

		initialize : function(params) {
			var self = this;
			if (!c.isEmpty(params)) {
				this.id = params.data.id;
			}
			this.initCustomEvents();
			this.render();
			console.log("Admin match initialized");
			amplify.subscribe('admin:sport:changed',this.getSports);
			amplify.subscribe('admin:sport:refresh', this.buildSportTable );
			$("#addSport", this.el).click(function() {
				self.addSport();
			});
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
				success : function(data){
					amplify.publish('admin:sport:changed');
				},
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
					// amplify.publish('sport.refresh', data );
					amplify.publish('admin:sport:refresh', data );
					// self.sports = data;
					// self.buildSportTable();
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
								amplify.publish('admin:sport:changed');
							},
							dataType : 'json'
						});
					}
				}
				});
			});
			$('.sportDelete').click(function(event){
				console.log(event);
				var sportId = $(this).attr('id');
				console.log(sportId);
				event.preventDefault();
				bootbox.confirm("Are you sure to delete the sport?", function(result) {
					if(result){
						$.ajax({
							type : "DELETE",
							url : 'deleteSport?sportId='+sportId,
							success : function(data){
								amplify.publish('admin:sport:changed');
							},
							dataType : 'json'
						});
					}
				});
			})
		},

		addLeague : function() {

		}

	});
	// Our module now returns our view
	return Admin;
});