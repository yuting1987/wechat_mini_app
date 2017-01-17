var medicines_arr = require('./allMedicineDetail');

var arr = [];
for (var i = 0 ; i < medicines_arr.length ; i++){
    var o = medicines_arr[i];
    // delete o.content;
    // delete o.imgUrl;
    arr.push(o);  
};
//干掉一个字段content
module.exports = arr;