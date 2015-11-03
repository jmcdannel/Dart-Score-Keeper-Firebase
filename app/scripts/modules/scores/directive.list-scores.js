;
(function() {
  'use strict';

	// Score List Directive
	angular
		.module('dartapp.scores')
		.directive('dsScoreList', dsScoreList);

	function dsScoreList(ScoresFactory, Utils) {
		return {
			scope: {},
	    templateUrl: Utils.view('scores', 'directive.list'),
	    restrict: 'E',
	    link: function postLink(scope, element, attrs) {
				
				scope.scores = ScoresFactory.getAll();
	      scope.filters = { name: '', game: '', sortBy: { field: '', descending: false } };
	      scope.sortBy = _sortBy;

				function _sortBy(field) {
	        scope.filters.sortBy = {
	          field: field,
	          descending: !scope.filters.sortBy.descending
	        };
	      }

	    }
	  };
	}
})();
