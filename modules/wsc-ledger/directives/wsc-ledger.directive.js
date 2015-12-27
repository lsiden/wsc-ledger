(function() {
  'use strict';

  angular.module('wsc-ledger.directives')
  .directive('wscLedger', function() {
    return {
      scope: {
        items: '='
      },
      templateUrl: 'modules/wsc-ledger/directives/wsc-ledger.tpl.html'
    }
  })
  .filter('validNumber', function() {
    return function(val) {
      return isNaN(val) ? 0 : val
    }
  })

})();
