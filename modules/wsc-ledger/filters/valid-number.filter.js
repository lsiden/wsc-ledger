(function() {
  'use strict';

  angular.module('wsc-ledger.filters')
  .filter('validNumber', function() {
    return function(val) {
      return isValidNumber(val) ? val : 0
    }
  })
  .filter('validCurrency', function($filter) {
    return function(val) {
      var val1 = $filter('validNumber')(val)
      return $filter('currency')(val)
    }
  })

  function isValidNumber(val) {
    return val !== null && !isNaN(val)
  }

})();
