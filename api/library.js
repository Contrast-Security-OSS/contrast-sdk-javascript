function getLibraries(orgUuid, expand, quickFilter){
    var path = `${orgUuid}/libraries`;
    return this._get(path, params={'expand': expand, 'quickFilter': quickFilter});
}

function getDotnetLibrary(orgUuid, libraryHash, expand){
    var path = `${orgUuid}/libraries/dotnet/${libraryHash}`;
    return this._get(path, params={'expand': expand});
}

function getJavaLibrary(orgUuid, libraryHash, expand){
    var path = `${orgUuid}/libraries/java/${libraryHash}`;
    return this._get(path, params={'expand': expand});
}

function getLibraryStats(orgUuid){
    var path = `${orgUuid}/libraries/stats`;
    return this._get(path);
}

function getAllLibraryFilters(filterType){
    return this._get('libraries/filters/listing', params={'filterType': filterType});
}

function getLibraryFilterSubfilters(orgUuid, filterType){
    var path = `${orgUuid}/libraries/filters/${filterType}/listing`;
    return this._get(path);
}

function filterLibraries(orgUuid, filter){
    var path = `${orgUuid}/libraries/filter`;
    return this._get(path, params=filter);
}

function getLibraryPolicy(orgUuid){
    var path = `${orgUuid}/library/policy`;
    return this._get(path);
}

module.exports.getLibraries = getLibraries
module.exports.getDotnetLibrary = getDotnetLibrary
module.exports.getJavaLibrary = getJavaLibrary
module.exports.getLibraryStats = getLibraryStats
module.exports.getAllLibraryFilters = getAllLibraryFilters
module.exports.getLibraryFilterSubfilters = getLibraryFilterSubfilters
module.exports.filterLibraries = filterLibraries
module.exports.getLibraryPolicy = getLibraryPolicy
