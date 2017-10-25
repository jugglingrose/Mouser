var mouserApp= angular.module("mouserApp", ["ngRoute"]);

  mouserApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/directory',{
      templateUrl: "/views/directory.html"
    })
    .when('/home',{
      templateUrl: "/views/home.html"
    })
    .otherwise({
      redirectTo: '/home'
    })
  }]);

  mouserApp.controller("MouseController", ['$scope'], function($scope){
    $scope.message = "Find Your Mouser Here";

    $http.get('/data/data.json').then(function(data){
      $scope.mouser = data.data;
    });
  });
