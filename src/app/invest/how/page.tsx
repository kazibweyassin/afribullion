export default function HowToInvestPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-4 text-[#D4AF37]">How to Invest</h1>
      <p className="mb-6 text-gray-700">Investing in gold and silver with AfriBullion is simple, secure, and transparent. Follow these steps to start your journey:</p>
      <ol className="list-decimal list-inside space-y-4 mb-8 text-gray-800">
        <li>
          <strong>Register an Account:</strong> Sign up on our website to access exclusive products and investment tools.
        </li>
        <li>
          <strong>Browse Products:</strong> Explore our range of gold bars, coins, and jewellery. Each product is LBMA-certified and guaranteed for purity.
        </li>
        <li>
          <strong>Place Your Order:</strong> Add your chosen items to the cart and proceed to checkout. Our team is available to assist with any questions.
        </li>
        <li>
          <strong>Secure Payment:</strong> Pay securely using your preferred method. All transactions are encrypted and protected.
        </li>
        <li>
          <strong>Choose Storage or Delivery:</strong> Opt for fully insured vault storage or have your metals delivered safely to your address.
        </li>
        <li>
          <strong>Track Your Investment:</strong> Monitor live prices and your portfolio through your dashboard. Enjoy peace of mind with AfriBullion&apos;s buyback guarantee.
        </li>
      </ol>
      <div className="bg-[#FFF8E1] border border-[#D4AF37] rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-2 text-[#D4AF37]">Why Invest with AfriBullion?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>LBMA-certified products for global trust</li>
          <li>Secure, insured storage options</li>
          <li>Transparent pricing and low fees</li>
          <li>Expert support and guidance</li>
          <li>Fast delivery and buyback guarantee</li>
        </ul>
      </div>
      <div className="text-center">
        <a href="/register" className="inline-block px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">Start Investing Now</a>
      </div>
    </div>
  );
}
