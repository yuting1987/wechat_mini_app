var Api = {
    go : function(url,attrs){
        url = '../' + url + '/' + url; 
        wx.navigateTo({
            url : url
        });
    }
}

module.exports = Api;