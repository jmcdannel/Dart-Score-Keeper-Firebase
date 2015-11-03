;
(function() {
	'use strict';

	// Score List Directive
	angular
		.module('dartapp.users')
		.directive('dsUserName', dsUserName);

	dsUserName.$inject = ['AuthService', 'Utils'];
	function dsUserName(AuthService, Utils) {
		var directive = {
			scope: {},
			templateUrl: Utils.view('core', 'directive.username'),
			restrict: 'AE',
			link: _link
		};

		return directive;

		function _link(scope, element, attrs) {
			scope.userData = AuthService.getUser();
		}
	}

})();
