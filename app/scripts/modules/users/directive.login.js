;
(function() {
  'use strict';

  angular
    .module('dartapp.users')
    .directive('dsLogin', dsLogin);

  dsLogin.$inject = ['AuthService', 'Utils', '$location'];
  function dsLogin(AuthService, Utils, $location) {
    var directive = {
  		scope: {},
      templateUrl: Utils.view('users', 'directive.login'),
      restrict: 'E',
      link: _link
    };

    return directive;

    function _link(scope, element, attrs) {
      scope.githubLogin = _thirdPartyLogin('github');

      function _thirdPartyLogin(service) {
        AuthService.requestLogin(service).then(function() {
          $location.path('scores/list');
        });
      }
    }
  }
})();
