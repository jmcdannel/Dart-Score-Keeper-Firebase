;
(function() {
  'use strict';

  angular
    .module('dartapp.scores')
    .service('Utils', Utils);

  function Utils(viewPathTemplate) {

    this.view = _getViewPath;

    function _getViewPath(_module, viewName) {
      return viewPathTemplate.format(_module, viewName);
    }

  }
})();
