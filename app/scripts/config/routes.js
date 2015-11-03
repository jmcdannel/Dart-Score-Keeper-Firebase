;
(function() {
  'use strict';

angular
  .module('dartapp.scores').config(function($stateProvider, $urlRouterProvider, viewPathTemplate) {

    var header = viewPathTemplate.format('core', 'header'),
      footer = viewPathTemplate.format('core', 'footer'),
      headerAnon = viewPathTemplate.format('core', 'header.anon'),
      requireAuth = ['AuthService', function(AuthService) {
        return AuthService.getRef().$requireAuth();
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
      });

  });

})();
