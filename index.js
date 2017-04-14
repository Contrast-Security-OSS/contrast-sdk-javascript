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
var TagsApi = require('./api/tags');
var ApplicationApi = require('./api/application');
var AgentApi = require('./api/agent');

var ApiSupport = require('./api/support')

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
    configureGenericApi(TagsApi, instance);
    configureGenericApi(ApplicationApi, instance);
    configureGenericApi(AgentApi, instance);
}

function configureGenericApi(api, instance){
    var methods = Object.keys(api);
    for (var i = 0; i < methods.length; i++){
        ContrastSdk.prototype[methods[i]] = api[methods[i]];
    }
}

ContrastSdk.prototype._get = ApiSupport._get;
ContrastSdk.prototype._post = ApiSupport._post;
ContrastSdk.prototype._put = ApiSupport._put;
ContrastSdk.prototype._delete = ApiSupport._delete;
ContrastSdk.prototype._download = ApiSupport._download;

module.exports = ContrastSdk;
