var wx_ser = require('./wx/service');

App({
    globalData: {
        isLogin: false,
        userInfo: null
    },

    onLaunch: function () {
        //获取用户信息
        this.getUserInfo();
    },

    //获取用户信息
    getUserInfo: function (cb) {
        var that = this;
        if (that.globalData.isLogin) {
            return;
        }

        wx_ser.login(function (res) {
            that.globalData.isLogin = true;
            that.globalData.userInfo = res.userInfo;
        })
    }
});
