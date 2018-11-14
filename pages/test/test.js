// pages/test/test.js
var dataObj = require("../../data/data.js")
import {DBPost} from "../../data/DBPost.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (odeptions) {
    var db = new DBPost()
    this.setData({ imgUrls: db.getImageUrls(),post:db.getAllPostData()})
    // this.setData({ post: dataObj.post, imgUrls: dataObj.imgUrls})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onTapToDetail: function(event){
    var id = event.currentTarget.dataset.articleId;
    console.log(id);
    wx.navigateTo({
      url: 'detail/detail?id='+id,
    })
  }
})