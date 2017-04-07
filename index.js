var ProfileApi = require('./api/profile');
var OrganizationApi = require('./api/organization');
var HistoryApi = require('./api/history');
var EventsApi = require('./api/events');
var LibraryApi = require('./api/library');
var ModuleApi = require('./api/modules');
var AlertApi = require('./api/alerts');
var RoleApi = require('./api/role');
var ServerApi = require('./api/server');
var UserApi = require('./api/user');
var WebhookApi = require('./api/webhook');
var ScoreApi = require('./api/scores');
var RulesApi = require('./api/rules');
var TraceApi = require('./api/trace');
var rp = require('request-promise');

function ContrastSdk(username, apiKey, serviceKey, teamserverUrl){
    this.username = username;
    this.apiKey = apiKey;
    this.serviceKey = serviceKey;
    this.teamserverUrl = teamserverUrl || 'https://app.contrastsecurity.com';
    this.headers = createHeaders(username, serviceKey, apiKey);
    this.version = '/ng/';
    configureAllApis(this);
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

function configureAllApis(instance){
    configureGenericApi(ProfileApi, instance);
    configureGenericApi(OrganizationApi, instance);
    configureGenericApi(HistoryApi, instance);
    configureGenericApi(EventsApi, instance);
    configureGenericApi(LibraryApi, instance);
    configureGenericApi(ModuleApi, instance);
    configureGenericApi(AlertApi, instance);
    configureGenericApi(RoleApi, instance);
    configureGenericApi(ServerApi, instance);
    configureGenericApi(UserApi, instance);
    configureGenericApi(WebhookApi, instance);
    configureGenericApi(ScoreApi, instance);
    configureGenericApi(RulesApi, instance);
    configureGenericApi(TraceApi, instance);
}

function configureGenericApi(api, instance){
    var methods = Object.keys(api);
    for (var i = 0; i < methods.length; i++){
        instance[methods[i]] = api[methods[i]];
    }
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

function _post(path, data){
    url = this.teamserverUrl + this.version + path
    var options = {
        method: 'POST',
        uri: url,
        body: data,
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


function _delete(path, data){
    url = this.teamserverUrl + this.version + path
    var options = {
        method: 'DELETE',
        uri: url,
        body: data,
        headers: this.headers,
        json: true
    };
    return rp(options);
}


ContrastSdk.prototype._get = _get;
ContrastSdk.prototype._post = _post;
ContrastSdk.prototype._put = _put;
ContrastSdk.prototype._delete = _delete;

module.exports = ContrastSdk;
