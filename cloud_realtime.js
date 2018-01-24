var AV = require('leanengine');

var Character = AV.Object.extend('Character');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('get_conversation_online_count', function(request, response) {
    console.log(request.params);

    var cids = request.params['club_ids'];
    var c = 0;
    var finishCheck = function () {
        c++;
        if (c === cids.length) {
            response.success(cids);
        }
    };

    var result = {};

    for (var i = 0; i < cids.length; i++) {
        var cid = cids[i];
        var query = AV.Conversation.query.equalTo('name', cid);
        query.find().then(function (conversations) {

            if (conversations.length === 1) {
                var conversation = conversations[0];
                conversation.count().then(function (count) {
                    result[cid] = {count: count, cid: conversation.id};
                    finishCheck();
                });
            } else {
                result[cid] = {count: 0}
                finishCheck();
            }
        }).catch(console.error.bind(console));
    }
});
