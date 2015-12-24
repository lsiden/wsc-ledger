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
  module = angular.module('wsc-ledger');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('wsc-ledger.config')).to.be.ok;
  });

  
  it('should load filters module', function() {
    expect(hasModule('wsc-ledger.filters')).to.be.ok;
  });
  

  
  it('should load directives module', function() {
    expect(hasModule('wsc-ledger.directives')).to.be.ok;
  });
  

  

  

});
