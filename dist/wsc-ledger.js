(function() {
  'use strict';

  (function (angular) {

    // Create all modules and define dependencies to make sure they exist
    // and are loaded in the correct order to satisfy dependency injection
    // before all nested files are concatenated by Gulp

    // Config
    angular.module('wsc-ledger.config', [])
    .value('wsc-ledger.config', {
      debug: true
    });

    // Modules
    
    angular.module('wsc-ledger.directives', []);
    
    angular.module('wsc-ledger.filters', []);
    
    angular.module('wsc-ledger',
      [
      'wsc-ledger.config',
      'wsc-ledger.directives',
      'wsc-ledger.filters',
      'ngSanitize'
      ]);

  })(angular);
})();

(function() {
  'use strict';

  var RET_KEYCODE = 13
  var ESC_KEYCODE = 27

  angular.module('wsc-ledger.directives')
  .directive('wscLedgerItemAmount', function($timeout) {
    return {
      templateUrl: 'modules/wsc-ledger/directives/wsc-ledger-item-amount.tpl.html',
      scope: {
        value: '='
      },
      link: function(scope, el, attrs) {
        scope.editing = false

        scope.enableEditor = function() {
          scope.editing = true
          $timeout(function() {
            angular.element(el).find('input')[0].focus()
          })
        }
        angular.element(el).find('input')
        .bind('focus', function(ev) {
          scope.valuePrev = scope.value
        })
        .bind('blur', function(ev) {
          if (scope.escaping || scope.value === null) {
            scope.value = scope.valuePrev
            scope.escaping = false
          }
          scope.editing = false
          scope.$apply()
        })
        .bind('keydown', function(ev) {
          if (ev.keyCode === ESC_KEYCODE) {
            scope.escaping = true
            angular.element(this).triggerHandler('blur')
          } else if (ev.keyCode === RET_KEYCODE) {
            angular.element(this).triggerHandler('blur')
          }
        })
      }
    }
  })
  .filter('validNumber', function() {
    return function(val) {
      return isValidNumber(val) ? val : 0
    }
  })

  function isValidNumber(val) {
    return val !== null && !isNaN(val)
  }

})();

(function() {
  'use strict';

  var RET_KEYCODE = 13
  var ESC_KEYCODE = 27

  angular.module('wsc-ledger.directives')
  .directive('wscLedgerItemDesc', function($timeout) {
    return {
      templateUrl: 'modules/wsc-ledger/directives/wsc-ledger-item-desc.tpl.html',
      scope: {
        value: '='
      },
      link: function(scope, el, attrs) {
        scope.editing = false

        scope.enableEditor = function() {
          scope.editing = true
          $timeout(function() {
            angular.element(el).find('input')[0].focus()
          })
        }
        angular.element(el).find('input')
        .bind('focus', function(ev) {
          scope.valuePrev = scope.value
        })
        .bind('blur', function(ev) {
          if (scope.escaping) {
            scope.value = scope.valuePrev
            scope.escaping = false
          }
          scope.editing = false
          scope.$apply()
        })
        .bind('keydown', function(ev) {
          if (ev.keyCode === ESC_KEYCODE) {
            scope.escaping = true
            angular.element(this).triggerHandler('blur')
          } else if (ev.keyCode === RET_KEYCODE) {
            angular.element(this).triggerHandler('blur')
          }
        })
      }
    }
  })

})();

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
