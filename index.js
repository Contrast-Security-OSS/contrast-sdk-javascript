var ProfileApi = require('./api/profile');
var request = require('request');
var rp = require('request-promise');
var ApiSupport = require('./api/apiSupport');

function ContrastSdk(username, apiKey, serviceKey, teamserverUrl='https://app.contrastsecurity.com'){
    this.username = username;
    this.apiKey = apiKey;
    this.serviceKey = serviceKey;
    this.teamserverUrl = teamserverUrl;
    this.headers = createHeaders(username, serviceKey, apiKey);
    this.version = '/ng/';
    configureApi(this);
}

function createHeaders(username, serviceKey, apiKey){
    var buffer = new Buffer(username + ':' + serviceKey);
    var authorization = buffer.toString('base64');
    return  {
                'Authorization': authorization,
                'API-Key': apiKey,
                'Content-type': 'application/json',
                'Accept': 'application/json'
            };
}

function configureApi(instance){
    configureProfileApi(instance);
}

function configureProfileApi(instance){
    instance.getProfileInfo = ProfileApi.getProfileInfo;
    instance.getProfileOrganizations = ProfileApi.getProfileOrganizations;
    instance.getProfileDefaultOrganization = ProfileApi.getProfileDefaultOrganization;
    instance.getOrgInfo = ProfileApi.getOrgInfo;
    instance.getProfilePasswordPolicy = ProfileApi.getProfilePasswordPolicy;
    instance.getProfileRoles = ProfileApi.getProfileRoles;
    instance.setProfileDefaultOrg = ProfileApi.setProfileDefaultOrg;
}

function _get(path, params){
    url = this.teamserverUrl + this.version + path
    var options = {
        uri: url,
        qs: params,
        headers: this.headers,
        json: true
    };
    return rp(options);
}

function _put(path, data){
    url = this.teamserverUrl + this.version + path
    var options = {
        method: 'PUT',
        uri: url,
        body: data,
        headers: this.headers,
        json: true
    };
    return rp(options);
}

ContrastSdk.prototype._get = _get
ContrastSdk.prototype._put = _put

module.exports = ContrastSdk;
