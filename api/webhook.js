function getWebhooks(orgUuid, expand){
    var path = `${orgUuid}/webhooks`;
    return this._get(path, {'expand': expand});
}

function getWebhook(orgUuid, webhookId, expand){
    var path = `${orgUuid}/webhooks/${webhookId}`;
    return this._get(path, {'expand': expand});
}

module.exports.getWebhooks = getWebhooks;
module.exports.getWebhook = getWebhook;
