"use client"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#D4AF37]/20">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80" 
          alt="Gold bullion background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 py-2 text-sm">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
                <span>Live Gold Price: UGX 2,350,000/oz</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Invest in <span className="text-[#D4AF37]">Physical Gold</span> with Confidence
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Uganda&apos;s premier precious metals dealer. Buy, sell, and store LBMA-certified gold with 
                complete security and transparency.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-medium">LBMA Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-2xl">🇺🇬</span>
                <span className="text-sm font-medium">Ugandan Owned</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-black font-bold text-lg rounded-lg hover:bg-[#B8941F] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Shop Gold Now
                <span className="ml-2">→</span>
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D4AF37]">1000+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D4AF37]">UGX 50B+</div>
                <div className="text-sm text-gray-300">Gold Traded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D4AF37]">100%</div>
                <div className="text-sm text-gray-300">Secure Storage</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Featured Products</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80" 
                    alt="1oz Gold Bar" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">1oz Gold Bar</h4>
                    <p className="text-sm text-gray-300">Pure 24k LBMA certified</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#D4AF37] font-bold">UGX 2,350,000</div>
                    <div className="text-xs text-green-400">+2.5% today</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80" 
                    alt="Gold Coin" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">Gold Eagle Coin</h4>
                    <p className="text-sm text-gray-300">1oz American Eagle</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#D4AF37] font-bold">UGX 2,370,000</div>
                    <div className="text-xs text-green-400">+1.8% today</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <a 
                  href="#products" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#B8941F] transition-colors"
                >
                  View All Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
