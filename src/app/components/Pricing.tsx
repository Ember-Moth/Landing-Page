'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';

// 功能图标
const featureIcons = {
  devices: 'carbon:devices',
  globe: 'carbon:globe',
  speed: 'carbon:flash',
  route: 'carbon:route',
  ip: 'carbon:ip',
  support: 'carbon:headset',
  enterprise: 'carbon:enterprise',
  custom: 'carbon:settings-adjust',
  security: 'carbon:security',
  encryption: 'carbon:password',
  bandwidth: 'carbon:chart-network',
  uptime: 'carbon:chart-availability',
} as const;

// 定价数据
const pricingData = {
  monthly: {
    basic: {
      price: 19.99,
      features: [
        { icon: featureIcons.devices, text: '3个设备同时在线' },
        { icon: featureIcons.globe, text: '全球30+地区节点' },
        { icon: featureIcons.speed, text: '不限流量高速访问' },
        { icon: featureIcons.route, text: '智能分流系统' },
        { icon: featureIcons.encryption, text: '军事级加密保护' },
        { icon: featureIcons.support, text: '7×24小时客服支持' },
      ],
      icon: 'carbon:rocket',
      badge: '入门首选',
    },
    pro: {
      price: 29.99,
      features: [
        { icon: featureIcons.devices, text: '5个设备同时在线' },
        { icon: featureIcons.globe, text: '全球100+地区节点' },
        { icon: featureIcons.speed, text: '不限流量高速访问' },
        { icon: featureIcons.route, text: '智能分流系统' },
        { icon: featureIcons.ip, text: '专属IP地址' },
        { icon: featureIcons.encryption, text: '军事级加密保护' },
        { icon: featureIcons.bandwidth, text: '优先带宽保障' },
        { icon: featureIcons.support, text: '7×24小时客服支持' },
        { icon: featureIcons.enterprise, text: '企业专属通道' },
      ],
      icon: 'carbon:star-filled',
      badge: '最受欢迎',
    },
    enterprise: {
      price: 49.99,
      features: [
        { icon: featureIcons.devices, text: '无限设备同时在线' },
        { icon: featureIcons.globe, text: '全球200+地区节点' },
        { icon: featureIcons.speed, text: '不限流量高速访问' },
        { icon: featureIcons.route, text: '智能分流系统' },
        { icon: featureIcons.ip, text: '多个专属IP地址' },
        { icon: featureIcons.encryption, text: '军事级加密保护' },
        { icon: featureIcons.bandwidth, text: '最高带宽保障' },
        { icon: featureIcons.uptime, text: '99.9%可用性保证' },
        { icon: featureIcons.support, text: '7×24小时专属客服' },
        { icon: featureIcons.enterprise, text: '企业专属通道' },
        { icon: featureIcons.custom, text: '定制化解决方案' },
      ],
      icon: 'carbon:crown',
      badge: '企业之选',
    },
  },
  yearly: {
    basic: {
      price: 15.99,
      save: 48,
    },
    pro: {
      price: 23.99,
      save: 72,
    },
    enterprise: {
      price: 39.99,
      save: 120,
    },
  },
};

// 热门功能标签
const hotFeatures = {
  basic: ['智能分流', '高速访问'],
  pro: ['专属IP', '优先带宽'],
  enterprise: ['定制方案', '专属支持'],
};

// 促销信息
const promotions = {
  basic: {
    tag: '新用户特惠',
    discount: '首月5折',
  },
  pro: {
    tag: '限时优惠',
    discount: '送3个月',
  },
  enterprise: {
    tag: '企业特惠',
    discount: '专享折扣',
  },
};

// 比较功能
const comparePlans = {
  basic: {
    recommended: ['个人用户', '临时访问'],
    limitations: ['设备数量限制', '基础节点'],
  },
  pro: {
    recommended: ['远程工作者', '频繁访问'],
    limitations: ['单一IP地址', '标准客服'],
  },
  enterprise: {
    recommended: ['企业团队', '长期稳定'],
    limitations: ['需要定制', '价格较高'],
  },
};

