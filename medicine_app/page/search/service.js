var config = require('../../util/config');
var wx_ser = require('../../wx/service');

var searchSer = function(success){
    var options = {
        url : config.get(config.accounts.querySearch),
        success : success
    }

    wx_ser.request(options);
}

module.exports = {
    searchSer :searchSer
}

