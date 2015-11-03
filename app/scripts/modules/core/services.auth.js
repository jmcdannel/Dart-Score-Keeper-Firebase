
//Scores service used for communicating with the scores REST endpoints
angular.module('dartapp.scores').service('AuthService', function ($firebaseAuth, firebaseUrl) {

	  var _ref = new Firebase(firebaseUrl);
    var authRef = $firebaseAuth(_ref);

    return {
      getRef: function() {
        return authRef;
      },
      getAuth: function() {
        return authRef.$getAuth();
      },
      getUser: function() {
        var authData = authRef.$getAuth();
        var authProvider;
        if (!authData) {
          return null;
        } else {
          authProvider = authData.auth.provider;
          return {
              name: authData[authProvider].displayName || 'Unknown'
          }
        }
      },
      logout: function() {
        authRef.$unauth();
      },
      requestLogin: function(loginType) {
        return authRef.$authWithOAuthPopup(loginType);
      }
    }

  }
);
