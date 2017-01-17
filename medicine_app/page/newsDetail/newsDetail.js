var modal = require('../../util/modal');
var util = require('../../util/util');
var ser = require('./service');
var Api = require('../../wx/api');
var app = getApp();

Page({
    data: {
        listData: null,
        newsData: null,
        inputValue: '',
        time : null,
        historyArr : null,
        contentType : '',
        imageWidth : 0,
        imageHeight : 0
    },

    onLoad : function(options){
        console.log(options);
        
    },
    imageLoad : function(e){
        var size = util.imageUtil(e);
        this.setData({
            imageWidth : size.imageWidth,
            imageHeight : size.imageHeight
        })
    }
})