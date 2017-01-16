//主运行程序添加一个接口则加入一个名字运行时会直接拉到需要的数据
var data = {};
var arr = ['queryNews','queryAllNews','querySearch','getNewDetail','getMedicineDetail'];

for (var i=0,len=arr.length;i<arr.length;i++){
    var key = arr[i];
    var obj = require('./' + key);
    data[key] = obj;    
}

module.exports = data; 