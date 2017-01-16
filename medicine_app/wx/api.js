var util = require('../util/util');

var Api = {
    go : function(url,attrs){
        url = '../' + url + '/' + url;
        if (attrs){
          url = url + '?' + util.convertFormData(attrs);
        };
        console.log(url);
        wx.navigateTo({
            url : url
        });
    },

    setStorage : function(key,value){
        wx.setStorage({
          key: key,
          data: value,
          success: function(res){
            // success
            console.log('存储成功');
            console.log(res);
          },
          fail: function() {
            // fail
            console.log('存储失败');            
          },
          complete: function() {
            // complete
          }
        })
    },

    getStorage : function(key){
       return wx.getStorage({
          key: key,
          success: function(res){
            // success
            console.log(res.data);
          }
        })
    },

    rmStorage : function(key){
        wx.removeStorage({
          key: key,
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },

    clearStorage : function(){
        wx.clearStorage();
    }
}

module.exports = Api;