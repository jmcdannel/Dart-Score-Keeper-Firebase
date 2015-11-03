;
(function() {
  'use strict';

  angular
    .module('dartapp')
      .constant('firebaseId', 'popping-fire-9008')
      .constant('firebaseUrl', 'https://popping-fire-9008.firebaseio.com/')
      .constant('viewPathTemplate', 'views/{0}/{1}.html');
})();
