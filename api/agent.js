var fs = require('fs');
var _path = require('path');

function getAgentProfiles(orgUuid, expand){
    var path = `${orgUuid}/agents/profiles`;
    return this._get(path, {'expand': expand});
}

function getAgentProfile(orgUuid, profile, expand){
    var path = `${orgUuid}/agents/profiles/${profile}`;
    return this._get(path, {'expand': expand});
}

function getAgentVersions(orgUuid){
    var path = `${orgUuid}/agents/versions`;
    return this._get(path);
}

module.exports.getAgentProfiles = getAgentProfiles;
module.exports.getAgentProfile = getAgentProfile;
module.exports.getAgentVersions = getAgentVersions;
