"use client"

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "How do I buy gold from AurumTrust Gold?",
    answer: "Buying gold from AurumTrust Gold is simple and secure. Browse our products online, select your preferred gold bars or coins, and click 'Shop Now'. Our expert team will guide you through the entire process, from secure payment to delivery or storage options. You can also call us directly at +256 700 000 000 for personalized assistance."
  },
  {
    question: "Is my gold insured and safely stored?",
    answer: "Absolutely! All gold purchased through AurumTrust Gold is fully insured and stored in secure, audited vaults that meet international standards. We offer both secure storage in our professional facilities or insured delivery to your location in Uganda. Our insurance coverage protects your investment against theft, damage, and other risks."
  },
  {
    question: "Can I sell my gold back to AurumTrust Gold?",
    answer: "Yes! We offer a comprehensive buyback guarantee at competitive market rates. Whether you purchased from us or elsewhere, we'll provide you with a fair market quote and handle the transaction securely. Our buyback process is quick, transparent, and includes proper documentation for your records."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept multiple secure payment methods including bank transfers, mobile money (MTN, Airtel), and cash payments for in-person transactions. All payments are processed securely with detailed receipts provided. For larger investments, we also offer flexible payment plans and institutional payment options."
  },
  {
    question: "Do you serve institutional clients?",
    answer: "Yes, we provide comprehensive gold investment solutions for both individuals and institutions across Uganda and East Africa. Our institutional services include bulk purchases, custom storage solutions, dedicated account management, and tailored investment strategies. We work with banks, investment firms, and corporate clients."
  },
  {
    question: "How do I verify the authenticity of my gold?",
    answer: "All our gold products are LBMA certified and come with authenticity certificates. Each piece has unique serial numbers and hallmarks. We provide detailed documentation including certificates of authenticity, assay reports, and purchase receipts. We can also arrange independent verification through certified laboratories if needed."
  },
  {
    question: "What are your shipping and delivery options?",
    answer: "We offer secure, insured delivery throughout Uganda with multiple options. Standard delivery takes 2-3 business days, while express delivery is available for urgent orders. For larger orders, we provide armored vehicle delivery. International shipping is available to select countries with full insurance coverage and real-time tracking."
  },
  {
    question: "How do I track gold prices?",
    answer: "We display live gold prices on our website and provide regular market updates via email. Our floating price widget shows real-time updates, and you can call us anytime for current pricing information and market analysis. We also offer price alerts and market insights to help you make informed investment decisions."
  },
  {
    question: "What are the minimum and maximum purchase amounts?",
    answer: "We offer flexible investment options to suit all budgets. Minimum purchases start from 1 gram of gold, while there's no maximum limit. We can accommodate both small individual investments and large institutional purchases. Our team will work with you to find the best investment strategy for your needs."
  },
  {
    question: "Do you offer storage services?",
    answer: "Yes, we provide professional vault storage services with multiple options. Our secure facilities are fully insured, climate-controlled, and monitored 24/7. We offer individual storage boxes, segregated storage, and allocated storage options. Storage fees are competitive and transparent with no hidden costs."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 border-b border-[#E5E7EB]" id="faq">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#222] max-w-2xl mx-auto">
            Find answers to common questions about gold investment, our services, and how we can help you secure your financial future.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="mb-4 border border-[#E5E7EB] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <button
                className="w-full px-6 py-5 text-left font-semibold text-[#222] hover:bg-[#F5F5F5] transition-colors flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg">{item.question}</span>
                <span className="text-[#D4AF37] text-2xl font-light transition-transform duration-200">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-[#222] leading-relaxed bg-[#F9F9F9] border-t border-[#E5E7EB]">
                  <p className="pt-4">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-[#D4AF37]/10 p-8 rounded-lg border border-[#D4AF37]/20">
            <h3 className="text-xl font-bold text-[#222] mb-4">Still have questions?</h3>
            <p className="text-[#222] mb-6">
              Our expert team is here to help you with any questions about gold investment, 
              our products, or services. We&apos;re committed to providing you with the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="button-gold px-8 py-3 inline-block"
              >
                Contact Our Team
              </a>
              <a 
                href="tel:+256700000000" 
                className="button-outline-gold px-8 py-3 inline-block"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 