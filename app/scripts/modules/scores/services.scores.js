'use strict';

//Scores service used for communicating with the scores REST endpoints
angular.module('dartapp.scores').factory('ScoresFactory', [
  '$firebaseArray', '$firebaseObject', '$firebaseAuth',
  function ($firebaseArray, $firebaseObject, $firebaseAuth) {


    app.controller("SampleCtrl", function($scope, $firebaseAuth) {
  var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");

  // create an instance of the authentication service
  var auth = $firebaseAuth(ref);


});

    var _url = app.firebaseUrl + 'scores';
	  var _ref = new Firebase(_url);

    var auth = $firebaseAuth(_ref);
    auth.$authWithOAuthPopup('github', function(error, authData) {
      if (error) {
        console.log('Login Failed!', error);
      } else {
        console.log('Authenticated successfully with payload:', authData);
      }
    });

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
