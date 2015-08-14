'use strict';

var seinfeldApp = angular.module('seinfeldApp', [
  'ngResource',
  'ngSanitize'
]);

seinfeldApp.value('appName', 'Seinfeld Quotes');

seinfeldApp.value('backgroundColors', [
  '255,153,0',
  '50,153,187',
  '188,188,188'
]);

seinfeldApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
    })
    .when('/search', {
      templateUrl: 'views/search.html',
      controller: 'searchCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
