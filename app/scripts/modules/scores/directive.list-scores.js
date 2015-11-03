;
(function() {
  'use strict';

	// Score List Directive
	angular
		.module('dartapp.scores')
		.directive('dsScoreList', dsScoreList);

	dsScoreList.$inject = ['scoresService', 'Utils'];
	function dsScoreList(scoresService, Utils) {
		var directive = {
			scope: {},
	    templateUrl: Utils.view('scores', 'directive.list'),
	    restrict: 'E',
	    link: _link
    };

    return directive;

    function _link(scope, element, attrs) {

			scope.scores = scoresService.getAll();
      scope.filters = { name: '', game: '', sortBy: { field: '', descending: false } };
      scope.sortBy = _sortBy;

      function _sortBy(field) {
        scope.filters.sortBy = {
          field: field,
          descending: !scope.filters.sortBy.descending
        };
      }

    }
	}
})();
