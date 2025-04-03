var assert = require('assert');
var configured = require('./setup')

describe('Trace API Test', function() {

    it('should filter traces', function(done) {
        configured.sdk.filterOrgTraces(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get org trace', function(done) {
        configured.sdk.getOrgTrace(configured.org, configured.trace).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get trace notes', function(done) {
        configured.sdk.getTraceNotes(configured.org, configured.app, configured.trace).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should create trace note', function(done) {
        configured.sdk.createTraceNote(configured.org, configured.app, configured.trace, 'test').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get org trace ids', function(done) {
        configured.sdk.getOrgTraceIds(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get org policy violations', function(done) {
        configured.sdk.getOrgTracePolicyViolations(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get trace visibility', function(done) {
        configured.sdk.getTraceVisibility(configured.org, configured.trace).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get new trace trend', function(done) {
        configured.sdk.getNewTraceTrend(configured.org, 'week').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get total trace trend', function(done) {
        configured.sdk.getTotalTraceTrend(configured.org, 'week').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get trace time to remediate month trend ', function(done) {
        configured.sdk.getTraceTimeToRemediateMonthTrend(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get trace time to remediate current', function(done) {
        configured.sdk.getTraceTimeToRemediateCurrent(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
