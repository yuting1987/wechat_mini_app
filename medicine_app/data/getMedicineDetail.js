//请按照此格式进行填写
var arr = require('./allMedicine');

module.exports = function(attrs){
    var result = {};
    for (var i in arr){
        var obj = arr[i];
        if (obj.id === attrs.id){
            result = obj;
            break;
        }
    }
    return {
        success : true,
        result : result,
        errorCode : null,
        errorMsg : null
    }
}