/**
 * 工具函数（纯逻辑层）
 * 所有配置数据从 data.js 读取。
 */

const D = require('./data')

/* ===== 时间格式化 ===== */

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
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

/* ===== 打卡时段相关 ===== */

/**
 * 判断打卡时段
 * 根据 data.js 中的 checkinWindows 配置判断
 */
const getCheckinPeriod = timestamp => {
  const date = new Date(timestamp)
  const totalMin = date.getHours() * 60 + date.getMinutes()

  const window = D.checkinWindows.find(w => totalMin >= w.startMin && totalMin < w.endMin)
  if (window) {
    return {
      period: window.period,
      label: window.label,
      coins: window.coins,
      penalty: window.penalty,
      emoji: window.emoji
    }
  }
  return { ...D.defaultPeriod }
}

/**
 * 计算距离当前打卡窗口结束的剩余时间
 */
const getRemainingTime = () => {
  const now = new Date()
  const currentMin = now.getHours() * 60 + now.getMinutes()

  const currentWindow = D.checkinWindows.find(w => currentMin >= w.startMin && currentMin < w.endMin)
  // 在打卡窗口内时，倒计时到当前窗口结束；不在窗口内时，倒计时到整个打卡窗口结束
  const lastWindow = D.checkinWindows[D.checkinWindows.length - 1]
  const endTimeMinutes = currentWindow ? currentWindow.endMin : lastWindow.endMin

  const remaining = endTimeMinutes - currentMin
  if (remaining <= 0) return '0m'

  const remHours = Math.floor(remaining / 60)
  const remMinutes = remaining % 60

  if (remHours > 0) {
    return `${remHours}h${remMinutes}m`
  }
  return `${remMinutes}m`
}

/* ===== 题库相关 ===== */

/**
 * 获取随机睡前小问
 */
const getRandomQuestion = () => {
  const questions = D.questions
  const idx = Math.floor(Math.random() * questions.length)
  return questions[idx]
}

/* ===== 称号相关 ===== */

/**
 * 根据累积早睡币获取称号
 */
const getTitleByCoins = totalCoins => {
  for (const tier of D.titleTiers) {
    if (tier.maxCoins === null || totalCoins <= tier.maxCoins) {
      return {
        name: tier.name,
        icon: tier.icon,
        level: tier.level,
        nextThreshold: tier.nextThreshold
      }
    }
  }
  // 兜底：返回最高级
  const last = D.titleTiers[D.titleTiers.length - 1]
  return { name: last.name, icon: last.icon, level: last.level, nextThreshold: null }
}

/* ===== 其他 ===== */

/**
 * 获取星期几简称
 */
const getWeekDayShort = (dayIndex) => {
  const days = D.weekDays
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
