;
(function() {
  'use strict';

  //Scores service used for communicating with the scores REST endpoints
  angular
    .module('dartapp.scores')
    .service('scoresService', scoresService);

  scoresService.$inject = ['$firebaseArray', '$firebaseObject', 'firebaseUrl'];
  function scoresService($firebaseArray, $firebaseObject, firebaseUrl) {

    var _url = firebaseUrl + 'scores';
    var _ref = new Firebase(_url);

    this.setListToScope = _setListToScope;
    this.getAll = _getAll;
    this.addItem = _addItem;
    this.removeAll = _removeAll;
    this.deleteItem = _deleteItem;
    this.getItem = _getItem;

    function _setListToScope(scope, localScopeVarName) {
			angularFire(_ref, scope, localScopeVarName);
		}

    function _getAll() {
      return $firebaseArray(_ref);
    }

    function _addItem(item){
      _ref.push(item);
    }

    function _removeAll(){
      _ref.remove();
    }

    function _deleteItem(id){
      var itemRef = new Firebase(_url + '/' + id);
      $firebaseObject(itemRef).$remove();
    }

    function _getItem(id){
      var itemRef = new Firebase(_url + '/' + id);
      return $firebaseObject(itemRef);
    }

  }
})();
