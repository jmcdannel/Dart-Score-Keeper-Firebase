;
(function() {
  'use strict';

  // Creeate Score Entry Directive
  angular
    .module('dartapp.scores')
    .directive('dsEditScoreEntry', dsEditScoreEntry);

  function dsEditScoreEntry($stateParams, $location, ScoresFactory, Utils) {
  	return {
  		scope: {},
      templateUrl: Utils.view('scores', 'directive.edit'),
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.score = _getScore();
  			scope.update = _update;
  			scope.remove = _remove;

        function _getScore() {
          return ScoresFactory.getItem($stateParams.scoreId);
        }

        function _update() {
          scope.score.$save();
          $location.path('scores/list');
  	    };

        function _remove() {
  	      scope.score.$remove();
          $location.path('scores/list');
  	    };


      }
    };

  }
})();
