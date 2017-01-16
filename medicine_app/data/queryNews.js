//请按照此格式进行填写
var news_arr = require('./allNews'); 
var util = require('../util/util');

module.exports = {
    success : true,
    result : util.getResultsByRows(news_arr,5),
    errorCode : null,
    errorMsg : null
}