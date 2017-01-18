// page/listView/listView.js
var modal = require('../../util/modal');
var util = require('../../util/util');
var ser = require('./service');
var Api = require('../../wx/api');

Page({
  data:{
    key : "",
    listData: null,
    newsData: null,
    contentType : ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      contentType : options.id,
      key : options.key
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    var _this = this;
    // 页面显示
    ser.searchSer({key:_this.data.key},function(res){
      if(_this.data.contentType === 'medicine'){
        _this.setData({
          listData : res.result.medicine
      });
      } else if(_this.data.contentType === "news"){
        _this.setData({
            newsData : res.result.news
        });
      }
    });
  },
  medicineClick : function(e){
      var id = e.currentTarget.dataset.id;
      Api.go('medicineDetail',{id : id});
  },

  newsClick : function(e){
      var id = e.currentTarget.dataset.id;
      Api.go('newsDetail',{id : id});
  },
})