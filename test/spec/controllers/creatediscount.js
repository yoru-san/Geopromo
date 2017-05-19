'use strict';

describe('Controller: CreatediscountCtrl', function () {

  // load the controller's module
  beforeEach(module('geopromoApp'));

  var CreatediscountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatediscountCtrl = $controller('CreatediscountCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreatediscountCtrl.awesomeThings.length).toBe(3);
  });
});
