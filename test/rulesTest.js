var assert = require('assert');
var configured = require('./setup')

describe('Rules Policy API Test', function() {

    it('should get validators and sanitizers', function(done) {
        configured.sdk.getValidatorsAndSanitizers(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get validator controls', function(done) {
        configured.sdk.getValidatorControls(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get sanitizer controls', function(done) {
        configured.sdk.getSanitizerControls(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

    it('should get control suggestions', function(done) {
        configured.sdk.getControlSuggestions(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
