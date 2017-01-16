var Util = {
    delRepeatArr : function (value,arr) {
      var a = arr.indexOf(value);
      if(a >= 0){
        arr.splice(a,1);
      }
      return arr;
    },

    getResultsByRows : function(results,rows){
       var r = [];
       for (var i = 0;i < rows ; i++){
         r.push(results[i]);
       }
       return r;
    }
};

module.exports = Util;
