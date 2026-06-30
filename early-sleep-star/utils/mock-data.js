/**
 * 模拟数据层
 * 实际项目中应替换为真实API调用
 */

const mockGroup = {
  groupId: 'g001',
  name: '熬夜互助群',
  ownerId: 'u001',
  memberCount: 10,
  cycleFreq: 'weekly',
  status: 'active'
}

const mockCycle = {
  cycleId: 'c003',
  groupId: 'g001',
  startDate: '2025-07-07',
  endDate: '2025-07-13',
  settleDate: '2025-07-14',
  penaltyPool: 39,
  status: 'active',
  dayNumber: 3 // 当前是第3天
}

const mockMembers = [
  { userId: 'u001', nickname: '陈皮皮', avatarLetter: 'C', totalCoins: 65, title: '自律达人', titleIcon: '🌟', thisWeekCoins: 20, thisWeekResults: ['gold', 'gold', 'gold', 'late', null, null, null], leaveUsed: false },
  { userId: 'u002', nickname: '王富贵', avatarLetter: 'W', totalCoins: 45, title: '早睡学徒', titleIcon: '⭐', thisWeekCoins: 16, thisWeekResults: ['gold', 'gold', 'gold', 'gold', null, null, null], leaveUsed: false },
  { userId: 'u003', nickname: '李四', avatarLetter: 'L', totalCoins: 35, title: '早睡学徒', titleIcon: '⭐', thisWeekCoins: 14, thisWeekResults: ['gold', 'gold', 'gold', 'late', null, null, null], leaveUsed: false },
  { userId: 'u004', nickname: '赵六', avatarLetter: 'Z', totalCoins: 25, title: '新手夜猫', titleIcon: '🌙', thisWeekCoins: 12, thisWeekResults: ['gold', 'gold', 'late', 'late', null, null, null], leaveUsed: true },
  { userId: 'u005', nickname: '你', avatarLetter: '你', totalCoins: 48, title: '自律达人', titleIcon: '🌟', thisWeekCoins: 10, thisWeekResults: ['gold', 'gold', 'absent', null, null, null, null], leaveUsed: false },
  { userId: 'u006', nickname: '张三', avatarLetter: '张', totalCoins: 18, title: '新手夜猫', titleIcon: '🌙', thisWeekCoins: 8, thisWeekResults: ['gold', 'late', 'fail', null, null, null, null], leaveUsed: false },
  { userId: 'u007', nickname: '刘七', avatarLetter: '刘', totalCoins: 12, title: '新手夜猫', titleIcon: '🌙', thisWeekCoins: 6, thisWeekResults: ['gold', 'fail', null, null, null, null, null], leaveUsed: false },
  { userId: 'u008', nickname: '孙八', avatarLetter: '孙', totalCoins: 8, title: '新手夜猫', titleIcon: '🌙', thisWeekCoins: 4, thisWeekResults: ['late', 'fail', null, null, null, null, null], leaveUsed: false },
  { userId: 'u009', nickname: '周九', avatarLetter: '周', totalCoins: 5, title: '新手夜猫', titleIcon: '🌙', thisWeekCoins: 2, thisWeekResults: ['fail', null, null, null, null, null, null], leaveUsed: false },
  { userId: 'u010', nickname: '吴十', avatarLetter: '吴', totalCoins: 3, title: '新手夜猫', titleIcon: '🌙', thisWeekCoins: 0, thisWeekResults: ['absent', null, null, null, null, null, null], leaveUsed: false }
]

const mockUser = {
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
}

const mockRecentCheckins = [
  { userId: 'u001', nickname: '陈皮皮', avatarLetter: 'C', time: '21:12', result: 'gold', emoji: '🟢' },
  { userId: 'u002', nickname: '王富贵', avatarLetter: 'W', time: '21:05', result: 'gold', emoji: '🟢' },
  { userId: 'u004', nickname: '赵六', avatarLetter: 'Z', time: '23:15', result: 'late', emoji: '🟡' }
]

const mockMyCheckinHistory = [
  { dayNumber: 1, weekDay: '周一', result: 'gold', time: '21:15', coins: 2, emoji: '🟢' },
  { dayNumber: 2, weekDay: '周二', result: 'gold', time: '22:01', coins: 2, emoji: '🟢' },
  { dayNumber: 3, weekDay: '周三', result: null, time: null, coins: null, emoji: null }
]

// 打卡结果映射到热力图样式
const resultMap = {
  gold: { cellClass: 'gold', dotClass: 'gold', display: '✓' },
  late: { cellClass: 'late', dotClass: 'late', display: '✓' },
  fail: { cellClass: 'fail', dotClass: 'fail', display: '✗' },
  absent: { cellClass: 'absent', dotClass: 'absent', display: '-' }
}

module.exports = {
  mockGroup,
  mockCycle,
  mockMembers,
  mockUser,
  mockRecentCheckins,
  mockMyCheckinHistory,
  resultMap
}
