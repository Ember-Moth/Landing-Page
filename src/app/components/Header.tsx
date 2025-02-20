'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface MenuItem {
  name: string;
  icon: string;
  section: string;
}

interface AuthItem {
  name: string;
  icon: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: '功能特性', icon: 'carbon:chart-relationship', section: 'features' },
  { name: '客户端', icon: 'carbon:laptop', section: 'download' },
  { name: '价格方案', icon: 'carbon:currency-dollar', section: 'pricing' },
];

const authItems: AuthItem[] = [
  { name: '登录', icon: 'carbon:login', href: '/login' },
  { name: '注册', icon: 'carbon:user', href: '/register' },
];

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-100px 0px' }
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.section);
      if (section) observer.observe(section);
    });

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavItem = ({ name, icon, href, section, isActive, onClick, custom }: any) => (
    <motion.div custom={custom} variants={menuVariants} initial="hidden" animate="visible">
      {href ? (
        <Link href={href} passHref>
          <button className="group nav-item">
            <Icon icon={icon} className="nav-icon" />
            <span>{name}</span>
          </button>
        </Link>
      ) : (
        <button
          onClick={() => onClick?.()}
          className={`group nav-item ${isActive ? 'text-primary-400' : ''}`}
        >
          <Icon icon={icon} className={`nav-icon ${isActive ? 'scale-110' : ''}`} />
          <span>{name}</span>
        </button>
      )}
    </motion.div>
  );

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-background-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Icon icon="logos:meta-icon" className="w-8 h-8 text-primary-400" />
                </motion.div>
                <span className="text-xl font-bold text-foreground-100">Aero Isle</span>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                {menuItems.map((item, i) => (
                  <NavItem
                    key={item.name}
                    custom={i}
                    name={item.name}
                    icon={item.icon}
                    section={item.section}
                    isActive={activeSection === item.section}
                    onClick={() => scrollToSection(item.section)}
                  />
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {authItems.map((item, i) => (
                <NavItem
                  key={item.name}
                  custom={i + menuItems.length}
                  name={item.name}
                  icon={item.icon}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </nav>
      </motion.header>

      <div className="fixed bottom-6 right-6 md:hidden z-[60] flex flex-col items-end space-y-4">
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
                    custom={i}
                    variants={menuVariants}
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
                      <span>{name}</span>
                    </button>
                  </motion.div>
                ))}
                {authItems.map((item, i) => (
                  <NavItem
                    key={item.name}
                    custom={i + menuItems.length}
                    name={item.name}
                    icon={item.icon}
                    href={item.href}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={isMobileMenuOpen}
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
