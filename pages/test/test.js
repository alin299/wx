// pages/test/test.js
var dataObj = require("../../data/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
      "/images/6.jpg",
      ],
    post:[{
      img:"/images/h/1.jpeg",
      title:"猫的水",
      content:"引子：“我就是突然很想要一只猫”“我家原住民，吃的是大牌猫粮，湿粮啥的我没有了解过，也没有时间”。 有钱是选到一位颜值高、性格好的布偶..."
      },
      {
        img: "/images/h/2.jpeg",
        title: "冥王之恋",
        content: "在48亿公里之外，我们曾收留过一位小兄弟。1930年2月18日，一个叫克莱德·汤博的年轻人以远超常人的勤奋观测，终于在夜空中一个偏远的角落发现了他，从此以后，我们就给了他一个大大的家。他在这个家里住的地方离我们很远，以至于在相当长的时间里，我们到不了他那里，无法给他一次正式有礼貌的拜访。可他似乎并不在乎我们的感受。他生活在黑暗之中，独来独往，拒绝集体活动，身上也没有表现出值得我们喜欢的特质。86年后，在我们还没真正见过他时，我们没有犹豫，把他赶出了这个我们称之为太阳系的家。"
      },
      {
        img: "/images/h/3.jpeg",
        title: "人和人的关系是化学反应",
        content: "人出生后身体中的物质再与环境中的食物、空气、水、以及其它们物质中的化学成份反应结合而成长，并受环境中的化学物质的影响而变化，从而产生形态、行为上的变化。这个过程中，构成人的物质元素在不断变化，不断地在人的身体中进进出出。它们的行为遵循什么规律呢？"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({post:dataObj.post})
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

  }
})