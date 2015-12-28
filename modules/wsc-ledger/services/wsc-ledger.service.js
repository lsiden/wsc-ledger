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
