var assert = require('assert');
var configured = require('./setup')

describe('Alert API Test', function() {

    it('should get alerts', function(done) {
        configured.sdk.getAlerts(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
