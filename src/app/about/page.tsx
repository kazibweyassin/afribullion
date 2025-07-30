export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-6">
            About AfriBullion
          </h1>
          <p className="text-xl text-[#222] max-w-3xl mx-auto">
            Uganda&apos;s premier precious metals dealer, committed to providing secure, 
            transparent, and professional gold investment solutions to individuals and institutions.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#222] mb-6">Our Story</h2>
            <p className="text-[#222] mb-4 leading-relaxed">
              Founded in 2020, AfriBullion emerged from a vision to democratize gold investment 
              in Uganda and East Africa. We recognized the need for a trusted, transparent, and 
              accessible platform for precious metals trading.
            </p>
            <p className="text-[#222] mb-4 leading-relaxed">
              What started as a small family business has grown into Uganda&apos;s leading precious 
              metals dealer, serving thousands of satisfied customers across the region. Our commitment 
              to integrity, security, and customer service has remained unwavering.
            </p>
            <p className="text-[#222] leading-relaxed">
              Today, we&apos;re proud to be LBMA certified, fully insured, and trusted by both 
              individual investors and institutional clients throughout East Africa.
            </p>
          </div>
          <div className="bg-[#F5F5F5] p-8 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" 
              alt="Gold bullion" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 border border-[#E5E7EB] rounded-lg">
            <span className="text-4xl mb-4 block">🎯</span>
            <h3 className="text-xl font-bold text-[#222] mb-3">Our Mission</h3>
            <p className="text-[#222]">
              To provide secure, transparent, and accessible gold investment opportunities 
              while building lasting relationships with our customers through trust and excellence.
            </p>
          </div>
          <div className="text-center p-6 border border-[#E5E7EB] rounded-lg">
            <span className="text-4xl mb-4 block">👁️</span>
            <h3 className="text-xl font-bold text-[#222] mb-3">Our Vision</h3>
            <p className="text-[#222]">
              To become the most trusted name in precious metals across East Africa, 
              empowering individuals and institutions to secure their financial future.
            </p>
          </div>
          <div className="text-center p-6 border border-[#E5E7EB] rounded-lg">
            <span className="text-4xl mb-4 block">💎</span>
            <h3 className="text-xl font-bold text-[#222] mb-3">Our Values</h3>
            <p className="text-[#222]">
              Integrity, transparency, security, customer focus, and excellence in everything we do.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#F5F5F5] p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-[#222] mb-8 text-center">Why Choose AfriBullion?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <span className="text-3xl mb-3 block">🏆</span>
              <h3 className="font-bold text-[#222] mb-2">LBMA Certified</h3>
              <p className="text-sm text-[#222]">All our gold meets the highest international standards</p>
            </div>
            <div className="text-center">
              <span className="text-3xl mb-3 block">🛡️</span>
              <h3 className="font-bold text-[#222] mb-2">Fully Insured</h3>
              <p className="text-sm text-[#222]">Complete protection for your investments</p>
            </div>
            <div className="text-center">
              <span className="text-3xl mb-3 block">🏦</span>
              <h3 className="font-bold text-[#222] mb-2">Secure Storage</h3>
              <p className="text-sm text-[#222]">Professional vault facilities available</p>
            </div>
            <div className="text-center">
              <span className="text-3xl mb-3 block">🇺🇬</span>
              <h3 className="font-bold text-[#222] mb-2">Local Expertise</h3>
              <p className="text-sm text-[#222]">Deep understanding of the Ugandan market</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#222] mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-[#D4AF37] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                JD
              </div>
              <h3 className="text-xl font-bold text-[#222] mb-2">John Doe</h3>
              <p className="text-[#D4AF37] mb-2">Founder & CEO</p>
              <p className="text-sm text-[#222]">
                15+ years experience in precious metals trading and investment management.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-[#D4AF37] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                JS
              </div>
              <h3 className="text-xl font-bold text-[#222] mb-2">Jane Smith</h3>
              <p className="text-[#D4AF37] mb-2">Operations Director</p>
              <p className="text-sm text-[#222]">
                Expert in logistics, security, and customer service operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-[#D4AF37] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                MW
              </div>
              <h3 className="text-xl font-bold text-[#222] mb-2">Michael Wilson</h3>
              <p className="text-[#D4AF37] mb-2">Investment Advisor</p>
              <p className="text-sm text-[#222]">
                Certified financial advisor specializing in precious metals investment strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#D4AF37] text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p>Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">UGX 50B+</div>
              <p>Gold Traded</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <p>Years of Excellence</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 