//请按照此格式进行填写
var arr = [
    {
        id : '1',
        imgUrl : 'http://image.tycredit.com/2/7560c0c50d40.png',
        title : '测试测试',
        content : '测试测试哈哈哈哈哈哈'
    },
    {
        id : '2',
        imgUrl : 'http://image.tycredit.com/2/7560c0c50d40.png',
        title : '测试测试',
        content : '测试测试哈哈哈哈哈哈'
    }
]
        


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