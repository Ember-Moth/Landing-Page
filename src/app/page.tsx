'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import dynamic from 'next/dynamic';

const BackgroundAnimation = dynamic(
  () => import('./components/BackgroundEffects').then((mod) => mod.BackgroundAnimation),
  { ssr: false, loading: () => <div className="animate-pulse bg-gray-200 h-screen" /> }
);
const FloatingElements = dynamic(
  () => import('./components/BackgroundEffects').then((mod) => mod.FloatingElements),
  { ssr: false }
);

type SectionType = 'hero' | 'features' | 'download' | 'pricing' | 'faqs';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<SectionType>('hero');

  const renderSection = () => {
    switch (currentSection) {
      case 'hero':
        return <Hero />;
      case 'features':
        return <Features />;
      case 'download':
        return <Download />;
      case 'pricing':
        return <Pricing />;
      case 'faqs':
        return <FAQs />;
      default:
        return <Hero />;
    }
  };

  return (
    <>
      <Header setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <main className="relative min-h-screen">
        <BackgroundAnimation />
        <FloatingElements />
        <AnimatePresence mode="wait" initial={false}> {/* 添加 initial={false} */}
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 10 }} // 减小 y 值
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} // 减小 y 值
            transition={{ duration: 0.2, ease: 'easeInOut' }} // 缩短 duration
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
