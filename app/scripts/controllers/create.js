seinfeldApp.controller('createCtrl', ['$scope', 'Quotes', function($scope, Quotes) {
  $scope.quote = {};

  $scope.addQuote = function() {
    if ($scope.quote.author && $scope.quote.body) {
      Quotes.create({
        author: $scope.quote.author,
        body: $scope.quote.body
      }).then(function(data) {
        console.log('Successfully Created: ', data);
      });
    }
    else {
      console.log('Error');
    }
  };
}]);
