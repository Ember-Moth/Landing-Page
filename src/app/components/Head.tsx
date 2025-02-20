import { Icon } from '@iconify/react';

export default function Header() {
  const navItemsLeft = [
    'Surfshark VPN',
    'Alternative ID',
    'Surfshark Alert',
    'Surfshark Antivirus',
    'Surfshark Search',
    '匿名',
  ];

  const navItemsRight = [
    { text: '服务器位置', icon: 'carbon:globe' },
    { text: 'VPN 协议', icon: 'carbon:network' },
    { text: 'VPN 端口转发', icon: 'carbon:arrow-right' },
    { text: 'IP', icon: 'carbon:ip' },
    { text: '隐私', icon: 'carbon:shield' },
    { text: 'VPN 功能', icon: 'carbon:settings' },
    { text: 'VPN 负载均衡', icon: 'carbon:chart-network' },
    { text: 'DSA 透明度报告', icon: 'carbon:document' },
    { text: '为什么选择 Surfshark?', icon: 'carbon:question' },
    { text: 'DNS 防火墙', icon: 'carbon:firewall' },
    { text: 'WebRTC 泄漏测试', icon: 'carbon:warning' },
    { text: 'Data Leak Checker', icon: 'carbon:alert' },
    { text: '支持', icon: 'carbon:headset' },
    { text: '登录', icon: 'carbon:user' },
  ];

  return (
    <header className="py-4 px-6 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Icon icon="simple-icons:surfshark" className="w-8 h-8 text-white" />
          <span className="text-xl font-bold">Surfshark</span>
        </div>

        {/* 导航菜单 */}
        <nav className="flex gap-8">
          {/* 左侧导航 */}
          <div className="flex gap-4">
            {navItemsLeft.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-gray-300 hover:underline transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* 右侧导航 */}
          <div className="flex gap-4">
            {navItemsRight.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-1 text-white hover:text-gray-300 hover:underline transition-colors"
              >
                {item.icon && (
                  <Icon icon={item.icon} className="w-4 h-4" />
                )}
                {item.text}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
