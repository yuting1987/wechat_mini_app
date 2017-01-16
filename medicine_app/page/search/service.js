var config = require('../../util/config');
var wx_ser = require('../../wx/service');

var testSer = function(success){
    var options = {
        url : config.get(config.accounts.test1),
        success : success
    }

    wx_ser.request(options);
}

module.exports = {
    testSer : testSer
}

