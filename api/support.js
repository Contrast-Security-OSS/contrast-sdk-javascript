var rp = require('request-promise');

function _get(path, params){
    url = this.teamserverUrl + this.version + path
    var options = {
        uri: url,
        qs: params,
        headers: this.headers,
        json: true
    };
    return rp(options);
}

function _post(path, data){
    url = this.teamserverUrl + this.version + path
    var options = {
        method: 'POST',
        uri: url,
        body: data,
        headers: this.headers,
        json: true
    };
    return rp(options);
}

function _put(path, data){
    url = this.teamserverUrl + this.version + path
    var options = {
        method: 'PUT',
        uri: url,
        body: data,
        headers: this.headers,
        json: true
    };
    return rp(options);
}


function _delete(path, data){
    url = this.teamserverUrl + this.version + path
    var options = {
        method: 'DELETE',
        uri: url,
        body: data,
        headers: this.headers,
        json: true
    };
    return rp(options);
}

function _download(path, params){
    url = this.teamserverUrl + this.version + path;
    var options = {
        uri: url,
        qs: params,
        headers: this.headers,
        resolveWithFullResponse: true,
        encoding: null
    };
    return rp(options);
}

module.exports._get = _get;
module.exports._post = _post;
module.exports._put = _put;
module.exports._delete = _delete;
module.exports._download = _download;
