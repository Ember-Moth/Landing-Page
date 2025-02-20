export default function Footer() {
  const socialLinks = [
    'simple-icons:facebook',
    'simple-icons:twitter',
    'simple-icons:instagram',
    'simple-icons:youtube',
    'simple-icons:reddit',
    'simple-icons:tiktok',
    'simple-icons:naver',
  ];

  const paymentMethods = [
    'simple-icons:visa',
    'simple-icons:paypal',
    'simple-icons:amazonpay',
    'simple-icons:bitcoin',
    'simple-icons:mastercard',
  ];

  return (
    <footer className="py-6 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        {/* 社交媒体 */}
        <div className="flex gap-4 mb-4">
          {socialLinks.map((icon, index) => (
            <Icon key={index} icon={icon} className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
          ))}
        </div>

        {/* 支付方式 */}
        <div className="flex gap-4 mb-4">
          {paymentMethods.map((icon, index) => (
            <Icon key={index} icon={icon} className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
          ))}
        </div>

        {/* 版权信息 */}
        <p className="text-sm text-gray-500">
          © 2025 Surfshark B.V., KVK number: 81967985, 地址: Kabelweg 57, 1014BA Amsterdam, the Netherlands, VAT 号: NL862873398B01
        </p>
        <div className="text-sm text-gray-500">
          隐私政策 • 服务条款
        </div>
      </div>
    </footer>
  );
}
