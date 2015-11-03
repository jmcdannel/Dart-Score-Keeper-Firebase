;
(function() {
  'use strict';

	// Score List Directive
	angular
		.module('dartapp.users')
		.directive('dsUserStatus', dsUserStatus);

  dsUserStatus.$inject = ['AuthService', 'Utils', '$location'];
	function dsUserStatus(AuthService, Utils, $location) {
		var directive = {
			scope: {},
			templateUrl: Utils.view('core', 'directive.userstatus'),
			restrict: 'AE',
			link: _link
		};

    return directive;

    function _link(scope, element, attrs) {
      scope.userData = AuthService.getUser();
      scope.logout = _logout;

      function _logout() {
        AuthService.logout();
        $location.path('login');
      }
    }
	}

})();
