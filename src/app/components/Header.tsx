'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const menuItems = [
  { 
    name: '功能特性', 
    icon: 'carbon:chart-relationship',
    section: 'features'
  },
  { 
    name: '客户端', 
    icon: 'carbon:laptop',
    section: 'download'
  },
  { 
    name: '价格方案', 
    icon: 'carbon:currency-dollar',
    section: 'pricing'
  },
];

// 导航菜单项动画
const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // 平滑滚动到指定区域
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // 头部导航的高度
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  // 监听滚动，高亮当前区域
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = menuItems.map(item => item.section);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background-900/80 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon 
                  icon="logos:meta-icon" 
                  className="w-8 h-8 text-primary-400" 
                />
              </motion.div>
              <span className="text-xl font-bold text-foreground-100">
                Meta EMMUi
              </span>
            </Link>

            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className={`group flex items-center space-x-2 transition-all duration-300 ${
                      activeSection === item.section
                        ? 'text-primary-400'
                        : 'text-foreground-300 hover:text-primary-400'
                    }`}
                  >
                    <Icon 
                      icon={item.icon} 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeSection === item.section ? 'scale-110' : 'group-hover:scale-110'
                      }`} 
                    />
                    <span>{item.name}</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </nav>
      </motion.header>

      {/* 移动端悬浮按钮和菜单容器 */}
      <div className="fixed bottom-6 right-6 md:hidden z-[60] flex flex-col items-end space-y-4">
        {/* 移动端菜单 */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-background-800/95 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl overflow-hidden mb-4"
            >
              <div className="p-4 space-y-2 w-48">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    variants={menuVariants}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                  >
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-300 ${
                        activeSection === item.section
                          ? 'bg-primary-500/10 text-primary-400'
                          : 'hover:bg-white/5 text-foreground-300 hover:text-primary-400'
                      }`}
                    >
                      <Icon icon={item.icon} className="w-5 h-5" />
                      <span>{item.name}</span>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 悬浮按钮 */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 rounded-full backdrop-blur-sm border border-white/10 shadow-lg flex items-center justify-center bg-background-800/80"
        >
          <Icon
            icon={isMobileMenuOpen ? 'carbon:close-filled' : 'carbon:apps'}
            className="w-6 h-6 text-primary-400"
          />
        </motion.button>
      </div>
    </>
  );
} 