const { formatTimeString, getCheckinPeriod, getRemainingTime, getRandomQuestion } = require('../../utils/util')
const { mockCycle, mockMyCheckinHistory, mockUser, resultMap } = require('../../utils/mock-data')

Page({
  data: {
    // 时间显示
    serverTime: '',
    periodInfo: null,
    remaining: '',
    inCheckinWindow: true,

    // 睡前小问
    showQuestion: false,
    currentQuestion: null,

    // 打卡成功
    showSuccess: false,
    successInfo: null,

    // 请假弹窗
    showLeave: false,
    leaveUsed: false,
    leaveRemaining: 1,

    // 打卡历史
    checkinHistory: []

  },

  onLoad() {
    this.initData()
    this.startClock()
  },

  onUnload() {
    if (this._clockTimer) {
      clearInterval(this._clockTimer)
    }
  },

  initData() {
    const periodInfo = getCheckinPeriod(Date.now())
    const remaining = getRemainingTime()
    const inCheckinWindow = periodInfo.period !== 'not_in_window'

    // 构建打卡历史
    const checkinHistory = mockMyCheckinHistory.map(h => {
      if (h.result) {
        const map = resultMap[h.result]
        return {
          ...h,
          cellClass: map.cellClass,
          emojiColor: h.result === 'gold' ? 'var(--clr-success)' : h.result === 'late' ? 'var(--clr-warning)' : 'var(--clr-error)',
          statusText: `${h.emoji} ${h.time} · +${h.coins}币`
        }
      }
      return {
        ...h,
        cellClass: '',
        emojiColor: 'var(--clr-text-muted)',
        statusText: '待打卡'
      }
    })

    this.setData({
      periodInfo,
      remaining,
      inCheckinWindow,
      checkinHistory,
      leaveUsed: mockUser.leaveUsed,
      leaveRemaining: mockUser.leaveRemaining
    })
  },

  startClock() {
    this.updateClock()
    this._clockTimer = setInterval(() => {
      this.updateClock()
    }, 1000)
  },

  updateClock() {
    const now = Date.now()
    const serverTime = formatTimeString(now)
    const periodInfo = getCheckinPeriod(now)
    const remaining = getRemainingTime()
    const inCheckinWindow = periodInfo.period !== 'not_in_window'

    this.setData({
      serverTime,
      periodInfo,
      remaining,
      inCheckinWindow
    })
  },

  // 打卡按钮点击
  onCheckinTap() {
    if (!this.data.inCheckinWindow) {
      wx.showToast({ title: '非打卡时段', icon: 'none' })
      return
    }

    // 弹出睡前小问
    const question = getRandomQuestion()
    this.setData({
      showQuestion: true,
      currentQuestion: question
    })
  },

  // 回答睡前小问
  onAnswerQuestion(e) {
    const value = e.currentTarget.dataset.value
    const question = this.data.currentQuestion

    // 判断是否正确
    let isCorrect = false
    if (question.anyCorrect) {
      isCorrect = true
    } else if (question.correctValue === value) {
      isCorrect = true
    }

    // 关闭问题弹窗
    this.setData({ showQuestion: false, currentQuestion: null })

    if (!isCorrect) {
      wx.showToast({ title: '回答错误，请重新打卡', icon: 'none' })
      return
    }

    // 打卡成功 - 计算结果
    const now = Date.now()
    const periodInfo = getCheckinPeriod(now)

    const successInfo = {
      emoji: '🌙✨',
      text: '晚安，早睡星人！',
      coins: `+${periodInfo.coins} 🪙`,
      time: formatTimeString(now).substring(0, 5),
      periodLabel: periodInfo.label,
      periodEmoji: periodInfo.emoji
    }

    this.setData({
      showSuccess: true,
      successInfo
    })
  },

  // 关闭成功弹窗
  onCloseSuccess() {
    this.setData({ showSuccess: false, successInfo: null })
    wx.showToast({ title: '打卡成功！', icon: 'success' })
  },

  // 请假
  onRequestLeave() {
    if (this.data.leaveUsed) {
      wx.showToast({ title: '本轮已使用请假', icon: 'none' })
      return
    }
    this.setData({ showLeave: true })
  },

  onConfirmLeave() {
    this.setData({
      showLeave: false,
      leaveUsed: true,
      leaveRemaining: 0
    })
    wx.showToast({ title: '请假成功', icon: 'success' })
  },

  onCancelLeave() {
    this.setData({ showLeave: false })
  },

  // 关闭弹窗通用
  onCloseModal() {
    this.setData({ showQuestion: false, showLeave: false })
  }
})
