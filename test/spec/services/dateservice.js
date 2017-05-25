'use strict';

describe('Service: dateservice', function () {

  // load the service's module
  beforeEach(module('geopromoApp'));

  // instantiate service
  var dateservice;
  beforeEach(inject(function (_dateservice_) {
    dateservice = _dateservice_;
  }));

  it('should do something', function () {
    expect(!!dateservice).toBe(true);
  });

});
