var app = getApp();

var Config = {
    //接口
    apis : {
        
    },

    host: '',

    get: function (url) {
        if (this.host) {
            return this.host.replace(/\/$/, '') + '/' + url.replace(/^\//, '');
        }
        return url;
    }

};

if (app.proFlag == 'dev'){
    Config.host = '';
}

if (app.proFlag == 'prod'){
    Config.host = '';
}

module.exports = Config;