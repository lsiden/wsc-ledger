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
