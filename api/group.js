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
    //return this._put(path, {"name":"SergeiGroup1","users":["sergeibulatov334@gmail.com"],"scope":{"app_scope":{"onboard_role":"view","exceptions":[{"id":"6cffa565-9680-45e4-85ed-a842e5500052","role":"view"},{"id":"bb847196-e819-430a-94d7-9d7b38bceef6","role":"edit"}]}}});
    //return this._put(path, {"name":"SergeiGroup1","users":["g.auravdhy@gmail.com","sergeibulatov334@gmail.com"]});
}

function addUserToGroup(orgUuid, groupId, user){
	var group = getGroup(orgUuid, groupId).then(function(response){
			var group = {};
			var users = [];
            console.log(response);
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
    			//console.log(obj);
    			var role = response["group"]["applications"][i]["role"]["name"];
    			//console.log("role " + role);

    			for (var j = 0; j < obj["applications"].length; j++){
    				var obj2 = obj["applications"][j];
    				//console.log(obj2);
    				for (var key in obj2){
    					if (key=="app_id"){
        					obj2[key];
        					var app_obj = {};
        					app_obj["id"]=obj2[key];
        					app_obj["role"]=role;
        					console.log(app_obj);
        					exceptions.push(app_obj);
    					}
    				}
				}


			}
			app_scope["exceptions"]=exceptions;
			scope["app_scope"]=app_scope;
            group.scope = scope;
            return group;		
    });
    console.log("final group " + group);
    return this.updateGroup(orgUuid, groupId, group); 
} 

module.exports.getGroup = getGroup;
module.exports.createGroup = createGroup;
module.exports.updateGroup = updateGroup;
module.exports.addUserToGroup = addUserToGroup;
