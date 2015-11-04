;
(function() {
    'use strict';

    angular
        .module('dartapp.users')
        .service('userService', userService);

    userService.$inject = ['$firebaseArray', '$firebaseObject', '$firebaseAuth', '$q', 'firebaseUrl'];

    function userService($firebaseArray, $firebaseObject, $firebaseAuth, $q, firebaseUrl) {

      var _url = firebaseUrl + 'users';
      var _ref = new Firebase(_url);

      this.add = _add;
      this.getAll = _getAll;
      this.createUser = _createUser;
      this.getUser = _getItem;

      function _createUser(authData) {
        var deferred = $q.defer();
        var itemRef, item;
        if (!authData) {
          deferred.resolve();
        } else {
          itemRef = new Firebase(_url + '/' + authData.uid + '/');
          item = $firebaseObject(itemRef);
          item.$loaded(function() {
            if (typeof item.admin === 'undefined') {
              item.provider = authData.provider;
              item.name = _getName(authData);
              item.admin = false;
              item.$save();
            }
            deferred.resolve();

          });
        }
        return deferred.promise;
      }

      function _add(user) {
        _ref.push(user);
      }

      function _getAll() {
        return $firebaseArray(_ref);
      }

      function _getName(authData) {
        return authData[authData.provider].displayName || 'Unknown';
      }

      function _getItem(id){
        var itemRef;
        itemRef = new Firebase(_url + '/' + id);
        return $firebaseObject(itemRef);
      }

    }
})();
