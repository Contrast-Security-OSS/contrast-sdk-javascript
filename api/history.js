function getOrganizationScoreHistory(orgUuid, limit){
    var path = `${orgUuid}/history/scores`;
    return this._get(path, params={'limit':limit});
}

function getOrganizationScoreHistoryInterval(orgUuid, interval, includeDefense){
    defense = includeDefense ? '/defense' : '';
    var path = `${orgUuid}/history/scores/interval${defense}`;
    return this._get(path, params={'interval':interval});
}

module.exports.getOrganizationScoreHistory = getOrganizationScoreHistory;
module.exports.getOrganizationScoreHistoryInterval = getOrganizationScoreHistoryInterval;
