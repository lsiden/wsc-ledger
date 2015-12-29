(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('wsc-inplace-editor.config', [])
      .value('wsc-inplace-editor.config', {
          debug: true
      });

  // Modules
  
  angular.module('wsc-inplace-editor.directives', []);
  
  
  angular.module('wsc-inplace-editor.filters', []);
  
  
  angular.module('wsc-inplace-editor.services', []);
  
  
    angular.module('wsc-inplace-editor.controllers', []);
  
  angular.module('wsc-inplace-editor',
      [
        'wsc-inplace-editor.config',
        'wsc-inplace-editor.directives',
        'wsc-inplace-editor.filters',
        'wsc-inplace-editor.services',
        'wsc-inplace-editor.controllers',
        'ngSanitize'
      ]);

})(angular);

(function() {
  'use strict';

  (function (angular) {

    // Create all modules and define dependencies to make sure they exist
    // and are loaded in the correct order to satisfy dependency injection
    // before all nested files are concatenated by Gulp

    // Config
    angular.module('wsc-components.config', [])
    .value('wsc-components.config', {
      debug: true
    });

    // Modules
    angular.module('wsc-ledger.directives', []);
    angular.module('wsc-ledger.filters', []);
    angular.module('wsc-ledger.services', []);
    angular.module('wsc-ledger',
      [
      'wsc-components.config',
      'wsc-ledger.directives',
      'wsc-ledger.services',
      'wsc-ledger.filters',
      'wsc-components.templates'
      ]);

    angular.module('wsc-inplace-editor.directives', []);
    angular.module('wsc-inplace-editor.filters', []);
    angular.module('wsc-inplace-editor.services', []);
    angular.module('wsc-inplace-editor',
      [
      'wsc-components.config',
      'wsc-inplace-editor.directives',
      'wsc-inplace-editor.services',
      'wsc-inplace-editor.filters',
      'wsc-components.templates'
      ]);

    angular.module('wsc-components', [
      'wsc-ledger',
      'wsc-inplace-editor'
      ]);

  })(angular);
})();

(function() {
  'use strict';

  var RET_KEYCODE = 13
  var ESC_KEYCODE = 27

  angular.module('wsc-inplace-editor')
  .directive('wscInplaceEditor', function($timeout, $filter) {
      return {
        templateUrl: 'modules/wsc-inplace-editor/directives/wsc-inplace-editor.tpl.html',
        restrict: 'E',
        scope: {
          value: '=',
        },
        link: link
      }

      function link(scope, el, attrs) {

        function applyFilter(newVal) {
          var filterFn = el.attr('filterFn')
          return filterFn ? $filter(filterFn)(newVal) : newVal
        }

        scope.editing = false
        scope.$watch('value', function(newVal) {
          scope.displayValue = applyFilter(newVal)
        })
        scope.displayValue = applyFilter(scope.value)

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
          scope.displayValue = applyFilter(scope.value)
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
    })

})();

(function() {
  'use strict';

  var RET_KEYCODE = 13
  var ESC_KEYCODE = 27

  angular.module('wsc-ledger.services')
  .service('wscLedgerHelpers', function($timeout) {
    this.link = function(scope, el, attrs) {
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

  })
})();

angular.module("wsc-components.templates").run(["$templateCache", function($templateCache) {$templateCache.put("wsc-inplace-editor/directives/wsc-inplace-editor.tpl.html","{{ displayValue }}\n<span class=\"value\" ng-bind=\"displayValue\" ng-show=\"!editing\" ng-click=\"enableEditor()\" title=\"Click to edit.\"></span>\n<input type=\"text\" ng-model=\"value\" ng-model-options=\"{ updateOn: \'blur\' }\" ng-show=\"editing\">\n");
$templateCache.put("wsc-ledger/directives/wsc-ledger-item-amount.tpl.html","<span class=\"value\" ng-show=\"!editing\" ng-click=\"enableEditor()\" title=\"Click to edit.\">{{ value | validNumber | currency }}</span>\n<input type=\"number\" ng-model=\"value\" ng-model-options=\"{ updateOn: \'blur\' }\" ng-show=\"editing\">\n");
$templateCache.put("wsc-ledger/directives/wsc-ledger-item-desc.tpl.html","<span class=\"value\" ng-bind=\"value\" ng-show=\"!editing\" ng-click=\"enableEditor()\" title=\"Click to edit.\"></span>\n<input type=\"text\" ng-model=\"value\" ng-model-options=\"{ updateOn: \'blur\' }\" ng-show=\"editing\">\n");
$templateCache.put("wsc-ledger/directives/wsc-ledger.tpl.html","<table>\n  <thead>\n    <tr>\n      <th class=\"desc\">Item</th>\n      <th class=\"amount\">Amount</th>\n    </tr>\n  </thead>\n  <tbody class=\"items\">\n    <tr ng-repeat=\"item in items\">\n      <td class=\"desc\">\n        <wsc-ledger-item-desc value=\"item.desc\"></wsc-ledger-item-desc>\n      </td>\n      <td class=\"amount\">\n        <wsc-ledger-item-amount value=\"item.amount\"></wsc-ledger-item-amount>\n      </td>\n    </tr>\n  </tbody>\n</table>\n");}]);
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
