export default function RingsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-4 text-[#D4AF37]">Gold Rings</h1>
      <p className="mb-6 text-gray-700">Explore our collection of physical gold rings, crafted from pure 24k and 22k gold. Each ring is a tangible asset, combining timeless beauty with real investment value. Perfect for personal style, gifting, or building your precious metals portfolio.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Example product card */}
        <div className="border border-[#D4AF37] rounded-lg p-6 bg-white shadow hover:shadow-lg transition-shadow">
          <img src="/assets/images/gold-ring-1.jpg" alt="24k Gold Ring" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-lg font-bold text-[#D4AF37] mb-2">24k Classic Gold Ring</h2>
          <p className="text-gray-700 mb-2">Weight: 10g | Purity: 99.99% | LBMA Certified</p>
          <p className="text-gray-600 mb-4">A timeless piece for collectors and investors. Includes certificate of authenticity.</p>
          <button className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold rounded hover:scale-105 transition-transform">View Details</button>
        </div>
        {/* Add more product cards as needed */}
      </div>
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">All rings are physical gold, delivered securely or stored in our insured vaults. Invest in beauty and value with AfriBullion.</p>
      </div>
    </main>
  );
}
