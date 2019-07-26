function getValidatorsAndSanitizers(orgUuid){
    var path = `${orgUuid}/controls`;
    return this._get(path);
}

function getControlSuggestions(orgUuid){
    var path =`${orgUuid}/controls/suggestion`;
    return this._get(path);
}

module.exports.getValidatorsAndSanitizers = getValidatorsAndSanitizers
module.exports.getControlSuggestions = getControlSuggestions
