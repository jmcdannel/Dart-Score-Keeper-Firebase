;
(function() {
  'use strict';

	//Scores service used for communicating with the scores REST endpoints
	angular
		.module('dartapp.scores')
		.service('AuthService', AuthService);

	function AuthService($firebaseAuth, firebaseUrl) {

	  var _ref = new Firebase(firebaseUrl),
			authRef = $firebaseAuth(_ref);

		this.getRef = _getRef;
		this.getAuth = _getAuth;
		this.getUser = _getUser;
		this.logout = _logout;
		this.requestLogin = _requestLogin;

    function _getRef() {
      return authRef;
    }

    function  _getAuth() {
      return authRef.$getAuth();
    }

    function _getUser() {
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
    }

    function _logout() {
      authRef.$unauth();
    }

    function _requestLogin(loginType) {
      return authRef.$authWithOAuthPopup(loginType);
    }

  }

})();
