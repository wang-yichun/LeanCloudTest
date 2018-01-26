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
        response.success(JSON.stringify(item));
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

        var dic = {
            str : 'hello',
            int : 99
        };

        response.success(dic);
    }, function (error) {
        console.error(error.message);
        response.fail();
    });
});


// AV.Cloud.define('get_conversations_by_names', function (request, response) {
//     console.log(request.params);
//     var club_names = request.params['club_names'];
//     if (club_names === null) {
//         club_names = JSON.parse(request.params['club_names_raw'])
//     }
//     var query = AV.Conversation.query.containedIn('name', club_names);//equalTo('name', cid);
//     query.find().then(function (conversations) {
//         response.success(conversations);
//     }).catch(console.error.bind(console));
// });