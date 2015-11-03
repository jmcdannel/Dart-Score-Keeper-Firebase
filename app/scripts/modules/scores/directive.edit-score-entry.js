'use strict';

// Creeate Score Entry Directive
angular.module('dartapp.scores').directive('dsEditScoreEntry', function ($stateParams, $location, ScoresFactory, Utils) {
	return {
		scope: {},
    templateUrl: Utils.view('scores', 'directive.edit'),
    restrict: 'E',
    link: function postLink(scope, element, attrs) {

      scope.score = ScoresFactory.getItem($stateParams.scoreId);

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

});
