/**
 * 早睡星人小程序 — 全局数据文件
 * 所有业务数据、配置常量、文案集中于此，JS 逻辑文件只负责处理。
 *
 * 注意：微信小程序的 require() 只支持 .js 模块，不支持直接引用 .json 文件，
 * 因此本文件使用 module.exports 导出（内容本身仍是纯数据，无逻辑）。
 */

module.exports = {
  app: {
    currentUserId: 'u005',
    reminderTime: '21:00'
  },

  group: {
    groupId: 'g001',
    name: '熬夜互助群',
    ownerId: 'u001',
    memberCount: 10,
    cycleFreq: 'weekly',
    status: 'active'
  },

  cycle: {
    cycleId: 'c003',
    groupId: 'g001',
    startDate: '2025-07-07',
    endDate: '2025-07-13',
    settleDate: '2025-07-14',
    penaltyPool: 39,
    status: 'active',
    dayNumber: 3,
    roundNumber: 3
  },

  members: [
    { userId: 'u001', nickname: '陈皮皮1', avatarLetter: 'C', totalCoins: 65, title: '自律达人', titleIcon: '🌟', thisWeekCoins: 20, thisWeekResults: ['gold', 'gold', 'gold', 'late', null, null, null], leaveUsed: false },
    { userId: 'u002', nickname: '王富贵', avatarLetter: 'W', totalCoins: 45, title: '早睡学徒', titleIcon: '⭐', thisWeekCoins: 16, thisWeekResults: ['gold', 'gold', 'gold', 'gold', null, null, null], leaveUsed: false },
    { userId: 'u003', nickname: '李四', avatarLetter: 'L', totalCoins: 35, title: '早睡学徒', titleIcon: '⭐', thisWeekCoins: 14, thisWeekResults: ['gold', 'gold', 'gold', 'late', null, null, null], leaveUsed: false },
    { userId: 'u004', nickname: '赵六', avatarLetter: 'Z', totalCoins: 25, title: '新手夜猫', titleIcon: '🌙', thisWeekCoins: 12, thisWeekResults: ['gold', 'gold', 'late', 'late', null, null, null], leaveUsed: true },
    { userId: 'u005', nickname: '你', avatarLetter: '你', totalCoins: 48, title: '自律达人', titleIcon: '🌟', thisWeekCoins: 10, thisWeekResults: ['gold', 'gold', 'absent', null, null, null, null], leaveUsed: false },
    { userId: 'u006', nickname: '张三', avatarLetter: '张', totalCoins: 18, title: '新手夜猫', titleIcon: '🌙', thisWeekCoins: 8, thisWeekResults: ['gold', 'late', 'fail', null, null, null, null], leaveUsed: false },
    { userId: 'u007', nickname: '刘七', avatarLetter: '刘', totalCoins: 12, title: '新手夜猫', titleIcon: '🌙', thisWeekCoins: 6, thisWeekResults: ['gold', 'fail', null, null, null, null, null], leaveUsed: false },
    { userId: 'u008', nickname: '孙八', avatarLetter: '孙', totalCoins: 8, title: '新手夜猫', titleIcon: '🌙', thisWeekCoins: 4, thisWeekResults: ['late', 'fail', null, null, null, null, null], leaveUsed: false },
    { userId: 'u009', nickname: '周九', avatarLetter: '周', totalCoins: 5, title: '新手夜猫', titleIcon: '🌙', thisWeekCoins: 2, thisWeekResults: ['fail', null, null, null, null, null, null], leaveUsed: false },
    { userId: 'u010', nickname: '吴十', avatarLetter: '吴', totalCoins: 3, title: '新手夜猫', titleIcon: '🌙', thisWeekCoins: 0, thisWeekResults: ['absent', null, null, null, null, null, null], leaveUsed: false }
  ],

  user: {
    userId: 'u005',
    nickname: '你的昵称',
    avatarLetter: 'N',
    phone: '138****1234',
    totalCoins: 48,
    title: '自律达人',
    titleIcon: '🌟',
    totalCheckinDays: 12,
    totalCycles: 3,
    leaveUsed: false,
    leaveRemaining: 1,
    deposit: {
      currentDeposit: 10,
      currentPenalty: 0,
      currentRefund: 10,
      rewardBalance: 12.50
    },
    medals: [
      { cycleId: 'c001', cycleNumber: 1, icon: '🌙', gradient: ['#ffd700', '#ff8f00'], name: '新月卫士', earned: true },
      { cycleId: 'c002', cycleNumber: 2, icon: '🔥', gradient: ['#ffd700', '#ff8f00'], name: '守夜卫士', earned: true },
      { cycleId: 'c003', cycleNumber: 3, icon: '🌙', gradient: ['#e0e0e0', '#bdbdbd'], name: '待解锁', earned: false }
    ],
    transactions: [
      { id: 't01', cycleNumber: 2, type: 'reward', amount: 7.60, sign: '+' },
      { id: 't02', cycleNumber: 2, type: 'deposit_refund', amount: 10.00, sign: '+' },
      { id: 't03', cycleNumber: 2, type: 'deposit_pay', amount: 10.00, sign: '-' },
      { id: 't04', cycleNumber: 1, type: 'net_income', amount: 5.20, sign: '+' }
    ]
  },

  recentCheckins: [
    { userId: 'u001', nickname: '陈皮皮1', avatarLetter: 'C', time: '21:12', result: 'gold', emoji: '🟢' },
    { userId: 'u002', nickname: '王富贵', avatarLetter: 'W', time: '21:05', result: 'gold', emoji: '🟢' },
    { userId: 'u004', nickname: '赵六', avatarLetter: 'Z', time: '23:15', result: 'late', emoji: '🟡' }
  ],

  myCheckinHistory: [
    { dayNumber: 1, weekDay: '周一', result: 'gold', time: '21:15', coins: 2, emoji: '🟢' },
    { dayNumber: 2, weekDay: '周二', result: 'gold', time: '22:01', coins: 2, emoji: '🟢' },
    { dayNumber: 3, weekDay: '周三', result: null, time: null, coins: null, emoji: null }
  ],

  resultMap: {
    gold: { cellClass: 'gold', dotClass: 'gold', display: '✓' },
    late: { cellClass: 'late', dotClass: 'late', display: '✓' },
    fail: { cellClass: 'fail', dotClass: 'fail', display: '✗' },
    absent: { cellClass: 'absent', dotClass: 'absent', display: '-' }
  },

  checkinWindows: [
    { period: 'gold', startMin: 1260, endMin: 1380, label: '早睡黄金时段', coins: 2, penalty: 0, emoji: '🟢' },
    { period: 'late', startMin: 1380, endMin: 1410, label: '勉强早睡', coins: 1, penalty: 1, emoji: '🟡' },
    { period: 'fail', startMin: 1410, endMin: 1440, label: '熬夜了', coins: 0, penalty: 2, emoji: '🔴' }
  ],

  defaultPeriod: {
    period: 'not_in_window',
    label: '非打卡时段',
    coins: 0,
    penalty: 0,
    emoji: '⚫'
  },

  titleTiers: [
    { level: 1, name: '新手夜猫', icon: '🌙', maxCoins: 10, prevThreshold: 0, nextThreshold: 11 },
    { level: 2, name: '早睡学徒', icon: '⭐', maxCoins: 30, prevThreshold: 11, nextThreshold: 31 },
    { level: 3, name: '自律达人', icon: '🌟', maxCoins: 60, prevThreshold: 31, nextThreshold: 61 },
    { level: 4, name: '早睡之星', icon: '💫', maxCoins: 100, prevThreshold: 61, nextThreshold: 101 },
    { level: 5, name: '睡眠之王', icon: '👑', maxCoins: null, prevThreshold: 101, nextThreshold: null }
  ],

  weekDays: ['一', '二', '三', '四', '五', '六', '日'],

  encourageTexts: [
    '新的一轮开始了！',
    '坚持就是胜利！',
    '继续加油，保持早睡！',
    '已经过半啦，稳住！',
    '冲刺阶段，不要松懈！',
    '最后一天打卡！',
    '完美收官！'
  ],

  encourageDefault: '继续加油！',

  questions: [
    { id: 1, text: '今天月亮是圆的还是弯的？', options: [{ label: '🌕 圆的', value: 'round' }, { label: '🌙 弯的', value: 'curved' }], anyCorrect: true },
    { id: 2, text: '1 + 7 等于几？', options: [{ label: '6', value: '6' }, { label: '8', value: '8' }], correctValue: '8' },
    { id: 3, text: '你今天喝了几杯水？', options: [{ label: '1杯', value: '1' }, { label: '3杯', value: '3' }, { label: '5杯', value: '5' }], anyCorrect: true },
    { id: 4, text: '现在是白天还是晚上？', options: [{ label: '☀️ 白天', value: 'day' }, { label: '🌙 晚上', value: 'night' }], correctValue: 'night' },
    { id: 5, text: '你准备睡觉了吗？', options: [{ label: '是的，马上睡！', value: 'yes' }, { label: '再玩一会...', value: 'no' }], correctValue: 'yes' },
    { id: 6, text: '5 × 2 等于几？', options: [{ label: '8', value: '8' }, { label: '10', value: '10' }], correctValue: '10' },
    { id: 7, text: '今天是什么颜色的天空？', options: [{ label: '蓝色', value: 'blue' }, { label: '黑色', value: 'black' }], correctValue: 'black' },
    { id: 8, text: '3 + 4 等于几？', options: [{ label: '6', value: '6' }, { label: '7', value: '7' }], correctValue: '7' }
  ],

  leaderboardTabs: [
    { key: 'week', label: '本周排行' },
    { key: 'history', label: '历史总榜' },
    { key: 'streak', label: '连续天数' }
  ],

  rankColors: [
    'var(--clr-gold)',
    'var(--clr-silver)',
    'var(--clr-bronze)',
    'var(--clr-text-secondary)'
  ],

  profileMenu: [
    { icon: '💰', text: '押金与奖励', action: 'wallet' },
    { icon: '📊', text: '睡眠周报', action: 'report' },
    { icon: '🔔', text: '提醒设置', action: 'reminder' },
    { icon: '📋', text: '活动规则', action: 'rules' }
  ],

  profileStats: [
    { field: 'totalCoins', label: '累积早睡币' },
    { field: 'totalCheckinDays', label: '总打卡天数' },
    { field: 'totalCycles', label: '参与轮数' }
  ],

  transactionLabels: {
    reward: '奖励',
    deposit_refund: '押金退还',
    deposit_pay: '缴纳押金',
    net_income: '净收益'
  },

  rules: {
    title: '活动规则',
    content: '🟢 21:00-23:00 → +22币 · 扣0元\n🟡 23:00-23:30 → +1币 · 扣1元\n🔴 23:30后 → +0币 · 扣2元\n⚫ 未打卡 → +0币 · 扣2元\n\n封顶扣除10元/轮（等于押金）'
  },

  checkinSuccess: {
    emoji: '🌙✨',
    text: '晚安，早睡星人！'
  }
}
