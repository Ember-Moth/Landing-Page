'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Pricing from './components/Pricing';
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

type SectionType = 'hero' | 'features' | 'download' | 'pricing';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<SectionType>('hero');

  // 渲染当前组件
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
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
