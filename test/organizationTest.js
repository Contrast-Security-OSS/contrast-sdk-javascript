var assert = require('assert');
var configured = require('./setup')

describe('Organization API Test', function() {

    it('should search', function(done) {
        configured.sdk.search(configured.org, 'app').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('get organization info', function(done) {
        configured.sdk.getOrganizationInfo(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('get organization admins', function(done) {
        configured.sdk.getOrganizationAdministrators(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('get organization application roles', function(done) {
        configured.sdk.getOrganizationApplicationRoles(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('get organization servers needing restart', function(done) {
        configured.sdk.getOrganizationServersNeedingRestart(configured.org, 'Java').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('get organization application stats', function(done) {
        configured.sdk.getOrganizationApplicationStats(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('get organization library stats', function(done) {
        configured.sdk.getOrganizationLibraryStats(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('get organization server stats', function(done) {
        configured.sdk.getOrganizationServerStats(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('get organization trace stats', function(done) {
        configured.sdk.getOrganizationTraceStats(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('get organization server settings', function(done) {
        configured.sdk.getOrganizationServerSettings(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