// 颜色方案
const planColors = {
  basic: {
    gradient: 'from-cyan-500 to-blue-500',
    icon: 'text-cyan-400',
    hover: 'hover:shadow-cyan-500/20',
    glow: 'bg-cyan-500/10',
    border: 'group-hover:border-cyan-500/20',
  },
  pro: {
    gradient: 'from-fuchsia-500 to-purple-500',
    icon: 'text-fuchsia-400',
    hover: 'hover:shadow-fuchsia-500/20',
    glow: 'bg-fuchsia-500/10',
    border: 'group-hover:border-fuchsia-500/20',
  },
  enterprise: {
    gradient: 'from-amber-500 to-orange-500',
    icon: 'text-amber-400',
    hover: 'hover:shadow-amber-500/20',
    glow: 'bg-amber-500/10',
    border: 'group-hover:border-amber-500/20',
  },
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [, setHoveredPlan] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background-900" id="pricing">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-accent-500/10 blur-3xl" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-lg rounded-lg" />
            <span className="relative bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              灵活的价格方案
            </span>
          </h2>
          <p className="text-xl text-foreground-400 max-w-2xl mx-auto">
            选择最适合您的方案，所有方案均提供高速稳定的全球网络访问体验
          </p>
        </div>

        {/* 计费周期切换 */}
        <div className="flex justify-center mb-16">
          <div className="relative p-1 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl backdrop-blur-sm">
            <div className="absolute inset-0 bg-background-800/80 rounded-2xl -z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-transparent to-accent-500/20 rounded-2xl blur-xl -z-20" />
            
            <div className="relative flex items-center gap-2 p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`relative group flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300
                  ${billingCycle === 'monthly' 
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                    : 'hover:bg-white/5 text-foreground-400'
                  }`}
              >
                <Icon 
                  icon="carbon:calendar" 
                  className={`w-5 h-5 ${
                    billingCycle === 'monthly' 
                      ? 'text-white' 
                      : 'text-primary-400 group-hover:text-primary-300'
                  }`}
                />
                <div className="text-left">
                  <div className="text-sm font-medium">按月付费</div>
                  <div className="text-xs opacity-80">灵活支付</div>
                </div>
              </button>

              <button
                onClick={() => setBillingCycle('yearly')}
                className={`relative group flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300
                  ${billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                    : 'hover:bg-white/5 text-foreground-400'
                  }`}
              >
                <Icon 
                  icon="carbon:calendar-heat-map" 
                  className={`w-5 h-5 ${
                    billingCycle === 'yearly'
                      ? 'text-white'
                      : 'text-primary-400 group-hover:text-primary-300'
                  }`}
                />
                <div className="text-left">
                  <div className="text-sm font-medium">按年付费</div>
                  <div className="text-xs opacity-80">省20%</div>
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent-500 blur-sm rounded-full" />
                    <div className="relative px-2 py-0.5 bg-accent-500 text-white text-xs font-medium rounded-full">
                      优惠
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 价格卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {(['basic', 'pro', 'enterprise'] as const).map((plan) => (
            <div
              key={plan}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-500
                hover:shadow-2xl ${planColors[plan].hover}`}
              onMouseEnter={() => setHoveredPlan(plan)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* 促销标签 */}
              <div className="absolute top-4 right-4 z-20">
                <div className={`bg-gradient-to-r ${planColors[plan].gradient} text-white text-sm font-medium py-1.5 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                  {promotions[plan].tag}
                  <span className="ml-2 font-bold">{promotions[plan].discount}</span>
                </div>
              </div>

              {/* 热门功能标签 */}
              <div className="absolute top-20 right-4 space-y-2 z-20">
                {hotFeatures[plan].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-end gap-2 backdrop-blur-sm text-xs font-medium py-1.5 px-3 rounded-full ${planColors[plan].glow} ${planColors[plan].icon} transform hover:translate-x-[-4px] transition-transform duration-300`}
                  >
                    <Icon 
                      icon={feature === '专属IP' ? 'carbon:ip' : feature === '优先带宽' ? 'carbon:chart-network' : 'carbon:flash'} 
                      className="w-3.5 h-3.5"
                    />
                    {feature}
                  </div>
                ))}
              </div>

              {/* 背景效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-background-800 to-background-900" />
              
              {/* 光晕效果 */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 blur-xl" />
              </div>
              
              {/* 边框效果 */}
              <div className={`absolute inset-0 border border-white/5 rounded-2xl ${planColors[plan].border} transition-colors duration-500`} />

              {/* 内容区域 */}
              <div className="relative p-8 pt-16 space-y-6 min-h-[36rem]">
                {/* 1. 标题和图标 */}
                <div className="flex items-center gap-3">
                  <Icon
                    icon={pricingData.monthly[plan].icon}
                    className={`w-8 h-8 ${planColors[plan].icon}`}
                  />
                  <h3 className="text-2xl font-bold text-foreground-200">
                    {plan === 'basic' ? '基础版' : plan === 'pro' ? '专业版' : '企业版'}
                  </h3>
                </div>

                {/* 2. 价格显示 */}
                <div className="relative group/price">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold text-foreground-100 group-hover/price:${planColors[plan].icon} transition-colors duration-300`}>
                      ¥{pricingData[billingCycle][plan].price}
                    </span>
                    <span className="text-lg text-foreground-400">/ 月</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="mt-2 flex items-center gap-2">
                      <span className={planColors[plan].icon}>
                        年付省¥{pricingData.yearly[plan].save}
                      </span>
                      <span className="text-xs text-foreground-500 line-through">
                        原价¥{(pricingData.monthly[plan].price * 12).toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>

                {/* 3. 推荐场景 */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground-300">适用场景</h4>
                  <div className="space-y-1">
                    {comparePlans[plan].recommended.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-foreground-400">
                        <Icon icon="carbon:checkmark-filled" className="w-4 h-4 text-primary-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. 主要功能列表 */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-foreground-300">包含功能</h4>
                  <ul className="space-y-3">
                    {pricingData.monthly[plan].features.map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-center gap-3 text-foreground-300 group/feature"
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${planColors[plan].glow} flex items-center justify-center`}>
                          <Icon 
                            icon={feature.icon} 
                            className={`w-4 h-4 ${planColors[plan].icon}`}
                          />
                        </div>
                        <span className="group-hover/feature:text-foreground-200 transition-colors duration-300">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 5. 使用限制 */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground-300">使用限制</h4>
                  <div className="space-y-1">
                    {comparePlans[plan].limitations.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-foreground-400">
                        <Icon icon="carbon:warning" className="w-4 h-4 text-accent-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. 按钮 - 统一样式 */}
                <button
                  className={`w-full py-4 rounded-xl font-medium transition-all duration-300 relative overflow-hidden
                    bg-gradient-to-r ${planColors[plan].gradient} text-white ${planColors[plan].hover}`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {plan === 'enterprise' ? '联系我们' : '立即开通'}
                    <Icon 
                      icon={plan === 'enterprise' ? 'carbon:chat' : 'carbon:arrow-right'}
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
