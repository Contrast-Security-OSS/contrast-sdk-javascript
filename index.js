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
    instance.getProfileInfo = ProfileApi.getProfileInfo
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

module.exports = ContrastSdk;
