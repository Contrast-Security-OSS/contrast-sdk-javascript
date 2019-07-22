var assert = require('assert');
var configured = require('./setup')

describe('Tags API Test', function() {

    it('should get application tags', function(done) {
        configured.sdk.getApplicationTags(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get all library tags', function(done) {
        configured.sdk.getAllLibraryTags(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get all application tags', function(done) {
        configured.sdk.getAllApplicationTags(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get all application library tags', function(done) {
        configured.sdk.getApplicationLibraryTags(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get server tag list', function(done) {
        configured.sdk.getServerTagList(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get all server tags', function(done) {
        configured.sdk.getAllServerTags(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get all trace tags', function(done) {
        configured.sdk.getAllTraceTags(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get all application trace tags', function(done) {
        configured.sdk.getAllApplicationTraceTags(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get all application trace tags', function(done) {
        configured.sdk.getAllApplicationTraceTags(configured.org, configured.app).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get all server trace tags', function(done) {
        configured.sdk.getAllServerTraceTags(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get all server trace tags', function(done) {
        configured.sdk.getAllServerTraceTags(configured.org, configured.server).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get all tags for trace', function(done) {
        configured.sdk.getAllTagsForTrace(configured.org, configured.trace).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should tag application', function(done) {
        configured.sdk.tagApplication(configured.org, configured.app, 'test').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should tag server', function(done) {
        configured.sdk.tagServer(configured.org, configured.server, 'test').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should delete application tag', function(done) {
        configured.sdk.deleteTagFromApplication(configured.org, configured.app, 'test').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should delete trace tag', function(done) {
        configured.sdk.deleteTagFromTrace(configured.org, configured.trace, 'test').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should delete server tag', function(done) {
        configured.sdk.deleteTagFromServer(configured.org, configured.server, 'test').then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });


});
