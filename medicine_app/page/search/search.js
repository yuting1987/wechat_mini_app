var modal = require('../../util/modal');
var util = require('../../util/util');
var ser = require('./service');
var Api = require('../../wx/api');
var app = getApp();

Page({
    data: {
        listData: null,
        newsData: null,
        inputValue: '',
        time : null,
        historyArr : null,
        contentType : ''
    },

    onLoad : function(options){
        console.log(options);
    },

    onShow: function () {
        var _this = this;
        wx.getStorage({
          key: 'history',
          success: function(res){
            // success
            _this.setData({
                historyArr : res.data,
                contentType : "2"
            });
          },
          fail : function(){
            _this.setData({
                contentType : "1"
            });
          }
        })
    },

    queryMedicine : function(e){
        var _this = this;
        if(this.data.time){
            clearTimeout(this.data.time);
        }
        if(!e.detail.value){
            _this.setData({
                contentType : "2"
            });
            return;
        } else if (e.detail.value.length < 2){
            return;
        }
        this.data.time = setTimeout(function(){
            var data;
            wx.getStorage({
              key: 'history',
              success: function(res){
                data = res.data;
                data = util.delRepeatArr(e.detail.value,data);
                data.unshift(e.detail.value);
                data = data.slice(0,6);
                _this.setData({
                    historyArr : data,
                    contentType : "2"
                });
                console.log(data);
                Api.setStorage('history',data);
                ser.searchSer(function(res){
                    _this.setData({
                        listData : res.result.medicine,
                        newsData : res.result.news,
                        contentType : '3'
                    });
                });
              },
              fail : function(res){
                Api.setStorage('history',[e.detail.value]);             
                _this.setData({
                    historyArr : [e.detail.value],
                    contentType : "2"
                });
              }
            }); 
        },500);

    },

    rm : function(){
        Api.rmStorage('history');
        this.setData({
            historyArr : null,
            contentType : "1"
        });
    },

    query : function(e){
        var _this = this;
        var text = e.currentTarget.dataset.text;
        _this.setData({
            inputValue: text
        });
        console.log(text);
        wx.getStorage({
              key: 'history',
              success: function(res){
                var data = res.data;
                data = util.delRepeatArr(text,data);
                data.unshift(text);
                data = data.slice(0,6);
                _this.setData({
                    historyArr : data,
                    contentType : "2"
                });
                Api.setStorage('history',data);
                ser.searchSer({key : text},function(res){
                    _this.setData({
                        listData : res.result.medicine,
                        newsData : res.result.news,
                        contentType : '3'
                    });
                });
              }
            }); 
    }
})