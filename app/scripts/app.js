;
(function() {
  'use strict';

  // First, checks if it isn't implemented yet.
  if (!String.prototype.format) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] !== 'undefined' ? args[number] :
          match;
      });
    };
  }

  angular
    .module('dartapp', [
    'ngAnimate',
    'ngTouch',
    'firebase',
    'ui.router'
  ]);

  angular
    .module('dartapp.scores', [
    'dartapp'
  ]);
  
})();
