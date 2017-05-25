'use strict';

describe('Service: discountservice', function () {

  // load the service's module
  beforeEach(module('geopromoApp'));

  // instantiate service
  var discountservice;
  beforeEach(inject(function (_discountservice_) {
    discountservice = _discountservice_;
  }));

  it('should do something', function () {
    expect(!!discountservice).toBe(true);
  });

});
