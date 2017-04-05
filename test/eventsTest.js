var assert = require('assert');
var configured = require('./setup')

describe('Event API Test', function() {

    it('should get latest events', function(done) {
        configured.sdk.getLatestEvents(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get org history with interval', function(done) {
        configured.sdk.getLatestApplicationCreation(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get latest events', function(done) {
        configured.sdk.getLatestServerCreation(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get org history with interval', function(done) {
        configured.sdk.getLatestTracesReceived(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
