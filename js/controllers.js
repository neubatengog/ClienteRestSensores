angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $http) {
  $scope.dire = servidor+'input/list.json&apikey='+apiKey;
  $http.get($scope.dire).
    success(function(data){
        $scope.inputs = [];
        var anterior = "";
        angular.forEach(data, function(value, index) {
            //console.log(value); 
            if (value.nodeid != anterior){    
                $scope.inputs.push(value);
                anterior = value.nodeid;
            }
        })
    }).
    error(function(data){
        console.log(data);
    });


})

.controller('PlaylistCtrl', function($scope, $stateParams, $http) {
    $scope.NodoId =$stateParams.listId;
    $scope.dire = servidor+'input/list.json&apikey='+apiKey;
    $http.get($scope.dire).
    success(function(data){
        $scope.datos = [];
        angular.forEach(data, function(value, index) {
            console.log(value); 
            if (value.nodeid == $scope.NodoId){   

                $scope.datos.push(value);
            }
        })
    }).
    error(function(data){
        console.log(data);
    });


});
