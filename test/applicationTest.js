var assert = require('assert');
var configured = require('./setup')

describe('Application API Test', function() {

    it('should get inactive applications', function(done) {
        configured.sdk.getInactiveApplications(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get newest applications', function(done) {
        configured.sdk.getNewestApplications(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get recent applications', function(done) {
        configured.sdk.getRecentApplications(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application components', function(done) {
        configured.sdk.getApplicationComponents(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application coverage', function(done) {
        configured.sdk.getApplicationCoverage(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application coverage - week', function(done) {
        configured.sdk.getApplicationCoveragePastWeek(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application history', function(done) {
        configured.sdk.getApplicationHistory(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application history', function(done) {
        configured.sdk.getApplicationHistoryByInterval(configured.org, configured.app, 'DEVELOPMENT', 'WEEK').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application libraries', function(done) {
        configured.sdk.getApplicationLibraries(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application library subfilters', function(done) {
        configured.sdk.getApplicationLibrarySubfilters(configured.org, configured.app, 'tags').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should filter applications', function(done) {
        configured.sdk.filterApplications(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application library stats', function(done) {
        configured.sdk.getApplicationLibraryStats(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application status breakdown', function(done) {
        configured.sdk.getApplicationStatusBreakdown(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application trace breakdown', function(done) {
        configured.sdk.getApplicationTraceBreakdown(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application trace rule breakdown', function(done) {
        configured.sdk.getApplicationTraceRuleBreakdown(configured.org, configured.app, 'DEVELOPMENT').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application trace severity breakdown', function(done) {
        configured.sdk.getApplicationTraceSeverityBreakdown(configured.org, configured.app, 'DEVELOPMENT').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application trace status breakdown', function(done) {
        configured.sdk.getApplicationTraceStatusBreakdown(configured.org, configured.app, 'DEVELOPMENT').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application servers', function(done) {
        configured.sdk.getApplicationServers(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application servers breakdown', function(done) {
        configured.sdk.getApplicationServersBreakdown(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application servers count', function(done) {
        configured.sdk.getApplicationServersCount(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application servers recently active', function(done) {
        configured.sdk.getApplicationServersRecentlyActive(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application server properties', function(done) {
        configured.sdk.getApplicationServerProperties(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application server settings', function(done) {
        configured.sdk.getApplicationServerSettings(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application technologies', function(done) {
        configured.sdk.getApplicationTechnologies(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get technologies', function(done) {
        configured.sdk.getTechnologies(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get total allowed apps', function(done) {
        configured.sdk.getTotalAllowedApplications(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should filter apps', function(done) {
        configured.sdk.filterApplications(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get app filters', function(done) {
        configured.sdk.getApplicationFilters(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application', function(done) {
        configured.sdk.getApplication(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should update app importance', function(done) {
        configured.sdk.updateApplicationImportance(configured.org, configured.app,1).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get app license details', function(done) {
        configured.sdk.getApplicationLicenseDetails(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should filter app traces', function(done) {
        configured.sdk.filterApplicationTraces(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application vuln details', function(done) {
        configured.sdk.getApplicationVulnDetails(configured.org, configured.app, configured.trace).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application trace ids', function(done) {
        configured.sdk.getApplicationTraceUuids(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application policy violations', function(done) {
        configured.sdk.getApplicationTracesWithPolicyViolations(configured.org, configured.app, 'DEVELOPMENT').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application trace details', function(done) {
        configured.sdk.getApplicationTraceDetails(configured.org, configured.app, configured.trace).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application trace reqs', function(done) {
        configured.sdk.getApplicationTraceRequirements(configured.org, configured.app, configured.trace).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application trace servers', function(done) {
        configured.sdk.getApplicationTraceServers(configured.org, configured.app, configured.trace).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get application trace visibility', function(done) {
        configured.sdk.getApplicationTraceVisibility(configured.org, configured.app, configured.trace).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
