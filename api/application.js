function getInactiveApplications(orgUuid, expand, includeArchived, includeMerged, limit){
    var path = `${orgUuid}/applications/activity/inactive`;
    return this._get(path, {'expand': expand, 'includeArchived': includeArchived, 'includeMerged': includeMerged, 'limit': limit});
}

function getNewestApplications(orgUuid, expand, includeArchived, includeMerged, limit){
    var path = `${orgUuid}/applications/activity/newest`;
    return this._get(path, {'expand': expand, 'includeArchived': includeArchived, 'includeMerged': includeMerged, 'limit': limit});
}

function getRecentApplications(orgUuid, expand, includeArchived, includeMerged, limit){
    var path = `${orgUuid}/applications/activity/recent`;
    return this._get(path, {'expand': expand, 'includeArchived': includeArchived, 'includeMerged': includeMerged, 'limit': limit});
}

function getApplicationAgentActivity(orgUuid, appId, range, includeMerged){
    var path = `${orgUuid}/applications/${appId}/agent/activity/${range}`;
    return this._get(path, {'includeMerged': includeMerged});
}

function getApplicationComponents(orgUuid, appId){
    var path = `${orgUuid}/applications/${appId}/components`;
    return this._get(path);
}

function getApplicationCoverage(orgUuid, appId, includeMerged, limit){
    var path = `${orgUuid}/applications/${appId}/coverage`;
    return this._get(path, {'includeMerged': includeMerged, 'limit': limit});
}

function getApplicationCoveragePastWeek(orgUuid, appId, includeMerged, limit){
    var path = `${orgUuid}/applications/${appId}/coverage/stats/week`;
    return this._get(path, {'includeMerged': includeMerged, 'limit': limit});
}

function getApplicationHistory(orgUuid, appId, includeMerged){
    var path = `${orgUuid}/applications/${appId}/history`;
    return this._get(path, {'includeMerged': includeMerged});
}

function getApplicationHistoryByInterval(orgUuid, appId, environment, interval, includeDefense){
    var defense = includeDefense ? '/defense' : '';
    var path = `${orgUuid}/applications/${appId}/history/interval${defense}`;
    return this._get(path, {'environment': environment, 'interval': interval});
}

function getApplicationLibraries(orgUuid, appId, expand, loadCVE, quickFilter){
    var path = `${orgUuid}/applications/${appId}/libraries`;
    return this._get(path, {'expand': expand, 'loadCVE': loadCVE, 'quickFilter': quickFilter});
}

function filterApplicationLibraries(orgUuid, appId, filter){
    var path = `${orgUuid}/applications/${appId}/libraries/filter`;
    return this._get(path, filter);
}

function getApplicationLibrarySubfilters(orgUuid, appId, filterType){
    var path = `${orgUuid}/applications/${appId}/libraries/filters/${filterType}/listing`;
    return this._get(path);
}

function getApplicationLibraryStats(orgUuid, appId, includeMerged){
    var path = `${orgUuid}/applications/${appId}/libraries/stats`;
    return this._get(path, {'includeMerged': includeMerged});
}

function getApplicationStatusBreakdown(orgUuid, appId, includeMerged){
    var path = `${orgUuid}/applications/${appId}/breakdown/status`;
    return this._get(path, {'includeMerged': includeMerged});
}

function getApplicationTraceBreakdown(orgUuid, appId, includeMerged){
    var path = `${orgUuid}/applications/${appId}/breakdown/trace`;
    return this._get(path, {'includeMerged': includeMerged});
}

function getApplicationTraceRuleBreakdown(orgUuid, appId, environment){
    var path =`${orgUuid}/applications/${appId}/breakdown/trace/rule`;
    return this._get(path, {'environment': environment});
}

function getApplicationTraceSeverityBreakdown(orgUuid, appId, environment){
    var path = `${orgUuid}/applications/${appId}/breakdown/status`;
    return this._get(path, {'environment': environment});
}

function getApplicationTraceStatusBreakdown(orgUuid, appId, environment){
    var path = `${orgUuid}/applications/${appId}/breakdown/trace/status`;
    return this._get(path, {'environment': environment});
}

