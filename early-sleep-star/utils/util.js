/**
 * 工具函数
 */

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 格式化时间为 HH:mm:ss
 */
const formatTimeString = timestamp => {
  const date = new Date(timestamp)
  const h = String(date.getHours()).padStart(2, '0')
  const m = String(date.getMinutes()).padStart(2, '0')
  const s = String(date.getSeconds()).padStart(2, '0')
  return `${h}:${m}:${s}`
}

/**
 * 格式化时间为 HH:mm
 */
const formatTimeShort = timestamp => {
  const date = new Date(timestamp)
  const h = String(date.getHours()).padStart(2, '0')
  const m = String(date.getMinutes()).padStart(2, '0')
  return `${h}:${m}`
}

/**
 * 判断打卡时段
 */
const getCheckinPeriod = timestamp => {
  const date = new Date(timestamp)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const timeValue = hours * 100 + minutes

  if (timeValue >= 2100 && timeValue < 2300) {
    return { period: 'gold', label: '早睡黄金时段', coins: 2, penalty: 0, emoji: '🟢' }
  } else if (timeValue >= 2300 && timeValue < 2330) {
    return { period: 'late', label: '勉强早睡', coins: 1, penalty: 1, emoji: '🟡' }
  } else if (timeValue >= 2330 || timeValue < 2100) {
    if (timeValue >= 2330) {
      return { period: 'fail', label: '熬夜了', coins: 0, penalty: 2, emoji: '🔴' }
    }
    return { period: 'not_in_window', label: '非打卡时段', coins: 0, penalty: 0, emoji: '⚫' }
  }
  return { period: 'not_in_window', label: '非打卡时段', coins: 0, penalty: 0, emoji: '⚫' }
}

/**
 * 计算距离打卡窗口结束的剩余时间
 */
const getRemainingTime = () => {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const timeValue = hours * 100 + minutes

  // 打卡窗口 21:00 - 23:30
  let endTimeMinutes = 23 * 60 + 30 // 23:30 = 1410分钟
  let currentTimeMinutes = hours * 60 + minutes

  if (timeValue >= 2100 && timeValue < 2300) {
    // 黄金时段结束于23:00
    endTimeMinutes = 23 * 60 // 23:00 = 1380分钟
  } else if (timeValue >= 2300 && timeValue < 2330) {
    // 勉强时段结束于23:30
    endTimeMinutes = 23 * 60 + 30
  }

  const remaining = endTimeMinutes - currentTimeMinutes
  const remHours = Math.floor(remaining / 60)
  const remMinutes = remaining % 60

  if (remHours > 0) {
    return `${remHours}h${remMinutes}m`
  }
  return `${remMinutes}m`
}

/**
 * 获取随机睡前小问
 */
const getRandomQuestion = () => {
  const questions = [
    { id: 1, text: '今天月亮是圆的还是弯的？', options: [{ label: '🌕 圆的', value: 'round' }, { label: '🌙 弯的', value: 'curved' }], anyCorrect: true },
    { id: 2, text: '1 + 7 等于几？', options: [{ label: '6', value: '6' }, { label: '8', value: '8' }], correctValue: '8' },
    { id: 3, text: '你今天喝了几杯水？', options: [{ label: '1杯', value: '1' }, { label: '3杯', value: '3' }, { label: '5杯', value: '5' }], anyCorrect: true },
    { id: 4, text: '现在是白天还是晚上？', options: [{ label: '☀️ 白天', value: 'day' }, { label: '🌙 晚上', value: 'night' }], correctValue: 'night' },
    { id: 5, text: '你准备睡觉了吗？', options: [{ label: '是的，马上睡！', value: 'yes' }, { label: '再玩一会...', value: 'no' }], correctValue: 'yes' },
    { id: 6, text: '5 × 2 等于几？', options: [{ label: '8', value: '8' }, { label: '10', value: '10' }], correctValue: '10' },
    { id: 7, text: '今天是什么颜色的天空？', options: [{ label: '蓝色', value: 'blue' }, { label: '黑色', value: 'black' }], correctValue: 'black' },
    { id: 8, text: '3 + 4 等于几？', options: [{ label: '6', value: '6' }, { label: '7', value: '7' }], correctValue: '7' }
  ]

  const idx = Math.floor(Math.random() * questions.length)
  return questions[idx]
}

/**
 * 根据累积早睡币获取称号
 */
const getTitleByCoins = totalCoins => {
  if (totalCoins <= 10) return { name: '新手夜猫', icon: '🌙', level: 1, nextThreshold: 11 }
  if (totalCoins <= 30) return { name: '早睡学徒', icon: '⭐', level: 2, nextThreshold: 31 }
  if (totalCoins <= 60) return { name: '自律达人', icon: '🌟', level: 3, nextThreshold: 61 }
  if (totalCoins <= 100) return { name: '早睡之星', icon: '💫', level: 4, nextThreshold: 101 }
  return { name: '睡眠之王', icon: '👑', level: 5, nextThreshold: null }
}

/**
 * 获取星期几简称
 */
const getWeekDayShort = (dayIndex) => {
  const days = ['一', '二', '三', '四', '五', '六', '日']
  return days[dayIndex] || ''
}

module.exports = {
  formatTime,
  formatTimeString,
  formatTimeShort,
  getCheckinPeriod,
  getRemainingTime,
  getRandomQuestion,
  getTitleByCoins,
  getWeekDayShort
}
