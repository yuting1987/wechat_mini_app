//请按照此格式进行填写
var arr = require('./allMedicine');

var findById = function(id){
    var result = {};
    for (var i in arr){
        var obj = arr[i];
        if (''+obj.id === ''+id){
            result = obj;
            break;
        }
    }
    return result;
};

module.exports = function(attrs){
    return {
        success : true,
        result : findById(attrs.id),
        errorCode : null,
        errorMsg : null
    }
}