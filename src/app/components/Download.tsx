'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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

  return (
    <>
      <Header setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <main className="relative min-h-screen">
        <BackgroundAnimation />
        <FloatingElements />
        {/* Hero 始终挂载 */}
        <motion.div
          animate={{ opacity: currentSection === 'hero' ? 1 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          style={{ position: currentSection === 'hero' ? 'relative' : 'absolute', top: 0, left: 0, width: '100%' }}
        >
          <Hero />
        </motion.div>
        {/* Download 始终挂载 */}
        <motion.div
          animate={{ opacity: currentSection === 'download' ? 1 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          style={{ position: currentSection === 'download' ? 'relative' : 'absolute', top: 0, left: 0, width: '100%' }}
        >
          <Download />
        </motion.div>
        {/* 其他组件按需渲染 */}
        {currentSection === 'features' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <Features />
          </motion.div>
        )}
        {currentSection === 'pricing' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <Pricing />
          </motion.div>
        )}
        {currentSection === 'faqs' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <FAQs />
          </motion.div>
        )}
      </main>
      <Footer />
    </>
  );
}
