'use strict';

// Creeate Score Entry Directive
angular.module('dartapp.scores').directive('dsCreateScoreEntry', ['$location', 'ScoresFactory',
  function ($location, Scores) {

		return {
			scope: {},
      templateUrl: app.view('scores', 'directive.create'),
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

        scope.scores = Scores.getAll();

				scope.create = function () {
          if (scope.scoreForm.$valid) {
            saveScore();
            clearForm();
            $location.path('scores/list');
          }
				};
      }
    };

	}
]);
