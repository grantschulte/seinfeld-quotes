'use strict';

seinfeldApp.factory('Quotes', [ '$http', '$q', function($http, $q) {
  var API_URL = '/api/quotes';
  var service = {};
  var _author = '';

  service.setAuthor = function(author, cb) {
    _author = author;
    if (cb) { cb() };
  };

  service.getAuthor = function() {
    return _author;
  };

  service.getAll = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: API_URL,
      params: {
        author: _author
      }
    }).success(function(data) {
      deferred.resolve(data);
    });

    return deferred.promise;
  };

  service.authors = {
    0: 'Jerry',
    1: 'George',
    2: 'Elaine',
    3: 'Kramer'
  };

  return service;
}]);
