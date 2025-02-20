'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#D9D9D9] py-4 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* 版权和公司信息 */}
        <div className="text-sm text-center md:text-left">
          <p>© 2025 Surfshark 保留所有权利。</p>
          <p className="mt-1">
            Surfshark B.V., KVK number: 81967985, 地址：Kabelweg 57, 1014BA Amsterdam, the Netherlands, VAT #: NL862287339B01
          </p>
        </div>

        {/* 链接按钮 */}
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
