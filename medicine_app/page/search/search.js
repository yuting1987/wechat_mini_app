var modal = require('../../util/modal');
var util = require('../../util/util');
var ser = require('./service');
var Api = require('../../wx/api');
var app = getApp();

Page({
    data: {
        allListData : null,
        allNewsData : null,
        listData: null,
        newsData: null,
        inputValue: '',
        time : null,
        historyArr : null,
        contentType : ''
    },

    onLoad : function(options){
        console.log(options);
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

    onShow: function () {
        
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
                ser.searchSer({key:e.detail.value},function(res){
                    _this.setData({
                        allListData : res.result.medicine,
                        listData : res.result.medicine.slice(0,1),
                        allNewsData : res.result.news,
                        newsData : res.result.news.slice(0,2),
                        inputValue: e.detail.value,
                        contentType : '3'
                    });
                });
              },
              fail : function(res){
                Api.setStorage('history',[e.detail.value]);             
                ser.searchSer({key:e.detail.value},function(res){
                    _this.setData({
                        historyArr : [e.detail.value],
                        allListData : res.result.medicine,
                        listData : res.result.medicine.slice(0,1),
                        allNewsData : res.result.news,
                        newsData : res.result.news.slice(0,2),
                        inputValue: e.detail.value,
                        contentType : '3'
                    });
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
                ser.searchSer({key:text},function(res){
                    console.log(res.result.medicine);
                    console.log(res.result.news);
                    _this.setData({
                        allListData : res.result.medicine,
                        listData : res.result.medicine.slice(0,1),
                        allNewsData : res.result.news,
                        newsData : res.result.news.slice(0,2),
                        contentType : '3'
                    });
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

    searchMore : function(e){
        var id = e.currentTarget.dataset.type;
        var key = e.currentTarget.dataset.value;
        Api.go('listView',{ key : key ,id : id} );
    }
})