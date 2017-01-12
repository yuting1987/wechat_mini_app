var modal = require('../../util/modal');

var app = getApp();

Page({
    data : {
        id : 0
    },

    onShow : function(){
        modal.toast('加载中','loading');
        this.setData('id',1);
    },

    clickMe : function(e){
        this.setData('id',0);
        modal.toast('加载中','loading');
    }
})