var Modal = {
    toast : function(title,icon,timeout){
        var options = {};
        title ? options.title = title : null;
        icon ? options.icon = icon : null;
        timeout ? options.timeout = timeout : 2000;
        wx.showToast(options);
    }
}

module.exports = Modal;