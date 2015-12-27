(function() {
  'use strict';

  describe('wsc-ledger-item-desc directive', function() {

    beforeEach(module('wsc-ledger'))

    var el, scope, $compile

    beforeEach(inject(function($rootScope, _$compile_) {
      scope = $rootScope.$new()
      scope.value = 'Item 1'
      $compile = _$compile_
      el = $compile('<wsc-ledger-item-desc value="value"></wsc-ledger-item-desc>')(scope)
      scope.$apply()
    }))

    it('compiles', function() {
      el.html().length.should.not.equal(0)
    })

    it('renders value', function() {
      angular.element(el[0].querySelector('.value')).html().should.equal('Item 1')
    })

    it('updates edited value', function() {
      var elInput = el.find('input')
      elInput.triggerHandler('focus')
      elInput.val('Item 2').triggerHandler('input')
      elInput.triggerHandler('blur')
      scope.$digest()
      angular.element(el[0].querySelector('.value')).html().should.equal('Item 2')
    })

  })

})();
