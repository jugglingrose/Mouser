var mouserApp= angular.module("mouserApp", ["ngRoute"]);

  mouserApp.config( function($routeProvider){
    $routeProvider
    .when('/directory',{
      templateUrl: "/views/directory.html",
      controller: "MouseController"
    })
    .when('/home',{
      templateUrl: "/views/home.html",
      controller: "MouseController"
    })
    .otherwise({
      redirectTo: '/home'
    })
  });

  mouserApp.controller("MouseController", function($scope){

    $scope.message = "Find Your Mouser Here:";

    $scope.newMouser = function(){
      $scope.mousers.push({
        name: $scope.newmouser.name,
        belt: $scope.newmouser.belt,
        rate: parseInt($scope.newmouser.rate),
        details: $scope.newmouser.details
      });
    };

    $scope.mousers = [
      {
        "name": "Boots",
        "belt": "black",
        "rate": 50,
        "details": "The king of mousers.  Guaranteed to get your mouse problems under control \
        and look absolutely adorable while doing so.",
        "thumb": "assets/boots.jpg"
      },
      {
        "name": "Wigglesworth",
        "belt": "red",
        "rate": 40,
        "details": "Don't let this big floof ball fool you, he's a stealthy ninja cat.",
        "thumb": "assets/CatA-liliana-marin-333863.jpg"
      },
      {
        "name": "Kat",
        "belt": "yellow",
        "rate": 10,
        "details": "Kat is our youngest and newest mouser with a lot of potential.",
        "thumb": "assets/kitten-erik-jan-leusink-126918.jpg"
      }
    ]

    /*$http.get('/data/data.json').then(function(data){
      $scope.mouser = data.data;
    });*/
  });
