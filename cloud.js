var AV = require('leanengine');

var Character = AV.Object.extend('Character');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function(request) {
    console.log(request.params);
    return 'Hello world!';
});

AV.Cloud.define('get_one', function(request) {
    console.log(request.params);
    var query = new AV.query(Character);
    query.get('5a54602067f3560062e6de00').then(function (item) {
        return item;
    }, function (error) {
        console.error(error.message)
    });
});
