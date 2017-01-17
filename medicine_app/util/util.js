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
    },

    //转换成FormData模式
    convertFormData  : function(_json){
        var formData='',k,v;
        for (k in _json){
          v = _json[k];
          formData = formData + k + '=' + v + '&';
        }
        formData = formData.substr(0,formData.length - 1);
        return formData;
    },
    
    extendByObj : function(obj){
      var newObj = {};
      var k,v;
      for (k in obj){
        newObj[k] = obj[k]; 
      }
      return newObj;
    }
}

module.exports = Util;
