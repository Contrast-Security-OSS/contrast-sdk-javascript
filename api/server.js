function getServers(orgUuid, includeArchived,expand,query){
    var path = `${orgUuid}/servers`;
    return this._get(path, params={'q':query, 'includeArchived':includeArchived, 'expand':expand});
}

function getActiveServers(orgUuid){
    var path = `${orgUuid}/servers/active`;
    return this._get(path);
}

function filterServers(orgUuid, filter){
    var path = `${orgUuid}/servers/filter`;
    return this._get(path, params=filter);
}

function getServerFilters(orgUuid){
    var path = `${orgUuid}/servers/filters/listing`;
    return this._get(path);
}

function getServerFilterSubfilters(orgUuid, filterType){
    var path = `${orgUuid}/servers/filters/${filterType}/listing`;
    return this._get(path);
}

function getServerModes(orgUuid){
    var path = `${orgUuid}/servers/modes`;
    return this._get(path);
}

function getServerDetails(orgUuid, serverId, expand){
    var path = `${orgUuid}/servers/${serverId}`;
    return this._get(path, params={'expand':expand});
}

function getServerActivity(orgUuid, serverId, startDate, endDate){
    var path = `${orgUuid}/servers/${serverId}/activity`;
    return this._get(path, params={'startDate':startDate, 'endDate':endDate});
}

function getServerAgentActivity(orgUuid, serverId, interval){
    var path = `${orgUuid}/servers/${serverId}/activity/interval`;
    return this._get(path, params={'interval':interval});
}

function getServerAppTraces(orgUuid, serverId, orphans){
    var path = `${orgUuid}/servers/${serverId}/apptraces`;
    return this._get(path, params={'orphans': orphans});
}

function getServerAttackStatus(orgUuid, serverId, includeMerged){
    var path = `${orgUuid}/servers/${serverId}/breakdown/attack/status`;
    return this._get(path, params={'includeMerged':includeMerged});
}

function getServerAttackTypes(orgUuid, serverId, includeMerged){
    var path = `${orgUuid}/servers/${serverId}/breakdown/attack/type`;
    return this._get(path, params={'includeMerged': includeMerged});
}

function getServerTraceBreakdown(orgUuid, serverId, includeMerged){
    var path = `${orgUuid}/servers/${serverId}/breakdown/trace/rule`;
    return this._get(path, params={'includeMerged':includeMerged});

}

function getServerTraceSeverityBreakdown(orgUuid, serverId, includeMerged){
    var path = `${orgUuid}/servers/${serverId}/breakdown/trace/severity`;
    return this._get(path, params={'includeMerged':includeMerged});
}

function getServerTraceStatusBreakdown(orgUuid, serverId, includeMerged){
    var path = `${orgUuid}/servers/${serverId}/breakdown/trace/status`;
    return this._get(path, params={'includeMerged':includeMerged});
}

function getServerLibrariesBreakdown(orgUuid, serverId, includeMerged, includeArchived){
    var path = `${orgUuid}/servers/${serverId}/libraries/breakdown`;
    return this._get(path, params={'includeMerged': includeMerged, 'includeArchived': includeArchived});
}

function updateServerName(orgUuid, serverId, newName){
    var path = `${orgUuid}/servers/${serverId}/name`;
    return this._put(path, data={'name': newName});
}

function getServerProperties(orgUuid,serverId){
    var path = `${orgUuid}/servers/${serverId}/properties`;
    return this._get(path);
}

function getServerVulnAndAttackUrls(orgUuid, serverId, interval){
    var path = `${orgUuid}/servers/${serverId}/url`;
    return this._get(path, params={'interval': interval});
}

function getServerVulnUrls(orgUuid, serverId, interval){
    var path = `${orgUuid}/servers/${serverId}/url/vuln`;
    return this._get(path, params={'interval':interval});
}

function getServerAttackUrls(orgUuid, serverId, interval){
    var path = `${orgUuid}/servers/${serverId}/url/attack`;
    return this._get(path, params={'interval':interval});
}

function getServerLibraries(orgUuid, serverId, expand, quickFilter){
    var path = `${orgUuid}/servers/${serverId}/libraries`;
    return this._get(path, params={'expand': expand, 'quickFilter': quickFilter});
}

