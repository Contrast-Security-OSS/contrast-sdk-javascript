function search(orgUuid, query){
    var path = `${orgUuid}/search`;
    return this._get(path, params={'q':query});
}

function getOrganizationInfo(orgUuid, expand){
    var path = `${orgUuid}/organizations`;
    return this._get(path, params={'expand': expand});
}

function getOrganizationAdministrators(orgUuid){
    var path = `${orgUuid}/organizations/administrators`;
    return this._get(path);
}

function getOrganizationApplicationRoles(orgUuid){
    var path = `${orgUuid}/organizations/application/roles`;
    return this._get(path);
}

function getOrganizationServersNeedingRestart(orgUuid, language){
    var path = `${orgUuid}/organizations/servers/restart/${language}`;
    return this._get(path);
}

function getOrganizationApplicationStats(orgUuid, interval, expand){
    var path = `${orgUuid}/organizations/stats/application`;
    return this._get(path, params={'interval':interval, 'expand': expand});
}

function getOrganizationLibraryStats(orgUuid, interval, expand){
    var path = `${orgUuid}/organizations/stats/library`;
    return this._get(path, params={'interval':interval, 'expand': expand});
}

function getOrganizationServerStats(orgUuid, interval, expand){
    var path = `${orgUuid}/organizations/stats/server`;
    return this._get(path, params={'interval':interval, 'expand': expand});
}

function getOrganizationTraceStats(orgUuid, interval){
    var path = `${orgUuid}/organizations/stats/trace`;
    return this._get(path, params={'interval':interval});
}

function getOrganizationServerSettings(orgUuid){
    var path = `${orgUuid}/server/settings`;
    return this._get(path);
}



module.exports.search = search;
module.exports.getOrganizationInfo = getOrganizationInfo;
module.exports.getOrganizationAdministrators = getOrganizationAdministrators;
module.exports.getOrganizationApplicationRoles = getOrganizationApplicationRoles;
module.exports.getOrganizationServersNeedingRestart = getOrganizationServersNeedingRestart;
module.exports.getOrganizationApplicationStats = getOrganizationApplicationStats;
module.exports.getOrganizationLibraryStats = getOrganizationLibraryStats;
module.exports.getOrganizationServerStats = getOrganizationServerStats;
module.exports.getOrganizationTraceStats = getOrganizationTraceStats;
module.exports.getOrganizationServerSettings = getOrganizationServerSettings;
