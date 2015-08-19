angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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
  var city = "cancun";
  var units = "metric";

  function getData(city, units){
    //daily te trae por dias, si se lo quitas te traera  cada 3 horas
    //cnt te trae los dias que quieres
    //q es la ciudad
    //units es la medida
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?lang=es&cnt=7&q="+ city +"&units=" + units)
    .success( function(data){
      $scope.ciudad = data.city.name;
      $scope.descripcion = data.list[0].weather[0].description;
      $scope.temperatura = data.list[0].temp.day;
      $scope.items = data.list;
    });
  }
  
  
  getData(city, units);
  
  
  $scope.units = function(unitScope){
    units = unitScope;
    getData(city, units);
  }
  
  
  $scope.city = function(cityScope){
    city = cityScope;
    getData(cityScope, units);
  }
})
.controller('HorasCtrl', function($scope, $http) {
  var city = "cancun";
  var units = "metric";

  function getData(city, units){
    //daily te trae por dias, si se lo quitas te traera  cada 3 horas
    //cnt te trae los dias que quieres
    //q es la ciudad
    //units es la medida
    $http.get("http://api.openweathermap.org/data/2.5/forecast?lang=es&cnt=7&q="+ city +"&units=" + units)
    .success( function(data){

      console.log(data);
      $scope.ciudad = data.city.name;
      $scope.descripcion = data.list[0].weather[0].description;
      $scope.temperatura = data.list[0].temp.day;
      $scope.items = data.list;
    });
  }
  
  
  getData(city, units);
  
  
  $scope.units = function(unitScope){
    units = unitScope;
    getData(city, units);
  }
  
  
  $scope.city = function(cityScope){
    city = cityScope;
    getData(cityScope, units);
  }
});