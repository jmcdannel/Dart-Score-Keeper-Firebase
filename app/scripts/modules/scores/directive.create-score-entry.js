;
(function() {
  'use strict';

	// Creeate Score Entry Directive
	angular
		.module('dartapp.scores')
		.directive('dsCreateScoreEntry', dsCreateScoreEntry);

	function dsCreateScoreEntry($location, ScoresFactory, Utils) {
		return {
			scope: {},
	    templateUrl: Utils.view('scores', 'directive.create'),
	    restrict: 'E',
	    link: function postLink(scope, element, attrs) {

	      scope.scores = ScoresFactory.getAll();
				scope.create = _create;

				function _create() {
					if (scope.scoreForm.$valid) {
	          _saveScore();
	          _clearForm();
	          $location.path('scores/list');
	        }
				}

	      function _clearForm() {
	        scope.title = '';
	        scope.game = '';
	        scope.player = '';
	        scope.score  = '';
	        scope.notes = '';
	      }

	      function _saveScore() {
	        scope.scores.$add({
						title: scope.title || null,
						game: scope.game || null,
						player: scope.player || null,
						score: scope.score || null,
						notes: scope.notes || null,
	          added: new Date()
					});
	      }
	    }
	  };

	}

})();
