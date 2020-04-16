//app.js
App({
  onLaunch: function () {
    if (wx.cloud) {
      wx.cloud.init({
        env: "cloud-tang-peotry-q9b9q",
        traceUser: true
      });
    }
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    });
  },
  globalData: {
    IsFirstLogin: false,
  }
})