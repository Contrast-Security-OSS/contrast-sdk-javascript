function getApplicationModules(orgUuid, expand){
    var path = `${orgUuid}/modules`;
    return this._get(path, params={'expand': expand});
}

function getApplicationChildModules(orgUuid, appId, expand){
    var path = `${orgUuid}/modules/${appId}`;
    return this._get(path, params={'expand':expand});
}

module.exports.getApplicationModules = getApplicationModules;
module.exports.getApplicationChildModules = getApplicationChildModules;
