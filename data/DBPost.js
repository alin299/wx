class DBPost {
  constructor(url) {
    this.storageKeyName = "post";
  }
  getAllPostData() {
    console.log("获取缓存")
    var res = wx.getStorageSync("post");
    if (!res) {
      console.log("缓存为空")
      var dataObj = require("data.js");
      res = dataObj.post;
      wx.setStorageSync("post", res);
    }
    return res;
  }
  getImageUrls() {
    console.log("获取缓存")
    var res = wx.getStorageSync("imgUrls");
    if (!res) {
      console.log("缓存为空")
      var dataObj = require("data.js");
      res = dataObj.getImgUrls();
      wx.setStorageSync("imgUrls", res);
    }
    return res;
  }
  execSetStorage(data) {
    wx.setStorageSync(this.storageKeyName, data)
  }
};
export {
  DBPost
}