define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/test.html'
], function($, _, Backbone, compiledTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $('#container'),
    render: function(){
      // Using Underscore we can compile our template with data
      console.log("rendering!");
      this.$el.html("");
      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
    }
  });
  // Our module now returns our view
  return ProjectListView;
});