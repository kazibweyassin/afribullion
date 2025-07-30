export function PricingSection(){
  return (
    <section className="w-full bg-white py-16 border-b border-[#E5E7EB]" id="featured">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-10 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center border border-[#D4AF37] rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80" alt="1oz Gold Bar" className="w-20 h-20 object-cover mb-3 rounded" />
            <h3 className="text-lg font-bold text-[#222] mb-1">1oz Gold Bar</h3>
            <p className="text-sm text-[#222] mb-2 text-center">Pure 24k gold bar</p>
            <div className="text-xl font-bold text-[#D4AF37] mb-3">UGX 2,350,000</div>
            <a href="/bullion/gold-bars" className="button-gold px-4 py-2 w-full text-center text-sm">Shop Now</a>
          </div>
          <div className="flex flex-col items-center border border-[#D4AF37] rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80" alt="Gold Coin" className="w-20 h-20 object-cover mb-3 rounded" />
            <h3 className="text-lg font-bold text-[#222] mb-1">Gold Coin</h3>
            <p className="text-sm text-[#222] mb-2 text-center">1oz Gold Eagle</p>
            <div className="text-xl font-bold text-[#D4AF37] mb-3">UGX 2,370,000</div>
            <a href="/bullion/gold-coins" className="button-gold px-4 py-2 w-full text-center text-sm">Shop Now</a>
          </div>
          <div className="flex flex-col items-center border border-[#D4AF37] rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=300&q=80" alt="Gold Ring" className="w-20 h-20 object-cover mb-3 rounded" />
            <h3 className="text-lg font-bold text-[#222] mb-1">Gold Ring</h3>
            <p className="text-sm text-[#222] mb-2 text-center">18k Gold Wedding Band</p>
            <div className="text-xl font-bold text-[#D4AF37] mb-3">UGX 850,000</div>
            <a href="/jewellery/rings" className="button-gold px-4 py-2 w-full text-center text-sm">Shop Now</a>
          </div>
          <div className="flex flex-col items-center border border-[#D4AF37] rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80" alt="Silver Bar" className="w-20 h-20 object-cover mb-3 rounded" />
            <h3 className="text-lg font-bold text-[#222] mb-1">Silver Bar</h3>
            <p className="text-sm text-[#222] mb-2 text-center">10oz Silver Bar</p>
            <div className="text-xl font-bold text-[#D4AF37] mb-3">UGX 450,000</div>
            <a href="/bullion/silver-bars" className="button-gold px-4 py-2 w-full text-center text-sm">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
