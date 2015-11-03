;
(function() {
  'use strict';

  angular
    .module('dartapp.scores')
    .directive('dsLogin', dsLogin);

  function dsLogin(AuthService, Utils, $location) {
    return {
  		scope: {},
      templateUrl: Utils.view('users', 'directive.login'),
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.githubLogin = _thirdPartyLogin('github');

        function _thirdPartyLogin(service) {
          AuthService.requestLogin(service).then(function() {
            $location.path('scores/list');
          });
        }
      }
    };
  }
})();
