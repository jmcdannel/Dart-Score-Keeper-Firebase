'use strict';



//prototype
// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] !== 'undefined' ? args[number] : match;
    });
  };
}


/**
 * @ngdoc overview
 * @name dartapp.scores
 * @description
 * # dartapp.scores
 *
 * Main module of the application.
 */
var app = angular
  .module('dartapp.scores', [
    'ngAnimate',
    'ngTouch',
    'firebase',
    'ui.router'
  ]);


app.view = function(module, viewName) {
  return 'views/{0}/{1}.html'.format(module, viewName);
};

app.firebaseId = 'popping-fire-9008';
app.firebaseUrl = 'https://{0}.firebaseio.com/'.format(app.firebaseId);
