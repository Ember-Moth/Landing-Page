'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';

// 动态加载的页面区域
const Hero = dynamic(() => import('./components/Hero')); // 首屏展示
const Features = dynamic(() => import('./components/Features')); // 功能展示
const Download = dynamic(() => import('./components/Download')); // 下载区
const Pricing = dynamic(() => import('./components/Pricing')); // 价格方案

// 动态效果
const BackgroundAnimation = dynamic(() => import('./components/BackgroundEffects').then(mod => mod.BackgroundAnimation), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-screen" />,
});
const FloatingElements = dynamic(() => import('./components/BackgroundEffects').then(mod => mod.FloatingElements), { ssr: false });

// 工具组件
const Divider = dynamic(() => import('./components/Divider')); // 默认样式在组件内定义

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <>
      <Head>
        <title>EMMUi - Your Next UI Solution</title>
        <meta name="description" content="Explore EMMUi's features, pricing, and download options." />
      </Head>
      <Header />
      <main ref={mainRef} role="main" className="relative">
        <BackgroundAnimation />
        <FloatingElements />
        <Hero />
        <Divider />
        <Features />
        <Divider />
        <Download />
        <Divider />
        <Pricing />
        <Divider />
      </main>
      <Footer />
    </>
  );
}
