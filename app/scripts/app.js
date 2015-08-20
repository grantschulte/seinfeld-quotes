'use strict';

var seinfeldApp = angular.module('seinfeldApp', [
  'ngResource',
  'ngSanitize'
]);

seinfeldApp.value('APP_NAME', 'Seinfeld Talk');
seinfeldApp.value('AWS_URL', 'https://s3-us-west-1.amazonaws.com/seinfeld-quotes/');
seinfeldApp.value('backgroundColors', [
  '255,153,0',
  '50,153,187',
  '188,188,188',
  '179,204,87',
  '239,116,111'
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
    .when('/admin/create', {
      templateUrl: 'views/admin/create.html',
      controller: 'createCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
