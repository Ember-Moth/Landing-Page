'use client';

export default function FAQs() {
  const pricingFAQs = [
    {
      question: '如何选择合适的方案？',
      answer: '根据您的使用场景和需求选择：个人用户建议基础版，企业用户建议专业版或企业版。',
    },
    {
      question: '可以随时更换方案吗？',
      answer: '是的，您可以随时升级或降级您的方案，费用会按比例计算。',
    },
    {
      question: '支持哪些支付方式？',
      answer: '支持支付宝、微信支付、Visa、Mastercard等主流支付方式。',
    },
  ];

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
