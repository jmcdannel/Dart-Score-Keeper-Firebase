'use strict';

// Score List Directive
angular.module('dartapp.scores').directive('dsLogin', function (AuthService, Utils, $location) {
  return {
		scope: {},
    templateUrl: Utils.view('users', 'directive.login'),
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      console.log(AuthService, scope, element, attrs);

      scope.githubLogin = function() {
        AuthService.requestLogin('github').then(function() {
          $location.path('scores/list');
        });
      };
    }
  };
});
