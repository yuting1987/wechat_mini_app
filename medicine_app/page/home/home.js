var modal = require('../../util/modal');
var wx_api = require('../../wx/api');
var ser = require('./service');

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
            _this.setData({
                'news' : res.result
            });
        });
    },

    goSearch : function(){
        wx_api.go('search');
    },

    itemClick : function(e){
        var id = e.currentTarget.dataset.id;
        wx_api.go('newsDetail',{ id : id } );
    }
})