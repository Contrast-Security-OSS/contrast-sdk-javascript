var assert = require('assert');
var configured = require('./setup')

describe('User API Test', function() {

    it('should get org users', function(done) {
        configured.sdk.getUsers(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get custom alerts', function(done) {
        configured.sdk.getCustomAlerts(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get custom attack alerts', function(done) {
        configured.sdk.getCustomAttackAlerts(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get custom vuln alerts', function(done) {
        configured.sdk.getCustomVulnerabilityAlerts(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get user info', function(done) {
        configured.sdk.getUserInformation(configured.org, configured.username).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get user auth header', function(done) {
        configured.sdk.getUsers(configured.org, configured.username).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
