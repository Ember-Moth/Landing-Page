'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// 加载动画
function LoadingAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="w-20 h-20 border-4 border-primary-500 rounded-full border-t-transparent animate-spin" />
    </div>
  );
}

const heroContent = {
  title: {
    gradient: "全球高速",
    highlight: "安全连接",
    accent: "尽享数字自由"
  },
  subtitle: "突破限制，连接世界。采用军事级加密技术，保护您的网络安全。全球3000+服务器，智能优化线路，享受极速稳定的访问体验。",
  stats: [
    { 
      number: "3000+", 
      label: "全球服务器",
      gradient: "from-cyan-300 via-blue-400 to-blue-500",
      icon: "carbon:globe"
    },
    { 
      number: "50M+", 
      label: "用户信赖",
      gradient: "from-fuchsia-300 via-purple-400 to-purple-500",
      icon: "carbon:group"
    },
    { 
      number: "99.9%", 
      label: "在线可用率",
      gradient: "from-emerald-300 via-green-400 to-green-500",
      icon: "carbon:chart-line"
    }
  ],
  brands: {
    title: "深受全球顶尖企业信赖",
    logos: [
      "/brands/brand1.svg",
      "/brands/brand2.svg",
      "/brands/brand3.svg",
      "/brands/brand4.svg",
    ]
  },
  cta: {
    primary: {
      text: "立即体验",
      icon: "carbon:rocket"
    },
    secondary: {
      text: "了解更多",
      icon: "carbon:arrow-right"
    }
  }
};

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingAnimation />}
      
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center py-20 overflow-hidden">
        {/* 背景效果 */}
        <div className="absolute inset-0 -z-10">
          {/* 主背景渐变 */}
          <div className="absolute inset-0 bg-gradient-to-b from-background-800 to-background-900" />
          
          {/* 动态光晕 */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent-500/10 rounded-full blur-[100px] animate-pulse" />
          </div>

          {/* 装饰线条 */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0 rotate-12 scale-150"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, var(--primary-500) 1px, transparent 1px),
                  linear-gradient(0deg, var(--primary-500) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧内容 */}
            <div className="space-y-8">
              {/* 标题区域 */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold relative">
                  <span className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-2xl rounded-lg" />
                  <span className="relative bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                    {heroContent.title.gradient}
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-foreground-300">
                  {heroContent.title.highlight}
                </h2>
                <p className="text-lg text-foreground-400 max-w-xl">
                  {heroContent.subtitle}
                </p>
              </div>

              {/* 特性列表 */}
              <div className="flex flex-wrap gap-4">
                {heroContent.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-background-800/50 backdrop-blur-sm border border-white/5 hover:border-primary-500/20 transition-all duration-300"
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${stat.gradient} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon icon={stat.icon} className="w-4 h-4 text-primary-400" />
                    </div>
                    <span className="text-foreground-300 group-hover:text-foreground-200 transition-colors duration-300">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA 按钮组 */}
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon 
                      icon={heroContent.cta.primary.icon} 
                      className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" 
                    />
                    {heroContent.cta.primary.text}
                  </span>
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button className="group px-6 py-3 rounded-xl bg-background-800 text-foreground-200 font-medium hover:bg-background-700 transition-colors duration-300">
                  <span className="flex items-center gap-2">
                    {heroContent.cta.secondary.text}
                    <Icon 
                      icon={heroContent.cta.secondary.icon} 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </span>
                </button>
              </div>
            </div>

            {/* 右侧图片 */}
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 group-hover:opacity-75 transition-opacity duration-500" />
              <Image
                src="/images/hero-image.png"
                alt="Hero Image"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* 图片前景渐变 */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-900/80 via-background-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 