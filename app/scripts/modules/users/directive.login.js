;
(function() {
  'use strict';

  angular
    .module('dartapp.users')
    .directive('dsLogin', dsLogin);

  dsLogin.$inject = ['AuthService', 'userService', 'Utils', '$location'];
  function dsLogin(AuthService, userService, Utils, $location) {
    var directive = {
  		scope: {},
      templateUrl: Utils.view('users', 'directive.login'),
      restrict: 'E',
      link: _link
    };

    return directive;

    function _link(scope, element, attrs) {
      scope.login = _login;

      function _login(service) {
        AuthService.requestLogin(service)
          .then(function(authData) {
            console.log('auth done', authData);
            userService.createUser(authData).then(function() {
              $location.path('scores/list');
            });

          })
          .catch(function(error) {
            console.log('Auth error', error);
          });
      }
    }
  }
})();
