var fs = require('fs');
var _path = require('path');

function getAgentProfiles(orgUuid, expand){
    var path = `${orgUuid}/agents/profiles`;
    return this._get(path, {'expand': expand});
}

function getAgentProfile(orgUuid, profile, expand){
    var path = `${orgUuid}/agents/profiles/${profile}`;
    return this._get(path, {'expand': expand});
}

function getAgentVersions(orgUuid){
    var path = `${orgUuid}/agents/versions`;
    return this._get(path);
}

function downloadAgent(downloadLocation, orgUuid, platform, profile, jvm){
    var matcher = /filename=(\S*)/;
    profile = profile || 'default';
    var path = `${orgUuid}/agents/${profile}/${platform}`;
    return this._download(path, {'jvm': jvm}).then(function(response){
        var fileName = matcher.exec(response.headers['content-disposition']);
        fileName = fileName.length > 1 ? fileName[1] : 'contrast';
        var downloadTo = _path.join(downloadLocation, fileName)
        fs.writeFileSync(downloadTo, response.body);
        if (fs.existsSync(downloadTo)) {
            return {'success': true, 'path': downloadTo};
        }else{
            return {'success': false};
        }
    });

}

module.exports.getAgentProfiles = getAgentProfiles;
module.exports.getAgentProfile = getAgentProfile;
module.exports.getAgentVersions = getAgentVersions;
module.exports.downloadAgent = downloadAgent;

/*
def download_agent(self, org_uuid, platform=AgentTypes.JAVA, profile='default', jvm=None):
    path = '{org_uuid}/agents/{profile}/{platform}'.format(org_uuid=org_uuid, profile=profile, platform=platform)
    response = self._download(path, params={'jvm': jvm})
    contrast_name = re.findall("filename=(\S+)", response.headers['content-disposition'])
    with open(contrast_name[0], 'w+') as f:
        for chunk in response.iter_content(chunk_size=1024):
            if chunk:
                f.write(chunk)
        return response

*/
