var modal = require('../../util/modal');
var util = require('../../util/util');
var ser = require('./service');
var Api = require('../../wx/api');
var app = getApp();

Page({
    data: {
        listData: null,
        images : {}
    },

    onLoad : function(options){
        var _this = this;
        console.log(options);
        ser.getMedicineDetailSer({id : options.id},function(res){

            _this.setData({
                listData : res.result
            });
        });
    },
    imageLoad : function(e){
        var size = util.imageUtil(e);
        var image = this.data.images; 
      //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
      console.log(size);
      console.log(e.currentTarget.dataset.imageid);      
      image[e.currentTarget.dataset.imageid]={
         width:size.imageWidth,
         height:size.imageHeight
      }
      console.log(image);
      this.setData({
           images:image
      })  
    }
})