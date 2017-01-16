var config = require('../../util/config');
var wx_ser = require('../../wx/service');

var searchSer = function(success){
    var options = {
        url : config.get(config.accounts.querySearch),
        success : success,
        data : { key : '测试'}
    }

    wx_ser.request(options);
}

module.exports = {
    searchSer :searchSer
}

