;
(function() {
  'use strict';

  // Creeate Score Entry Directive
  angular
    .module('dartapp.scores')
    .directive('dsEditScoreEntry', dsEditScoreEntry);

	dsEditScoreEntry.$inject = ['$stateParams', '$location', 'scoresService', 'Utils'];
  function dsEditScoreEntry($stateParams, $location, scoresService, Utils) {
  	var directive = {
  		scope: {},
      templateUrl: Utils.view('scores', 'directive.edit'),
      restrict: 'E',
      link: _link
    };

    return directive;

    function _link(scope, element, attrs) {
      scope.score = _getScore();
			scope.update = _update;
			scope.remove = _remove;

      function _getScore() {
        return scoresService.getItem($stateParams.scoreId);
      }

      function _update() {
        scope.score.$save();
        $location.path('scores/list');
      }

      function _remove() {
        scope.score.$remove();
        $location.path('scores/list');
      }
    }

  }
})();
