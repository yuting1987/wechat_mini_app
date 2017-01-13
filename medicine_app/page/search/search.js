var modal = require('../../util/modal');
var ser = require('./service');

var app = getApp();

Page({
    data: {
        id: 0
    },

    onShow: function () {
        ser.testSer();
    }
})