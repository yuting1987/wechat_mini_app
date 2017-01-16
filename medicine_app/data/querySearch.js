//请按照此格式进行填写
var news_arr = require('./allNews');
var medicine_arr = require('./allMedicine');

module.exports = function(attrs){
    var n = news_arr;
    var m = medicine_arr;
    return {
        success: true,
        result: {
          medicine : m,
          news : n   
        },
        errorCode: null,
        errorMsg: null
    }
}