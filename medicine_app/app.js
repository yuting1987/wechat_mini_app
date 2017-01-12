var ser = require('./service');

App({
    //attrs
    proFlag: 'dev', // 开发环境dev 生产环境prod

    globalData: {
        isLogin: false,
        userInfo: null
    },

    onLaunch: function () {
        //获取用户信息
        this.getUserInfo();
        console.log(this.globalData.userInfo);
    },

    //获取用户信息
    getUserInfo: function (cb) {
        var _this = this;
        if (_this.globalData.isLogin) {
            return;
        }

        ser.login(function (data) {
            that.globalData.isLogin = true;
            that.globalData.userInfo = res.userInfo;
        })
    }
});
