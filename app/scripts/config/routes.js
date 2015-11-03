'use strict';

angular
  .module('dartapp.scores').config(function($stateProvider, $urlRouterProvider, viewPathTemplate) {

    $urlRouterProvider.when('/scores', '/scores/list');
    $urlRouterProvider.otherwise('/login');
    console.log(viewPathTemplate);

    $stateProvider

      //SCORES STATE/ROUTE
      .state('scores', {
        abstract: true,
        url: '/scores',
        views: {
          'header'  : { templateUrl:  viewPathTemplate.format('core', 'header') },
          'footer'  : { templateUrl:  viewPathTemplate.format('core', 'footer') },
          'page'    : {
            controller: function($scope) { },
            template: '<div ui-view="content" />' ,
            resolve: {
              "currentAuth": ['AuthService', function(AuthService) {
                var authObj = AuthService.getRef();
                return authObj.$requireAuth();
              }]
            }
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

      //LOGIN STATE/ROUTE
      .state('login', {
        url: '/login',
        views: {
          'header'  : { templateUrl:  viewPathTemplate.format('core', 'header.anon') },
          'page'    : { templateUrl:  viewPathTemplate.format('users', 'login') },
          'footer'  : { templateUrl:  viewPathTemplate.format('core', 'footer') }
        }
      });

  });
