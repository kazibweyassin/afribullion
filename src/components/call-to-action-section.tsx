"use client"

import { useState, useEffect } from "react";

export function CallToActionSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(4782);
  const [currentBenefit, setCurrentBenefit] = useState(0);

  const benefits = [
    { icon: "📈", text: "Weekly market analysis", description: "Expert insights on gold trends" },
    { icon: "💎", text: "Exclusive investment tips", description: "Strategies from our advisors" },
    { icon: "🎁", text: "Special member offers", description: "Early access to deals" },
    { icon: "🔔", text: "Price alerts", description: "Never miss market opportunities" }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Investor",
      quote: "The market insights helped me time my gold purchases perfectly!",
      rating: 5
    },
    {
      name: "James K.",
      role: "Business Owner",
      quote: "Best gold investment newsletter in East Africa. Highly recommended!",
      rating: 5
    }
  ];

  useEffect(() => {
    // Animate subscriber count
    const interval = setInterval(() => {
      setSubscriberCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    // Rotate benefits
    const benefitInterval = setInterval(() => {
      setCurrentBenefit(prev => (prev + 1) % benefits.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(benefitInterval);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubscribed(true);
    setEmail("");
    setIsLoading(false);
    setSubscriberCount(prev => prev + 1);
  };

  const resetForm = () => {
    setSubscribed(false);
    setEmail("");
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Enhanced Background with Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#B8941F] to-[#D4AF37]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Social Proof */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white/90 text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-bold">{subscriberCount.toLocaleString()}+</span>
              <span>investors already subscribed</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Stay Ahead in the{" "}
              <span className="relative">
                <span className="text-yellow-200">Gold Market</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-200 rounded-full"></div>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get exclusive access to market analysis, investment strategies, and insider insights. 
              Join East Africa&apos;s most trusted community of gold investors.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-2xl mx-auto mb-12">
            {!subscribed ? (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                <div onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                      focusedInput ? 'ring-2 ring-white/50 shadow-lg' : ''
                    }`}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocusedInput(true)}
                        onBlur={() => setFocusedInput(false)}
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 text-[#222] text-lg bg-white border-0 focus:outline-none placeholder-gray-500"
                        required
                        disabled={isLoading}
                      />
                      {focusedInput && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading || !email}
                    className="group w-full px-8 py-4 bg-white text-[#D4AF37] font-bold text-lg rounded-2xl hover:bg-yellow-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
                        <span>Subscribing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>Get Free Gold Insights</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </div>
                    )}
                  </button>
                </div>

                {/* Enhanced Benefits */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={benefit.text}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-500 ${
                        index === currentBenefit 
                          ? 'bg-white/20 scale-105 shadow-lg' 
                          : 'bg-white/10 hover:bg-white/15'
                      }`}
                    >
                      <span className="text-2xl">{benefit.icon}</span>
                      <div>
                        <div className="text-white font-semibold text-sm">{benefit.text}</div>
                        <div className="text-white/70 text-xs">{benefit.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Community!</h3>
                <p className="text-white/90 mb-4">
                  Thank you for subscribing! You&apos;ll receive our next gold market update within 24 hours.
                </p>
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <p className="text-white/80 text-sm">
                    📧 Check your inbox for a confirmation email<br/>
                    📱 Add us to your contacts to never miss an update
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="text-white/80 hover:text-white text-sm underline transition-colors"
                >
                  Subscribe another email?
                </button>
              </div>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>No spam guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Weekly updates only</span>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-300 text-lg">★</span>
                  ))}
                </div>
                <blockquote className="text-white/90 italic mb-4 text-sm leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-white/70 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}