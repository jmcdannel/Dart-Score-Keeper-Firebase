
//Scores service used for communicating with the scores REST endpoints
angular.module('dartapp.scores').service('Utils', function (viewPathTemplate) {

    return {
      view: function(_module, viewName) {
        return viewPathTemplate.format(_module, viewName);
      }
    }

  }
);
