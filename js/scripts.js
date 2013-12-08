var dashboard = (function () {
  'use strict';
  var tileTemplateName = "tiletemplate";
  var ignitionTemplateName = "ignitiontemplate";

  return {
    renderTiles: function(noOfTiles){
      var tiles = {items:[]};
      for (var i = noOfTiles - 1; i >= 0; i--) {
        tiles['items'].push({name: i});
      };
      var template = $("#" + tileTemplateName).html();
      var html = Handlebars.compile(template)(tiles);
      $('.tiles').html(html);
    },
    renderIgnitions: function(noOfIgnitions){
      var tiles = {items:[]};
      for (var i = noOfIgnitions - 1; i >= 0; i--) {
        tiles['items'].push({name: i});
      };
      var template = $("#" + ignitionTemplateName).html();
      var html = Handlebars.compile(template)(tiles);
      $('.ignitions').html(html);
    }
  }
}());

$(document).ready(function () {
  dashboard.renderTiles(20);
  dashboard.renderIgnitions(10);
  $('#slides').superslides();
});