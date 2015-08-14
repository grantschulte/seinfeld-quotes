seinfeldApp.directive('randomColor', ['backgroundColors', function(backgroundColors) {
  return {
    restrict: 'A',
    link: function(scope, el) {
      var container = $(el);
      var els = {
        quote: container.find('blockquote p'),
        arrow: container.find('blockquote .speak-arrow'),
        image: container.find('blockquote .author-image'),
        overlay: $('.overlay'),
        body: $('body')
      };

      var initColors = function() {
        var colors = backgroundColors;
        var randomIndex = Math.floor(Math.random() * colors.length);
        var color = colors[randomIndex];

        els.quote.css({ 'background-color': 'rgba(' + color + ',0.5)' });
        els.arrow.css({ 'border-top-color': 'rgba(' + color + ',0.5)' });
        els.image.css({ 'background-color': 'rgba(' + color + ',0.5)' });
        els.overlay.css({ 'background-color': 'rgba(' + color + ',0.5)' });
        els.body.css({ 'background-color': 'rgba(' + color + ',1)' });
      }

      scope.$on('initBg', function() {
        initColors();
      });
    }
  };
}]);
