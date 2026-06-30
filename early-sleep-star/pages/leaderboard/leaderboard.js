const { mockMembers, resultMap, D } = require('../../utils/mock-data')

const currentUserId = D.app.currentUserId

/**
 * 根据排名获取颜色
 */
const getRankColor = idx => D.rankColors[idx] || D.rankColors[D.rankColors.length - 1]

Page({
  data: {
    // Tab
    activeTab: 'week',
    tabs: D.leaderboardTabs,

    // Top3
    top3: [],

    // 排名列表
    leaderboardList: [],

    // 当前用户排名
    myRank: 0
  },

  onLoad() {
    this.initData()
  },

  initData() {
    // 按本周早睡币排序
    const sorted = [...mockMembers].sort((a, b) => b.thisWeekCoins - a.thisWeekCoins)

    // 构建排行榜列表
    const leaderboardList = sorted.map((m, idx) => {
      const heatDots = m.thisWeekResults.map(r => {
        if (r === null) return 'future'
        return resultMap[r] ? resultMap[r].dotClass : 'absent'
      })

      return {
        rank: idx + 1,
        userId: m.userId,
        avatarLetter: m.avatarLetter,
        nickname: m.nickname,
        score: m.thisWeekCoins,
        heatDots,
        isMe: m.userId === currentUserId,
        rankColor: getRankColor(idx)
      }
    })

    // 构建Top3
    const top3 = sorted.slice(0, 3).map((m, idx) => ({
      rankClass: `rank-${idx + 1}`,
      avatarLetter: m.avatarLetter,
      nickname: m.nickname,
      coins: m.thisWeekCoins,
      titleIcon: m.titleIcon,
      titleName: m.title
    }))
    // 排列顺序: 第2名 | 第1名 | 第3名
    const top3Display = [top3[1], top3[0], top3[2]]

    // 当前用户排名
    const myRank = leaderboardList.find(l => l.isMe)?.rank || 0

    this.setData({
      top3: top3Display,
      leaderboardList,
      myRank
    })
  },

  // Tab切换
  onTabChange(e) {
    const key = e.currentTarget.dataset.key
    this.setData({ activeTab: key })

    // 实际项目中应根据tab切换数据源
    // 模拟数据只有一个维度
    if (key === 'history') {
      const sorted = [...mockMembers].sort((a, b) => b.totalCoins - a.totalCoins)
      const leaderboardList = sorted.map((m, idx) => ({
        rank: idx + 1,
        userId: m.userId,
        avatarLetter: m.avatarLetter,
        nickname: m.nickname,
        score: m.totalCoins,
        heatDots: [],
        isMe: m.userId === currentUserId,
        rankColor: getRankColor(idx)
      }))
      this.setData({ leaderboardList })
    } else if (key === 'streak') {
      // 模拟连续天数数据
      const streakData = mockMembers.map(m => ({
        ...m,
        streak: Math.floor(Math.random() * 7) + 1
      })).sort((a, b) => b.streak - a.streak)

      const leaderboardList = streakData.map((m, idx) => ({
        rank: idx + 1,
        userId: m.userId,
        avatarLetter: m.avatarLetter,
        nickname: m.nickname,
        score: m.streak,
        scoreLabel: '天',
        heatDots: [],
        isMe: m.userId === currentUserId,
        rankColor: getRankColor(idx)
      }))
      this.setData({ leaderboardList })
    } else {
      this.initData()
    }
  }
})
