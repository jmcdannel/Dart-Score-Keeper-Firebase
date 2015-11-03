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
 //(function() {

   angular
    .module('dartapp.scores', [
      'ngAnimate',
      'ngTouch',
      'firebase',
      'ui.router'
    ]);
//});
