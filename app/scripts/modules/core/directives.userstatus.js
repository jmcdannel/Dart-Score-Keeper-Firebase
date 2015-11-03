;
(function() {
  'use strict';

	// Score List Directive
	angular
		.module('dartapp.scores')
		.directive('dsUserStatus', dsUserStatus);

	function dsUserStatus(AuthService, Utils, $location) {
		return {
			scope: {},
			templateUrl: Utils.view('core', 'directive.userstatus'),
			restrict: 'AE',
			link: function postLink(scope, element, attrs) {
				scope.userData = AuthService.getUser();
				scope.logout = _logout;

				function _logout() {
					AuthService.logout();
					$location.path('login');
				}
			}
		};
	}

})();
