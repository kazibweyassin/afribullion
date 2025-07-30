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
      <div className="relative h-64 flex items-center justify-center mb-12">
        <Image src="/assets/images/gold-bar.png" alt="Gold Bars" width={160} height={160} className="absolute left-8 top-8 opacity-20" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-[#D4AF37] mb-4">Gold Bars</h1>
          <p className="text-lg text-[#222] max-w-xl mx-auto">Discover our range of LBMA-certified gold bars for secure investment and gifting. All products are fully insured and delivered with authenticity certificates.</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mb-16">
        <h2 className="text-2xl font-bold text-[#222] mb-6">Available Gold Bars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goldBars.map((bar, idx) => (
            <div key={idx} className="bg-[#F9F6F2] rounded-xl border border-[#D4AF37]/20 shadow p-6 flex flex-col items-center">
              <Image src={bar.img} alt={bar.name} width={80} height={80} className="mb-4" />
              <h3 className="font-bold text-lg text-[#D4AF37] mb-2">{bar.name}</h3>
              <p className="text-sm text-[#222] mb-2">{bar.purity}</p>
              <div className="text-xl font-bold text-[#222] mb-2">{bar.price}</div>
              <button
                className={`px-6 py-2 rounded font-semibold ${bar.inStock ? 'bg-[#D4AF37] text-black hover:bg-[#B8941F]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                disabled={!bar.inStock}
              >
                {bar.inStock ? 'Buy Now' : 'Out of Stock'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="container mb-12 flex flex-wrap gap-4 justify-center">
        <span className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full text-sm font-semibold text-[#D4AF37] border border-[#D4AF37]/20"><span>🏆</span>LBMA Certified</span>
        <span className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full text-sm font-semibold text-[#D4AF37] border border-[#D4AF37]/20"><span>🛡️</span>Fully Insured</span>
        <span className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full text-sm font-semibold text-[#D4AF37] border border-[#D4AF37]/20"><span>🔒</span>Secure Storage</span>
        <span className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full text-sm font-semibold text-[#D4AF37] border border-[#D4AF37]/20"><span>🇺🇬</span>Proudly Ugandan</span>
      </div>

      {/* Buying Guide */}
      <div className="container mb-16 max-w-2xl mx-auto bg-[#F9F6F2] rounded-xl border border-[#D4AF37]/20 p-8">
        <h2 className="text-xl font-bold text-[#222] mb-4">How to Buy Gold Bars</h2>
        <ol className="list-decimal list-inside text-[#222] space-y-2">
          <li>Select your preferred gold bar and click <span className="font-semibold text-[#D4AF37]">Buy Now</span>.</li>
          <li>Complete secure payment via bank transfer or mobile money.</li>
          <li>Receive insured delivery or opt for secure storage in our vaults.</li>
          <li>Get authenticity certificates and receipts for every purchase.</li>
        </ol>
      </div>

      {/* FAQ */}
      <div className="container max-w-2xl mx-auto mb-16">
        <h2 className="text-xl font-bold text-[#222] mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#D4AF37]">Is my gold insured and certified?</h3>
            <p className="text-[#222]">Yes, all gold bars are LBMA certified and fully insured. You receive certificates and receipts for every purchase.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#D4AF37]">How do I receive my gold?</h3>
            <p className="text-[#222]">Choose insured delivery to your location or secure storage in our professional vaults.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#D4AF37]">Can I sell my gold back?</h3>
            <p className="text-[#222]">Yes, we offer a buyback guarantee at competitive market rates. Contact us for details.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
