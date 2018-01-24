var AV = require('leanengine');

var Character = AV.Object.extend('Character');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('get_conversation_online_count', function(request) {
    console.log(request.params);

    var cid = 'c007';
    var query = AV.Conversation.query.equalTo('name', cid);
    query.find().then(function (conversations) {
        for (var i = 0; i < conversations.length; i++) {
            var conversation = conversations[i];
            console.log(conversation.id);
        }
    }).catch(console.error.bind(console));

});
