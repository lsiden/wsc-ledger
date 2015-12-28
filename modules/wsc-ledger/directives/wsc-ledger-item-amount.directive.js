(function() {
  'use strict';

  angular.module('wsc-ledger.directives')
  .directive('wscLedgerItemAmount', function(wscLedgerHelpers) {
    return {
      templateUrl: 'modules/wsc-ledger/directives/wsc-ledger-item-amount.tpl.html',
      scope: {
        value: '='
      },
      link: wscLedgerHelpers.link
    }
  })

})();
