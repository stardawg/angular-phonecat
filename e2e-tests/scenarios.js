'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneCat Application', function() {

  it('should redirect `index.html` to `index.html#!/phones', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/phones');
  });

  describe('View: Phone list', function() {

    beforeEach(function() {
      browser.get('index.html#!/phones');
    });

     it('should be possible to control phone order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var oldestOption = orderSelect.element(by.css('option[value="-age"]'));
      var newestOption = orderSelect.element(by.css('option[value="age"]'));
      var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

      function getNames() {
        return phoneNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('tablet');   // Let's narrow the dataset to make the assertions shorter

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);

      oldestOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);

      newestOption.click();

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);

    });

    it('should render phone specific links', function() {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');

      element.all(by.css('.phones li a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/phones/nexus-s');
    });

    it('should redirect `index.html` to `index.html#!/phones', function() {
      browser.get('index.html');
      expect(browser.getLocationAbsUrl()).toBe('/phones');
    });


  });

  describe('View: Phone detail', function() {

    beforeEach(function() {
      browser.get('index.html#!/phones/nexus-s');
    });

    it('should display the `nexus-s` page', function() {
      expect(element(by.binding('$ctrl.phone.name')).getText()).toBe('Nexus S');
    });

    it('should display 4 thumbnails', function(){
      expect(element(by.css('.phone-thumbs')).all(by.repeater('')).count()).toBe(4);
    });

    it('should display check for gps', function(){
      expect(element(by.css('.gps-capable')).getText()).toBe('\u2713');
    });

    it('should display x for infared', function(){
      expect(element(by.css('.infared-capable')).getText()).toBe('\u2718');
    });

  });

});