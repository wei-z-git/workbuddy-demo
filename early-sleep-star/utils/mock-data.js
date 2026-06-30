/**
 * 数据加载层
 * 所有业务数据从 data.js 读取，JS 文件不再持有硬编码数据。
 * 保留原有导出名以兼容页面引用。
 */

const D = require('./data')

const mockGroup = D.group
const mockCycle = D.cycle
const mockMembers = D.members
const mockUser = D.user
const mockRecentCheckins = D.recentCheckins
const mockMyCheckinHistory = D.myCheckinHistory
const resultMap = D.resultMap

module.exports = {
  mockGroup,
  mockCycle,
  mockMembers,
  mockUser,
  mockRecentCheckins,
  mockMyCheckinHistory,
  resultMap,
  // 同时导出完整数据对象，供需要额外字段的页面使用
  D
}
