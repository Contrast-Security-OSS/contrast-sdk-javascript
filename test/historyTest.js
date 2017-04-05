var assert = require('assert');
var configured = require('./setup')

describe('History API Test', function() {

    it('should get org history', function(done) {
        configured.sdk.getOrganizationScoreHistory(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get org history with interval', function(done) {
        configured.sdk.getOrganizationScoreHistoryInterval(configured.org, 'WEEK').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
