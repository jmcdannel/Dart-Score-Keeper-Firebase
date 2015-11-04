(function() {
    'use strict';

    angular
        .module('dartapp.core')
        .directive('dsNav', dsNav);

    dsNav.$inject = ['Utils'];
    function dsNav(Utils) {
        var directive = {
            restrict: 'E',
            templateUrl: Utils.view('core', 'directive.nav'),
            scope: {
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject = ['userService', 'AuthService'];

    function Controller(userService, AuthService) {
        var vm = this;

        activate();

        function activate() {
          vm.user = userService.getUser(AuthService.getAuth().uid);
        }
    }
})();
