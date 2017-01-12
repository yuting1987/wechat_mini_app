//主运行程序添加一个接口则加入一个名字运行时会直接拉到需要的数据
var data = {};
var arr = ['test'];

for (var i=0,len=arr.length;i<arr.length;i++){
    var obj = require('./' + arr[i]);
    data[obj.name] = obj;    
}

module.exports = data; 