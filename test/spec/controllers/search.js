'use strict';

describe('Controller: searchCtrl', function () {

  // load the controller's module
  beforeEach(module('seinfeldApp'));

  var searchCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    searchCtrl = $controller('searchCtrl', {
      $scope: scope
    });
  }));

  it('should be ok', function () {
    expect(scope.ok).toBe('ok');
  });
});
