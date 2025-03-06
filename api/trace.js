function filterOrgTraces(orgUuid, filter){
    var path = `${orgUuid}/orgtraces/filter`;
    return this._get(path, filter);
}

function getOrgTrace(orgUuid, traceId, expand){
    var path = `${orgUuid}/orgtraces/filter/${traceId}`;
    return this._get(path, {'expand': expand});
}

function getTraceNotes(orgUuid, appId, traceId){
    var path = `${orgUuid}/applications/${appId}/traces/${traceId}/notes`;
    return this._get(path);
}

function createTraceNote(orgUuid, appId, traceId, note){
    var path = `${orgUuid}/applications/${appId}/traces/${traceId}/notes`;
    return this._post(path, {'note': note});
}

function getOrgTraceIds(orgUuid, filter){
    var path = `${orgUuid}/orgtraces/ids`;
    return this._get(path, filter);
}

function getOrgTracePolicyViolations(orgUuid){
    var path = `${orgUuid}/orgtraces/policy/violations`;
    return this._get(path);
}

function getTraceVisibility(orgUuid, traceId){
    var path = `${orgUuid}/orgtraces/${traceId}/visible`;
    return this._get(path);
}

function getNewTraceTrend(orgUuid, interval, filter){
    var path = `${orgUuid}/orgtraces/stats/trend/${interval}/new`;
    return this._get(path, filter);
}

function getTotalTraceTrend(orgUuid, interval, filter){
    var path = `${orgUuid}/orgtraces/stats/trend/${interval}/total`;
    return this._get(path, filter);
}

function getTraceTimeToRemediateBySeverity(orgUuid, filter){
    var path = `${orgUuid}/orgtraces/stats/ttr/severity`;
    return this._get(path, filter);
}

function getTraceTimeToRemediateCurrent(orgUuid){
    var path = `${orgUuid}/orgtraces/stats/ttr/severity/current`;
    return this._get(path);
}

function getTraceTimeToRemediateMonthTrend(orgUuid){
    var path = `${orgUuid}/orgtraces/stats/ttr/severity/trend`;
    return this._get(path);
}

module.exports.filterOrgTraces = filterOrgTraces
module.exports.getOrgTrace = getOrgTrace
module.exports.getTraceNotes = getTraceNotes
module.exports.createTraceNote = createTraceNote
module.exports.getOrgTraceIds = getOrgTraceIds
module.exports.getOrgTracePolicyViolations = getOrgTracePolicyViolations
module.exports.getTraceVisibility = getTraceVisibility
module.exports.getNewTraceTrend = getNewTraceTrend
module.exports.getTotalTraceTrend = getTotalTraceTrend
module.exports.getTraceTimeToRemediateBySeverity = getTraceTimeToRemediateBySeverity
module.exports.getTraceTimeToRemediateCurrent = getTraceTimeToRemediateCurrent
module.exports.getTraceTimeToRemediateMonthTrend = getTraceTimeToRemediateMonthTrend
