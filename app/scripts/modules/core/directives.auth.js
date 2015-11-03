'use strict';

// Score List Directive
angular.module('dartapp.scores').directive('dsAuth', function (AuthService) {
		return {
			scope: {},
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
				console.log('dsAuth.AuthService', AuthService.getUser());

      }
    };
	}
);
