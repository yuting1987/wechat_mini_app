var modal = require('../../util/modal');
var util = require('../../util/util');
var ser = require('./service');
var Api = require('../../wx/api');
var app = getApp();

Page({
    data: {
        listData: null,
        imageWidth : 0,
        imageHeight : 0
    },

    onLoad : function(options){
        var _this = this;
        console.log(options);
        ser.getNewsDetailSer({id : options.id},function(res){

            _this.setData({
                listData : res.result
            });
        });
    },
    imageLoad : function(e){
        var size = util.imageUtil(e);
        this.setData({
            imageWidth : size.imageWidth,
            imageHeight : size.imageHeight
        })
    }
})