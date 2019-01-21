function getGroup(orgUuid,groupId){
    var path = `${orgUuid}/groups/${groupId}`;
    return this._get(path);
}

function createGroup(orgUuid){
    var path = `${orgUuid}/groups/add`;
    return this._post(path);
}

function updateGroup(orgUuid, groupId, group){
    var path = `${orgUuid}/groups/${groupId}`;
    return this._put(path, {"name":"SergeiGroup1","users":["sergeibulatov334@gmail.com"],"scope":{"app_scope":{"onboard_role":"view","exceptions":[{"id":"6cffa565-9680-45e4-85ed-a842e5500052","role":"view"},{"id":"bb847196-e819-430a-94d7-9d7b38bceef6","role":"edit"}]}}});
}

function addUserToGroup(orgUuid, groupId, user){
	var group = this.getGroup(orgUuid, groupId);
	console.log(group);
	return this.updateGroup(orgUuid, groupId, "group");
}

module.exports.getGroup = getGroup;
module.exports.createGroup = createGroup;
module.exports.updateGroup = updateGroup;
module.exports.addUserToGroup = addUserToGroup;