function getServerLibrariesSubfilters(orgUuid, serverId, filterType){
    var path = `${orgUuid}/servers/${serverId}/libraries/filters/${filterType}/listing`;
    return this._get(path);
}

function getServerLibrariesStats(orgUuid, serverId, includeMerged){
    var path = `${orgUuid}/servers/${serverId}/libraries/stats`;
    return this._get(path, params={'includeMerged':includeMerged});
}

function filterServerLibraries(orgUuid, serverId, filter){
    var path = `${orgUuid}/servers/${serverId}/libraries/filter`;
    return this._get(path, params=filter);
}

function getServerTraceSubfilters(orgUUid, serverId, traceFilterType){
    var path = `${orgUUid}/servertraces/${serverId}/filter/${traceFilterType}/listing`;
    return this._get(path);
}

function getServerTraceDetails(orgUuid, serverId, traceUuid, expand){
    var path = `${orgUuid}/servertraces/${serverId}/filter/${traceUuid}`;
    return this._get(path, params={'expand': expand});

}

function filterServerTraces(orgUuid, serverId, filter){
    var path = `${orgUuid}/servertraces/${serverId}/filter`;
    return this._get(path, params=filter);
}

function deleteServerTraces(orgUuid, serverId, traces){
    var path = `${orgUuid}/servertraces/${serverId}`;
    return this._delete(path, data={'traces': traces});
}

function getServerVulnerabilityUuids(orgUuid, serverId, filter){
    var path = `${orgUuid}/servertraces/${serverId}/ids`;
    return this._get(path, filter);
}

function getServerPolicyViolations(orgUuid, serverId){
    var path = `${orgUuid}/servertraces/${serverId}/policy/violations`;
    return this._get(path);
}

function deleteServerTrace(orgUuid, serverId, traceUuid){
    var path = `${orgUuid}/servertraces/${serverId}/trace/${traceUuid}`;
    return this._delete(path);
}

function getServerTraceVulnerabilityVisibility(orgUuid, serverId, traceUuid){
    var path = `${orgUuid}/servertraces/${serverId}/${traceUuid}/visible`;
    return this._get(path);
}


module.exports.getServers = getServers;
module.exports.getActiveServers = getActiveServers;
module.exports.filterServers = filterServers;
module.exports.getServerFilters = getServerFilters;
module.exports.getServerFilterSubfilters = getServerFilterSubfilters;
module.exports.getServerModes = getServerModes;
module.exports.getServerDetails = getServerDetails;
module.exports.getServerActivity = getServerActivity;
module.exports.getServerAgentActivity = getServerAgentActivity;
module.exports.getServerAppTraces = getServerAppTraces;
module.exports.getServerAttackStatus = getServerAttackStatus;
module.exports.getServerAttackTypes = getServerAttackTypes;
module.exports.getServerTraceBreakdown = getServerTraceBreakdown;
module.exports.getServerTraceSeverityBreakdown = getServerTraceSeverityBreakdown;
module.exports.getServerTraceStatusBreakdown = getServerTraceStatusBreakdown;
module.exports.getServerLibrariesBreakdown = getServerLibrariesBreakdown;
module.exports.updateServerName = updateServerName;
module.exports.getServerProperties = getServerProperties;
module.exports.getServerVulnAndAttackUrls = getServerVulnAndAttackUrls;
module.exports.getServerVulnUrls = getServerVulnUrls;
module.exports.getServerAttackUrls = getServerAttackUrls;
module.exports.getServerLibraries = getServerLibraries;
module.exports.getServerLibrariesSubfilters = getServerLibrariesSubfilters;
module.exports.getServerLibrariesStats = getServerLibrariesStats;
module.exports.filterServerLibraries = filterServerLibraries;
module.exports.getServerTraceSubfilters = getServerTraceSubfilters;
module.exports.getServerTraceDetails = getServerTraceDetails;
module.exports.filterServerTraces = filterServerTraces;
module.exports.deleteServerTraces = deleteServerTraces;
module.exports.getServerVulnerabilityUuids = getServerVulnerabilityUuids;
module.exports.getServerPolicyViolations = getServerPolicyViolations;
module.exports.deleteServerTrace = deleteServerTrace;
module.exports.getServerTraceVulnerabilityVisibility = getServerTraceVulnerabilityVisibility;
