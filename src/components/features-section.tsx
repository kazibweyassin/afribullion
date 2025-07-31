"use client"

export function FeaturesSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-[#D4AF37]/5">
      <div className="container mx-auto px-8">
        
        {/* Main Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-6">
            Why Choose <span className="text-[#D4AF37]">AfriBullion</span>?
          </h2>
          <p className="text-xl text-[#222] max-w-3xl mx-auto leading-relaxed">
            Experience the gold standard in precious metals investment. We combine security, transparency, 
            and expertise to provide you with the most trusted gold investment platform in Uganda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-2xl font-bold text-[#222] mb-4">Secure Storage</h3>
            <p className="text-[#222] leading-relaxed mb-6">
              Your gold is stored in state-of-the-art, fully insured vaults with 24/7 monitoring and 
              multiple security layers. Choose between allocated or segregated storage options.
            </p>
            <div className="flex items-center text-[#D4AF37] font-semibold">
              <span>Learn More</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-2xl font-bold text-[#222] mb-4">Competitive Pricing</h3>
            <p className="text-[#222] leading-relaxed mb-6">
              Get the best value with our transparent, competitive pricing. No hidden fees, 
              no surprises. We offer real-time market prices with minimal spreads.
            </p>
            <div className="flex items-center text-[#D4AF37] font-semibold">
              <span>View Prices</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-2xl font-bold text-[#222] mb-4">Insured Delivery</h3>
            <p className="text-[#222] leading-relaxed mb-6">
              Secure, fully insured delivery throughout Uganda. From armored vehicles for large orders 
              to discreet packaging for smaller investments.
            </p>
            <div className="flex items-center text-[#D4AF37] font-semibold">
              <span>Delivery Info</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">👨‍💼</span>
            </div>
            <h3 className="text-2xl font-bold text-[#222] mb-4">Expert Support</h3>
            <p className="text-[#222] leading-relaxed mb-6">
              Dedicated investment advisors with years of experience in precious metals. 
              Get personalized guidance for your investment strategy.
            </p>
            <div className="flex items-center text-[#D4AF37] font-semibold">
              <span>Get Advice</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="text-2xl font-bold text-[#222] mb-4">Easy Transactions</h3>
            <p className="text-[#222] leading-relaxed mb-6">
              Simple, secure payment options including bank transfers, mobile money, and cash. 
              Complete transactions in minutes, not days.
            </p>
            <div className="flex items-center text-[#D4AF37] font-semibold">
              <span>Payment Options</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-2xl font-bold text-[#222] mb-4">Buyback Guarantee</h3>
            <p className="text-[#222] leading-relaxed mb-6">
              Sell your gold back to us anytime at competitive market rates. 
              Quick, transparent process with immediate payment.
            </p>
            <div className="flex items-center text-[#D4AF37] font-semibold">
              <span>Sell Gold</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>

        {/* Investment Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#222] mb-4">How to Invest with AfriBullion</h3>
            <p className="text-xl text-[#222] max-w-2xl mx-auto">
              Getting started with gold investment has never been easier. Follow these simple steps 
              to begin your journey towards financial security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📝</span>
                </div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">01</div>
                <h4 className="text-xl font-bold text-[#222] mb-4">Create Account</h4>
                <p className="text-[#222] text-sm leading-relaxed">
                  Sign up in minutes with our secure registration process. No hidden fees, 
                  no complicated paperwork.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#D4AF37] text-2xl">
                →
              </div>
            </div>

            <div className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🏅</span>
                </div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">02</div>
                <h4 className="text-xl font-bold text-[#222] mb-4">Choose Your Gold</h4>
                <p className="text-[#222] text-sm leading-relaxed">
                  Select from our range of LBMA-certified gold bars, coins, and investment products. 
                  All with guaranteed authenticity.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#D4AF37] text-2xl">
                →
              </div>
            </div>

            <div className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💳</span>
                </div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">03</div>
                <h4 className="text-xl font-bold text-[#222] mb-4">Secure Payment</h4>
                <p className="text-[#222] text-sm leading-relaxed">
                  Complete your purchase with secure payment options. Bank transfer, mobile money, 
                  or cash - your choice.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#D4AF37] text-2xl">
                →
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🔒</span>
                </div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">04</div>
                <h4 className="text-xl font-bold text-[#222] mb-4">Secure Storage</h4>
                <p className="text-[#222] text-sm leading-relaxed">
                  Your gold is stored in our insured vaults or delivered securely to your location. 
                  You&apos;re always in control.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/register" 
              className="inline-flex items-center bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B8941F] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Investing Today
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#222] mb-4">Why Trust AfriBullion?</h3>
            <p className="text-xl text-[#222] max-w-2xl mx-auto">
              Our commitment to excellence is backed by industry certifications and proven track record
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🏆</span>
              </div>
              <h4 className="text-xl font-bold text-[#222] mb-2">LBMA Certified</h4>
              <p className="text-[#222] text-sm">London Bullion Market Association certified gold meets the highest international standards</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛡️</span>
              </div>
              <h4 className="text-xl font-bold text-[#222] mb-2">Fully Insured</h4>
              <p className="text-[#222] text-sm">Complete protection for your investments with comprehensive insurance coverage</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🏦</span>
              </div>
              <h4 className="text-xl font-bold text-[#222] mb-2">Secure Storage</h4>
              <p className="text-[#222] text-sm">Professional vault facilities with 24/7 monitoring and multiple security layers</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🇺🇬</span>
              </div>
              <h4 className="text-xl font-bold text-[#222] mb-2">Ugandan Owned</h4>
              <p className="text-[#222] text-sm">Proudly Ugandan, serving East Africa with local expertise and understanding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
