var config = require('../../util/config');
var wx_ser = require('../../wx/service');

var queryAllNewsSer = function(success_callback){
    var options = {
        url : config.get(config.accounts.queryAllNews),
        success : success_callback
    }

    wx_ser.request(options);
}

module.exports = {
    queryAllNewsSer : queryAllNewsSer
}

