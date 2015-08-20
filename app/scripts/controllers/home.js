'use strict';

seinfeldApp.controller('homeCtrl', ['$rootScope', '$scope', 'Quotes', 'AWS_URL',
  function ($rootScope, $scope, Quotes, AWS_URL) {
    $scope.authors = Quotes.authors;
    $scope.selectionMenuOn = false;
    $scope.showRefresh = true;
    $scope.dataLoaded = false;
    $scope.backgroundLoaded = false;

    $scope.getQuotes = function() {
      $scope.dataLoaded = false;
      $scope.backgroundLoaded = false;
      $rootScope.$broadcast('initBg');

      Quotes.getAll().then(function(data) {
        $scope.quotes = data;
        $scope.random = getRandom(data);
        $scope.random.avatar = AWS_URL + $scope.random.author + '_trans.png';
        $scope.dataLoaded = true;
      });
    };

    $scope.updateAuthor = function(author) {
      Quotes.setAuthor(author, function() {
        $scope.getQuotes();
      });
    };

    $scope.isCurrentAuthor = function(author) {
      return author === Quotes.getAuthor();
    };

    $scope.toggleSelectionMenu = function() {
      $scope.selectionMenuOn = !$scope.selectionMenuOn;
    };

    $rootScope.$on('backgroundLoaded', function() {
      $scope.$apply(function() {
        $scope.backgroundLoaded = true;
      });
    });

    var getRandom = function(data) {
      if (!data.length) { return {}; }
      var random = Math.floor(Math.random() * data.length);
      return data[random];
    };

    $scope.getQuotes();
  }
]);
