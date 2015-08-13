// 'use strict';

seinfeldApp.controller('homeCtrl', ['$scope', 'Quotes',

  function ($scope, Quotes) {
    var getQuotes = function() {
      Quotes.query(function(data) {
        $scope.quotes = data;
      });
    };

    getQuotes();
  }]);
