import Link from "next/link";
import {SpherealLogo} from "@/components/sphereal-logo";
import Image from "next/image";

export function SiteFooter() {
  return (
    <>
      <footer className="w-full bg-white border-t border-[#E5E7EB] py-12 mt-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand & Trust */}
            <div>
              <Link href="/" className="inline-flex items-center gap-4 mb-4">
                <SpherealLogo className="size-8" />
                <p className="font-bold text-xl text-[#D4AF37]">AfriBullion</p>
              </Link>
              <p className="text-sm text-[#222] mb-4">Uganda&apos;s premier precious metals dealer, offering secure investment solutions and fine jewellery.</p>
              <div className="flex gap-4 mb-4">
                <a href="#" className="text-[#D4AF37] hover:text-[#B8941F]">Facebook</a>
                <a href="#" className="text-[#D4AF37] hover:text-[#B8941F]">Twitter</a>
                <a href="#" className="text-[#D4AF37] hover:text-[#B8941F]">Instagram</a>
              </div>
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-flex items-center gap-1 bg-[#D4AF37]/10 px-3 py-1 rounded-full text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/20"><span>🏆</span>LBMA Certified</span>
                <span className="inline-flex items-center gap-1 bg-[#D4AF37]/10 px-3 py-1 rounded-full text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/20"><span>🛡️</span>Fully Insured</span>
                <span className="inline-flex items-center gap-1 bg-[#D4AF37]/10 px-3 py-1 rounded-full text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/20"><span>🔒</span>Secure Storage</span>
                <span className="inline-flex items-center gap-1 bg-[#D4AF37]/10 px-3 py-1 rounded-full text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/20"><span>🇺🇬</span>Proudly Ugandan</span>
              </div>
            </div>
            {/* Featured Products */}
            <div>
              <h3 className="font-bold text-[#222] mb-4">Featured Products</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-[#F9F6F2] rounded-lg border border-[#D4AF37]/20 shadow-sm">
                  <Image src="/assets/images/gold-bar.png" alt="1oz Gold Bar" width={48} height={48} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#222]">1oz Gold Bar</h4>
                    <p className="text-xs text-[#888]">Pure 24k LBMA certified</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#D4AF37] font-bold">UGX 2,350,000</div>
                    <div className="text-xs text-green-600">+2.5% today</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-[#F9F6F2] rounded-lg border border-[#D4AF37]/20 shadow-sm">
                  <Image src="/assets/images/gold-coin.png" alt="Gold Eagle Coin" width={48} height={48} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#222]">Gold Eagle Coin</h4>
                    <p className="text-xs text-[#888]">1oz American Eagle</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#D4AF37] font-bold">UGX 2,370,000</div>
                    <div className="text-xs text-green-600">+1.8% today</div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a href="/bullion" className="inline-block px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded hover:bg-[#B8941F] transition">View All Products</a>
              </div>
            </div>
            {/* Shop by Product */}
            <div>
              <h3 className="font-bold text-[#222] mb-4">Shop by Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/bullion" className="text-[#222] hover:text-[#D4AF37]">Bullion</a></li>
                <li><a href="/coins" className="text-[#222] hover:text-[#D4AF37]">Coins</a></li>
                <li><a href="/jewellery" className="text-[#222] hover:text-[#D4AF37]">Jewellery</a></li>
                <li><a href="/gifts" className="text-[#222] hover:text-[#D4AF37]">Gifts</a></li>
              </ul>
            </div>
            {/* Customer Care & Contact */}
            <div>
              <h3 className="font-bold text-[#222] mb-4">Customer Care</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/contact" className="text-[#222] hover:text-[#D4AF37]">Contact Us</a></li>
                <li><a href="/shipping" className="text-[#222] hover:text-[#D4AF37]">Shipping & Delivery</a></li>
                <li><a href="/faqs" className="text-[#222] hover:text-[#D4AF37]">FAQs</a></li>
                <li><a href="/policies" className="text-[#222] hover:text-[#D4AF37]">Policies</a></li>
              </ul>
              <h3 className="font-bold text-[#222] mt-6 mb-4">Contact</h3>
              <div className="space-y-2 text-sm">
                <p className="text-[#222]">info@aurumtrustgold.com</p>
                <p className="text-[#222]">+256 700 000 000</p>
                <p className="text-[#222]">Kampala, Uganda</p>
              </div>
              <div className="mt-4">
                <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold">Open Mon-Sat, 9am-6pm</span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#E5E7EB] pt-6 text-center flex flex-col items-center gap-2">
            <div className="flex gap-4 justify-center mb-2">
              <Image src="/assets/brands/lbma-logo.svg" alt="LBMA Certified" width={24} height={24} className="h-6 w-auto" />
              <Image src="/assets/brands/insured-logo.svg" alt="Fully Insured" width={24} height={24} className="h-6 w-auto" />
              <Image src="/assets/brands/secure-logo.svg" alt="Secure Storage" width={24} height={24} className="h-6 w-auto" />
            </div>
            <p className="text-sm text-[#888]">© {new Date().getFullYear()} AfriBullion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
