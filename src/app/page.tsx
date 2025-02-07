'use client';

/**
 * EMMUi Landing Page
 * 设计: EMMUi Telegram @aemmui
 * 
 * - Header: 顶部导航栏
 * - Hero: 首屏展示
 * - Features: 特性展示
 * - Download: 下载区域
 * - Pricing: 价格区域
 * 
 */

import { useRef } from 'react';
import dynamic from 'next/dynamic';

// 动态导入组件
const Hero = dynamic(() => import('./components/Hero'));               // 首屏展示区
const Features = dynamic(() => import('./components/Features'));       // 功能特性展示
const Download = dynamic(() => import('./components/Download'));       // 下载区域
const Pricing = dynamic(() => import('./components/Pricing'));        // 价格方案
const Header = dynamic(() => import('./components/Header'));          // 顶部导航
const BackgroundAnimation = dynamic(() =>                             // 背景动画效果
  import('./components/BackgroundEffects').then(mod => mod.BackgroundAnimation), 
  { ssr: false }
);
const FloatingElements = dynamic(() =>                                // 浮动元素效果
  import('./components/BackgroundEffects').then(mod => mod.FloatingElements), 
  { ssr: false }
);
const Divider = dynamic(() => import('./components/Divider'));       // 分隔线组件

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <>
      <Header />
      <main ref={mainRef} className="relative">
        <BackgroundAnimation />
        <FloatingElements />
        <Hero />
        <Divider className="bg-background-800" />
        <Features />
        <Divider className="bg-background-800" />
        <Download />
        <Divider className="bg-background-800" />
        <Pricing />
        <Divider className="bg-background-800" />
      </main>
    </>
  );
}