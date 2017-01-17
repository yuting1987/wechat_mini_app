var config = require('../../util/config');
var wx_ser = require('../../wx/service');

var getMedicineDetailSer = function(data,success){
    var options = {
        url : config.get(config.accounts.getMedicineDetail),
        success : success,
        data : data
    }

    wx_ser.request(options);
}

module.exports = {
    getMedicineDetailSer :getMedicineDetailSer
}

