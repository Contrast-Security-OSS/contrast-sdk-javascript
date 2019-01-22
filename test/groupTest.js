var assert = require('assert');
var configured = require('./setup')

describe('Group API Test', function() {

    it('should get groups', function(done) {
        configured.sdk.getGroup(configured.org,configured.groupId).then(function(response){
            //console.log(response);
            assert.equal(true, response.success);
            done();
        });
    });

    /*it('should create group', function(done) {
        configured.sdk.createGroup(configured.org).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });*/

    it('should update group', function(done) {
        configured.sdk.updateGroup(configured.org, configured.groupId, 
            {"name":"SergeiGroup1","users":["sergeibulatov334@gmail.com"],
            "scope":{"app_scope":{"onboard_role":"view",
            "exceptions":[{"id":"6cffa565-9680-45e4-85ed-a842e5500052","role":"view"},
            {"id":"bb847196-e819-430a-94d7-9d7b38bceef6","role":"edit"}]}}}).then(function(response){
            //console.log(response);
            assert.equal(true, response.success);
            done();
        });
    });
    it('should add user to group', function(done) {
        configured.sdk.addUserToGroup(configured.org, configured.groupId, configured.username).then(function(response){
            assert.equal(true, response.success);
            done();
        });
    });

});
