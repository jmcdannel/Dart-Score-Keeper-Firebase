'use strict';

//Scores service used for communicating with the scores REST endpoints
angular.module('dartapp.scores').factory('ScoresFactory', ['$firebaseArray', '$firebaseObject',
  function ($firebaseArray, $firebaseObject) {

    var _url = app.firebaseUrl + 'scores';
	  var _ref = new Firebase(_url);

    return {
			setListToScope: function(scope, localScopeVarName) {
				angularFire(_ref, scope, localScopeVarName);
			},
      getAll: function() {
        return $firebaseArray(_ref);
      },
			addItem: function(item){
        _ref.push(item);
			},
			removeAll: function(){
        _ref.remove();
			},
			deleteItem: function(id){
        var itemRef = new Firebase(_url + '/' + id);
        $firebaseObject(itemRef).$remove();
			},
			getItem: function(id){
        var itemRef = new Firebase(_url + '/' + id);
        return $firebaseObject(itemRef);
			}
		};

  }
]);
