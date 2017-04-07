function getValidatorsAndSanitizers(orgUuid){
    var path = `${orgUuid}/controls`;
    return this._get(path);
}

function getValidatorControls(orgUuid){
    var path = `${orgUuid}/controls/validators`;
    return this._get(path);
}

function getSanitizerControls(orgUuid){
    var path = `${orgUuid}/controls/sanitizers`;
    return this._get(path);
}

function getControlSuggestions(orgUuid){
    var path =`${orgUuid}/controls/suggestion`;
    return this._get(path);
}

module.exports.getValidatorsAndSanitizers = getValidatorsAndSanitizers
module.exports.getValidatorControls = getValidatorControls
module.exports.getSanitizerControls = getSanitizerControls
module.exports.getControlSuggestions = getControlSuggestions
