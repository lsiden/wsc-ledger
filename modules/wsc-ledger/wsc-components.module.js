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
