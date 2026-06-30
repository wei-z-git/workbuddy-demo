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

  // 判断当前打卡时段
  getCheckinPeriod(timestamp) {
    const date = new Date(timestamp)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const timeValue = hours * 100 + minutes

    if (timeValue >= 2100 && timeValue < 2300) {
      return { period: 'gold', label: '早睡黄金时段', coins: 2, penalty: 0, emoji: '🟢' }
    } else if (timeValue >= 2300 && timeValue < 2330) {
      return { period: 'late', label: '勉强早睡', coins: 1, penalty: 1, emoji: '🟡' }
    } else if (timeValue >= 2330) {
      return { period: 'fail', label: '熬夜了', coins: 0, penalty: 2, emoji: '🔴' }
    } else {
      return { period: 'not_in_window', label: '非打卡时段', coins: 0, penalty: 0, emoji: '⚫' }
    }
  }
})
