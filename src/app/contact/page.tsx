"use client"

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-[#222] max-w-2xl mx-auto">
            Get in touch with our team for personalized gold investment advice, 
            product inquiries, or any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#F5F5F5] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#222] mb-6">Send us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for your message! We&apos;ll get back to you within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-3 rounded border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="gold-investment">Gold Investment</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="storage-services">Storage Services</option>
                  <option value="buyback">Buyback Services</option>
                  <option value="general">General Inquiry</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full button-gold py-3 text-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#222] mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h3 className="font-semibold text-[#222]">Email</h3>
                    <p className="text-[#222]">info@aurumtrustgold.com</p>
                    <p className="text-sm text-[#888]">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-semibold text-[#222]">Phone</h3>
                    <p className="text-[#222]">+256 700 000 000</p>
                    <p className="text-sm text-[#888]">Mon-Fri: 8AM-6PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-semibold text-[#222]">Address</h3>
                    <p className="text-[#222]">Plot 123, Kampala Road</p>
                    <p className="text-[#222]">Kampala, Uganda</p>
                    <p className="text-sm text-[#888]">By appointment only</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">💬</span>
                  <div>
                    <h3 className="font-semibold text-[#222]">WhatsApp</h3>
                    <p className="text-[#222]">+256 700 000 000</p>
                    <p className="text-sm text-[#888]">Quick responses</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F5] p-6 rounded-lg">
              <h3 className="font-bold text-[#222] mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-[#D4AF37]/10 p-6 rounded-lg border border-[#D4AF37]/20">
              <h3 className="font-bold text-[#222] mb-2">Emergency Contact</h3>
              <p className="text-sm text-[#222] mb-2">For urgent matters outside business hours:</p>
              <p className="font-semibold text-[#D4AF37]">+256 700 000 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 