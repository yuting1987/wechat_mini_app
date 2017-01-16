//请按照此格式进行填写
var news_arr = require('./allNews');
var medicine_arr = require('./allMedicine');

var searchByKey = function(arrs,key){
    var res = [];
    for(var i = 0 ;i<arrs.length; i++){
        var obj = arrs[i];
        if (obj.title.indexOf(key) >= 0){
            res.push(obj);
        }
    }
    return res;
};

module.exports = function(attrs){
    var n = searchByKey(news_arr,attrs.key);
    var m = searchByKey(medicine_arr,attrs.key);
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