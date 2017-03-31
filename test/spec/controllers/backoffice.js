'use strict';

describe('Controller: BackofficeCtrl', function () {

  // load the controller's module
  beforeEach(module('geopromoApp'));

  var BackofficeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BackofficeCtrl = $controller('BackofficeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BackofficeCtrl.awesomeThings.length).toBe(3);
  });
});
