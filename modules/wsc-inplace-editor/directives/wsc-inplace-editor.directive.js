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
