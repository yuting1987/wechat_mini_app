var config = require('../../util/config');
var wx_ser = require('../../wx/service');

var queryNewsSer = function(success_callback){
    var options = {
        url : config.get(config.accounts.queryNews),
        success : success_callback
    }

    wx_ser.request(options);
}

module.exports = {
    queryNewsSer : queryNewsSer
}

