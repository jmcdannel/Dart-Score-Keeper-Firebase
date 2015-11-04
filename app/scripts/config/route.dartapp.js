;
(function() {
  'use strict';

  angular
    .module('dartapp').run(["$rootScope", "$location", function($rootScope, $location) {
      $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
        // We can catch the error thrown when the $requireAuth promise is rejected
        // and redirect the user back to the home page
        console.log('routeChangeError', arguments);
        if (error === "AUTH_REQUIRED") {
          $location.path("/login");
        }
      });
  }]);


angular
  .module('dartapp').config(function($stateProvider, $urlRouterProvider, viewPathTemplate) {

    var header = viewPathTemplate.format('core', 'header'),
      footer = viewPathTemplate.format('core', 'footer'),
      headerAnon = viewPathTemplate.format('core', 'header.anon'),

      requireAuth = ['AuthService', function(AuthService) {
        return AuthService.getRef().$requireAuth();
      }],

      requireAdmin = ['AuthService', 'userService', '$q', function(AuthService, userService, $q) {
        var deferred = $q.defer();
        var auth = AuthService.getAuth();
        var user;
        if (!auth) {
          deferred.reject();
        } else {
          user = userService.getUser(auth.uid);
          user.$loaded(function() {
            if (user.admin) {
              deferred.resolve(user);
            } else {
              deferred.reject(user);
            }
          });

        }
        return deferred.promise;
      }];

    $urlRouterProvider.when('/scores', '/scores/list');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      //SCORES
      .state('scores', {
        abstract: true,
        url: '/scores',
        views: {
          'header'  : { templateUrl:  header },
          'footer'  : { templateUrl:  footer },
          'page'    : {
            controller: function($scope) { },
            template: '<div ui-view="content" />',
            resolve: { 'currentAuth': requireAuth }
          }
        }
      })
      .state('scores.list', {
        url: '/list',
        views: {
          'content': { templateUrl: viewPathTemplate.format('scores', 'scores.list') },
        }
      })
      .state('scores.create', {
        url: '/create',
        views: {
          'content': { templateUrl: viewPathTemplate.format('scores', 'scores.create') }
        }
      })
      .state('scores.edit', {
        url: '/edit/:scoreId',
        views: {
          'content': { templateUrl: viewPathTemplate.format('scores', 'scores.edit') }
        }
      })

      //LOGIN
      .state('login', {
        url: '/login',
        views: {
          'header'  : { templateUrl:  headerAnon },
          'footer'  : { templateUrl:  footer },
          'page'    : { templateUrl:  viewPathTemplate.format('users', 'login') }
        }
      })

      //USERS
      .state('users', {
        url: '/users',
        views: {
          'header'  : { templateUrl:  header },
          'footer'  : { templateUrl:  footer },
          'page'    : {
            controller: function($scope, requrieAdmin) {
              console.log($scope, requrieAdmin)
            },
            templateUrl: viewPathTemplate.format('users', 'users'),
            resolve: {
              'currentAuth': requireAuth,
              'requrieAdmin': requireAdmin
            }
          }
        }
      });

  });

})();
