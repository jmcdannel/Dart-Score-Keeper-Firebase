'use strict';

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
  return 'scripts/modules/{0}/views/{1}.html'.format(module, viewName);
};

app.firebaseUrl = 'https://popping-fire-9008.firebaseio.com/';

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
