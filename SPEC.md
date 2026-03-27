# 北京四季福旅行社 - 网站规格说明

## 1. 项目概述

- **项目名称**：北京四季福旅行社有限公司
- **项目类型**：单页响应式展示网站
- **核心功能**：展示公司形象、旅游服务，方便海外华侨快速联系
- **目标用户**：海外华侨、全球华人游客

## 2. 视觉与渲染规格

### 设计风格
- **主题**：新中式旅行美学 — 传统元素与现代简约结合
- **配色方案**：
  - 主色：中国红 `#C41E3A`
  - 辅助色：宫廷金 `#D4A84B`
  - 背景色：暖白 `#FAFAF8` / 深灰 `#1A1A1A`
  - 文字色：深炭 `#2D2D2D` / 浅色 `#F5F5F5`
- **字体**：
  - 中文：Noto Serif SC（宋体风格，衬线）
  - 英文：Playfair Display（标题）+ Lato（正文）
  - Fallback：Georgia, serif / system-ui

### 布局结构（单页）
1. **导航栏** — 固定顶部，Logo + 语言切换
2. **Hero 区域** — 大图背景 + 公司标语 + CTA
3. **关于我们** — 简短介绍 + 资质
4. **服务项目** — 团队游 / 定制游 两列卡片
5. **精选目的地** — 图片画廊滚动
6. **联系方式** — 突出显示 WeChat / WhatsApp / 电话 / 邮箱
7. **页脚** — 版权信息

### 响应式断点
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 3. 功能规格

### 多语言（i18n）
- 自动检测 `navigator.language`
- 中文：默认
- 英文：非中文环境
- 手动切换：顶部语言切换按钮
- 翻译内容存储在 `/locales/zh.json` 和 `/locales/en.json`

### 联系方式（核心）
- 微信：突出显示 + 二维码占位（素材文件夹提供）
- WhatsApp：点击跳转 `https://wa.me/号码`
- 电话：点击拨打电话 `tel:`
- 邮箱：点击跳转 `mailto:`

### 图片资源
- 公司 logo：`/素材/logo.png`（用户提供）
- 景点图片：`/素材/hero.jpg`（用户提供）
- 微信二维码：`/素材/wechat-qr.png`（用户提供）
- 备选：使用 Unsplash 北京景点图

## 4. 技术方案

- **框架**：Next.js 14（App Router）
- **样式**：Tailwind CSS
- **部署**：Vercel（全球 CDN）
- **无数据库**：纯静态内容

## 5. 文字内容

### 公司简介
- 中文：北京四季福旅行社，专注北京团队游与定制游十余年，为海外华侨及华人游客提供专业、贴心的旅行服务。
- English：Beijing Four Seasons Fortune Travel — Your trusted partner for authentic Beijing experiences since 2010.

### 服务项目
- 团队游：故宫深度游、长城一日游、北京胡同探秘、主题文化体验
- 定制游：私人定制、企业团建、家庭亲子游、蜜月婚礼

### 联系方式（占位，待用户提供真实数据）
- 微信：WeChat ID
- WhatsApp：+1 xxx xxx xxxx
- 电话：+86 xxx xxxx xxxx
- 邮箱：info@bjseasonfortune.com