function getApplicationServers(orgUuid, appId, expand, includeMerged, onlyLicensed){
    var path = `${orgUuid}/applications/${appId}/servers`;
    return this._get(path, {'expand':expand, 'includeMerged': includeMerged, 'onlyLicensed': onlyLicensed});
}

function getApplicationServersBreakdown(orgUuid, appId){
    var path = `${orgUuid}/applications/${appId}/servers/breakdown`;
    return this._get(path);
}

function getApplicationServersCount(orgUuid, appId, includeMerged){
    var path = `${orgUuid}/applications/${appId}/servers/count`;
    return this._get(path, {'includeMerged':includeMerged});
}

function getApplicationServersRecentlyActive(orgUuid, appId, expand, includeMerged){
    var path = `${orgUuid}/applications/${appId}/servers/newest`;
    return this._get(path, {'expand': expand, 'includeMerged':includeMerged});
}

function getApplicationServerProperties(orgUuid, appId, includeMerged){
    var path = `${orgUuid}/applications/${appId}/servers/properties`;
    return this._get(path, {'includeMerged': includeMerged});
}

function getApplicationServerSettings(orgUuid, appId, includeMerged, filterEnvironment){
    var envString = filterEnvironment ? '/environment' : '';
    var path = `${orgUuid}/applications/${appId}/servers/settings${envString}`;
    return this._get(path);
}

function getApplicationTechnologies(orgUuid, appId){
    var path = `${orgUuid}/applications/${appId}/techs`;
    return this._get(path);
}

function getTechnologies(orgUuid){
    var path = `${orgUuid}/techs`;
    return this._get(path);
}

function getTotalAllowedApplications(orgUuid){
    var path = `${orgUuid}/applications/allowed`;
    return this._get(path);
}

function filterApplications(orgUuid, filter){
    var path = `${orgUuid}/applications/filter`;
    return this._get(path, filter);
}

function getApplicationFilters(orgUuid){
    var path = `${orgUuid}/applications/filters/listing`;
    return this._get(path);
}

function getApplication(orgUuid, appId, expand, includeMerged){
    var path = `${orgUuid}/applications/${appId}`;
    return this._get(path, {'expand': expand, 'includeMerged': includeMerged});
}

function updateApplicationImportance(orgUuid, appId, importance){
    var path = `${orgUuid}/applications/${appId}/importance`;
    return this._put(path, {'importance': importance});
}

function getApplicationLicenseDetails(orgUuid, appId){
    var path = `${orgUuid}/applications/${appId}/license`;
    return this._get(path);
}

function filterApplicationTraces(orgUuid, appId, filter){
    var path = `${orgUuid}/traces/${appId}/filter`;
    return this._get(path, filter);
}

function getApplicationVulnDetails(orgUuid, appId, traceId, expand){
    var path = `${orgUuid}/traces/${appId}/filter/${traceId}`;
    return this._get(path, {'expand': expand});
}

function getApplicationTraceUuids(orgUuid, appId, filter){
    var path = `${orgUuid}/traces/${appId}/ids`;
    return this._get(path, filter);
}

function getApplicationTracesWithPolicyViolations(orgUuid, appId, environment){//'DEVELOPMENT'
    var path = `${orgUuid}/traces/${appId}/policy/violations`;
    return this._get(path, {'environment': environment});
}

function deleteApplicationTrace(orgUuid, appId, traceId){
    var path = `${orgUuid}/traces/${appId}/trace/${traceId}`;
    return this._delete(path);
}

function deleteApplicationTraces(orgUuid, appId, traceArray){
    var path = `${orgUuid}/traces/${appId}`;
    return this._delete(path, {'traces': traceArray})
}

function getApplicationTraceDetails(orgUuid, appId, traceId, expand){
    var path = `${orgUuid}/traces/${appId}/trace/${traceId}`;
    return this._get(path, {'expand': expand});
}

