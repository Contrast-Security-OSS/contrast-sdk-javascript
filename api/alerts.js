function getAlerts(orgUuid){
    var path = `${orgUuid}/alerts`;
    return this._get(path);
}

function getAlertData(orgUuid, alertId){
    var path = `${orgUuid}/alerts/${alertId}`;
    return this._get(path);
}

module.exports.getAlerts = getAlerts;
module.exports.getAlertData = getAlertData;
