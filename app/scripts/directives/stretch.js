seinfeldApp.directive('stretch', ['$rootScope', function($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, el) {
      var bg = $('.bg');
      var total = 2;

      var initBg = function() {
        var id = Math.floor(Math.random() * total);
        var quote = $('.content-container blockquote');
        bg.css({ 'opacity': 0 });
        quote.css({ 'opacity': 0 });
        $(el).backstretch('https://s3-us-west-1.amazonaws.com/seinfeld-quotes/' + id + '.jpg');
      };

      $(window).on('backstretch.after', function () {
        $rootScope.$broadcast('backgroundLoaded');
        bg.animate({ 'opacity': 1 });
        var quote = $('.content-container blockquote');
        quote.delay(400).animate({ 'opacity': 1 });
      });

      scope.$on('initBg', function() {
        initBg();
      });
    }
  };
}]);
