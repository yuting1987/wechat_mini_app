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

    imageUtil : function (e) {
        var imageSize = {};
        var originalWidth = e.detail.width;//图片原始宽
        var originalHeight = e.detail.height;//图片原始高
        var originalScale = originalHeight/originalWidth;//图片高宽比
        console.log('originalWidth: ' + originalWidth);
        console.log('originalHeight: ' + originalHeight);
        //获取屏幕宽高
        wx.getSystemInfo({
          success: function (res) {
            var windowWidth = res.windowWidth;
            var windowHeight = res.windowHeight;
            var windowscale = windowHeight/windowWidth;//屏幕高宽比
            console.log('windowWidth: ' + windowWidth);
            console.log('windowHeight: ' + windowHeight);
            if(originalScale < windowscale){//图片高宽比小于屏幕高宽比
              //图片缩放后的宽为屏幕宽
              imageSize.imageWidth = windowWidth;
              imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth;
            }else{//图片高宽比大于屏幕高宽比
              //图片缩放后的高为屏幕高
              imageSize.imageHeight = windowHeight;
              imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight;
            }

          }
        });
        console.log('缩放后的宽: ' + imageSize.imageWidth);
        console.log('缩放后的高: ' + imageSize.imageHeight);
        return imageSize;
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
