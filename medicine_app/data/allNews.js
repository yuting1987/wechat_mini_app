
var news_arr = require('./allNewsDetails'); 

var arr = [];
for (var i = 0 ; i < news_arr.length ; i++){
    var o = news_arr[i];
    // delete o.content;
    // delete o.imgUrl;
    arr.push(o);  
};
console.log(arr);
//干掉一个字段content
module.exports = arr;