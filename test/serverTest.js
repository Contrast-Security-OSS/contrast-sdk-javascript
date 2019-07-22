var assert = require('assert');
var configured = require('./setup')

describe('Server API Test', function() {

    it('should get servers', function(done) {
        configured.sdk.getServers(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get active servers', function(done) {
        configured.sdk.getActiveServers(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should filter servers', function(done) {
        configured.sdk.filterServers(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server filters', function(done) {
        configured.sdk.getServerFilters(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server filter subfilters', function(done) {
        configured.sdk.getServerFilterSubfilters(configured.org, 'environment').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server modes', function(done) {
        configured.sdk.getServerModes(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server details', function(done) {
        configured.sdk.getServerDetails(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server agent activity', function(done) {
        configured.sdk.getServerAgentActivity(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server app traces', function(done) {
        configured.sdk.getServerAppTraces(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server attack status', function(done) {
        configured.sdk.getServerAttackStatus(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server attack types', function(done) {
        configured.sdk.getServerAttackTypes(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server trace breakdown', function(done) {
        configured.sdk.getServerTraceBreakdown(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server trace severity breakdown', function(done) {
        configured.sdk.getServerTraceSeverityBreakdown(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server trace status breakdown', function(done) {
        configured.sdk.getServerTraceStatusBreakdown(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server libraries breakdown', function(done) {
        configured.sdk.getServerLibrariesBreakdown(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should update server name', function(done) {
        configured.sdk.updateServerName(configured.org, configured.server,'js-sdk-test').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server properties', function(done) {
        configured.sdk.getServerProperties(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server vulns and attack urls', function(done) {
        configured.sdk.getServerVulnAndAttackUrls(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server vulns urls', function(done) {
        configured.sdk.getServerVulnUrls(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server attack urls', function(done) {
        configured.sdk.getServerAttackUrls(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server libraries', function(done) {
        configured.sdk.getServerLibraries(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server libraries subfilters', function(done) {
        configured.sdk.getServerLibrariesSubfilters(configured.org, configured.server,'apps').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server libraries stats', function(done) {
        configured.sdk.getServerLibrariesStats(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should filter server libraries', function(done) {
        configured.sdk.filterServerLibraries(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server trace subfilters', function(done) {
        configured.sdk.getServerTraceSubfilters(configured.org, configured.server,'modules').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server trace details', function(done) {
        configured.sdk.getServerTraceDetails(configured.org, configured.server,  configured.trace).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should filter server traces', function(done) {
        configured.sdk.filterServerTraces(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get vuln uuids', function(done) {
        configured.sdk.getServerVulnerabilityUuids(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server policy violations', function(done) {
        configured.sdk.getServerPolicyViolations(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server trace vuln visibility', function(done) {
        configured.sdk.getServerTraceVulnerabilityVisibility(configured.org, configured.server, configured.trace).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });


});
