const { mockUser, mockCycle } = require('../../utils/mock-data')

Page({
  data: {
    // 余额
    rewardBalance: 0,

    // 当前押金状态
    depositInfo: {},
    cycleNumber: 0,

    // 交易明细
    transactions: []
  },

  onLoad() {
    this.initData()
  },

  initData() {
    const user = mockUser
    const cycle = mockCycle

    const depositInfo = {
      paid: user.deposit.currentDeposit,
      penalty: user.deposit.currentPenalty,
      refund: user.deposit.currentRefund
    }

    const transactions = user.transactions.map(t => ({
      ...t,
      amountStr: `${t.sign}¥${t.amount.toFixed(2)}`,
      color: t.sign === '+' ? 'var(--clr-success)' : 'var(--clr-error)',
      label: this.getTransactionLabel(t)
    }))

    this.setData({
      rewardBalance: user.deposit.rewardBalance,
      depositInfo,
      cycleNumber: 3,
      transactions
    })
  },

  getTransactionLabel(t) {
    const labels = {
      reward: '奖励',
      deposit_refund: '押金退还',
      deposit_pay: '缴纳押金',
      net_income: '净收益'
    }
    return `第${t.cycleNumber}轮 · ${labels[t.type] || t.type}`
  },

  // 提现
  onWithdraw() {
    if (this.data.rewardBalance < 1) {
      wx.showToast({ title: '余额不足1元，无法提现', icon: 'none' })
      return
    }

    wx.showModal({
      title: '确认提现',
      content: `将 ¥${this.data.rewardBalance.toFixed(2)} 提现至微信余额`,
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '提现申请已提交', icon: 'success' })
        }
      }
    })
  }
})
