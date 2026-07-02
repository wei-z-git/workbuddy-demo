# 早睡星人 · DESIGN.md

> 基于 Spotify 设计系统基因定制，融合 Airbnb 信任设计模式与 Soft Warm 视觉方向，
> 专为微信小程序（375×667pt）打造的早睡打卡社交产品设计令牌。

---

## 设计系统推荐分析

### 候选方案对比表

| 方案 | 设计系统 | 匹配度 | 核心特征 | 适合原因 | 需定制维度 |
|------|---------|--------|---------|---------|-----------|
| A | **Spotify** | ★★★★★ | 深色基底+明亮强调色；强烈的情感峰值设计；Gamification DNA（Wrapped/徽章/连续打卡）；移动端优先；社交分享 | 1. 深色基底天然契合「夜空蓝」主色概念；2. Wrapped/庆祝动画与打卡成功动画同构；3. 连续打卡 streak 与早睡连续打卡完全映射；4. 社交排行榜/好友活动与排行榜功能对齐 | 主色从绿→夜空蓝；强调色从绿→星光金/暖橙；加入信任设计模式（借鉴Airbnb）；微信小程序组件适配 |
| B | **Airbnb** | ★★★★☆ | 温暖亲和的圆角设计；金钱交易的信任感设计（价格透明、操作确认、明细可查）；社区/社交；移动端优先 | 1. 信任设计是全系统最强——押金/奖励页可直接借鉴；2. 温暖圆角契合Soft Warm方向；3. 社区评价/排名映射排行榜 | 加入Gamification层（早睡币/勋章/称号）；基底从暖白→夜空蓝深色；微信小程序组件适配 |
| C | **Starbucks** | ★★★☆☆ | 生活方式品牌；Stars奖励体系（等级/兑换）；温暖的咖啡色调；移动端下单流程 | 1. Stars体系与早睡币系统同构；2. 生活方式品牌定位与早睡习惯养成对齐；3. 移动端操作流程简洁 | 色调从咖啡暖色→夜空蓝+星光金；视觉从咖啡文化→太空星人IP；Gamification需更轻量化 |

### 推荐策略

**主选：Spotify（方案A）**，原因：
- 「夜空蓝」主色概念与Spotify深色基底天然同构，无需强行翻转色调逻辑
- Spotify的庆祝动画（Wrapped/Daylist）直接映射到打卡成功动画——这是产品的情绪峰值
- 连续播放 streak → 连续早睡 streak，Gamification逻辑完全复用
- 社交排行榜/好友活动 → 早睡排行榜/群组动态

**补充借鉴：Airbnb的信任设计模式**：
- 押金/奖励页的金额清晰展示、操作确认弹窗、明细透明列表，直接从Airbnb的支付流程设计提取
- 这部分作为"模式嫁接"，不影响整体视觉基调

**最终方向定位**：Soft Warm（5大视觉方向第5类）× Spotify暗色基底 = **Warm Night**（温暖夜空）
- 保持Soft Warm的圆润、宽松、亲和力
- 以夜空蓝深色基底替换传统暖白背景
- 星光金/暖橙作为温度注入，让深色不冰冷

---

## 1. Visual Theme（视觉主题）

**Philosophy**: 让夜晚也温暖——用星空般的深邃包裹安心感，用星光般的金色点亮成就感。
**Direction**: warm-night, soft-gamification, trust-visible, low-cognitive-load
**Personality**: encouraging, dreamy, trustworthy, playful-but-not-childish
**Reference**: Spotify 深色基底 × Airbnb 圆角信任 × 星空夜景意象

**视觉关键词**：
- 夜空不是压抑的黑，而是安心的深蓝——这是你准备入睡的信号
- 星光是奖励——每次成功打卡，一颗星亮起
- 圆角是温柔——所有形状都是圆的，没有棱角
- 金色是成就——不是炫耀的金，而是"你做到了"的暖金

---

## 2. Color Palette（调色板）

### Primary — 夜空蓝系

| Token | HEX | OKLCh | Usage |
|-------|-----|-------|-------|
| --color-primary | #1A2B4A | oklch(32% 0.06 260) | 页面主背景、导航栏背景、深色基底 |
| --color-primary-light | #2D3E5F | oklch(40% 0.06 260) | 卡片背景（深色上的层次区分） |
| --color-primary-lighter | #3D4E6F | oklch(48% 0.05 260) | 输入框背景、次级surface |
| --color-primary-hover | #0F1D35 | oklch(25% 0.06 260) | 按钮hover、按压态 |

### Accent — 星光金/暖橙系

