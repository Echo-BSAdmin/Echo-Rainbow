// pages/index/index.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    PageCur: 'basics'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if(!app.globalData.IsFirstLogin) {
      app.globalData.IsFirstLogin = !app.globalData.IsFirstLogin;
      wx.cloud.callFunction({
        name: 'cloud_common_db',
        data: {
          type:"insert",
          db:"t_login_log",
          data:{
            create_time: new Date()
          }
        },
        success(res) {
          console.log(res);
        },
        fail(err) {
          console.log(err);
        }
      });
    }
  },

  /**
   * 底部导航栏切换事件
   */
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  }
})