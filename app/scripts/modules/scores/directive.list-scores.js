'use strict';

// Score List Directive
angular.module('dartapp.scores').directive('dsScoreList', function (ScoresFactory, Utils) {
	return {
		scope: {},
    templateUrl: Utils.view('scores', 'directive.list'),
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
			scope.scores = ScoresFactory.getAll();
      scope.filters = { name: '', game: '', sortBy: { field: '', descending: false } };
      scope.sortBy = function(field) {
        scope.filters.sortBy = {
          field: field,
          descending: !scope.filters.sortBy.descending
        };
      };

    }
  };
});
