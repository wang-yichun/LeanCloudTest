var AV = require('leanengine');

var Character = AV.Object.extend('Character');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function(request) {
    console.log(request.params);
    return 'Hello world!';
});

AV.Cloud.define('get_one_json', function(request, response) {
    console.log(request.params);
    var query = Character.query;
    query.get(request.params.oid).then(function (item) {
        console.log(item);
        response.success(item._hashedJSON);
    }, function (error) {
        console.error(error.message);
        response.fail();
    });
});


AV.Cloud.define('get_one_dic', function(request, response) {
    console.log(request.params);
    var query = Character.query;
    query.get(request.params.oid).then(function (item) {
        console.log(item);
        response.success(item);
    }, function (error) {
        console.error(error.message);
        response.fail();
    });
});