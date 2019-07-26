var assert = require('assert');
var configured = require('./setup')

describe('Library API Test', function() {

    it('should get libraries', function(done) {
        configured.sdk.getLibraries(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get java library', function(done) {
        configured.sdk.getLibraries(configured.org, configured.library).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get org library stats', function(done) {
        configured.sdk.getLibraryStats(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should filter libraries', function(done) {
        configured.sdk.filterLibraries(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get libraries', function(done) {
        configured.sdk.getLibraries(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get library policy', function(done) {
        configured.sdk.getLibraryPolicy(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get libraries', function(done) {
        configured.sdk.getLibraries(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
