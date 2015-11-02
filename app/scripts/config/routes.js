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
        template: '<ui-view/>'
      })
      .state('scores.list', {
        url: '/list',
        templateUrl: app.view('scores', 'scores.list')
      })
      .state('scores.create', {
        url: '/create',
        templateUrl: app.view('scores', 'scores.create')
      })
      .state('scores.edit', {
        url: '/edit/:scoreId',
        templateUrl: app.view('scores', 'scores.edit')
      });

  });