function getApplicationTraceRequirements(orgUuid, appId, traceId, expand){
    var path = `${orgUuid}/traces/${appId}/trace/${traceId}/requirements`;
    return this._get(path, {'expand': expand});
}

function getApplicationTraceServers(orgUuid, appId, traceId, expand){
    var path = `${orgUuid}/traces/${appId}/trace/${traceId}/servers`;
    return this._get(path, {'expand': expand});
}

function getApplicationTraceUrls(orgUuid, appId, traceId, expand){
    var path = `${orgUuid}/traces/${appId}/trace/${traceId}/urlinstances`;
    return this._get(path, {'expand': expand});
}

function getApplicationTraceVisibility(orgUuid, appId, traceId){
    var path = `${orgUuid}/traces/${appId}/${traceId}/visible`;
    return this._get(path);
}

module.exports.getInactiveApplications = getInactiveApplications;
module.exports.getNewestApplications = getNewestApplications;
module.exports.getRecentApplications = getRecentApplications;
module.exports.getApplicationAgentActivity = getApplicationAgentActivity;
module.exports.getApplicationComponents = getApplicationComponents;
module.exports.getApplicationCoverage = getApplicationCoverage;
module.exports.getApplicationCoveragePastWeek = getApplicationCoveragePastWeek;
module.exports.getApplicationHistory = getApplicationHistory;
module.exports.getApplicationHistoryByInterval = getApplicationHistoryByInterval;
module.exports.getApplicationLibraries = getApplicationLibraries;
module.exports.getApplicationLibrarySubfilters = getApplicationLibrarySubfilters;
module.exports.getApplicationLibraries = getApplicationLibraries;
module.exports.filterApplicationLibraries = filterApplicationLibraries;
module.exports.getApplicationLibrarySubfilters = getApplicationLibrarySubfilters;
module.exports.getApplicationLibraryStats = getApplicationLibraryStats;
module.exports.getApplicationStatusBreakdown = getApplicationStatusBreakdown;
module.exports.getApplicationTraceBreakdown = getApplicationTraceBreakdown;
module.exports.getApplicationTraceBreakdown = getApplicationTraceBreakdown;
module.exports.getApplicationTraceRuleBreakdown = getApplicationTraceRuleBreakdown;
module.exports.getApplicationTraceSeverityBreakdown = getApplicationTraceSeverityBreakdown;
module.exports.getApplicationTraceStatusBreakdown = getApplicationTraceStatusBreakdown;
module.exports.getApplicationServers = getApplicationServers;
module.exports.getApplicationServersBreakdown = getApplicationServersBreakdown;
module.exports.getApplicationServersCount = getApplicationServersCount;
module.exports.getApplicationServersRecentlyActive = getApplicationServersRecentlyActive;
module.exports.getApplicationServerProperties = getApplicationServerProperties;
module.exports.getApplicationServerSettings = getApplicationServerSettings;
module.exports.getApplicationTechnologies = getApplicationTechnologies;
module.exports.getTechnologies = getTechnologies;
module.exports.getTotalAllowedApplications = getTotalAllowedApplications;
module.exports.filterApplications = filterApplications;
module.exports.getApplicationFilters = getApplicationFilters;
module.exports.getApplication = getApplication;
module.exports.updateApplicationImportance = updateApplicationImportance;
module.exports.getApplicationLicenseDetails = getApplicationLicenseDetails;
module.exports.filterApplicationTraces = filterApplicationTraces;
module.exports.getApplicationVulnDetails = getApplicationVulnDetails;
module.exports.getApplicationTraceUuids = getApplicationTraceUuids;
module.exports.getApplicationTracesWithPolicyViolations = getApplicationTracesWithPolicyViolations;
module.exports.deleteApplicationTraces = deleteApplicationTraces;
module.exports.getApplicationTraceDetails = getApplicationTraceDetails;
module.exports.getApplicationTraceRequirements = getApplicationTraceRequirements;
module.exports.getApplicationTraceServers = getApplicationTraceServers;
module.exports.getApplicationTraceUrls = getApplicationTraceUrls;
module.exports.getApplicationTraceVisibility = getApplicationTraceVisibility;
