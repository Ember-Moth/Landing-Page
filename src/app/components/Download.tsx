'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';

// 下载数据
const downloadData = {
  title: "全平台客户端下载",
  subtitle: "支持 Windows、MacOS、iOS、Android 等主流平台，随时随地畅享高速访问",
  platforms: [
    {
      name: "Windows",
      icon: "carbon:logo-windows",
      image: "/images/app.svg",
      features: [
        "智能分流系统",
        "全局代理模式",
        "自动故障转移",
        "自定义规则",
      ],
      downloadUrl: "#",
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/10",
    },
    {
      name: "MacOS",
      icon: "carbon:apple",
      image: "/images/app.svg",
      features: [
        "原生 Apple Silicon 支持",
        "菜单栏快速切换",
        "系统代理设置",
        "快捷键操作",
      ],
      downloadUrl: "#",
      gradient: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/10",
    },
    {
      name: "iOS",
      icon: "carbon:logo-ios",
      image: "/images/app.svg",
      features: [
        "小组件支持",
        "iCloud 同步",
        "快捷指令集成",
        "后台自动连接",
      ],
      downloadUrl: "#",
      gradient: "from-indigo-500 to-sky-500",
      bgGlow: "bg-indigo-500/10",
    },
    {
      name: "Android",
      icon: "carbon:logo-android",
      image: "/images/app.svg",
      features: [
        "Material You 设计",
        "快速瓷贴支持",
        "VPN 服务集成",
        "省电模式优化",
      ],
      downloadUrl: "#",
      gradient: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/10",
    },
  ],
  stats: [
    {
      number: "1000万+",
      label: "累计下载",
      icon: "carbon:download",
    },
    {
      number: "4.9",
      label: "用户评分",
      icon: "carbon:star-filled",
    },
    {
      number: "99.9%",
      label: "正常运行",
      icon: "carbon:chart-line",
    },
  ],
};

export default function Download() {
  return (
    <section className="relative py-24 overflow-hidden" id="download">
      {/* 背景层 */}
      <div className="absolute inset-0 -z-10">
        {/* 主背景色 */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-800 to-background-900" />
        
        {/* 渐变光晕 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent-500/10 rounded-full blur-[100px]" />
        </div>
        
        {/* 网格装饰 */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--primary-500) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary-500) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* 动态光斑 */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-96 h-96 bg-primary-500/5 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%)',
                filter: 'blur(80px)',
                animation: `float-${i} 20s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 内容区域 */}
      <div className="container mx-auto px-4 relative">
        {/* 标题区域 */}
        <div className="text-center mb-16 relative">
          {/* 背景装饰 */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-3xl" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-lg rounded-lg" />
            <span className="relative bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              {downloadData.title}
            </span>
          </h2>
          <p className="text-xl text-foreground-400 max-w-2xl mx-auto">
            {downloadData.subtitle}
          </p>
        </div>

        {/* 在标题区域下方添加统计数字 */}
        <div className="flex justify-center gap-12 mb-16">
          {downloadData.stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-2">
                <div className={`w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon icon={stat.icon} className="w-6 h-6 text-primary-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground-200">{stat.number}</div>
              <div className="text-sm text-foreground-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 平台卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {downloadData.platforms.map((platform) => (
            <div
              key={platform.name}
              className="relative group rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              {/* 背景效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-background-800 to-background-900" />
              
              {/* 光晕效果 */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-10 blur-xl`} />
              </div>
              
              {/* 边框效果 */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-primary-500/20 transition-colors duration-500" />

              {/* 内容区域 */}
              <div className="relative p-6 space-y-6">
                {/* 平台图标和名称 */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${platform.bgGlow} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon icon={platform.icon} className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground-200">
                    {platform.name}
                  </h3>
                </div>

                {/* 客户端预览图 */}
                <div className="relative aspect-video rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={platform.image}
                    alt={`${platform.name} Client`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 功能列表 */}
                <ul className="space-y-2">
                  {platform.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-foreground-400">
                      <Icon icon="carbon:checkmark" className="w-4 h-4 text-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* 下载按钮 */}
                <a
                  href={platform.downloadUrl}
                  className={`block w-full py-3 rounded-xl font-medium text-center transition-all duration-300 relative overflow-hidden
                    bg-gradient-to-r ${platform.gradient} text-white hover:shadow-lg hover:shadow-primary-500/25`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    下载客户端
                    <Icon 
                      icon="carbon:download" 
                      className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300" 
                    />
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                {/* 在平台卡片中添加系统要求 */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <h4 className="text-sm font-medium text-foreground-300 mb-2">系统要求</h4>
                  <div className="text-xs text-foreground-400 space-y-1">
                    {platform.name === "Windows" && (
                      <>
                        <p>Windows 7 及以上</p>
                        <p>2GB RAM</p>
                        <p>100MB 可用空间</p>
                      </>
                    )}
                    {/* 为其他平台添加相应要求 */}
                  </div>
                </div>

                {/* 在平台卡片底部添加版本信息 */}
                <div className="mt-4 flex items-center justify-between text-xs text-foreground-400">
                  <div className="flex items-center gap-2">
                    <Icon icon="carbon:information" className="w-4 h-4" />
                    <span>版本 2.1.0</span>
                  </div>
                  <button 
                    onClick={() => window.open('#', '_blank')}
                    className="flex items-center gap-1 hover:text-primary-400 transition-colors duration-300"
                  >
                    更新日志
                    <Icon icon="carbon:arrow-right" className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部说明 */}
        <div className="mt-16 text-center">
          <div className="bg-background-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/5 hover:border-primary-500/10 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-xl rounded-full" />
                <div className="relative w-16 h-16 rounded-full bg-background-700/50 flex items-center justify-center">
                  <Icon 
                    icon="carbon:security" 
                    className="w-8 h-8 text-primary-400 animate-pulse" 
                  />
                </div>
              </div>
            </div>
            <h4 className="text-xl font-medium bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-4">
              安全可靠的客户端
            </h4>
            <p className="text-foreground-400">
              所有客户端均经过严格的安全审核，采用军事级加密技术，保护您的数据安全
            </p>
          </div>
        </div>

        {/* 在底部说明下方添加 */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-background-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-center mb-8 bg-clip-text  bg-gradient-to-r from-primary-400 to-accent-400">
              快速安装指南
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "下载安装",
                  desc: "选择适合您的客户端下载并安装",
                  icon: "carbon:download",
                },
                {
                  step: "2",
                  title: "登录账号",
                  desc: "使用您的账号登录客户端",
                  icon: "carbon:user",
                },
                {
                  step: "3",
                  title: "开始使用",
                  desc: "一键连接，享受高速访问",
                  icon: "carbon:rocket",
                },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-px bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-background-700/50 rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center">
                        <Icon icon={item.icon} className="w-5 h-5 text-primary-400" />
                      </div>
                      <div className="text-xl font-bold text-foreground-200">步骤 {item.step}</div>
                    </div>
                    <h4 className="text-lg font-medium text-foreground-300 mb-2">{item.title}</h4>
                    <p className="text-sm text-foreground-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 添加到 style 标签 CSS 文件中 */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.2); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg) scale(1.2); }
          50% { transform: translate(-50%, -50%) rotate(-180deg) scale(1); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          50% { transform: translate(-50%, -50%) rotate(90deg) scale(1.1); }
        }
      `}</style>
    </section>
  );
} 