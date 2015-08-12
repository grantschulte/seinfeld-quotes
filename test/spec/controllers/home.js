'use strict';

describe('Controller: homeCtrl', function () {

  // load the controller's module
  beforeEach(module('seinfeldApp'));

  var homeCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    homeCtrl = $controller('homeCtrl', {
      $scope: scope
    });
  }));

  it('should be ok', function () {
    expect(scope.ok).toBe('ok');
  });
});
