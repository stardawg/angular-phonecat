'use strict';

describe('phoneList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('phoneList'));

  // Test the controller
  describe('PhoneListController', function() {
    var $httpBackend, ctrl;
    var myPhones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
          age: 1
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
          age: 2
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
          age: 3
        }
      ];

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json')
                  .respond(myPhones);

      ctrl = $componentController('phoneList');
      jasmine.addCustomEqualityTester(angular.equals);
    }));

    it('should create a `phones` property with 2 phones fetched with `$http`', function() {
      $httpBackend.flush();
      expect(ctrl.phones).toEqual(myPhones);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});

