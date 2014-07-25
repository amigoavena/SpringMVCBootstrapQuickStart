define([
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/game.schedule.html' ,'handsomeTable'], function(compiledTemplate) {
	var WelcomeView = Backbone.View.extend({

		data : [
			["", "Kia", "Nissan", "Toyota", "Honda"],
			["2008", 10, 11, 12, 13],
			["2009", 20, 11, 14, 13],
			["2010", 30, 15, 12, 13]
		],

		render : function() {
			$(this.el).html(compiledTemplate);
			this.buildTable();
		},

		buildTable : function(){
			$("#dataTable").handsontable({
				colHeaders : ['Horario','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
				//data: this.data,
				//startRows: 6,
				startCols: 8
			});
		},

		destroy : function() {
			console.log("destroying View");
			this.undelegateEvents();
		}
	});
	// Our module now returns our view
	return WelcomeView;
});