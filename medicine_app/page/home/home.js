var modal = require('../../util/modal');
var wx_api = require('../../wx/api');
var ser = require('./service');

var app = getApp();

Page({
    data: {
        
    },

    onShow: function () {
        ser.testSer();
    },

    goSearch : function(){
        wx_api.go('search');
    }  
})