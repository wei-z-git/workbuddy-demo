# 早睡星人 — 微信小程序启动指南

## 项目结构

```
early-sleep-star/
├── app.js              # 小程序入口
├── app.json            # 全局配置（页面路由、tabBar、窗口样式）
├── app.wxss            # 全局样式（设计Token + 通用组件样式）
├── project.config.json # 项目配置（appid、编译设置）
├── sitemap.json        # 紙站地图
├── images/             # tabBar 图标
│   ├── tab-home.png / tab-home-active.png
│   ├── tab-checkin.png / tab-checkin-active.png
│   ├── tab-rank.png / tab-rank-active.png
│   ├── tab-profile.png / tab-profile-active.png
├── pages/              # 5个页面
│   ├── home/           # 首页（状态横幅+打卡入口+热力图+群动态）
│   ├── checkin/        # 打卡页（时钟+打卡按钮+睡前小问+成功动画）
│   ├── leaderboard/    # 排行榜（本周/历史/连续 Top3+列表）
│   ├── profile/        # 个人中心（统计+称号进度+勋章墙+菜单）
│   └── wallet/         # 钱包（余额+押金状态+历史明细）
├── utils/              # 工具函数
│   ├── util.js         # 时间格式化、打卡时段判断、随机出题、称号计算
│   └── mock-data.js    # 模拟数据（实际项目替换为API）
└── components/         # 预留组件目录（可进一步拆分）
```

## 启动方式

### 前置条件

1. 安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 注册微信小程序账号（或在开发者工具中使用测试号）

### 步骤

1. **打开微信开发者工具**

2. **导入项目**
   - 点击「导入项目」或「+」新建项目
   - 项目目录选择：`early-sleep-star` 文件夹所在路径
   - AppID：填入你的小程序 AppID，或选择「测试号」
   - 项目名称：早睡星人（自动读取）

3. **编译运行**
   - 导入后开发者工具会自动编译
   - 左侧模拟器中可看到小程序运行效果
   - 点击底部 tabBar 切换页面

4. **调试技巧**
   - 控制台 Console：查看日志输出
   - Network：查看网络请求（模拟数据无实际请求）
   - AppData：查看页面数据绑定状态
   - 点击打卡按钮可触发睡前小问 → 打卡成功动画

### 注意事项

- `project.config.json` 中 appid 为占位值 `wx0000000000000000`，需替换为实际 AppID
- 当前使用模拟数据（`mock-data.js`），实际项目需对接后端 API
- tabBar 图标为简单的圆形占位图标，可替换为实际设计的图标
- 微信支付（押金缴纳/提现）功能需要商户号和后端支持，当前为模拟
- 微信服务通知（每日提醒）需要订阅消息模板配置

## 页面功能说明

| 页面 | 功能 | 交互 |
|------|------|------|
| 首页 | 轮次状态、今日打卡、热力图、群动态 | 点击环形按钮→跳转打卡页 |
| 打卡页 | 实时时钟、打卡按钮、睡前小问 | 打卡→小问弹窗→成功动画 |
| 排行榜 | 本周/历史/连续天数切换 | Tab切换、排名列表展示 |
| 个人中心 | 统计、称号进度、勋章墙、菜单 | 点击菜单跳转钱包/弹窗规则 |
| 钱包 | 余额、押金状态、明细 | 提现按钮、余额查看 |

## 设计Token

| Token | 值 | 用途 |
|-------|-----|------|
| --clr-accent | #F5A623 | 主色调（暖琥珀） |
| --clr-night | #2D3B5A | 夜空蓝（深色背景） |
| --clr-success | #4CAF50 | 早睡成功 |
| --clr-warning | #FF9800 | 勉强早睡 |
| --clr-error | #E53935 | 熬夜/失败 |
| --clr-bg | #F5F3F0 | 页面背景 |

## 下一步开发建议

1. 替换 mock-data.js 为真实后端 API
2. 实现微信登录（wx.login + wx.getUserProfile）
3. 实现微信支付（wx.requestPayment）
4. 实现订阅消息（每日提醒推送）
5. 替换占位图标为专业设计的 tabBar 图标
6. 添加管理员页面（发起活动、成员管理、请假审批）
7. 实现睡眠周报生成与分享
8. 优化动画效果（WXS 动画）
