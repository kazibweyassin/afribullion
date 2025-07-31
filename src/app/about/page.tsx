"use client"

import { useState, useEffect } from 'react';
import { Award, Shield, Building, MapPin, Target, Eye, Gem, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({
    customers: 0,
    traded: 0,
    years: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible['animate-stats']) {
      const animateCounter = (key: keyof typeof counters, target: number) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCounters(prev => ({ ...prev, [key]: target }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
          }
        }, 40);
      };

      animateCounter('customers', 1000);
      animateCounter('traded', 50);
      animateCounter('years', 3);
      animateCounter('satisfaction', 100);
    }
  }, [isVisible]);

  const features = [
    {
      icon: Award,
      title: "LBMA Certified",
      description: "All our gold meets the highest international standards"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete protection for your investments"
    },
    {
      icon: Building,
      title: "Secure Storage",
      description: "Professional vault facilities available"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep understanding of the Ugandan market"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide secure, transparent, and accessible gold investment opportunities while building lasting relationships with our customers through trust and excellence."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become the most trusted name in precious metals across East Africa, empowering individuals and institutions to secure their financial future."
    },
    {
      icon: Gem,
      title: "Our Values",
      description: "Integrity, transparency, security, customer focus, and excellence in everything we do."
    }
  ];

  const team = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      initials: "JD",
      description: "15+ years experience in precious metals trading and investment management.",
      expertise: ["Strategic Leadership", "Market Analysis", "Investment Strategy"]
    },
    {
      name: "Jane Smith",
      role: "Operations Director",
      initials: "JS",
      description: "Expert in logistics, security, and customer service operations.",
      expertise: ["Operations Management", "Security Systems", "Customer Relations"]
    },
    {
      name: "Michael Wilson",
      role: "Investment Advisor",
      initials: "MW",
      description: "Certified financial advisor specializing in precious metals investment strategies.",
      expertise: ["Financial Planning", "Risk Assessment", "Portfolio Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10"></div>
        <div className="container relative py-20">
          <div 
            id="animate-hero"
            className={`text-center transition-all duration-1000 ${
              isVisible['animate-hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Uganda&apos;s Premier Precious Metals Dealer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-amber-800 to-yellow-600 bg-clip-text text-transparent mb-6">
              About AfriBullion
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Committed to providing secure, transparent, and professional gold investment solutions 
              to individuals and institutions across East Africa.
            </p>
          </div>
        </div>
      </div>

      <div className="container space-y-20 pb-20">
        {/* Company Story */}
        <div 
          id="animate-story"
          className={`transition-all duration-1000 delay-200 ${
            isVisible['animate-story'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center text-amber-600 font-semibold mb-4">
                <Clock className="w-5 h-5 mr-2" />
                EST. 2020
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2020, AfriBullion emerged from a vision to democratize gold investment 
                  in Uganda and East Africa. We recognized the need for a trusted, transparent, and 
                  accessible platform for precious metals trading.
                </p>
                <p>
                  What started as a small family business has grown into Uganda&apos;s leading precious 
                  metals dealer, serving thousands of satisfied customers across the region. Our commitment 
                  to integrity, security, and customer service has remained unwavering.
                </p>
                <p>
                  Today, we&apos;re proud to be LBMA certified, fully insured, and trusted by both 
                  individual investors and institutional clients throughout East Africa.
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700 font-medium">LBMA Certified & Fully Insured</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" 
                  alt="Gold bullion bars representing AfriBullion&apos;s premium precious metals" 
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-4 rounded-xl shadow-lg">
                  <TrendingUp className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div 
          id="animate-values"
          className={`transition-all duration-1000 delay-300 ${
            isVisible['animate-values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built on strong principles that guide every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-yellow-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div 
          id="animate-features"
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-white transition-all duration-1000 delay-400 ${
            isVisible['animate-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10"></div>
          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose AfriBullion?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the difference of working with East Africa&apos;s most trusted precious metals dealer
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="text-center group hover:bg-white/5 p-6 rounded-2xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div 
          id="animate-team"
          className={`transition-all duration-1000 delay-500 ${
            isVisible['animate-team'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals driving AfriBullion's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {member.initials}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.description}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mr-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div 
          id="animate-stats"
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-500 p-12 text-white transition-all duration-1000 delay-600 ${
            isVisible['animate-stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 mr-3" />
              <h2 className="text-4xl font-bold">Our Impact</h2>
            </div>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.customers}+
                </div>
                <p className="text-lg text-white/90">Happy Customers</p>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  UGX {counters.traded}B+
                </div>
                <p className="text-lg text-white/90">Gold Traded</p>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.years}+
                </div>
                <p className="text-lg text-white/90">Years of Excellence</p>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.satisfaction}%
                </div>
                <p className="text-lg text-white/90">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}