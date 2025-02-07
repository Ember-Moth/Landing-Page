# EMMUi Landing Page - 现代化设计落地页

基于 Next.js 15、React 19 和 TypeScript 构建的现代化落地页。

## 🌟 项目特点

- 🚀 基于 Next.js 15 框架
- 💎 TypeScript 类型安全
- 🎨 Tailwind CSS 样式解决方案
- 🎭 Framer Motion 动画效果
- 📱 响应式设计
- 🔥 动态导入组件
- 🌓 深色模式/亮色模式支持

## 🛠️ 技术栈

- **框架**: Next.js 15.1.6
- **UI 库**: React 19.0.0
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4.0.3
- **动画**: Framer Motion 12.3.1
- **图标**: Iconify
- **构建工具**: Turbopack

## 📦 项目结构
```markdown
src/
├── app/
│   ├── components/         # 组件目录
│   │   ├── Header.tsx     # 导航栏组件
│   │   ├── Hero.tsx      # 首屏展示组件
│   │   ├── Features.tsx  # 特性展示组件
│   │   ├── Download.tsx  # 下载区域组件
│   │   ├── Pricing.tsx   # 价格方案组件
│   │   └── ...
│   ├── layout.tsx         # 根布局
│   ├── page.tsx          # 主页面
│   └── globals.css       # 全局样式
└── styles/               # 样式配置
```

## 🚀 快速开始
1. **安装依赖**
```bash
npm install
# 或
yarn install
```

2. 开发环境运行
```bash
npm run dev
# 或
yarn dev
```
3. 构建生产版本
```bash
npm run build
# 或
yarn build
```

## 🎯 主要功能
- 响应式导航栏 : 支持桌面端和移动端的智能导航
- 动画效果 : 使用 Framer Motion 实现流畅的页面动画
- 性能优化 :
  - 组件动态导入
  - 图片优化
  - 延迟加载
- 多平台支持 : 适配各种设备和屏幕尺寸
## 📱 组件说明
### 核心组件
- Header.tsx : 响应式导航栏，支持滚动检测和移动端菜单
- Hero.tsx : 首屏展示区，包含主要标题和 CTA 按钮
- Features.tsx : 产品特性展示
- Download.tsx : 多平台下载展示
- Pricing.tsx : 价格方案展示
- BackgroundEffects.tsx : 背景动画效果
### 工具组件
- Feedback.tsx : 用户反馈提示组件
- Icons.tsx : SVG 图标组件集合
- Divider.tsx : 分隔线组件
## 🔧 配置文件
- next.config.ts : Next.js 配置
- tailwind.config.ts : Tailwind CSS 配置
- tsconfig.json : TypeScript 配置
## 📝 开发规范
- 使用 TypeScript 强类型
- 组件采用函数式编程
- 样式使用 Tailwind CSS 原子化类名
- 动画效果统一使用 Framer Motion
## 📄 许可说明
本项目仅供学习参考，严禁商业用途。

## 🔗 相关链接
- Telegram 频道: [@aemmui](https://t.me/aemmui)
