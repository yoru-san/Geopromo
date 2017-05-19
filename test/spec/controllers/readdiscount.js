'use strict';

describe('Controller: ReaddiscountCtrl', function () {

  // load the controller's module
  beforeEach(module('geopromoApp'));

  var ReaddiscountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReaddiscountCtrl = $controller('ReaddiscountCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReaddiscountCtrl.awesomeThings.length).toBe(3);
  });
});
