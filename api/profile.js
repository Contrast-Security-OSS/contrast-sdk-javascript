function getProfileInfo(params){
    return this._get('profile', params);
}

function getProfileOrganizations(){
    return this._get('profile/organizations');
}

function getProfileDefaultOrganization(){
    return this._get('profile/organizations/default');
}

function getOrgInfo(orgUuid){
    path = `profile/organizations/${orgUuid}`;
    return this._get(path);
}

function getProfilePasswordPolicy(){
    return this._get('profile/passwordpolicy');
}

function getProfileRoles(){
    return this._get('profile/roles');
}

function setProfileDefaultOrg(orgUuid){
    path = `profile/${orgUuid}/default`;
    return this._put(path);
}

module.exports.getProfileInfo = getProfileInfo;
module.exports.getProfileOrganizations = getProfileOrganizations;
module.exports.getProfileDefaultOrganization = getProfileDefaultOrganization;
module.exports.getOrgInfo = getOrgInfo;
module.exports.getProfilePasswordPolicy = getProfilePasswordPolicy;
module.exports.getProfileRoles = getProfileRoles;
module.exports.setProfileDefaultOrg = setProfileDefaultOrg
