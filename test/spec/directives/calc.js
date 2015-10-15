'use strict';

describe('Directive: calc', function () {

  // load the directive's module
  beforeEach(module('angularDashboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<calc></calc>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the calc directive');
  }));
});
