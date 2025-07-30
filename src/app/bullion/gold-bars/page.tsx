import Image from "next/image";

const goldBars = [
  {
    name: "1oz Gold Bar",
    purity: "24k LBMA Certified",
    price: "UGX 2,350,000",
    img: "/assets/images/gold-bar.png",
    inStock: true,
  },
  {
    name: "10g Gold Bar",
    purity: "24k LBMA Certified",
    price: "UGX 850,000",
    img: "/assets/images/gold-bar.png",
    inStock: true,
  },
  {
    name: "100g Gold Bar",
    purity: "24k LBMA Certified",
    price: "UGX 8,200,000",
    img: "/assets/images/gold-bar.png",
    inStock: false,
  },
];


export default function GoldBarsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 flex items-center justify-center mb-8 sm:mb-12">
        <Image src="/assets/images/gold-bar.png" alt="Gold Bars" width={120} height={120} className="absolute left-2 top-2 opacity-20 sm:left-8 sm:top-8 sm:w-[160px] sm:h-[160px]" />
        <div className="relative z-10 text-center px-2">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#D4AF37] mb-2 sm:mb-4">Gold Bars</h1>
          <p className="text-base sm:text-lg text-[#222] max-w-xl mx-auto">Discover our range of LBMA-certified gold bars for secure investment and gifting. All products are fully insured and delivered with authenticity certificates.</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mb-12 sm:mb-16 px-2">
        <h2 className="text-xl sm:text-2xl font-bold text-[#222] mb-4 sm:mb-6">Available Gold Bars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {goldBars.map((bar, idx) => (
            <div key={idx} className="bg-[#F9F6F2] rounded-xl border border-[#D4AF37]/20 shadow p-4 sm:p-6 flex flex-col items-center">
              <Image src={bar.img} alt={bar.name} width={64} height={64} className="mb-2 sm:mb-4" />
              <h3 className="font-bold text-base sm:text-lg text-[#D4AF37] mb-1 sm:mb-2">{bar.name}</h3>
              <p className="text-xs sm:text-sm text-[#222] mb-1 sm:mb-2">{bar.purity}</p>
              <div className="text-lg sm:text-xl font-bold text-[#222] mb-1 sm:mb-2">{bar.price}</div>
              <button
                className={`w-full px-4 py-2 rounded font-semibold ${bar.inStock ? 'bg-[#D4AF37] text-black hover:bg-[#B8941F]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'} transition-all duration-200 text-sm sm:text-base`}
                disabled={!bar.inStock}
              >
                {bar.inStock ? 'Buy Now' : 'Out of Stock'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="container mb-8 sm:mb-12 flex flex-wrap gap-2 sm:gap-4 justify-center px-2">
        <span className="inline-flex items-center gap-1 sm:gap-2 bg-[#D4AF37]/10 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-[#D4AF37] border border-[#D4AF37]/20"><span>🏆</span>LBMA Certified</span>
        <span className="inline-flex items-center gap-1 sm:gap-2 bg-[#D4AF37]/10 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-[#D4AF37] border border-[#D4AF37]/20"><span>🛡️</span>Fully Insured</span>
        <span className="inline-flex items-center gap-1 sm:gap-2 bg-[#D4AF37]/10 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-[#D4AF37] border border-[#D4AF37]/20"><span>🔒</span>Secure Storage</span>
        <span className="inline-flex items-center gap-1 sm:gap-2 bg-[#D4AF37]/10 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-[#D4AF37] border border-[#D4AF37]/20"><span>🇺🇬</span>Proudly Ugandan</span>
      </div>

      {/* Buying Guide */}
      <div className="container mb-12 sm:mb-16 max-w-2xl mx-auto bg-[#F9F6F2] rounded-xl border border-[#D4AF37]/20 p-4 sm:p-8 px-2">
        <h2 className="text-lg sm:text-xl font-bold text-[#222] mb-2 sm:mb-4">How to Buy Gold Bars</h2>
        <ol className="list-decimal list-inside text-[#222] space-y-1 sm:space-y-2 text-xs sm:text-base">
          <li>Select your preferred gold bar and click <span className="font-semibold text-[#D4AF37]">Buy Now</span>.</li>
          <li>Complete secure payment via bank transfer or mobile money.</li>
          <li>Receive insured delivery or opt for secure storage in our vaults.</li>
          <li>Get authenticity certificates and receipts for every purchase.</li>
        </ol>
      </div>

      {/* FAQ */}
      <div className="container max-w-2xl mx-auto mb-12 sm:mb-16 px-2">
        <h2 className="text-lg sm:text-xl font-bold text-[#222] mb-2 sm:mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2 sm:space-y-4">
          <div>
            <h3 className="font-semibold text-[#D4AF37] text-sm sm:text-base">Is my gold insured and certified?</h3>
            <p className="text-[#222] text-xs sm:text-base">Yes, all gold bars are LBMA certified and fully insured. You receive certificates and receipts for every purchase.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#D4AF37] text-sm sm:text-base">How do I receive my gold?</h3>
            <p className="text-[#222] text-xs sm:text-base">Choose insured delivery to your location or secure storage in our professional vaults.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#D4AF37] text-sm sm:text-base">Can I sell my gold back?</h3>
            <p className="text-[#222] text-xs sm:text-base">Yes, we offer a buyback guarantee at competitive market rates. Contact us for details.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
