function getApplicationTags(orgUuid, appId){
    var path = `${orgUuid}/tags/application/list/${appId}`;
    return this._get(path);
}

function getAllLibraryTags(orgUuid){
    var path = `${orgUuid}/tags/libraries/list`;
    return this._get(path);
}

function getAllApplicationTags(orgUuid){
    var path = `${orgUuid}/tags/applications/list`;
    return this._get(path);
}

function getApplicationLibraryTags(orgUuid, appId){
    var path = `${orgUuid}/tags/libraries/${appId}/list`;
    return this._get(path);
}


function getServerTagList(orgUuid, serverId){
    var path = `${orgUuid}/tags/server/list/${serverId}`;
    return this._get(path);
}

function getAllServerTags(orgUuid){
    var path = `${orgUuid}/tags/servers/list`;
    return this._get(path);
}

function getAllTraceTags(orgUuid){
    var path = `${orgUuid}/tags/traces`;
    return this._get(path);
}

function getAllApplicationTraceTags(orgUuid, appId){
    var path = `${orgUuid}/tags/traces/application/${appId}`;
    return this._get(path);
}

function getAllServerTraceTags(orgUuid, serverId){
    var path = `${orgUuid}/tags/traces/server/${serverId}`;
    return this._get(path);
}

function getAllTagsForTrace(orgUuid, traceId){
    var path = `${orgUuid}/tags/traces/trace/${traceId}`;
    return this._get(path);
}

function tagApplication(orgUuid, appId, tag){
    var path = `${orgUuid}/tags/applications`;
    return this._put(path, {'applications_id': [appId], 'links':[],'tags':[tag]});
}

function tagServer(orgUuid, serverId, tag){
    var path = `${orgUuid}/tags/servers`;
    return this._put(path, {'servers_id': [serverId], 'links':[],'tags':[tag]});
}

function tagTrace(orgUuid, traceId, tag){
    var path = `${orgUuid}/tags/traces`;
    return this._put(path, {'traces_id': [traceId], 'links':[],'tags':[tag]});
}

function deleteTagFromApplication(orgUuid, appId, tag){
    var path = `${orgUuid}/tags/application/${appId}`;
    return this._delete(path, {'tag': tag});
}

function deleteTagFromTrace(orgUuid, traceId, tag){
    var path = `${orgUuid}/tags/trace/${traceId}`;
    return this._delete(path, {'tag': tag});
}

function deleteTagFromServer(orgUuid, serverId, tag){
    var path = `${orgUuid}/tags/server/${serverId}`;
    return this._delete(path, {'tag': tag});
}


module.exports.getApplicationTags = getApplicationTags
module.exports.getAllLibraryTags = getAllLibraryTags
module.exports.getAllApplicationTags = getAllApplicationTags
module.exports.getApplicationLibraryTags = getApplicationLibraryTags
module.exports.getServerTagList = getServerTagList
module.exports.getAllServerTags = getAllServerTags
module.exports.getAllTraceTags = getAllTraceTags
module.exports.getAllApplicationTraceTags = getAllApplicationTraceTags
module.exports.getAllServerTraceTags = getAllServerTraceTags
module.exports.getAllTagsForTrace = getAllTagsForTrace
module.exports.tagApplication = tagApplication
module.exports.tagServer = tagServer
module.exports.tagTrace = tagTrace
module.exports.deleteTagFromApplication = deleteTagFromApplication
module.exports.deleteTagFromTrace = deleteTagFromTrace
module.exports.deleteTagFromServer = deleteTagFromServer
