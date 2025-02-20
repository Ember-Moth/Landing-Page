'use client';

import { pricingFAQs } from '../data/pricingData'; // 更新路径

export default function FAQs() {
  return (
    <section className="py-24 bg-background-900">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-12 bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
          常见问题
        </h3>
        <div className="grid gap-6">
          {pricingFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-background-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-primary-500/20 transition-all duration-300"
            >
              <h4 className="text-lg font-medium text-foreground-200 mb-2">
                {faq.question}
              </h4>
              <p className="text-foreground-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
