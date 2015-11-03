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
      'dartapp.core',
      'dartapp.scores',
      'dartapp.users'
  ]);

  // angular
  //   .module('dartapp.scores', [
  //   'dartapp'
  // ]);
  //
  // angular
  //   .module('dartapp.users', [
  //   'dartapp'
  // ]);

})();
