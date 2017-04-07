var assert = require('assert');
var configured = require('./setup')

describe('Webhook API Test', function() {

    it('should get webhooks', function(done) {
        configured.sdk.getWebhooks(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
