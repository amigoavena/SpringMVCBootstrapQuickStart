define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/game.schedule.html' ,'handsomeTable','moment'], function(compiledTemplate) {

	var c = APP.Commons;

	var WelcomeView = Backbone.View.extend({
		
		handsomeTable:null,
		currentWeek: null,
		momentParam : null,
		yearWeeks: null,

		data : [
			["", "Kia", "Nissan", "Toyota", "Honda"],
			["2008", 10, 11, 12, 13],
			["2009", 20, 11, 14, 13],
			["2010", 30, 15, 12, 13]
		],

		events : {
			"click #add-row" : "addRow",
			"click #save-schedule" : "saveSchedule"
        },

        initialize : function(params){
        	var now = moment();
        	if( !c.isEmpty(params) && !c.isEmpty(params.week) && params.week <= now.isoWeeksInYear() ){
        		this.momentParam = moment().week(params.week);
        		this.currentWeek = this.momentParam.week();
        		if(this.momentParam.isoWeeksInYear() < this.currentWeek){
        			this.currentWeek = this.momentParam.isoWeeksInYear()
        		}
        	}
        },

		render : function() {
			$(this.el).html(compiledTemplate);
			this.buildTable();
			var self = this;
		},

		buildTable : function(){
			this.handsomeTable = $("#handsomeTable");

			var now = moment();

			if(c.isEmpty(this.currentWeek)){
				console.log("is empty!?");
				this.currentWeek = now.week();
			} else {
				now = moment().week(this.currentWeek);
			}

			this.yearWeeks = now.isoWeeksInYear();
			$("#week-label").html("Semana "+this.currentWeek+" de "+this.yearWeeks);
			$("#dataTable").handsontable({
				colHeaders : [
						'Horario',
						'Lunes '+ now.isoWeekday(1).date() + "-" + parseInt(now.month() + 1) ,
						'Martes ' + now.isoWeekday(2).date() + "-" + parseInt(now.month() + 1),
						'Miercoles ' + now.isoWeekday(3).date() + "-" + parseInt(now.month() + 1),
						'Jueves ' + now.isoWeekday(4).date() + "-" + parseInt(now.month() + 1),
						'Viernes ' + now.isoWeekday(5).date() + "-" + parseInt(now.month() + 1) ,
						'Sabado ' + now.isoWeekday(6).date() + "-" + parseInt(now.month() + 1),
						'Domingo ' + now.isoWeekday(7).date() + "-" + parseInt(now.month() + 1)],
				columns:[
					{
					data: "hours",
					editor: 'select',
					selectOptions: ["5 PM","6 PM","7 PM","8 PM","9 PM", "10 PM", "11 PM", "12 AM"]
					},
					{
					data: "monday"
					},
					{
					data: "tuesday"
					},
					{
					data: "wednesday"
					},
					{
					data: "thursday"
					},
					{
					data: "friday"
					},
					{
					data: "saturday"
					},
					{
					data: "sunday"
					},
				],
				// data: this.data,
				startRows: 4,
				startCols: 8
			});
			
			this.handsomeTable = $('#dataTable').handsontable('getInstance');
		},

		saveSchedule: function(){
			console.log(this.handsomeTable.getData());
		},
		
		addRow: function(){
			this.handsomeTable.alter('insert_row', this.handsomeTable.countRows());
		},
		
		postLike: function(){
			var self = this;
			var data = {
					type: "testingaction:schedule",
					url: "http://192.168.11.5:12000/designSkeleton/#schedule",
					title: "Something! Schedule",
					"fb:explicitly_shared" : true,
					image: "https://fbstatic-a.akamaihd.net/images/devsite/attachment_blank.png",
					description: ""
			};
			
			console.log(this.handsomeTable.getData());
			/*
			 * FB.api( 'me/testingaction:publicar', 'post', { schedule:
			 * "http://192.168.11.5:12000/designSkeleton/#schedule", object:
			 * data, }, function(response) { console.log(response); if
			 * (!response) { alert('Error occurred.'); } else if
			 * (response.error) { document.getElementById('result').innerHTML =
			 * 'Error: ' + response.error.message; } else {
			 * 
			 * document.getElementById('result').innerHTML = '<a
			 * href=\"https://www.facebook.com/me/activity/' + response.id +
			 * '\">' + 'Story created. ID is ' + response.id + '</a>'; } } );
			 * 
			 * FB.api( 'me/objects/testingaction:schedule', 'post', { object:
			 * data,}, function(response) { console.log(response); if
			 * (!response) { alert('Error occurred.'); } else if
			 * (response.error) { document.getElementById('result').innerHTML =
			 * 'Error: ' + response.error.message; } else {
			 * 
			 * document.getElementById('result').innerHTML = '<a
			 * href=\"https://www.facebook.com/me/activity/' + response.id +
			 * '\">' + 'Story created. ID is ' + response.id + '</a>'; } } );
			 * /*FB.api( 'me/objects/testingaction:schedule', 'post',
			 * JSON.stringify( ), function(response) { console.log(response); //
			 * handle the response } );
			 */
		},

		destroy : function() {
			console.log("destroying View");
			this.undelegateEvents();
		}
	});
	// Our module now returns our view
	return WelcomeView;
});