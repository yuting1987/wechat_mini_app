var config = require('../../util/config');
var wx_ser = require('../../wx/service');

var testSer = function(){
    var options = {
        url : config.get(config.accounts.test),
        success : function(res){
            console.log(res);
        }
    }

    wx_ser.request(options);
}

module.exports = {
    testSer : testSer
}

