(function() {
  'use strict';

  describe('wsc-ledger directive', function() {

    beforeEach(module('wsc-ledger'))
    beforeEach(module('templates'))

    var el, scope
    var items = [
    {
      desc: 'item 1',
      amount: 100
    },
    {
      desc: 'item 2',
      amount: 200
    },
    {
      desc: 'item 1',
      amount: 300
    }
    ]

    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new()
      el = $compile('<wsc-ledger items="items"></wsc-ledger>')(scope)
      scope.items = items
      scope.$apply()
    }))

    it('compiles', function() {
      console.log(el.html())
      el.html().length.should.not.equal(0)
    })

    it('contains a row for each item', function() {
    })

    it('returns a total as Number', function() {

    })

    it('updates total when any amount changes', function() {
      
    })

    it('updates total when item is removed', function() {

    })

    it('displays dollar sign in front of each amount', function() {

    })

    it('displays thousands commas', function() {

    })

    it('\'precision\' attribute defaults to \'2\'', function() {

    })

    it('displays \'precision\' decimal places', function() {

    })

    it('can displays no decimal point if \'precision\' is 0', function() {

    })

    it('allows editing desc field of item', function() {
      
    })

    it('allows editing amount field of item', function() {

    })

    it('will not accept non-numeric input', function() {

    })

  })

})();
