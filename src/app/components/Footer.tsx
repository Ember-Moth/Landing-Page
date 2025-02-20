'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

// 📝 配置部分
const PROJECT_NAME = 'AeroIsle';

const CONTACTS = [
  { name: 'Email', icon: 'carbon:email', url: 'mailto:support@aeroisle.com' },
  { name: 'Telegram', icon: 'logos:telegram', url: 'https://t.me/yourtelegram' },
  { name: 'Twitter', icon: 'logos:twitter', url: 'https://twitter.com/yourtwitter' },
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/yourgithub' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#D9D9D9] py-4 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* 左侧：版权和联系方式 */}
        <div className="text-sm text-center md:text-left space-y-2">
          <p>© 2025 {PROJECT_NAME} 保留所有权利。</p>
          {/* 联系方式图标 */}
          <div className="flex justify-center md:justify-start items-center space-x-4">
            {CONTACTS.map((contact) => (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-colors duration-300 ${
                  contact.name === 'GitHub'
                    ? 'text-white hover:text-primary-400' // GitHub 图标颜色修改
                    : 'text-[#D9D9D9] hover:text-primary-400'
                }`}
                aria-label={contact.name}
              >
                <Icon icon={contact.icon} className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* 右侧：链接按钮 */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link href="/privacy-policy">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white text-sm px-3 py-1 rounded-full bg-transparent border border-gray-500 hover:bg-gray-700 transition-colors duration-300"
            >
              隐私政策
            </motion.button>
          </Link>
          <Link href="/terms-conditions">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white text-sm px-3 py-1 rounded-full bg-transparent border border-gray-500 hover:bg-gray-700 transition-colors duration-300"
            >
              条款条件
            </motion.button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
