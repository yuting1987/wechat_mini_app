var Util = {
    delRepeatArr : function (value,arr) {
      var a = arr.indexOf(value);
      if(a >= 0){
        arr.splice(a,1);
      }
      return arr;
    },

    getResultsByRows : function(results,rows){
       results = results.slice(0,rows);
       return results;
    }
};

module.exports = Util;
