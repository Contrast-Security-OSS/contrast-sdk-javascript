var ContrastSdk = require('../index.js');
var config = require('./config');

module.exports.sdk = new ContrastSdk(config.username, config.apiKey, config.serviceKey, config.teamserverUrl);
module.exports.org = config.orgUuid;
module.exports.server = config.serverId;
module.exports.app = config.appId;
module.exports.trace = config.trace;
module.exports.library = config.javaLibraryHash;
