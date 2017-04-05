var assert = require('assert');
var configured = require('./setup')

describe('Module API Test', function() {

    it('should get modules', function(done) {
        configured.sdk.getApplicationModules(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application child modules', function(done) {
        configured.sdk.getApplicationChildModules(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
