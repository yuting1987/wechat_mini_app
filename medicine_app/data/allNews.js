
var news_arr = require('./allNewsDetails'); 
var util = require('../util/util');

var arr = [];
for (var i = 0 ; i < news_arr.length ; i++){
    var o = news_arr[i];
    var newO = util.extendByObj(o);
    delete newO.content;
    delete newO.imgUrl;
    arr.push(newO);  
};

//干掉一个字段content
module.exports = arr;