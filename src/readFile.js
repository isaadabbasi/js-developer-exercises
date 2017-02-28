var fs = require('fs'),
    q = require('q');

var readFile = function (filepath) {
    var proInitialized = q.defer();
    fs.readFile( filepath, 'utf-8', function(err, content){
        if(err) proInitialized.reject('no such file')

        if(content) proInitialized.resolve(JSON.parse(content))
    })
    return proInitialized.promise;

}
module.exports = readFile