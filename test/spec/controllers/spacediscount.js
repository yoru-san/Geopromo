'use strict';

describe('Controller: SpacediscountCtrl', function () {

  // load the controller's module
  beforeEach(module('geopromoApp'));

  var SpacediscountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpacediscountCtrl = $controller('SpacediscountCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpacediscountCtrl.awesomeThings.length).toBe(3);
  });
});
