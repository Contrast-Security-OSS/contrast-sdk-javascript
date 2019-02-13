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
    return this._put(path,group);
}

async function addUserToGroup(orgUuid, groupId, user){
	var response = await this.getGroup(orgUuid, groupId).then(function(response){
        return response;		
    });
    var group = {};
	var users = [];
    group.name=response["group"]["name"]
    group.users=users;
    for (var x = 0; x < response["group"]["users"].length; x++){
        group.users.push(response["group"]["users"][x]["uid"]);
    }
    group.users.push(user);
    var onboardRole = response["group"]["onboard_role"];
    var scope = {};
    var app_scope = {};
    app_scope["onboard_role"]=onboardRole;
    var exceptions = [];
    for (var i = 0; i < response["group"]["applications"].length; i++){
    	var obj = response["group"]["applications"][i];
    	var role = response["group"]["applications"][i]["role"]["name"];
    	for (var j = 0; j < obj["applications"].length; j++){
    		var obj2 = obj["applications"][j];
    		for (var key in obj2){
    			if (key=="app_id"){
        			obj2[key];
        			var app_obj = {};
        			app_obj["id"]=obj2[key];
        			app_obj["role"]=role;
        			exceptions.push(app_obj);
    			}
    		}
		}


	}
	app_scope["exceptions"]=exceptions;
	scope["app_scope"]=app_scope;
    group.scope = scope;
    var response2 = await this.updateGroup(orgUuid, groupId, group); 
    return response2;
} 

module.exports.getGroup = getGroup;
module.exports.createGroup = createGroup;
module.exports.updateGroup = updateGroup;
module.exports.addUserToGroup = addUserToGroup;
