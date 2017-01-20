var config = require('../../util/config');
var wx_ser = require('../../wx/service');

var getNewsDetailSer = function(data,success){
    var options = {
        url : config.get(config.accounts.getNewDetail),
        success : success,
        data : data
    }

    wx_ser.request(options);
}

module.exports = {
    getNewsDetailSer :getNewsDetailSer
}
