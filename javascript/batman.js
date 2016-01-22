var app = angular.module('aMod', ['ngRoute']);

app.controller('aController', function($scope){
  });

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/homeview.html',
    controller: 'aController'
  });
  $routeProvider.when('/aboutview', {
    templateUrl: 'views/aboutview.html',
    controller: 'aController'
  });
})