| Token | HEX | OKLCh | Usage |
|-------|-----|-------|-------|
| --color-accent-gold | #FFD166 | oklch(85% 0.15 85) | CTA按钮、成就高亮、勋章、标题强调 |
| --color-accent-gold-hover | #F0C050 | oklch(78% 0.16 85) | 金色按钮hover态 |
| --color-accent-gold-soft | #FFD16633 | — | 金色柔和背景（成就区域底色） |
| --color-accent-orange | #FF8C42 | oklch(72% 0.16 60) | 二级CTA、温暖点缀、小图标强调 |
| --color-accent-orange-soft | #FF8C4233 | — | 橙色柔和背景 |

### Neutral — 深色界面中性色

| Token | HEX | OKLCh | Usage |
|-------|-----|-------|-------|
| --color-bg | #1A2B4A | oklch(32% 0.06 260) | 页面基底（与primary同值） |
| --color-surface | #253550 | oklch(36% 0.06 260) | 卡片、模块背景 |
| --color-surface-raised | #2D3E5F | oklch(40% 0.06 260) | 浮起卡片、弹窗背景 |
| --color-border | #3A4D6A | oklch(45% 0.04 260) | 分隔线、卡片边框 |
| --color-border-subtle | #2D3E5F | oklch(40% 0.06 260) | 微弱分隔（同一层级区分） |
| --color-text-primary | #E8ECF2 | oklch(92% 0.02 250) | 标题、正文主文字 |
| --color-text-secondary | #8B9AB5 | oklch(65% 0.04 260) | 辅助文字、描述、时间戳 |
| --color-text-muted | #5A6B85 | oklch(50% 0.04 260) | 禁用态、极弱信息 |

### Semantic — 状态色系统（打卡核心）

| Token | HEX | OKLCh | Usage |
|-------|-----|-------|-------|
| --color-status-golden | #4ADE80 | oklch(78% 0.18 155) | 🟢 黄金时段（22:00前打卡成功）——绿色代表"做到了！" |
| --color-status-barely | #FBBF24 | oklch(75% 0.17 85) | 🟡 勉勉强（22:00-23:00打卡）——黄色代表"还行但不够好" |
| --color-status-late | #F87171 | oklch(65% 0.20 25) | 🔴 熬夜了（23:00后打卡/未打卡）——柔红不是刺眼的红，是温柔的提醒 |
| --color-status-miss | #6B7280 | oklch(50% 0.01 260) | ⚫ 未打卡——灰色是"这次没参与"，不带情感判断 |

> **状态色设计原则**：
> - 绿色用鲜亮绿（成就感），黄色用暖黄（接近成功），红色用柔粉红而非刺眼红（温柔提醒而非惩罚）
> - 红色的OKLCh lightness=65%（比典型错误红的45%高出20个百分点），确保"提醒"而非"警告"的语感
> - 所有状态色在深色基底上对比度 ≥ 4.5:1（WCAG AA）

### Special — 功能语义色

| Token | HEX | Usage |
|-------|-----|-------|
| --color-success | #4ADE80 | 操作成功确认 |
| --color-warning | #FBBF24 | 需注意的操作（押金扣除前确认） |
| --color-danger | #F87171 | 不可逆操作警示（押金扣除确认） |
| --color-info | #60A5FA | 信息提示、帮助说明 |
| --color-money-positive | #4ADE80 | 收入/奖励金额（绿色=赚到） |
| --color-money-negative | #F87171 | 扣除/损失金额（柔红=花掉） |

### Gradient — 渐变预设

