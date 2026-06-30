const { getCheckinPeriod, getRemainingTime } = require('../../utils/util')
const { mockGroup, mockCycle, mockMembers, mockRecentCheckins, mockMyCheckinHistory, resultMap, D } = require('../../utils/mock-data')

Page({
  data: {
    // 当前轮次
    cycleInfo: {},
    groupInfo: {},
    dayNumber: 0,

    // 今日状态
    todayStatus: {
      checked: false,
      periodInfo: null,
      remaining: ''
    },

    // 7天进度
    weekDays: [],

    // 本周热力图
    heatmapDays: [],

    // 群动态
    recentCheckins: [],
    checkedCount: 0,
    totalCount: 0,

    // 提醒设置
    reminderOn: true,
    reminderTime: D.app.reminderTime
  },

  onLoad() {
    this.initData()
  },

  onShow() {
    // 每次显示时刷新时间
    this.updateTimeStatus()
  },

  initData() {
    const cycle = mockCycle
    const group = mockGroup

    // 构建轮次信息
    const cycleInfo = {
      roundNumber: D.cycle.roundNumber,
      dayNumber: cycle.dayNumber,
      statusText: `第 ${cycle.dayNumber} 天`,
      encourageText: this.getEncourageText(cycle.dayNumber)
    }

    // 构建7天进度
    const weekDays = this.buildWeekDays(cycle.dayNumber, mockMyCheckinHistory)

    // 构建热力图
    const heatmapDays = this.buildHeatmapDays(cycle.dayNumber, mockMyCheckinHistory)

    // 计算群打卡进度
    const checkedCount = mockRecentCheckins.length
    const totalCount = mockMembers.length

    this.setData({
      cycleInfo,
      groupInfo: group,
      dayNumber: cycle.dayNumber,
      weekDays,
      heatmapDays,
      recentCheckins: mockRecentCheckins,
      checkedCount,
      totalCount: `${checkedCount}/${totalCount}`
    })

    this.updateTimeStatus()
  },

  updateTimeStatus() {
    const now = Date.now()
    const periodInfo = getCheckinPeriod(now)
    const remaining = getRemainingTime()

    // 检查今日是否已打卡
    const todayResult = mockMyCheckinHistory.find(h => h.dayNumber === mockCycle.dayNumber)
    const checked = todayResult && todayResult.result !== null

    this.setData({
      todayStatus: {
        checked,
        periodInfo,
        remaining,
        periodEmoji: periodInfo.emoji,
        periodLabel: periodInfo.label
      }
    })
  },

  // 构建7天进度圆点
  buildWeekDays(currentDay, history) {
    const days = []
    const weekLabels = D.weekDays
    for (let i = 1; i <= 7; i++) {
      const dayData = history.find(h => h.dayNumber === i)
      let status = 'future'
      let display = weekLabels[i - 1]

      if (i < currentDay) {
        // 过去的天
        if (dayData && dayData.result) {
          status = dayData.result === 'gold' ? 'done' : 'late'
          display = weekLabels[i - 1] + '\n✓'
        } else {
          status = 'absent'
          display = weekLabels[i - 1] + '\n✗'
        }
      } else if (i === currentDay) {
        status = 'today'
        display = weekLabels[i - 1]
      }

      days.push({ day: i, status, display })
    }
    return days
  },

  // 构建热力图
  buildHeatmapDays(currentDay, history) {
    const days = []
    const weekLabels = D.weekDays
    for (let i = 1; i <= 7; i++) {
      const dayData = history.find(h => h.dayNumber === i)
      let cellClass = ''
      let display = '-'

      if (i <= currentDay && dayData && dayData.result) {
        const map = resultMap[dayData.result]
        cellClass = map.cellClass
        display = map.display
      } else if (i === currentDay && (!dayData || !dayData.result)) {
        // 今日未打卡
        cellClass = ''
        display = '-'
      }

      days.push({
        day: i,
        weekLabel: weekLabels[i - 1],
        cellClass,
        display,
        isCurrent: i === currentDay
      })
    }
    return days
  },

  getEncourageText(dayNumber) {
    return D.encourageTexts[dayNumber - 1] || D.encourageDefault
  },

  // 打卡按钮点击
  onCheckinTap() {
    wx.navigateTo({
      url: '/pages/checkin/checkin'
    })
  },

  // 提醒开关
  onReminderToggle() {
    this.setData({
      reminderOn: !this.data.reminderOn
    })
  }
})
