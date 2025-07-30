"use client"
import { useState, useEffect } from 'react';
import { 
  Award, Shield, Lock, MapPin, Mail, Phone, Clock, 
  TrendingUp, ExternalLink, Facebook, Twitter, Instagram,
  ChevronRight, Star, Users, Building2
} from 'lucide-react';

// Mock SpherealLogo component
const SpherealLogo = ({ className }) => (
  <div className={`bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold ${className}`}>
    AB
  </div>
);

export function SiteFooter() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isBusinessHours, setIsBusinessHours] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Check if it's business hours (9 AM - 6 PM, Mon-Sat)
      const hour = now.getHours();
      const day = now.getDay();
      const isWeekday = day >= 1 && day <= 6; // Mon-Sat
      const isDuringHours = hour >= 9 && hour < 18;
      setIsBusinessHours(isWeekday && isDuringHours);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const trustBadges = [
    { icon: Award, text: "LBMA Certified", color: "text-blue-600" },
    { icon: Shield, text: "Fully Insured", color: "text-green-600" },
    { icon: Lock, text: "Secure Storage", color: "text-purple-600" },
    { icon: MapPin, text: "Proudly Ugandan", color: "text-red-600" }
  ];

  const featuredProducts = [
    {
      name: "1oz Gold Bar",
      description: "Pure 24k LBMA certified",
      price: "UGX 2,350,000",
      change: "+2.5%",
      changeColor: "text-green-600",
      image: "🏅"
    },
    {
      name: "Gold Eagle Coin",
      description: "1oz American Eagle",
      price: "UGX 2,370,000",
      change: "+1.8%",
      changeColor: "text-green-600",
      image: "🪙"
    }
  ];

  const quickLinks = [
    { name: "Bullion", href: "/bullion" },
    { name: "Coins", href: "/coins" },
    { name: "Jewellery", href: "/jewellery" },
    { name: "Gifts", href: "/gifts" }
  ];

  const customerCareLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping & Delivery", href: "/shipping" },
    { name: "FAQs", href: "/faqs" },
    { name: "Policies", href: "/policies" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-amber-400 to-yellow-500 py-8">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-black mb-2">Stay Updated on Gold Prices</h3>
                <p className="text-black/80">Get daily market updates and exclusive investment insights</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white min-w-[280px]"
                />
                <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
              {/* Brand & Trust Section */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-4 mb-6">
                  <SpherealLogo className="w-12 h-12" />
                  <h2 className="font-bold text-2xl bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    AfriBullion
                  </h2>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Uganda's premier precious metals dealer, offering secure investment solutions and fine jewellery with unmatched expertise.
                </p>

                {/* Social Links */}
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a 
                        key={social.name}
                        href={social.href}
                        className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-3">
                  {trustBadges.map((badge, index) => {
                    const Icon = badge.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-center gap-2 bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-700 hover:border-amber-400/30 transition-colors"
                      >
                        <Icon className={`w-4 h-4 ${badge.color}`} />
                        <span className="text-xs font-medium text-gray-300">{badge.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Featured Products */}
              <div>
                <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  Featured Products
                </h3>
                
                <div className="space-y-4 mb-6">
                  {featuredProducts.map((product, index) => (
                    <div 
                      key={index}
                      className="group bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-amber-400/30 transition-all duration-300 hover:bg-gray-800/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center text-2xl">
                          {product.image}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-400">{product.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-amber-400 font-bold text-sm">{product.price}</div>
                          <div className={`text-xs ${product.changeColor} flex items-center gap-1`}>
                            <TrendingUp className="w-3 h-3" />
                            {product.change} today
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center gap-2 group">
                  View All Products
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-xl mb-6">Shop by Category</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="flex items-center justify-between group text-gray-300 hover:text-amber-400 transition-colors py-2"
                      >
                        <span>{link.name}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-gradient-to-br from-amber-400/10 to-yellow-500/10 rounded-xl border border-amber-400/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span className="font-semibold text-amber-400">Customer Rating</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-sm text-gray-300 ml-2">4.9/5</span>
                  </div>
                  <p className="text-xs text-gray-400">Based on 1000+ reviews</p>
                </div>
              </div>

              {/* Contact & Support */}
              <div>
                <h3 className="font-bold text-xl mb-6">Customer Support</h3>
                
                <div className="space-y-4 mb-6">
                  {customerCareLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.href}
                      className="flex items-center justify-between group text-gray-300 hover:text-amber-400 transition-colors py-1"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-amber-400" />
                    <a href="mailto:info@aurumtrustgold.com" className="hover:text-amber-400 transition-colors">
                      info@aurumtrustgold.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-amber-400" />
                    <a href="tel:+256700000000" className="hover:text-amber-400 transition-colors">
                      +256 700 000 000
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Building2 className="w-5 h-5 text-amber-400" />
                    <span>Kampala, Uganda</span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold text-white">Business Hours</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    isBusinessHours 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${isBusinessHours ? 'bg-green-400' : 'bg-red-400'}`} />
                    {isBusinessHours ? 'Open Now' : 'Closed'}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>Licensed & Regulated</p>
                    <a href="/support/policies#aml" className="underline text-amber-400 hover:text-amber-500 ml-2">Anti-Money Laundering Policy</a>
                   <div className="mt-2 text-xs text-gray-500 max-w-xl">
                     <strong>Anti-Money Laundering Policy:</strong> AfriBullion is committed to preventing money laundering and terrorist financing. We verify customer identity, monitor transactions, and comply with all regulatory requirements to ensure a safe and transparent marketplace for precious metals.
                   </div>
                  </div>
                </div>
                
                <div className="text-center md:text-right">
                  <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} AfriBullion. All rights reserved.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Securing Uganda's financial future, one ounce at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}