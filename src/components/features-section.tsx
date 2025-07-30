"use client"

import { useState } from 'react';

export function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredProcess, setHoveredProcess] = useState(null);

  const features = [
    {
      id: 1,
      icon: "🔒",
      title: "Secure Storage",
      description: "Your gold is stored in state-of-the-art, fully insured vaults with 24/7 monitoring and multiple security layers. Choose between allocated or segregated storage options.",
      action: "Learn More",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: "💰",
      title: "Competitive Pricing",
      description: "Get the best value with our transparent, competitive pricing. No hidden fees, no surprises. We offer real-time market prices with minimal spreads.",
      action: "View Prices",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 3,
      icon: "🚚",
      title: "Insured Delivery",
      description: "Secure, fully insured delivery throughout Uganda. From armored vehicles for large orders to discreet packaging for smaller investments.",
      action: "Delivery Info",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      icon: "👨‍💼",
      title: "Expert Support",
      description: "Dedicated investment advisors with years of experience in precious metals. Get personalized guidance for your investment strategy.",
      action: "Get Advice",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      icon: "💳",
      title: "Easy Transactions",
      description: "Simple, secure payment options including bank transfers, mobile money, and cash. Complete transactions in minutes, not days.",
      action: "Payment Options",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      id: 6,
      icon: "🔄",
      title: "Buyback Guarantee",
      description: "Sell your gold back to us anytime at competitive market rates. Quick, transparent process with immediate payment.",
      action: "Sell Gold",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      icon: "📝",
      title: "Create Account",
      description: "Sign up in minutes with our secure registration process. No hidden fees, no complicated paperwork."
    },
    {
      step: "02",
      icon: "🏅",
      title: "Choose Your Gold",
      description: "Select from our range of LBMA-certified gold bars, coins, and investment products. All with guaranteed authenticity."
    },
    {
      step: "03",
      icon: "💳",
      title: "Secure Payment",
      description: "Complete your purchase with secure payment options. Bank transfer, mobile money, or cash - your choice."
    },
    {
      step: "04",
      icon: "🔒",
      title: "Secure Storage",
      description: "Your gold is stored in our insured vaults or delivered securely to your location. You're always in control."
    }
  ];

  const trustBadges = [
    {
      icon: "🏆",
      title: "LBMA Certified",
      description: "London Bullion Market Association certified gold meets the highest international standards"
    },
    {
      icon: "🛡️",
      title: "Fully Insured",
      description: "Complete protection for your investments with comprehensive insurance coverage"
    },
    {
      icon: "🏦",
      title: "Secure Storage",
      description: "Professional vault facilities with 24/7 monitoring and multiple security layers"
    },
    {
      icon: "🇺🇬",
      title: "Ugandan Owned",
      description: "Proudly Ugandan, serving East Africa with local expertise and understanding"
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-[#D4AF37]/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] font-semibold text-sm mb-6">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2 animate-pulse"></span>
            Trusted by thousands of investors
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#222] mb-6 leading-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F] relative">
              AfriBullion
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </span>
            ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the gold standard in precious metals investment. We combine security, transparency, 
            and expertise to provide you with the most trusted gold investment platform in East Africa.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 hover:border-[#D4AF37]/30 relative overflow-hidden"
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <span className="text-2xl filter drop-shadow-sm">{feature.icon}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#222] mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                  {feature.description}
                </p>
                
                <button 
                  className="inline-flex items-center text-[#D4AF37] font-semibold hover:text-[#B8941F] transition-colors group/btn"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <span>{feature.action}</span>
                  <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Process */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#222] mb-6">
              How to Invest with AfriBullion
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting started with gold investment has never been easier. Follow these simple steps 
              to begin your journey towards financial security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className="relative group"
                onMouseEnter={() => setHoveredProcess(index)}
                onMouseLeave={() => setHoveredProcess(null)}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 hover:border-[#D4AF37]/30 text-center relative overflow-hidden">
                  {/* Step connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent transform -translate-y-1/2 z-10">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <span className="text-2xl filter drop-shadow-sm">{step.icon}</span>
                    </div>
                    
                    <div className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    
                    <h4 className="text-lg sm:text-xl font-bold text-[#222] mb-4 group-hover:text-[#D4AF37] transition-colors">
                      {step.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 lg:mt-16">
            <button className="group inline-flex items-center bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span>Start Investing Today</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12 lg:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222] mb-6">
                Why Trust AfriBullion?
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our commitment to excellence is backed by industry certifications and proven track record
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {trustBadges.map((badge, index) => (
                <div 
                  key={badge.title}
                  className="text-center group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <span className="text-3xl filter drop-shadow-sm">{badge.icon}</span>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-[#222] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {badge.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}