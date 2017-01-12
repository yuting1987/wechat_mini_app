var Service = {
    login: function (cb) {
        //调用登录接口
        wx.login({
            success: function () {
                wx.getUserInfo({
                    success: function (res) {
                        typeof cb === 'function' && cb(res);
                    }
                });
            }
        });
    }
};

module.exports = Service;