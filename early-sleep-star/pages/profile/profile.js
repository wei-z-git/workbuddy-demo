const { getTitleByCoins } = require('../../utils/util')
const { mockUser } = require('../../utils/mock-data')

Page({
  data: {
    // 用户信息
    userInfo: {},
    titleInfo: {},
    progressPercent: 0,

    // 统计
    stats: [],
    totalCoins: 0,
    totalCheckinDays: 0,
    totalCycles: 0,

    // 勋章
    medals: [],

    // 菜单
    menuItems: []
  },

  onLoad() {
    this.initData()
  },

  initData() {
    const user = mockUser
    const titleInfo = getTitleByCoins(user.totalCoins)

    // 称号升级进度
    let progressPercent = 0
    if (titleInfo.nextThreshold) {
      const prevThreshold = titleInfo.level === 1 ? 0 :
        titleInfo.level === 2 ? 11 :
        titleInfo.level === 3 ? 31 :
        titleInfo.level === 4 ? 61 : 101
      progressPercent = Math.round((user.totalCoins - prevThreshold) / (titleInfo.nextThreshold - prevThreshold) * 100)
    } else {
      progressPercent = 100
    }

    // 统计网格
    const stats = [
      { value: user.totalCoins, label: '累积早睡币' },
      { value: user.totalCheckinDays, label: '总打卡天数' },
      { value: user.totalCycles, label: '参与轮数' }
    ]

    // 勋章
    const medals = user.medals.map(m => ({
      ...m,
      gradientStr: m.gradient.join(','),
      opacity: m.earned ? 1 : 0.4,
      displayIcon: m.earned ? m.icon : '🔒'
    }))

    // 菜单项
    const menuItems = [
      { icon: '💰', text: '押金与奖励', right: `余额 ¥${user.deposit.rewardBalance.toFixed(2)} →`, action: 'wallet' },
      { icon: '📊', text: '睡眠周报', right: '→', action: 'report' },
      { icon: '🔔', text: '提醒设置', right: '21:00 →', action: 'reminder' },
      { icon: '📋', text: '活动规则', right: '→', action: 'rules' }
    ]

    this.setData({
      userInfo: user,
      titleInfo,
      progressPercent,
      stats,
      medals,
      menuItems,
      totalCoins: user.totalCoins,
      totalCheckinDays: user.totalCheckinDays,
      totalCycles: user.totalCycles
    })
  },

  // 菜单点击
  onMenuTap(e) {
    const action = e.currentTarget.dataset.action
    if (action === 'wallet') {
      wx.navigateTo({
        url: '/pages/wallet/wallet'
      })
    } else if (action === 'rules') {
      wx.showModal({
        title: '活动规则',
        content: '🟢 21:00-23:00 → +2币 · 扣0元\n🟡 23:00-23:30 → +1币 · 扣1元\n🔴 23:30后 → +0币 · 扣2元\n⚫ 未打卡 → +0币 · 扣2元\n\n封顶扣除10元/轮（等于押金）',
        showCancel: false
      })
    } else if (action === 'report') {
      wx.showToast({ title: '功能开发中', icon: 'none' })
    } else if (action === 'reminder') {
      wx.showToast({ title: '功能开发中', icon: 'none' })
    }
  }
})
