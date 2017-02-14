var Config = {
    //attrs
    proFlag: 'dev', // 开发环境dev 生产环境prod
    
    //判定服务器是否存在的标志 暂定没有服务器
    server : false,

    //接口
    accounts : {
        queryNews : 'data/queryNews',
        queryAllNews : 'data/queryAllNews',
        querySearch : 'data/querySearch',
        getMedicineDetail : 'data/getMedicineDetail',
        getNewDetail : 'data/getNewDetail',
    },

    host: 'http://121.43.160.200/resourse/',

    get: function (url) {
        if (this.host) {
            return this.host.replace(/\/$/, '') + '/' + url.replace(/^\//, '');
        }
        return url;
    }
};

module.exports = Config;