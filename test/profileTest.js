var assert = require('assert');
var configured = require('./setup')

describe('Profile API Test', function() {

    it('should get profile info', function(done) {
        configured.sdk.getProfileInfo().then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get profile organizations', function(done) {
        configured.sdk.getProfileOrganizations().then(function(response){
            assert(response.organizations)
            done();
        });
    });

    it('should get profile default org', function(done) {
        configured.sdk.getProfileDefaultOrganization().then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get profile org info', function(done) {
        configured.sdk.getOrgInfo(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get profile password policy info', function(done) {
        configured.sdk.getProfilePasswordPolicy().then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get profile roles', function(done) {
        configured.sdk.getProfileRoles().then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should set profile default org', function(done) {
        configured.sdk.setProfileDefaultOrg(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });




});
