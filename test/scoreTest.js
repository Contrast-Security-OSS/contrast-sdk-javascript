var assert = require('assert');
var configured = require('./setup')

describe('Score API Test', function() {

    it('should get overall scores', function(done) {
        configured.sdk.getOverallScores(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get score category breakdown', function(done) {
        configured.sdk.getScoreCategoryBreakdown(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get score rule breakdown', function(done) {
        configured.sdk.getScoreRuleBreakdown(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get score server breakdown', function(done) {
        configured.sdk.getScoreServerBreakdown(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get score severity breakdown', function(done) {
        configured.sdk.getScoreSeverityBreakdown(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get score status breakdown', function(done) {
        configured.sdk.getScoreStatusBreakdown(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get score trace rule breakdown', function(done) {
        configured.sdk.getScoreTraceRuleBreakdown(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get score trace severity breakdown', function(done) {
        configured.sdk.getScoreTraceSeverityBreakdown(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get score trace status breakdown', function(done) {
        configured.sdk.getScoreTraceStatusBreakdown(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get platform score', function(done) {
        configured.sdk.getPlatformScore(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get security score', function(done) {
        configured.sdk.getSecurityScore(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
