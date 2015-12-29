(function() {
  'use strict';

  function qs(el, query) {
    el = el.length ? el[0] : el
    return angular.element(el.querySelector(query))      
  }

  describe('wsc-ledger directive', function() {

    beforeEach(module('wsc-components'))

    var el, scope, $compile
    var items = [
    {
      desc: 'Item 1',
      amount: 1000
    },
    {
      desc: 'Item 2',
      amount: 2000
    },
    {
      desc: 'Item 3',
      amount: 3000
    }
    ]

    beforeEach(inject(function($rootScope, _$compile_) {
      scope = $rootScope.$new()
      scope.items = angular.copy(items)
      scope.ledgerResult = {}
      $compile = _$compile_
      el = $compile('<wsc-ledger items="items" result="ledgerResult"></wsc-ledger>')(scope)
      scope.$apply()
    }))

    it('compiles', function() {
      el.html().length.should.not.equal(0)
    })

    it('contains a row for each item', function() {
      el.find('tbody.items tr').length.should.equal(scope.items.length)
    })

    it('displays each item description', function() {
      var itemDescs = el[0].querySelectorAll('tbody.items td.desc span')
      angular.element(itemDescs[0]).text().should.equal('Item 1')
      angular.element(itemDescs[1]).text().should.equal('Item 2')
      angular.element(itemDescs[2]).text().should.equal('Item 3')
    })

    it('displays each item amount', function() {
      var itemAmounts = el[0].querySelectorAll('tbody.items td.amount span')
      angular.element(itemAmounts[0]).text().should.equal('$1,000.00')
      angular.element(itemAmounts[1]).text().should.equal('$2,000.00')
      angular.element(itemAmounts[2]).text().should.equal('$3,000.00')
    })

  })

})();
