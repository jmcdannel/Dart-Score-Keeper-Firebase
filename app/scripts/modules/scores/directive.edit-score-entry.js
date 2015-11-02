'use strict';

// Creeate Score Entry Directive
angular.module('dartapp.scores').directive('dsEditScoreEntry', ['$stateParams', '$location', 'ScoresFactory',
  function ($stateParams, $location, Scores) {

		return {
			scope: {},
      templateUrl: app.view('scores', 'directive.edit'),
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.score = Scores.getItem($stateParams.scoreId);

				scope.update = function () {
          scope.score.$save();
          $location.path('scores/list');
		    };

				scope.remove = function() {
		      scope.score.$remove();
          $location.path('scores/list');
		    };


      }
    };

	}
]);