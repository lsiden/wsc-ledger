'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
    return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('wsc-inplace-editor');
  dependencies = module.requires;
});

  xit('should load config module', function() {
    expect(hasModule('wsc-inplace-editor.config')).to.be.ok;
  });
  
  it('should load filters module', function() {
    expect(hasModule('wsc-inplace-editor.filters')).to.be.ok;
  });
  
  it('should load directives module', function() {
    expect(hasModule('wsc-inplace-editor.directives')).to.be.ok;
  });
  
  it('should load services module', function() {
    expect(hasModule('wsc-inplace-editor.services')).to.be.ok;
  });
  
  xit('should load controllers module', function() {
    expect(hasModule('wsc-inplace-editor.controllers')).to.be.ok;
  });

});
