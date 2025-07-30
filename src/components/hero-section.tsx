"use client"

import { useState, useEffect } from 'react';

export function HeroSection() {
  const [goldPrice, setGoldPrice] = useState(2350000);
  const [priceChange, setPriceChange] = useState(2.5);
  const [isVisible, setIsVisible] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: "1oz Gold Bar",
      description: "Pure 24k LBMA certified",
      price: 2350000,
      change: 2.5,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Gold Eagle Coin",
      description: "1oz American Eagle",
      price: 2370000,
      change: 1.8,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80",
      badge: "Premium"
    },
    {
      id: 3,
      name: "Gold Krugerrand",
      description: "1oz South African",
      price: 2340000,
      change: 3.2,
      image: "https://images.unsplash.com/photo-1594736797933-d0fff2e1a5b3?auto=format&fit=crop&w=100&q=80",
      badge: "Popular"
    }
  ];

  const stats = [
    { value: "2,500+", label: "Happy Customers", icon: "👥" },
    { value: "UGX 75B+", label: "Gold Traded", icon: "💰" },
    { value: "99.9%", label: "Purity Guaranteed", icon: "✨" }
  ];

  const trustBadges = [
    { icon: "🏆", text: "LBMA Certified", description: "London Bullion Market Association" },
    { icon: "🛡️", text: "Fully Insured", description: "Complete protection coverage" },
    { icon: "🇺🇬", text: "Ugandan Owned", description: "Local expertise & trust" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate real-time price updates
    const priceInterval = setInterval(() => {
      const change = (Math.random() - 0.5) * 1000;
      setGoldPrice(prev => Math.max(2300000, prev + change));
      setPriceChange((Math.random() - 0.5) * 5);
    }, 5000);

    // Auto-rotate featured products
    const productInterval = setInterval(() => {
      setCurrentProductIndex(prev => (prev + 1) % featuredProducts.length);
    }, 4000);

    return () => {
      clearInterval(priceInterval);
      clearInterval(productInterval);
    };
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('UGX', 'UGX ');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-[#D4AF37]/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80" 
          alt="Gold bullion background" 
          className="w-full h-full object-cover scale-105 transform hover:scale-110 transition-transform duration-[10s]"
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className={`text-white space-y-6 lg:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Live Price Ticker */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/30 rounded-full px-6 py-3 text-sm font-medium shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
                <span className="text-[#D4AF37]">LIVE</span>
              </div>
              <span>Gold Price: {formatPrice(goldPrice)}/oz</span>
              <span className={`text-xs px-2 py-1 rounded-full ${priceChange >= 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(1)}%
              </span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Invest in{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] animate-gradient-x">
                    Physical Gold
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full"></div>
                </span>
                {" "}with Confidence
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                East Africa&apos;s premier precious metals dealer. Buy, sell, and store LBMA-certified gold with 
                complete security and transparency.
              </p>
            </div>

            {/* Enhanced Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge, index) => (
                <div 
                  key={badge.text}
                  className="group flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20 hover:bg-white/20 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{badge.icon}</span>
                  <div>
                    <div className="text-sm font-semibold">{badge.text}</div>
                    <div className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {badge.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Shop Gold Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </button>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white font-bold text-lg rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center">
                  Learn More
                  <span className="ml-2 group-hover:rotate-45 transition-transform duration-300">↗</span>
                </span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center group cursor-pointer"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] group-hover:text-[#F4D03F] transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Right Content - Dynamic Product Showcase */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Featured Products</h3>
                <div className="flex gap-2">
                  {featuredProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProductIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentProductIndex ? 'bg-[#D4AF37] scale-110' : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`View product ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Product Display */}
              <div className="space-y-4 mb-6">
                {featuredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 transition-all duration-500 transform ${
                      index === currentProductIndex 
                        ? 'opacity-100 translate-x-0 scale-100' 
                        : 'opacity-50 translate-x-2 scale-95'
                    } ${index !== currentProductIndex ? 'hidden sm:flex' : ''}`}
                  >
                    <div className="relative">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-xl shadow-lg"
                      />
                      <div className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-xs px-2 py-1 rounded-full font-semibold">
                        {product.badge}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-lg">{product.name}</h4>
                      <p className="text-sm text-gray-300">{product.description}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-[#D4AF37] font-bold text-lg">
                        {formatPrice(product.price)}
                      </div>
                      <div className={`text-xs font-semibold ${
                        product.change >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {product.change >= 0 ? '+' : ''}{product.change}% today
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Action Button */}
              <div className="space-y-4">
                <button className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
                  <span>View All Products</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
                
                <div className="text-center">
                  <p className="text-xs text-gray-400">
                    Prices update every 30 seconds • Last updated: just now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
          <p className="text-white/70 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll to explore
          </p>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-[#D4AF37] transition-colors duration-300 animate-bounce">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse group-hover:bg-[#D4AF37] transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Additional CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}