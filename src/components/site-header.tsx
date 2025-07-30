"use client"

import { useState } from "react";
import Link from "next/link";
import { SpherealLogo } from "@/components/sphereal-logo";

const NAV_ITEMS = [
  {
    label: "Bullion",
    dropdown: [
      { label: "Gold Bars", href: "/bullion/gold-bars" },
      { label: "Gold Coins", href: "/bullion/gold-coins" },
      { label: "Silver Bars", href: "/bullion/silver-bars" },
      { label: "Silver Coins", href: "/bullion/silver-coins" },
    ],
  },
  {
    label: "Coins",
    dropdown: [
      { label: "Collector Coins", href: "/coins/collector" },
      { label: "New Releases", href: "/coins/new" },
      { label: "Popular Themes", href: "/coins/themes" },
    ],
  },
  {
    label: "Jewellery",
    dropdown: [
      { label: "Rings", href: "/jewellery/rings" },
      { label: "Necklaces", href: "/jewellery/necklaces" },
      { label: "Bracelets", href: "/jewellery/bracelets" },
      { label: "Gifts", href: "/jewellery/gifts" },
    ],
  },
  {
    label: "Invest",
    dropdown: [
      { label: "How to Invest", href: "/invest/how" },
      { label: "Storage", href: "/invest/storage" },
      { label: "Metal Prices", href: "/invest/prices" },
    ],
  },
  {
    label: "About",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "News", href: "/news" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Support",
    dropdown: [
      { label: "Contact", href: "/support/contact" },
      { label: "FAQs", href: "/support/faqs" },
      { label: "Shipping", href: "/support/shipping" },
      { label: "Policies", href: "/support/policies" },
    ],
  },
];

export function SiteHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] shadow-sm">
      <section className="container flex items-center justify-between h-18">
        <Link href="/" className="flex items-center gap-4">
          <SpherealLogo />
          <p className="font-bold text-2xl text-[#D4AF37]">AurumTrust Gold</p>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 items-center relative">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="font-semibold text-base text-[#222] hover:text-[#D4AF37] px-3 py-2 rounded transition-colors focus:outline-none"
              >
                {item.label}
              </button>
              {item.dropdown && openDropdown === item.label && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-[#E5E7EB] rounded shadow-lg z-50">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2 text-[#222] hover:bg-[#F5F5F5] hover:text-[#D4AF37] text-sm"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        <div className="flex gap-3 items-center">
          <Link href="/search" className="p-2 text-[#222] hover:text-[#D4AF37]" aria-label="Search">
            🔍
          </Link>
          <Link href="/cart" className="p-2 text-[#222] hover:text-[#D4AF37] relative" aria-label="Cart">
            🛒
            <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </Link>
          <Link href="/login" className="hidden md:flex px-4 py-2 rounded font-bold text-[#222] border border-[#D4AF37] hover:bg-[#F5F5F5] transition-colors items-center gap-2">
            👤 Login
          </Link>
          <Link href="/register" className="hidden md:block px-4 py-2 rounded font-bold button-gold ml-1">Register</Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#222] hover:text-[#D4AF37]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </section>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB] shadow-lg">
          <div className="container py-4">
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full text-left font-semibold text-[#222] py-2 px-4 hover:bg-[#F5F5F5] rounded"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label} {item.dropdown && (openDropdown === item.label ? '▼' : '▶')}
                  </button>
                  {item.dropdown && openDropdown === item.label && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block py-2 px-4 text-sm text-[#222] hover:bg-[#F5F5F5] rounded"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-[#E5E7EB]">
                <Link href="/login" className="block w-full text-center px-4 py-2 rounded font-bold text-[#222] border border-[#D4AF37] hover:bg-[#F5F5F5] transition-colors mb-2">
                  👤 Login
                </Link>
                <Link href="/register" className="block w-full text-center px-4 py-2 rounded font-bold button-gold">
                  Register
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
