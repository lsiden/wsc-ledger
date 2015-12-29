(function() {
  'use strict';

  describe('wsc-inplace-editor directive', function() {

    beforeEach(module('wsc-components'))

    var el, scope, $compile

    beforeEach(inject(function($rootScope, _$compile_) {
      $compile = _$compile_
      scope = $rootScope.$new()
      el = $compile('<wsc-inplace-editor value="value"></wsc-inplace-editor>')(scope)
      scope.value = 'Item 1'
      scope.$apply()
    }))

    it('compiles', function() {
      el.html().should.not.equal('')
    })

    it('renders value', function() {
      angular.element(el[0].querySelector('.value')).html().should.equal('Item 1')
    })

    it('updates edited value', function() {
      var elInput = el.find('input')
      elInput.triggerHandler('focus')
      elInput.val('Item 2').triggerHandler('input')
      elInput.triggerHandler('blur')
      scope.$apply()
      angular.element(el[0].querySelector('.value')).html().should.equal('Item 2')
    })

    it('can apply a filter on init', function() {
      var el = $compile('<wsc-inplace-editor value="value" filterFn="uppercase"></wsc-inplace-editor>')(scope)
      scope.value = 'foobar'
      scope.$apply()
      var elInput = el.find('input')
      angular.element(el[0].querySelector('.value')).html().should.equal('FOOBAR')
    })

    it('can apply a filter when updating value', function() {
      var el = $compile('<wsc-inplace-editor value="value" filterFn="uppercase"></wsc-inplace-editor>')(scope)
      scope.value = 'Item 1'
      scope.$apply()

      var elInput = el.find('input')
      elInput.triggerHandler('focus')
      elInput.val('Item 2').triggerHandler('input')
      elInput.triggerHandler('blur')
      scope.$apply()
      angular.element(el[0].querySelector('.value')).html().should.equal('ITEM 2')
    })

  })

})();
