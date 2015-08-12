'use strict';

describe('Controller: SuprouteCtrl', function () {

  // load the controller's module
  beforeEach(module('seinfeldQuotesApp'));

  var SuprouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuprouteCtrl = $controller('SuprouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
