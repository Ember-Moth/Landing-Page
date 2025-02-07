'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';

// 更新特性数据
const featuresData = {
  title: "为什么选择我们",
  subtitle: "提供业界领先的全球网络加速服务，让您的访问更快、更稳定、更安全",
  mainFeatures: [
    {
      title: "全球加速网络",
      description: "覆盖200+地区的高速节点，智能调度确保最佳访问体验",
      icon: "carbon:globe",
      gradient: "from-blue-500 to-cyan-500",
      image: "/images/01.png",
      highlights: ["智能节点调度", "全球就近接入", "高速专线网络"],
    },
    {
      title: "智能分流系统",
      description: "自动识别应用场景，根据实时网络状况优化访问路线",
      icon: "carbon:route",
      gradient: "from-purple-500 to-pink-500",
      image: "/images/02.png",
      highlights: ["场景智能识别", "实时路由优化", "自动故障转移"],
    },
    {
      title: "安全防护",
      description: "军事级加密技术，保护您的数据安全，阻挡恶意攻击",
      icon: "carbon:security",
      gradient: "from-amber-500 to-orange-500",
      image: "/images/03.png",
      highlights: ["加密数据传输", "防火墙保护", "DDoS防护"],
    },
  ],
};

export default function Features() {
  return (
    <section className="relative py-24 overflow-hidden" id="features">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        {/* 主背景 */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-800 to-background-900" />
        
        {/* 光晕效果 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent-500/10 rounded-full blur-[100px]" />
        </div>

        {/* 装饰网格 */}
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
      </div>

      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-3xl" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-lg rounded-lg" />
            <span className="relative bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              {featuresData.title}
            </span>
          </h2>
          <p className="text-xl text-foreground-400 max-w-2xl mx-auto">
            {featuresData.subtitle}
          </p>
        </div>

        {/* 主要特性 - 优化卡片设计 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuresData.mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              {/* 背景效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-background-800 to-background-900" />
              
              {/* 动态光晕效果 */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 blur-xl`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-500-rgb),0.1),transparent_50%)]" />
              </div>
              
              {/* 边框效果 */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-primary-500/20 transition-colors duration-500" />

              {/* 内容区域 */}
              <div className="relative p-8 space-y-6">
                {/* 图标和标题 */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon icon={feature.icon} className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground-200 group-hover:text-primary-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                {/* 特性图片 - 添加悬停效果 */}
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background-900/80 to-transparent z-10" />
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* 描述 */}
                <p className="text-foreground-400 group-hover:text-foreground-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* 核心亮点 */}
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 text-sm text-foreground-400 group-hover:text-foreground-300 transition-colors duration-300"
                    >
                      <Icon 
                        icon="carbon:checkmark-filled" 
                        className={`w-4 h-4 ${feature.gradient.includes('blue') ? 'text-blue-400' : 
                          feature.gradient.includes('purple') ? 'text-purple-400' : 'text-amber-400'}`} 
                      />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* 了解更多按钮 - 优化交互 */}
                <button className="flex items-center gap-2 text-primary-400 group-hover:text-primary-300 transition-all duration-300 hover:gap-3">
                  了解更多
                  <Icon 
                    icon="carbon:arrow-right" 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-all duration-300" 
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 