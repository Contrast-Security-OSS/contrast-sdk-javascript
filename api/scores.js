function getOverallScores(orgUuid){
    var path = `${orgUuid}/scores`;
    return this._get(path);
}

function getScoreCategoryBreakdown(orgUuid){
    var path = `${orgUuid}/scores/breakdown/category`;
    return this._get(path);
}

function getScoreRuleBreakdown(orgUuid){
    var path =`${orgUuid}/scores/breakdown/rule`;
    return this._get(path);
}

function getScoreServerBreakdown(orgUuid){
    var path =`${orgUuid}/scores/breakdown/server`;
    return this._get(path);
}

function getScoreSeverityBreakdown(orgUuid){
    var path = `${orgUuid}/scores/breakdown/severity`;
    return this._get(path);
}

function getScoreStatusBreakdown(orgUuid){
    var path = `${orgUuid}/scores/breakdown/status`;
    return this._get(path);
}

function getScoreTraceRuleBreakdown(orgUuid){
    var path = `${orgUuid}/scores/breakdown/trace/rule`;
    return this._get(path);
}

function getScoreTraceSeverityBreakdown(orgUuid){
    var path = `${orgUuid}/scores/breakdown/trace/severity`;
    return this._get(path);
}

function getScoreTraceStatusBreakdown(orgUuid){
    var path = `${orgUuid}/scores/breakdown/trace/status`;
    return this._get(path);
}

function getPlatformScore(orgUuid, includeDefense){
    var defense = includeDefense ? '/defense' : '';
    var path = `${orgUuid}/scores/platform/${defense}`;
    return this._get(path);
}

function getSecurityScore(orgUuid, includeDefense){
    var defense = includeDefense ? '/defense' : '';
    var path = `${orgUuid}/scores/security/${defense}`;
    return this._get(path);
}

module.exports.getOverallScores = getOverallScores
module.exports.getScoreCategoryBreakdown = getScoreCategoryBreakdown
module.exports.getScoreRuleBreakdown = getScoreRuleBreakdown
module.exports.getScoreServerBreakdown = getScoreServerBreakdown
module.exports.getScoreSeverityBreakdown = getScoreSeverityBreakdown
module.exports.getScoreStatusBreakdown = getScoreStatusBreakdown
module.exports.getScoreTraceRuleBreakdown = getScoreTraceRuleBreakdown
module.exports.getScoreTraceSeverityBreakdown = getScoreTraceSeverityBreakdown
module.exports.getScoreTraceStatusBreakdown = getScoreTraceStatusBreakdown
module.exports.getPlatformScore = getPlatformScore
module.exports.getSecurityScore = getSecurityScore