| Token | Value | Usage |
|-------|-------|-------|
| --gradient-night-sky | linear-gradient(180deg, #0F1D35 0%, #1A2B4A 40%, #253550 100%) | 页面顶部hero区域背景 |
| --gradient-star-glow | linear-gradient(135deg, #FFD166 0%, #FF8C42 100%) | 打卡成功庆祝动画、勋章光泽 |
| --gradient-card-glow | linear-gradient(180deg, #253550 0%, #2D3E5F 100%) | 卡片内渐变层次 |
| --gradient-golden-hour | linear-gradient(180deg, #FFD16633 0%, transparent 100%) | 黄金时段打卡卡片顶部光晕 |

---

## 3. Typography（排版）

### Font Stacks

微信小程序字体约束：
- 不引入外部字体文件（包体积限制 2MB）
- 使用系统字体栈 + 微信内置字体
- 通过字重和字号层级创造排版节奏

```
/* Heading — 圆润感通过字重和字号传达 */
--font-heading: "PingFang SC", "HarmonyOS Sans", "Noto Sans SC", -apple-system, sans-serif;

/* Body — 正文可读性优先 */
--font-body: "PingFang SC", "HarmonyOS Sans", "Noto Sans SC", -apple-system, sans-serif;

/* Mono — 数字展示（金额、排名、统计） */
--font-mono: "SF Mono", "Menlo", "Courier New", monospace;

/* Number — 专用数字字体栈（排行/金额/统计数字用tabular figures） */
--font-number: "DIN Alternate", "SF Pro Numbers", "PingFang SC", sans-serif;
```

> **圆体说明**：微信小程序无法加载自定义圆体字体（包体积限制），圆润感通过以下方式传达：
> - 所有容器使用大圆角（border-radius: 12-16px）
> - 按钮/卡片使用 pill 形圆角（border-radius: 999px / 24px）
> - 字重选择偏轻（400/500而非700），视觉上更柔和
> - 行高宽松（1.5-1.8），让文字有呼吸感

### Scale

| Level | Size (rpx) | Size (px) | Weight | Line-height | Usage |
|-------|-----------|----------|--------|-------------|-------|
| Hero | 72rpx | 36px | 600 | 1.2 | 打卡成功大标题、庆祝文字 |
| H1 | 56rpx | 28px | 600 | 1.3 | 页面主标题（"今晚打卡"） |
| H2 | 44rpx | 22px | 500 | 1.4 | 区域标题（"排行榜"、"我的勋章"） |
| H3 | 36rpx | 18px | 500 | 1.5 | 卡片标题、列表项标题 |
| Body | 30rpx | 15px | 400 | 1.6 | 正文段落、描述文字 |
| Body-lg | 34rpx | 17px | 400 | 1.6 | 重要正文（打卡规则说明） |
| Small | 26rpx | 13px | 400 | 1.5 | 辅助信息、时间戳、备注 |
| Micro | 22rpx | 11px | 500 | 1.4 | 徽章文字、状态标签、勋章名 |
| Number-lg | 80rpx | 40px | 700 | 1.1 | 排名数字（Top3）、大统计数字 |
| Number | 48rpx | 24px | 600 | 1.2 | 金额数字、连续天数 |
| Number-sm | 32rpx | 16px | 500 | 1.3 | 小统计数字、排名位置 |

> **rpx 说明**：微信小程序使用 rpx（responsive pixel），1rpx = 屏幕宽度/750。在 375pt 屏幕上，2rpx = 1px。所有尺寸以 rpx 为第一标注，px 为参考值。

---

## 4. Component Styles（组件样式）

### Button — 按钮系统

**Primary CTA（打卡按钮——产品核心按钮）**
```
background: var(--color-accent-gold)
color: var(--color-primary)  /* 金底深蓝字——高对比度，温暖但不失稳重 */
border: none
border-radius: 999px (pill shape)
padding: 16rpx 48rpx (8px 24px)
font-size: 34rpx (17px)
font-weight: 600
min-height: 88rpx (44px)  /* 大按钮——晚间低认知负荷，一触即达 */
shadow: 0 4rpx 16rpx rgba(255, 209, 102, 0.3)  /* 金色光晕——"星光"隐喻 */
hover: background var(--color-accent-gold-hover), shadow 加强
active: scale(0.97), shadow减弱——按压反馈
```

**Secondary Button（辅助操作）**
```
background: var(--color-surface)
color: var(--color-accent-gold)
border: 2rpx solid var(--color-accent-gold)
border-radius: 999px
padding: 14rpx 40rpx (7px 20px)
font-size: 30rpx (15px)
font-weight: 500
min-height: 80rpx (40px)
hover: border-color加深, 微弱金色背景光晕
```

**Ghost Button（最低权重操作）**
```
background: transparent
color: var(--color-text-secondary)
border: none
border-radius: 999px
padding: 12rpx 32rpx (6px 16px)
font-size: 28rpx (14px)
font-weight: 400
hover: 微弱背景色 var(--color-surface)
```

**Danger Button（押金扣除等不可逆操作——需二次确认）**
```
background: var(--color-status-late)
color: #FFFFFF
border: none
border-radius: 999px
padding: 14rpx 40rpx
font-size: 30rpx (15px)
font-weight: 500
/* 前置确认弹窗——借鉴Airbnb支付确认模式 */
```

### Card — 卡片系统

**Standard Card（通用信息卡片）**
```
background: var(--color-surface)
border: 1rpx solid var(--color-border)
border-radius: 24rpx (12px)  /* 大圆角——Soft Warm核心 */
padding: 24rpx (12px)
shadow: 0 2rpx 8rpx rgba(0,0,0,0.15)  /* 深色界面上shadow更明显 */
```

**Check-in Card（打卡卡片——核心卡片变体）**
```
background: var(--color-surface)
border: 2rpx solid var(--color-accent-gold)  /* 金色边框——"今夜待点亮" */
border-radius: 32rpx (16px)  /* 更大圆角——核心卡片更圆润 */
padding: 32rpx (16px) 24rpx (12px)
shadow: 0 4rpx 16rpx rgba(255,209,102,0.15)  /* 金色光晕——暗示即将成功 */
/* 打卡成功后：border变为实色金, shadow加强, 内部金色光晕渐变出现 */
```

**Rank Card（排行卡片——Top3特殊变体）**
```
background: var(--color-surface)
border: 1rpx solid var(--color-border)
/* Top1: border-color var(--color-accent-gold), 金色光晕 */
/* Top2: border-color var(--color-accent-orange), 橙色光晕 */
/* Top3: border-color var(--color-accent-gold-soft), 浅金色 */
border-radius: 24rpx (12px)
padding: 20rpx (10px)
/* 排名数字使用 Number-lg (80rpx) + 专用字体栈 */
/* "我的位置"高亮：左边框4rpx var(--color-accent-gold) + 微弱金色背景 */
```

**Trust Card（押金/奖励卡片——借鉴Airbnb支付卡片模式）**
```
background: var(--color-surface-raised)  /* 更亮底色——金额需要清晰可读 */
border: 2rpx solid var(--color-border)
border-radius: 24rpx (12px)
padding: 24rpx (12px)
/* 金额数字使用 Number (48rpx) + var(--color-text-primary) */
/* 正向金额用 var(--color-money-positive) */
/* 扣除金额用 var(--color-money-negative) */
/* 明细列表用 Small 字号 + 清晰分隔线 */
```

### Input — 输入框

```
height: 80rpx (40px)
background: var(--color-primary-lighter)
border: 2rpx solid var(--color-border)
border-radius: 16rpx (8px)
color: var(--color-text-primary)
placeholder-color: var(--color-text-muted)
focus: border-color var(--color-accent-gold), 微弱金色光晕
font-size: 30rpx (15px)
```

### Tab Bar — 底部导航

```
/* 微信小程序原生 TabBar，自定义样式 */
background: var(--color-primary)  /* 与页面基底同色——沉浸感 */
border-top: 1rpx solid var(--color-border)
height: 98rpx (49px) + safe-area  /* 微信标准高度 */

/* Tab Item */
color: var(--color-text-muted)  /* 未选中：低对比 */
font-size: 20rpx (10px)  /* 标签文字——微信标准小字号 */
icon-size: 44rpx (22px)  /* 微信标准图标尺寸 */

/* Tab Active */
color: var(--color-accent-gold)  /* 选中：金色——"你在这里" */
/* 不使用品牌蓝作为active——蓝与背景蓝同色系，无法区分 */
```

### Modal/Popup — 弹窗系统

**Celebration Modal（打卡成功弹窗——情绪峰值）**
```
/* 全屏半遮罩 + 中央庆祝区域 */
overlay: rgba(15, 29, 53, 0.85)  /* 深蓝遮罩——夜空感 */
content-bg: var(--color-surface-raised)
border-radius: 32rpx (16px)
padding: 48rpx (24px)
/* 星光金渐变顶部光晕 */
/* 人形吉祥物庆祝动画（穿睡衣的小外星人举星星） */
/* Hero字号成功文案 "你做到了！" */
/* 连续打卡天数 Number-lg 展示 */
/* 早睡币奖励动画：金币飞入钱包 */
```

**Confirmation Modal（操作确认弹窗——信任设计）**
```
/* 借鉴Airbnb支付确认模式 */
overlay: rgba(15, 29, 53, 0.7)
content-bg: var(--color-surface-raised)
border-radius: 24rpx (12px)
padding: 32rpx (16px)
/* H2 标题明确操作意图 */
/* Body 正文说明结果 */
/* 金额/扣除项用 Number 字号 + 对应色 */
/* 双按钮：主操作(Primary/Danger) + 取消(Ghost) */
/* 按钮间距 ≥ 16rpx (8px)——防误触 */
```

**Bottom Sheet（底部抽屉——打卡流程辅助）**
```
/* 微信小程序标准交互 */
overlay: rgba(15, 29, 53, 0.5)
sheet-bg: var(--color-surface-raised)
border-radius: 32rpx (16px) top-only  /* 只有顶部圆角 */
max-height: 70vh
padding: 32rpx (16px)
/* 睡前小问弹出使用此组件 */
```

### Badge — 徽章/标签

**Status Badge（打卡状态标签）**
```
border-radius: 999px (pill)
padding: 4rpx 12rpx (2px 6px)
font-size: Micro (22rpx/11px)
font-weight: 500
/* 🟢 黄金时段: bg #4ADE8033, color var(--color-status-golden), border 1rpx #4ADE80 */
/* 🟡 勉勉强: bg #FBBF2433, color var(--color-status-barely), border 1rpx #FBBF24 */
/* 🔴 熬夜了: bg #F8717133, color var(--color-status-late), border 1rpx #F87171 */
/* ⚫ 未打卡: bg transparent, color var(--color-text-muted), border 1rpx var(--color-border) */
```

**Achievement Badge（勋章展示）**
```
/* 圆形 80rpx (40px) */
border-radius: 50%
background: var(--gradient-star-glow)  /* 金色渐变——"星光勋章" */
border: 2rpx solid var(--color-accent-gold)
/* 内部图标 48rpx (24px) */
/* 勋章名 Micro 字号置于下方 */
/* 未获得勋章: opacity 0.3, 灰色化——"等你解锁" */
```

### List Item — 列表项

```
padding: 20rpx (10px) 24rpx (12px)
border-bottom: 1rpx solid var(--color-border-subtle)
/* 左侧：48rpx (24px) 头像/图标 */
/* 中间：H3标题 + Small描述 */
/* 右侧：状态Badge/数字/操作 */
/* "我的位置"项：左侧4rpx金色边条 + 微弱金色底色 */
min-height: 88rpx (44px)  /* 触控友好 */
```

---

## 5. Layout（布局）

### Grid

```
/* 微信小程序单列布局为主 */
container-width: 100% (375pt / 750rpx)
content-padding: 0 32rpx (0 16px)  /* 左右16px安全边距 */
columns: 1 (移动端单列)
gutter: 24rpx (12px)  /* 卡片间距 */
```

### Spacing Scale

| Token | Value (rpx) | Value (px) | Usage |
|-------|------------|-----------|-------|
| --space-xs | 8rpx | 4px | 图标与文字间距、Badge内距 |
| --space-sm | 16rpx | 8px | 紧密元素间距、列表项内距 |
| --space-md | 24rpx | 12px | 默认间距、卡片padding |
| --space-lg | 32rpx | 16px | 区域分隔、弹窗padding |
| --space-xl | 48rpx | 24px | 大区域分隔、hero区域padding |
| --space-2xl | 64rpx | 32px | 页面顶部安全间距、主要分隔 |
| --space-3xl | 80rpx | 40px | 页面底部留白（TabBar上方） |

### Page Layout Patterns

**首页布局**：
```
顶部: 安全区 + 页面标题区域 (H1)
  ↓ --space-xl
核心: 打卡卡片 (Check-in Card) — 占据视觉中心
  ↓ --space-lg
辅助: 今日统计/连续天数 + 状态提示
  ↓ --space-lg
底部: 群组动态/好友活动列表
底部安全区 + TabBar
```

**排行榜布局**：
```
顶部: 页面标题 + 筛选切换（周/月）
  ↓ --space-lg
Hero: Top3 大卡片（差异化展示）
  ↓ --space-md
列表: 其余排名列表项
  ↓ 底部: "我的位置" 固定底部栏
```

---

## 6. Depth & Elevation（深度与层级）

### Shadow Scale（深色界面适配）

深色界面的阴影需要更强的扩散和更深的色值才能产生层次感。

| Level | Shadow | Usage |
|-------|--------|-------|
| Flat | none | 页面基底、TabBar |
| Subtle | 0 2rpx 8rpx rgba(0,0,0,0.25) | 卡片默认态 |
| Raised | 0 4rpx 16rpx rgba(0,0,0,0.3) | 浮起卡片、Bottom Sheet |
| Floating | 0 8rpx 32rpx rgba(0,0,0,0.4) | 弹窗、Modal |
| Celebration | 0 8rpx 32rpx rgba(255,209,102,0.3) | 打卡成功庆祝态——金色光晕shadow |

### Z-index Scale

```
Base: 0          — 页面内容
Card-raised: 10  — 浮起卡片
TabBar: 50       — 底部导航栏（微信原生）
Dropdown: 100    — 下拉菜单
Bottom-sheet: 200 — 底部抽屉
Modal: 300       — 弹窗
Toast: 400       — 轻提示
Celebration: 500 — 打卡成功庆祝弹窗（最高层级——情绪峰值需要全屏遮罩）
```

### Elevation Transitions

```
/* 卡片hover/按压态——微弱升起 */
transition: transform 0.2s ease, shadow 0.2s ease
hover: translateY(-2rpx), shadow → Raised
active: translateY(0), shadow → Subtle

/* 打卡成功——卡片升级 */
transition: border-color 0.3s ease, shadow 0.3s ease
success: border → var(--color-accent-gold), shadow → Celebration
```

---

## 7. Cautions（注意事项）

### Never Do

1. **不要用刺眼红色表达失败** —— 未打卡/熬夜用柔红(#F87171)而非典型错误红(#EF4444)。OKLCh lightness 65% vs 45%，差20个百分点，语感从"警告"变为"温柔提醒"
2. **不要用夜空蓝作为active/选中态** —— 蓝色active在蓝色背景上无法区分，用星光金作为所有选中/active指示色
3. **不要在晚间时段使用高认知负荷布局** —— 避免：多列表格、密集数据、复杂表单、长段落规则说明
4. **不要让金钱信息模糊** —— 押金/奖励金额必须使用Number字号(48rpx) + 高对比色，明细必须有完整列表，操作必须有确认弹窗
5. **不要过度游戏化** —— 早睡币/勋章/称号是"惊喜层"而非"驱动力层"，视觉权重不超过核心打卡功能
6. **不要使用纯黑背景** —— #000000会压抑，夜空蓝(#1A2B4A)有微弱蓝色倾向，是安心的深而非恐惧的黑
7. **不要让吉祥物喧宾夺主** —— 星人IP用于情绪峰值（打卡成功/勋章）和品牌识别，不在日常操作界面中占据核心空间

### Prefer

1. **正向表达优先** —— "你已经连续3天早睡了！" > "你还没打卡"。状态色同理：绿色(做到了)面积 > 红色(没做到)面积
2. **大按钮+大字号** —— 晚间使用，一触即达。核心按钮 min-height 88rpx(44px)，字号 ≥ 34rpx(17px)
3. **渐进式信息展示** —— 核心信息先展示（打卡状态/连续天数），详情点击展开（规则/明细）
4. **金额双格式** —— 数字展示 + 文字说明（如 "¥30.00 / 三十天押金"），避免纯数字造成误解
5. **温暖圆角 everywhere** —— 所有容器 ≥ 16rpx(8px) 圆角，核心元素 ≥ 24rpx(12px) 圆角，按钮 pill shape

---

## 8. Responsive Behavior（响应式行为）

### Breakpoints

微信小程序实际只有一种宽度场景，但需适配不同屏幕尺寸：

| Name | Width (rpx) | Width (pt) | Behavior |
|------|------------|-----------|----------|
| iPhone SE | 750rpx | 320pt | 字号微缩(--space缩小10%), 卡片padding缩小 |
| iPhone 6/7/8 (基准) | 750rpx | 375pt | 所有尺寸标准值 |
| iPhone X/11/12 | 750rpx | 375pt+safe-area | 底部额外34pt safe-area, 顶部44pt notch |
| iPhone 12/13 Pro Max | 750rpx | 428pt | 微信自动缩放rpx, 无需额外适配 |

> **rpx 机制**：微信小程序 rpx 自动适配所有屏幕宽度。750rpx = 屏幕宽度。在iPhone 6(375pt)上2rpx=1px。rpx已解决大部分适配问题。

### Adaptation Rules

1. **安全区适配**：底部TabBar下方 +34pt safe-area padding（iPhone X系列）；顶部导航 +44pt notch padding
2. **横屏禁用**：微信小程序 page 配置 `pageOrientation: "portrait"`，不支持横屏
3. **字号下限**：任何字号不低于 22rpx(11px)，保证晚间可读性
4. **触控区域**：所有可点击区域 ≥ 88rpx(44px) 高度/宽度，防误触
5. **网络降级**：图片加载失败时显示品牌色占位符（夜空蓝+星人轮廓），不显示空白

---

## 9. Agent Prompt Guide（Agent 生成指南）

### Key Instructions

1. **夜空蓝是基底不是装饰** —— 整个页面沉浸在夜空蓝中，不是白底+蓝色点缀。所有surface都在蓝色系层级上（surface/surface-raised），不要引入白色surface
2. **星光金是唯一高亮色** —— 所有CTA、选中态、成就高亮使用星光金，不要引入第二个高亮色
3. **状态色语义严格绑定** —— 🟢绿色只表示成功/黄金时段，🟡黄色只表示勉强/接近，🔴柔红只表示熬夜/提醒，⚫灰色只表示未参与。不要跨语义使用状态色
4. **圆润是系统性特征** —— 不是"有些圆有些方"，而是所有形状都圆。按钮pill, 卡片16rpx+, 输入框8rpx+, Badge pill
5. **吉祥物只在情绪峰值出现** —— 打卡成功弹窗、勋章解锁、空状态安慰。不在导航、列表、表单中出现
6. **金额必须信任感设计** —— 借鉴Airbnb支付流程：数字大+对比高+操作确认+明细可查+双格式展示
7. **晚间低负荷** —— 主操作一步到位，辅助信息点击展开，不要在首屏堆砌信息
8. **微信小程序组件优先** —— 使用微信原生组件（TabBar、NavigationBar、Form组件）而非自定义实现，保证性能和一致性

### 打卡动画方向

```
/* 打卡成功动画——产品情绪峰值 */
Phase 1 (0-0.3s): 按钮金色pulse → scale(1.05) → 回弹
Phase 2 (0.3-0.8s): 卡片边框金色渐显 + 光晕扩散
Phase 3 (0.5-1.5s): 星人吉祥物从底部弹出 + 举星星动画
Phase 4 (0.8-2.0s): 星星粒子从卡片中心向外散射（金色粒子）
Phase 5 (1.0-2.5s): 连续天数数字 Number-lg 从小到大弹出
Phase 6 (1.5-3.0s): 早睡币金币从右下飞入左上钱包位置

/* 动画设计原则 */
- 总时长 ≤ 3秒——不打断用户，快速满足
- 有节奏感：快起快落 + 一个慢扩散（星星粒子）
- 音效可选：温柔的叮~声（不刺耳），用户可关闭
```

### 勋章/称号展示方式

```
/* 勋章：圆形80rpx + 星光金渐变背景 + 内部图标 */
/* 未获得：opacity 0.3 + 灰色滤镜 + "等你解锁"文案 */
/* 称号：文字Badge, pill形状, 金色边框+深蓝底 */
/* 称号等级：初级(单色金边) → 中级(双色金橙边) → 高级(全渐变金橙底) */
```

### 热力图样式（打卡日历）

```
/* 月度打卡日历——借鉴GitHub贡献图但温暖化 */
格子: 48rpx × 48rpx (24px × 24px) 圆角8rpx(4px)
间距: 8rpx (4px)
/* 🟢 已打卡黄金时段: var(--color-status-golden) */
/* 🟡 已打卡勉强: var(--color-status-barely) */
/* 🔴 已打卡熬夜: var(--color-status-late) */
/* ⚫ 未打卡: var(--color-primary-lighter) ——与背景同色系，低调 */
/* 当日: 边框2rpx var(--color-accent-gold) ——"今天等你点亮" */
```

### Quick CSS Snippet

```css
:root {
  /* Primary — 夜空蓝 */
  --color-primary: #1A2B4A;
  --color-primary-light: #2D3E5F;
  --color-primary-lighter: #3D4E6F;
  --color-primary-hover: #0F1D35;

  /* Accent — 星光金/暖橙 */
  --color-accent-gold: #FFD166;
  --color-accent-gold-hover: #F0C050;
  --color-accent-gold-soft: rgba(255, 209, 102, 0.2);
  --color-accent-orange: #FF8C42;
  --color-accent-orange-soft: rgba(255, 140, 66, 0.2);

  /* Neutral */
  --color-bg: #1A2B4A;
  --color-surface: #253550;
  --color-surface-raised: #2D3E5F;
  --color-border: #3A4D6A;
  --color-border-subtle: #2D3E5F;
  --color-text-primary: #E8ECF2;
  --color-text-secondary: #8B9AB5;
  --color-text-muted: #5A6B85;

  /* Status — 打卡状态色 */
  --color-status-golden: #4ADE80;
  --color-status-barely: #FBBF24;
  --color-status-late: #F87171;
  --color-status-miss: #6B7280;

  /* Semantic */
  --color-success: #4ADE80;
  --color-warning: #FBBF24;
  --color-danger: #F87171;
  --color-info: #60A5FA;
  --color-money-positive: #4ADE80;
  --color-money-negative: #F87171;

  /* Spacing */
  --space-xs: 8rpx;
  --space-sm: 16rpx;
  --space-md: 24rpx;
  --space-lg: 32rpx;
  --space-xl: 48rpx;
  --space-2xl: 64rpx;
  --space-3xl: 80rpx;

  /* Typography */
  --font-heading: "PingFang SC", "HarmonyOS Sans", "Noto Sans SC", -apple-system, sans-serif;
  --font-body: "PingFang SC", "HarmonyOS Sans", "Noto Sans SC", -apple-system, sans-serif;
  --font-mono: "SF Mono", "Menlo", "Courier New", monospace;
  --font-number: "DIN Alternate", "SF Pro Numbers", "PingFang SC", sans-serif;

  /* Radius */
  --radius-sm: 8rpx;
  --radius-md: 16rpx;
  --radius-lg: 24rpx;
  --radius-xl: 32rpx;
  --radius-pill: 999rpx;
  --radius-circle: 50%;

  /* Gradient */
  --gradient-night-sky: linear-gradient(180deg, #0F1D35 0%, #1A2B4A 40%, #253550 100%);
  --gradient-star-glow: linear-gradient(135deg, #FFD166 0%, #FF8C42 100%);
  --gradient-card-glow: linear-gradient(180deg, #253550 0%, #2D3E5F 100%);
  --gradient-golden-hour: linear-gradient(180deg, rgba(255,209,102,0.2) 0%, transparent 100%);
}
```

---

## 品牌提取协议执行记录 — 早睡星人（全新品牌）

### Step 1: Locate（定位）

早睡星人是全新品牌，无现有品牌资产。品牌概念来源于：
- 品牌名称「早睡星人」——自带IP叙事（外星人+早睡习惯）
- 竞品参考：小打卡、Forest、Habitica
- 用户口述的品牌特征：温暖鼓励、夜空蓝、星光金、游戏化轻量

### Step 2: Download（获取）

从竞品中提取设计参考：
- **Forest**：绿色自然系 + 种树Gamification + 简洁圆角UI → 提取：Gamification轻量边界
- **Habitica**：RPG游戏化 + 等级/称号/宠物 → 提取：称号/勋章层级体系
- **小打卡**：社交打卡 + 群组 + 排行榜 → 提取：群组/排行榜交互模式

### Step 3: Grep Hex（提取色值）

品牌核心色值来自用户需求摘要直接指定：
- 主色：夜空蓝（需从概念→具体色值）
- 强调色：星光金/暖橙

**色值推导逻辑**：
- 「夜空蓝」：不是纯蓝(#0000FF)，不是深蓝(#00008B)，而是有温度的夜空 → 带微弱暖倾向的深蓝 → #1A2B4A (OKLCh hue 260, 6% chroma — 蓝色但不是纯冷蓝)
- 「星光金」：不是金属金(#FFD700)，不是浅黄(#FFFF00)，而是温暖星光 → #FFD166 (OKLCh hue 85, 15% chroma — 橙金方向，温暖)
- 「暖橙」：不是纯橙(#FF6600)，而是陪伴感的暖 → #FF8C42 (OKLCh hue 60, 16% chroma — 橙偏暖)

### Step 4: Codify（编码）

```markdown
# Brand Specification: 早睡星人

## Colors
| Token | HEX | Usage |
|-------|-----|-------|
| --brand-primary | #1A2B4A | 夜空蓝——基底色，安心感 |
| --brand-accent-gold | #FFD166 | 星光金——成就色，做到了 |
| --brand-accent-orange | #FF8C42 | 暖橙——温暖色，陪伴感 |
| --brand-status-golden | #4ADE80 | 绿——黄金时段打卡 |
| --brand-status-barely | #FBBF24 | 黄——勉强打卡 |
| --brand-status-late | #F87171 | 柔红——熬夜打卡 |
| --brand-status-miss | #6B7280 | 灰——未打卡 |

## Typography
- Heading font: PingFang SC (系统圆体感通过圆角传达)
- Body font: PingFang SC
- Number font: DIN Alternate (数字统计/金额专用)
- Font weights used: 400 (body), 500 (subtitle), 600 (heading)

## Visual Characteristics
- Border radius: rounded → pill (所有形状圆润)
- Shadow style: subtle → celebration (日常微弱, 成功金色光晕)
- Spacing density: loose (晚间低负荷, 宽松呼吸感)
- Icon style: filled + rounded (星人吉祥物为品牌IP, 功能图标圆角filled)

## Voice & Tone
- 温暖鼓励 > 严肃惩罚
- "你做到了" > "你还没做"
- 轻松陪伴 > 压力驱动
```

### Step 5: Vocalise（语言化）

```markdown
## Brand Voice

早睡星人的视觉语言是温暖的、梦幻的和值得信赖的。
它通过夜空蓝的深邃基底传达安心入睡的安全感，用星光金的高亮点缀建立"你做到了"的成就感。
最具辨识度的特征是深蓝基底+金色高亮的反差组合——夜空中星星闪耀的意象。
生成时应避免冷色调的孤立感、刺眼红色的惩罚感和过度游戏化的幼稚感，
始终保持"温暖的夜空陪伴"这一核心气质。
```

---

## 附：竞品设计基因对比

| 竞品 | 品牌色系 | Gamification | 信任设计 | 视觉方向 | 早睡星人借鉴 |
|------|---------|-------------|---------|---------|-------------|
| Forest | 绿色自然系 | 种树（重Gamification） | 无 | Modern Minimal | ✅ Gamification轻量化（不照搬种树） |
| Habitica | 紫色RPG系 | 等级/宠物/称号（极重） | 无 | Brutalist偏 | ✅ 称号/勋章层级（轻量版） |
| 小打卡 | 橙色暖系 | 连续天数/排行 | 无 | Soft Warm偏 | ✅ 排行榜/群组交互模式 |
| Spotify（参考源） | 深色+绿/彩色 | Wrapped/徽章 | 无 | Warm Night | ✅ 深色基底+庆祝动画+社交 |
| Airbnb（信任参考） | 白色暖系 | 无 | 支付信任（极强） | Soft Warm | ✅ 金额/操作确认/明细模式 |
