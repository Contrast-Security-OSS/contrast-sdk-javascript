var assert = require('assert');
var configured = require('./setup')

describe('Role API Test', function() {

    it('should get roles', function(done) {
        configured.sdk.getRoles().then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
