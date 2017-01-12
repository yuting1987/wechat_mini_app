var modal = require('../../util/modal');

var app = getApp();

Page({
    data: {
        id: 0
    },

    onShow: function () {
        modal.toast('加载中', 'loading');
        this.setData({
            id: 1
        });
    },

    show: function (e) {
        console.log(e);
        this.setData({
            id: 1
        });
    },

    hide: function (e) {
        this.setData({
            id: 0
        });
    }
})