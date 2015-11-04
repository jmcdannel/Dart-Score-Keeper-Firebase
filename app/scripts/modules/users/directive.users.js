(function() {
    'use strict';

    angular
        .module('dartapp.users')
        .directive('dsUsers', dsUsers);

    dsUsers.$inject = ['Utils'];
    function dsUsers(Utils) {
        var directive = {
            restrict: 'E',
            templateUrl: Utils.view('users', 'directive.users'),
            scope: {},
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject = ['$scope', 'userService'];
    function Controller($scope, userService) {
        var vm = this;

        vm.toggleAdmin = _toggleAmdin;

        activate();

        function activate() {
          vm.users = userService.getAll();
        }

        function _toggleAmdin(user) {
          vm.users.$save(user);
        }
    }
})();
