(function() {
  'use strict';

  angular.module('wsc-ledger.directives')
  .directive('wscLedgerItemDesc', function(wscLedgerHelpers) {
    return {
      templateUrl: 'modules/wsc-ledger/directives/wsc-ledger-item-desc.tpl.html',
      scope: {
        value: '='
      },
      link: wscLedgerHelpers.link
    }
  })

})();
