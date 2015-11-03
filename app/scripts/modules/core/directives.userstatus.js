'use strict';

// Score List Directive
angular.module('dartapp.scores').directive('dsUserStatus', function (AuthService, Utils, $location) {
		return {
			scope: {},
      templateUrl: Utils.view('core', 'directive.userstatus'),
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
	      scope.userData = AuthService.getUser();
        scope.logout = function() {
          AuthService.logout();
          $location.path('login');
        }
      }
    };
	}
);
