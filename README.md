<div align="center">

# 🚀 AIAE - 上海交通大学创业者社交平台

**微信小程序 · 校园创业社交 · 智能匹配 · 名片生成**

[![Node.js](https://img.shields.io/badge/Node.js-18-Alpine-green.svg)](https://nodejs.org/)
[![WeChat](https://img.shields.io/badge/WeChat-Mini%20Program-07C160.svg)](https://developers.weixin.qq.com/miniprogram/dev/framework/)
[![Vue 3](https://img.shields.io/badge/Admin-Vue%203-4FC08D.svg)](https://vuejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1.svg)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**交创派 — 让每一位交大创业者找到最佳搭档**

[功能特性](#-功能特性) · [系统架构](#-系统架构) · [匹配算法](#-智能匹配算法) · [快速开始](#-快速开始) · [API文档](#-api接口) · [部署指南](#-部署指南)

</div>

---

## 📋 项目概述

**AIAE（交创派）** 是专为**上海交通大学**校园创业者打造的社交匹配平台。通过微信小程序连接校园内的创业者、开发者、设计师和投资人，帮助创始人寻找合伙人、团队成员和创业资源。

### 🎯 解决的核心问题

> 在大学校园中，创业者往往难以找到志同道合的合伙人。AIAE 通过智能匹配算法，根据技能标签、创业状态、年级和专业等多维度信息，为用户推荐最佳的潜在合作伙伴。

---

## ✨ 功能特性

### 🏠 核心功能

| 功能模块 | 描述 | 状态 |
|:---:|------|:---:|
| 📧 **邮箱认证注册** | 仅限 `@sjtu.edu.cn` 邮箱注册 | ✅ |
| 🔐 **微信一键登录** | 微信云开发云函数认证 | ✅ |
| 👤 **个人资料系统** | 姓名、年级、专业、微信、简介、项目名、状态标签 | ✅ |
| 🏷️ **多维标签系统** | 状态标签 + 技术技能(22项) + 设计技能(14项) + 兴趣领域(24项) | ✅ |
| 📋 **招聘广场** | 发布/浏览合伙人招募帖，支持角色类型、投入程度、报酬 | ✅ |
| 🎯 **活动中心** | 浏览/报名校园创业活动（黑客松、讲座、路演） | ✅ |
| 🤝 **智能推荐** | 每日推荐 10 人，基于标签、年级、专业、状态的多维匹配 | ✅ |
| 💘 **Link 机制** | Tinder 式卡片滑动，双向确认后解锁微信联系方式 | ✅ |
| 🪧 **名片生成器** | Canvas 2D 生成 1050×600px 可打印名片 (90mm × 54mm) | ✅ |
| 🎨 **头像系统** | 基于首字母的自动头像生成 + 相册上传 | ✅ |
| 💬 **消息中心** | 系统通知、Link 请求、活动提醒 | ✅ |
| 🛡️ **审核后台** | Vue 3 单页管理后台，内容审核管理 | ✅ |
| 🔒 **审核模式** | 一键切换隐藏敏感功能，应对微信小程序审核 | ✅ |

### 📱 页面展示

<table>
<tr>
<td align="center"><b>社区广场</b></td>
<td align="center"><b>每日推荐</b></td>
<td align="center"><b>个人名片</b></td>
</tr>
<tr>
<td>

```
┌──────────────────┐
│  🔍 搜索栏        │
│ ┌──────────────┐ │
│ │ 📋 招募帖子   │ │
│ │ 技术合伙人    │ │
│ │ · 全职 · 股权 │ │
│ └──────────────┘ │
│ ┌──────────────┐ │
│ │ 🎯 活动卡片   │ │
│ │ 创业路演大赛  │ │
│ │ · 6/15 · 30人│ │
│ └──────────────┘ │
└──────────────────┘
```

</td>
<td>

```
┌──────────────────┐
│  👤 推荐用户 #3   │
│ ┌──────────────┐ │
│ │              │ │
│ │   [头像]     │ │
│ │  张同学      │ │
│ │  大三 · CS   │ │
│ │  🏷️ AI · 全栈│ │
│ │              │ │
│ │  ❤️ 跳过 ✋  │ │
│ └──────────────┘ │
│  ○ ○ ● ○ ○ ○ ○  │
└──────────────────┘
```

</td>
<td>

```
┌──────────────────┐
│  📇 我的名片      │
│ ┌──────────────┐ │
│ │ ┌────┐       │ │
│ │ │头像│ 张同学 │ │
│ │ └────┘ CS'26 │ │
│ │              │ │
│ │ 📧 zhang@... │ │
│ │ 💬 WeChat:***│ │
│ │ 🏷️ AI·创业中│ │
│ │              │ │
│ │ [保存] [分享] │ │
│ └──────────────┘ │
└──────────────────┘
```

</td>
</tr>
</table>

---

## 🏗️ 系统架构

```
┌─────────────────────────────────────────────────────────────────┐
│                       微信小程序客户端 (weapp/)                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ 社区广场  │ │ 活动中心  │ │ 智能推荐  │ │ 个人中心  │          │
│  └─────┬────┘ └─────┬────┘ └─────┬────┘ └─────┬────┘          │
│        └────────────┼────────────┼────────────┘                │
│                     ▼            ▼                              │
│           ┌─────────────────────────────┐                      │
│           │  双模式通信层                │                      │
│           │  · HTTP REST API            │                      │
│           │  · 微信云函数 callFunction  │                      │
│           └──────┬──────────────┬───────┘                      │
└──────────────────┼──────────────┼──────────────────────────────┘
                   │              │
         ┌─────────▼───┐    ┌────▼──────────┐
         │ Express API  │    │ 微信云开发     │
         │ (server/)    │    │ (cloudfunctions)│
         │              │    │                 │
         │ · JWT Auth   │    │ · auth          │
         │ · RESTful    │    │ · posts         │
         │ · MySQL      │    │ · events        │
         │ · Upload     │    │ · social        │
         └──────┬───────┘    └───────┬─────────┘
                │                     │
         ┌──────▼───────┐    ┌───────▼─────────┐
         │   MySQL 8.0  │    │  微信云数据库     │
         │   9 张表      │    │  5 个集合        │
         └──────────────┘    └─────────────────┘
                │
         ┌──────▼───────┐
         │ Admin 后台    │
         │ (Vue 3 SPA)  │
         │ 内容审核管理  │
         └──────────────┘
```

---

## 🧠 智能匹配算法

推荐引擎采用多维度加权评分系统：

```
Score = 0.40 × Tags + 0.20 × Grade + 0.15 × Major + 0.15 × Status + 0.10 × Activity
```

| 维度 | 权重 | 计算方式 |
|:---:|:---:|------|
| **标签匹配** | 40% | 技术 + 兴趣标签的 Jaccard 相似度 |
| **年级接近度** | 20% | 同年级=1.0，按年级差距线性衰减 |
| **专业相关性** | 15% | 同专业=1.0，同学科门类=0.7，其他=0.3 |
| **状态互补性** | 15% | "有项目找技术" 配 "技术找项目" = 1.0 |
| **活跃度** | 10% | 用户平台参与度权重 |

### 标签体系

```
状态标签:  想创业 · 创业中 · 找合伙人 · 提供资源
技术标签:  AI/ML · 全栈 · 前端 · 后端 · 移动端 · 数据库 · 云计算 ...
设计标签:  UI/UX · 品牌设计 · 交互设计 · 视觉设计 · 动效设计 ...
兴趣领域:  人工智能 · 金融科技 · 教育科技 · 医疗健康 · 电子商务 ...
```

---

## 📁 项目结构

```
AIAE26/
│
├── weapp/                              # 微信小程序前端
│   ├── app.js                          # 小程序入口 (云开发初始化)
│   ├── app.json                        # 三Tab布局配置
│   ├── app.audit.json                  # 审核模式配置 (双Tab)
│   ├── config.js                       # 功能开关 & 审核模式切换
│   ├── api.config.js                   # API 端点配置
│   ├── pages/
│   │   ├── index/                      # 启动/着陆页
│   │   ├── login/                      # 微信登录 + jAccount
│   │   ├── register/                   # 资料完善向导
│   │   ├── community/                  # 社区广场 (帖子+活动)
│   │   │   ├── community.*             # Feed流
│   │   │   ├── post-detail.*           # 帖子详情 + 评论
│   │   │   └── create-post.*           # 发帖
│   │   ├── events/                     # 活动中心
│   │   │   ├── events.*                # 活动列表
│   │   │   └── event-detail.*          # 活动详情 + 报名
│   │   ├── social/                     # 社交匹配
│   │   │   ├── social.*                # 每日推荐 & 滑动卡片
│   │   │   └── user-detail.*           # 用户详情 + Link请求
│   │   ├── profile/                    # 个人中心
│   │   │   ├── profile.*               # 个人仪表盘
│   │   │   ├── edit.*                  # 资料编辑
│   │   │   ├── card.*                  # 名片生成器
│   │   │   ├── avatar-select.*         # 头像选择
│   │   │   ├── my-posts.*              # 我的帖子
│   │   │   ├── my-events.*             # 我的活动
│   │   │   └── my-links.*              # 我的匹配
│   │   └── messages/                   # 消息中心
│   ├── utils/
│   │   ├── tags.js                     # 标签预设 (60+选项)
│   │   ├── avatarGenerator.js          # 头像自动生成
│   │   ├── cardGenerator.js            # 名片 Canvas 生成
│   │   └── featureCheck.js             # 功能门控
│   └── cloudfunctions/                 # 微信云函数
│       ├── auth/                       # 认证 (wx.login + 用户CRUD)
│       ├── posts/                      # 帖子 CRUD + 点赞
│       ├── events/                     # 活动 CRUD + 报名
│       └── social/                     # 匹配 + 双向检测
│
├── server/                             # Node.js 后端
│   ├── app.js                          # Express 入口
│   ├── package.json                    # 依赖配置
│   ├── Dockerfile                      # Docker 容器化
│   ├── config/database.js              # MySQL 连接池
│   ├── database/init.sql               # 完整SQL建表 (9张表)
│   ├── models/db.js                    # 内存数据存储 (MVP模式)
│   ├── routes/
│   │   ├── auth.js                     # 登录/注册/验证
│   │   ├── user.js                     # 用户 CRUD + 搜索
│   │   ├── posts.js                    # 帖子 CRUD + 评论
│   │   ├── events.js                   # 活动 CRUD + 报名
│   │   ├── social.js                   # 匹配 + 推荐 + 互动
│   │   ├── recommend.js                # 每日推荐 (MySQL版)
│   │   └── upload.js                   # 头像上传 (base64)
│   ├── services/recommendation.js      # 推荐评分算法
│   ├── admin/index.html                # 管理后台 (Vue 3 SPA)
│   ├── deploy/
│   │   ├── setup.sh                    # Ubuntu 服务器部署
│   │   └── nginx.conf                  # Nginx 反向代理配置
│   └── cloudbaserc.json                # 腾讯 CloudBase 配置
│
└── docs/                               # 文档
    ├── DEVLOG.md                       # 开发日志
    ├── AUDIT_MODE_GUIDE.md             # 审核模式指南
    ├── CLOUD_RUN_DEPLOY.md             # 云部署指南
    └── DEPLOY_CLOUD.md                 # 微信云开发迁移指南
```

---

## 🗄️ 数据库设计

### MySQL Schema (9 张表)

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│   users      │────<│  user_tags    │     │   admins     │
│  (用户核心)  │     │ (标签关联)    │     │  (管理员)    │
└──────┬───────┘     └──────────────┘     └──────────────┘
       │
       ├───────┐     ┌──────────────┐
       │       └────<│  comments    │
       │             │  (评论)      │
       │             └──────┬───────┘
       │                    │
       ├───────┐     ┌──────▼───────┐
       │       └────<│   posts      │
       │             │  (帖子)      │
       │             └──────────────┘
       │
       ├───────┐     ┌──────────────┐
       │       └────<│ event_participants│
       │             │  (活动参与)   │
       │             └──────┬───────┘
       │                    │
       ├───────┐     ┌──────▼───────┐
       │       └────<│   events     │
       │             │  (活动)      │
       │             └──────────────┘
       │
       ├───────┐     ┌──────────────┐     ┌──────────────────┐
       │       └────<│   links      │     │user_interactions  │
       │             │  (连接关系)  │     │  (互动记录)      │
       │             └──────────────┘     └──────────────────┘
       │
       └───────────┐ ┌──────────────────┐
                   └<│daily_recommendations│
                     │  (每日推荐缓存)    │
                     └──────────────────┘
```

---

## 🚀 快速开始

### 环境要求

- Node.js 18+
- MySQL 8.0+ (生产模式) 或内存模式 (开发)
- 微信开发者工具

### 1. 后端启动

```bash
cd server
npm install

# 开发模式 (内存数据存储，无需 MySQL)
npm run dev

# 生产模式 (MySQL)
cp .env.example .env
# 编辑 .env 配置 MySQL 连接信息
mysql -u root -p < database/init.sql   # 初始化数据库
npm start
```

### 2. 小程序运行

1. 打开**微信开发者工具**
2. 导入 `weapp/` 目录
3. 修改 `api.config.js` 中的 `API_BASE` 为你的服务器地址
4. 选择编译模式运行

### 3. 审核后台

访问 `http://your-server:3000/admin`
- 默认账号: `admin`
- 默认密码: `admin123`

---

## 📡 API 接口

### 认证模块

| Method | Path | Description |
|:---:|------|------|
| POST | `/api/auth/send-code` | 发送邮箱验证码 |
| POST | `/api/auth/login` | 验证码登录/注册 |
| POST | `/api/auth/dev-login` | 开发模式快速登录 |

### 用户模块

| Method | Path | Description |
|:---:|------|------|
| GET | `/api/user/me` | 获取当前用户信息 |
| POST | `/api/user/profile` | 更新个人资料 |
| GET | `/api/user/card/:id` | 获取用户公开名片 |
| GET | `/api/user/stats` | 用户统计数据 |
| GET | `/api/user/search` | 搜索用户 |

### 社区模块

| Method | Path | Description |
|:---:|------|------|
| GET | `/api/posts` | 帖子列表 (分页) |
| POST | `/api/posts` | 发布帖子 |
| GET | `/api/posts/:id` | 帖子详情 + 评论 |
| POST | `/api/posts/:id/comments` | 发表评论 |
| DELETE | `/api/posts/:id` | 删除帖子 |

### 活动模块

| Method | Path | Description |
|:---:|------|------|
| GET | `/api/events` | 活动列表 |
| GET | `/api/events/:id` | 活动详情 |
| POST | `/api/events/:id/register` | 报名活动 |
| DELETE | `/api/events/:id/register` | 取消报名 |

### 社交模块

| Method | Path | Description |
|:---:|------|------|
| GET | `/api/social/recommendations` | 每日推荐用户 |
| POST | `/api/social/interaction` | 喜欢/跳过用户 |
| GET | `/api/social/matches` | 双向匹配列表 |
| GET | `/api/social/received-likes` | 收到的喜欢 |

---

## 🚢 部署指南

### 方式一：Docker 部署 (推荐)

```bash
cd server
docker build -t aiae-server .
docker run -d -p 3000:3000 --env-file .env aiae-server
```

### 方式二：腾讯 CloudBase Run

```bash
cd server
tcb cloudrun deploy    # 自动扩缩容 0-10 实例
```

### 方式三：传统服务器部署

```bash
# 一键部署脚本 (Ubuntu)
bash server/deploy/setup.sh
```

包含：MySQL 安装、PM2 进程管理、Nginx 反向代理、Let's Encrypt SSL 证书。

### 方式四：微信云开发 (Serverless)

```bash
# 在微信开发者工具中部署云函数
# 无需服务器，使用微信云数据库
# 详见 DEPLOY_CLOUD.md
```

---

## 🎨 设计系统

采用统一的深蓝色设计语言：

| 变量 | 色值 | 用途 |
|:---:|:---:|------|
| `--primary` | `#1a1a2e` | 深海军蓝 (主色) |
| `--primary-light` | `#16213e` | 浅主色 |
| `--accent` | `#0f3460` | 强调蓝 |
| `--highlight` | `#e94560` | 珊瑚红 (CTA按钮) |
| `--bg` | `#f5f5f7` | 浅灰背景 |
| `--card` | `#ffffff` | 白色卡片 |

---

## 🛠️ 技术栈

<div align="center">

| 层级 | 技术 |
|:---:|:---:|
| **前端** | ![WeChat](https://img.shields.io/badge/WeChat-Mini%20Program-07C160) WXML + WXSS + JS |
| **管理后台** | ![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D) CDN 单文件 SPA |
| **后端** | ![Node.js](https://img.shields.io/badge/Node.js-18-339933) Express.js 4.18 |
| **数据库** | ![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1) / 微信云数据库 |
| **认证** | JWT + bcryptjs + 邮箱验证 |
| **云函数** | wx-server-sdk (4个函数) |
| **部署** | Docker + PM2 + Nginx + CloudBase |

</div>

---

## 📊 项目统计

| 指标 | 数值 |
|:---:|:---:|
| 源代码文件 | ~80 个 |
| 代码行数 | ~10,960 行 |
| 数据库表 | 9 张 |
| API 端点 | 20+ 个 |
| 小程序页面 | 15+ 个 |
| 标签选项 | 60+ 个 |

---

## 📋 待开发功能

- [ ] jAccount OAuth2 校园统一认证对接
- [ ] 腾讯云 COS 对象存储配置
- [ ] 实时聊天功能
- [ ] 帖子详情页富文本支持
- [ ] 推送通知集成
- [ ] 数据分析与用户画像仪表盘

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给个 Star 支持一下！**

</div>
