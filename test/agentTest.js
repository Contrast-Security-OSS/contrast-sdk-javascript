var assert = require('assert');
var configured = require('./setup')
var path = require('path');
var fs = require('fs');

describe('Agent API Test', function() {

    it('should get agent profiles', function(done) {
        configured.sdk.getAgentProfiles(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get agent versions', function(done) {
        configured.sdk.getAgentVersions(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
