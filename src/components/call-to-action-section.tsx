"use client"

import { useState } from "react";

export function CallToActionSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="w-full bg-[#D4AF37] py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Gold Market Insights
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get exclusive access to gold market analysis, investment tips, and special offers. 
            Join thousands of investors who trust AurumTrust Gold for their precious metals needs.
          </p>
          
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded text-[#222] focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-[#D4AF37] font-bold rounded hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="bg-white/20 text-white p-4 rounded-lg max-w-md mx-auto">
              <p className="font-semibold">Thank you for subscribing!</p>
              <p className="text-sm opacity-90">You&apos;ll receive our next gold market update soon.</p>
            </div>
          )}
          
          <div className="mt-8 flex justify-center gap-6 text-sm text-white/80">
            <span>✓ No spam, unsubscribe anytime</span>
            <span>✓ Exclusive market insights</span>
            <span>✓ Special member offers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
