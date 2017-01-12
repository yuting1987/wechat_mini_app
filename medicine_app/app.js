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

        _this.login(function (data) {
            that.globalData.isLogin = true;
            that.globalData.userInfo = res.userInfo;
        })
    },

    login: function (cb) {
        //调用登录接口
        wx.login({
            success: function () {
                wx.getUserInfo({
                    success: function (res) {
                        typeof cb === 'function' && cb(res);
                    }
                })
            }
        });
    }
});
