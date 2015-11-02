'use strict';

angular
  .module('dartapp.scores').config(function($stateProvider, $urlRouterProvider) {

    var app = window.app;

    $urlRouterProvider.when('/scores', '/scores/list');
    $urlRouterProvider.otherwise('/scores/list');

    $stateProvider
      .state('scores', {
        abstract: true,
        url: '/scores',
        views: {
          'header': { templateUrl: app.view('core', 'header') },
          'page': {template: '<div ui-view="content" />' },
          'footer': { templateUrl: app.view('core', 'footer') }
        }
      })
      .state('scores.list', {
        url: '/list',
        views: {
          'header': { templateUrl: app.view('core', 'header') },
          'content': { templateUrl: app.view('scores', 'scores.list') },
          'footer': { templateUrl: app.view('core', 'footer') }
        }
      })
      .state('scores.create', {
        url: '/create',
        views: {
          'content': { templateUrl: app.view('scores', 'scores.create') }
        }
      })
      .state('scores.edit', {
        url: '/edit/:scoreId',
        views: {
          'content': { templateUrl: app.view('scores', 'scores.edit') }
        }
      });

  });
