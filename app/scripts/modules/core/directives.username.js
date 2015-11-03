;
(function() {
	'use strict';

	// Score List Directive
	angular
		.module('dartapp.scores')
		.directive('dsUserName', dsUserName);

	function dsUserName(AuthService, Utils) {
		return {
			scope: {},
			templateUrl: Utils.view('core', 'directive.username'),
			restrict: 'AE',
			link: function postLink(scope, element, attrs) {
				scope.userData = AuthService.getUser();
			}
		};
	}

})();
