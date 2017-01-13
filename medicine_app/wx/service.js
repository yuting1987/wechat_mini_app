var config = require('../util/config');
var header = require('../util/headerConfig');
var data;

//判定是否拥有服务器
if (!config.server){
    //没有服务器则进行接口加载
    data = require('../data/data');    
}

var Service = {
    //调用登录接口
    login: function (cb) {
        wx.login({
            success: function () {
                wx.getUserInfo({
                    success: function (res) {
                        typeof cb === 'function' && cb(res);
                    }
                });
            }
        });
    },

    //请求远程接口
    request : function(options){
        var baseOptions = {
            url : options.url ? options.url : '',
            method: options.method ? options.method : 'GET',
            header : header, 
            data : options.data ? options.data : {},
            success : options.success ? options.success : function(res){}
        };
        
        //判定是否有服务器
        if (config.server){
            //选择微信方式请求远程数据
            wx.request(baseOptions);
        }else{
            var urls = baseOptions.url.split('/');
            var key = urls[urls.length - 1];
            var res = data[key];
            options.success && options.success(res);
        }
    }
};

module.exports = Service;