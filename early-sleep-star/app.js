const { getCheckinPeriod } = require('./utils/util')

App({
  onLaunch() {
    // 小程序启动时执行
    console.log('早睡星人小程序启动')

    // 检查登录状态
    this.checkLoginStatus()
  },

  globalData: {
    userInfo: null,
    currentCycle: null,
    currentGroup: null,
    serverTimeOffset: 0 // 服务器时间与本地时间的偏移量
  },

  // 检查登录状态
  checkLoginStatus() {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.globalData.userInfo = userInfo
    }
  },

  // 获取服务器时间（模拟）
  getServerTime() {
    // 实际项目中应通过API获取服务器时间
    // 这里用本地时间 + 预设偏移量模拟
    return Date.now() + this.globalData.serverTimeOffset
  },

  // 判断当前打卡时段（委托给 util.js，避免逻辑重复）
  getCheckinPeriod(timestamp) {
    return getCheckinPeriod(timestamp)
  }
})
