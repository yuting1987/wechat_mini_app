var config = require('../../util/config');
var wx_ser = require('../../wx/service');

var searchSer = function(data,success){
    var options = {
        url : config.get(config.accounts.querySearch),
        success : success,
        data : data
    }

    wx_ser.request(options);
}

module.exports = {
    searchSer :searchSer
}

