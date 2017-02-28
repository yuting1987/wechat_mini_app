var modal = require('../../util/modal');
var wx_api = require('../../wx/api');
var ser = require('./service');
var util = require('../../util/util');

var app = getApp();

Page({
    data: {
        news : []
    },

    onShow: function () {
        var _this = this;
        ser.queryAllNewsSer(function(res){
            if (!res.success){
                return;
            }
            console.log(res.result[0].title);
            res.result[0].title = util.convertHtmlToText(res.result[0].title);
            _this.setData({
                'news' : res.result
            });
        });
    },
    
    //注册分享
    onShareAppMessage: function () {
        return {
            title: '龙猫医师',
            desc: '龙猫医师',
            path: '/page/home/home'
        }
    },

    goSearch : function(){
        wx_api.go('search');
    },

    itemClick : function(e){
        var id = e.currentTarget.dataset.id;
        wx_api.go('newsDetail',{ id : id } );
    }
})