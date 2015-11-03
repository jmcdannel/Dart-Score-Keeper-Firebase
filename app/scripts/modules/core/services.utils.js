;
(function() {
  'use strict';

  angular
    .module('dartapp.core')
    .service('Utils', Utils);

	Utils.$inject = ['viewPathTemplate'];
  function Utils(viewPathTemplate) {

    this.view = _getViewPath;

    function _getViewPath(_module, viewName) {
      return viewPathTemplate.format(_module, viewName);
    }

  }
})();
