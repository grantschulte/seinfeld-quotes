seinfeldApp.factory('Quotes', ['$resource', function($resource) {
  return $resource('/api/quotes/:id', {}, {
    'update': {
      method: 'PUT'
    }
  });
}]);
