const { getTitleByCoins } = require('../../utils/util')
const { mockUser, D } = require('../../utils/mock-data')

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

    // 称号升级进度 — 从 titleTiers 配置读取阈值
    let progressPercent = 0
    if (titleInfo.nextThreshold) {
      const tier = D.titleTiers.find(t => t.level === titleInfo.level)
      const prevThreshold = tier ? tier.prevThreshold : 0
      progressPercent = Math.round((user.totalCoins - prevThreshold) / (titleInfo.nextThreshold - prevThreshold) * 100)
    } else {
      progressPercent = 100
    }

    // 统计网格 — 从 profileStats 配置构建
    const stats = D.profileStats.map(s => ({
      value: user[s.field],
      label: s.label
    }))

    // 勋章
    const medals = user.medals.map(m => ({
      ...m,
      gradientStr: m.gradient.join(','),
      opacity: m.earned ? 1 : 0.4,
      displayIcon: m.earned ? m.icon : '🔒'
    }))

    // 菜单项 — 从 profileMenu 配置构建，补充动态文案
    const menuItems = D.profileMenu.map(item => {
      let right = '→'
      if (item.action === 'wallet') {
        right = `余额 ¥${user.deposit.rewardBalance.toFixed(2)} →`
      } else if (item.action === 'reminder') {
        right = `${D.app.reminderTime} →`
      }
      return { ...item, right }
    })

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
        title: D.rules.title,
        content: D.rules.content,
        showCancel: false
      })
    } else if (action === 'report') {
      wx.showToast({ title: '功能开发中', icon: 'none' })
    } else if (action === 'reminder') {
      wx.showToast({ title: '功能开发中', icon: 'none' })
    }
  }
})
