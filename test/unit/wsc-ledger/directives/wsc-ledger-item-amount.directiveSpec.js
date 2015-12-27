(function() {
  'use strict';

  function qs(el, query) {
    el = el.length ? el[0] : el
    return angular.element(el.querySelector(query))      
  }

  describe('wsc-ledger-item-amount directive', function() {

    beforeEach(module('wsc-ledger'))

    var el, scope, $compile

    beforeEach(inject(function($rootScope, _$compile_) {
      scope = $rootScope.$new()
      scope.value = 1000
      $compile = _$compile_
      el = $compile('<wsc-ledger-item-amount value="value"></wsc-ledger-item-amount>')(scope)
      scope.$apply()
    }))

    it('compiles', function() {
      el.html().length.should.not.equal(0)
    })

    it('renders value', function() {
      angular.element(el[0].querySelector('.value')).html().should.equal('$1,000.00')
    })

    it('updates edited value', function() {
      var elInput = el.find('input')
      elInput.triggerHandler('focus')
      elInput.val(2000).triggerHandler('input')
      elInput.triggerHandler('blur')
      scope.$digest()
      angular.element(el[0].querySelector('.value')).html().should.equal('$2,000.00')
    })

    it('accepts negative amounts', function() {
      var elInput = el.find('input')
      elInput.triggerHandler('focus')
      elInput.val(-2500).triggerHandler('input')
      elInput.triggerHandler('blur')
      scope.$digest()
      angular.element(el[0].querySelector('.value')).html().should.equal('-$2,500.00')
    })

    it('will not update from non-numeric input', function() {
      var elInput = el.find('input')
      elInput.triggerHandler('focus')
      elInput.val('not a number').triggerHandler('input')
      elInput.triggerHandler('blur')
      scope.$digest()
      angular.element(el[0].querySelector('.value')).html().should.equal('$1,000.00')
    })

    it('can set to 0', function() {
      var elInput = el.find('input')
      elInput.triggerHandler('focus')
      elInput.val(0).triggerHandler('input')
      elInput.triggerHandler('blur')
      scope.$digest()
      angular.element(el[0].querySelector('.value')).html().should.equal('$0.00')
    })

    it('invalid input will not change value', function() {
      var elInput = el.find('input')
      elInput.triggerHandler('focus')
      elInput.val('not a number').triggerHandler('input')
      elInput.triggerHandler('blur')
      try {
        scope.$apply()
      } catch(e) {
        // console.log(e)
      } finally {
        var ledgerAmount = qs(el, 'wsc-ledger-item-amount .value')
        ledgerAmount.html().should.equal('$1,000.00')
      }
    })

  })

})();
