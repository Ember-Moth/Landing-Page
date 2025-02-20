import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // 网站的标题，显示在浏览器标签页
  title: "AeroIsle - 高效安全的VPN与网络加速解决方案",

  // 网站的描述，搜索引擎和社交媒体使用此内容
  description: "AeroIsle 提供专业的 VPN 和网络加速解决方案，确保您的上网体验安全、快速、自由。",
  
  // 网站的关键词，有助于搜索引擎优化
  keywords: "VPN, 网络加速, 翻墙软件, AeroIsle, 安全上网, 加速器, 互联网自由",
  
  // 作者信息，通常是网站的开发者或运营者
  author: "AeroIsle",

  // 搜索引擎是否允许索引该页面和跟踪链接
  robots: "index, follow",  // 允许搜索引擎索引和跟踪链接

  icons: {
    // 网页图标，浏览器标签页会显示
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      },
    ],
  },

  // Web App 的 Manifest 文件，包含了网站的基本信息
  manifest: '/site.webmanifest',

  // 页面背景颜色
  themeColor: '#ffffff',

  // Open Graph (OG) 标签用于社交媒体分享
  openGraph: {
    title: "AeroIsle - 高效安全的VPN与网络加速解决方案",
    description: "AeroIsle 提供最强大的 VPN 与网络加速工具，保护您的隐私并加速网络连接。",
    
    // 主页网址，社交媒体分享时会使用此链接
    url: "https://yourwebsite.com",  // 请替换成实际网址

    images: [
      {
        // 社交媒体分享时显示的图片，建议使用与 VPN 相关的图片
        url: "/images/vpn-og-image.jpg",  // 请替换成实际图片路径
        width: 1200,
        height: 630,
        alt: "AeroIsle VPN",
      },
    ],
  },

  // Twitter Cards 用于 Twitter 上的分享信息
  twitter: {
    card: "summary_large_image",  // 大图卡片形式
    title: "AeroIsle - VPN与加速器解决方案",
    description: "AeroIsle 提供高速、安全、匿名的上网体验。",
    
    // Twitter 分享时的图片
    image: "/images/vpn-twitter-image.jpg",  // 请替换成实际图片路径
  },

  // 适配 Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AeroIsle',
  },

  // 结构化数据（Schema.org）帮助搜索引擎更好地理解网站信息
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AeroIsle",
    
    // 请替换成实际网址
    "url": "https://yourwebsite.com",  // 请替换成实际网址
    "logo": "https://yourwebsite.com/logo.png",  // 请替换成实际 logo 图片路径
    
    contactPoint: {
      "@type": "ContactPoint",
      // 请替换成实际的电话号码
      "telephone": "+1234567890",  // 请替换为真实电话号码
      "contactType": "Customer Service",
      "areaServed": "US",  // 可以替换为实际服务地区
      "availableLanguage": "English"
    },
    
    // 请替换成实际的社交媒体链接
    "sameAs": [
      "https://twitter.com/aeroisle",  // 替换为实际的 Twitter 链接
      "https://www.facebook.com/aeroisle",  // 替换为实际的 Facebook 链接
      "https://github.com/aeroisle"  // 替换为实际的 GitHub 链接
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
