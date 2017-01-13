var config = require('../../util/config');
var wx_ser = require('../../wx/service');

var testSer = function(success_callback){
    var options = {
        url : config.get(config.accounts.test),
        success : success_callback
    }

    wx_ser.request(options);
}

module.exports = {
    testSer : testSer
}

