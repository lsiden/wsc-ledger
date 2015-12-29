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
