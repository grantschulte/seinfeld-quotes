'use strict';

angular.module('seinfeldQuotesApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sup-route', {
        templateUrl: 'views/sup-route.html',
        controller: 'supRouteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
