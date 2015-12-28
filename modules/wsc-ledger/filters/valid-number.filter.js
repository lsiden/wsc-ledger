(function() {
  'use strict';

  angular.module('wsc-ledger.filters')
  .filter('validNumber', function() {
    return function(val) {
      return isValidNumber(val) ? val : 0
    }
  })

  function isValidNumber(val) {
    return val !== null && !isNaN(val)
  }

})();
