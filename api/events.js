function getLatestEvents(orgUuid, limit){
    var path = `${orgUuid}/events`;
    return this._get(path, params={'limit':limit});
}

function getLatestApplicationCreation(orgUuid, limit){
    var path = `${orgUuid}/events/application`;
    return this._get(path, params={'limit':limit});
}

function getLatestServerCreation(orgUuid, limit){
    var path = `${orgUuid}/events/server`;
    return this._get(path, params={'limit': limit});
}

function getLatestTracesReceived(orgUuid, limit){
    var path = `${orgUuid}/events/trace`;
    return this._get(path, params={'limit': limit});
}

module.exports.getLatestEvents = getLatestEvents;
module.exports.getLatestApplicationCreation = getLatestApplicationCreation;
module.exports.getLatestServerCreation = getLatestServerCreation;
module.exports.getLatestTracesReceived = getLatestTracesReceived;
