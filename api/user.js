function getUsers(orgUuid, expand){
    var path = `${orgUuid}/users`;
    return this._get(path, {'expand': expand});
}

function getCustomAlerts(orgUuid){
    var path = `${orgUuid}/users/alerts/custom`;
    return this._get(path);
}

function getCustomAttackAlerts(orgUuid){
    var path = `${orgUuid}/users/alerts/custom/attacks`;
    return this._get(path);
}

function getCustomVulnerabilityAlerts(orgUuid){
    var path = `${orgUuid}/users/alerts/custom/vulnerabilities`;
    return this._get(path);
}

function getUserInformation(orgUuid, userId, expand){
    var path = `${orgUuid}/users/alerts/custom/vulnerabilities`;
    return this._get(path, {'expand': expand});
}

function getUserAuthorizationHeader(orgUuid, userId){
    var path = `${orgUuid}/users/${userId}/authorization`;
    return this._get(path);
}

module.exports.getUsers = getUsers;
module.exports.getCustomAlerts = getCustomAlerts;
module.exports.getCustomAttackAlerts = getCustomAttackAlerts;
module.exports.getCustomVulnerabilityAlerts = getCustomVulnerabilityAlerts;
module.exports.getUserInformation = getUserInformation;
module.exports.getUserAuthorizationHeader = getUserAuthorizationHeader;
