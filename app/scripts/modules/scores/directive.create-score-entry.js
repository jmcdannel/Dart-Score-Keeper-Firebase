'use strict';

// Creeate Score Entry Directive
angular.module('dartapp.scores').directive('dsCreateScoreEntry', function ($location, ScoresFactory, Utils) {
	return {
		scope: {},
    templateUrl: Utils.view('scores', 'directive.create'),
    restrict: 'E',
    link: function postLink(scope, element, attrs) {

      function clearForm() {
        scope.title = '';
        scope.game = '';
        scope.player = '';
        scope.score  = '';
        scope.notes = '';
      }

      function saveScore() {
        scope.scores.$add({
					title: scope.title || null,
					game: scope.game || null,
					player: scope.player || null,
					score: scope.score || null,
					notes: scope.notes || null,
          added: new Date()
				});
      }

      scope.scores = ScoresFactory.getAll();

			scope.create = function () {
        if (scope.scoreForm.$valid) {
          saveScore();
          clearForm();
          $location.path('scores/list');
        }
			};
    }
  };

});
