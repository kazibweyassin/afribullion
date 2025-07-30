"use client"

import Profile1 from "@/assets/avatars/ashwin-santiago.jpg"
import Profile2 from "@/assets/avatars/alec-whitten.jpg"
import Profile3 from "@/assets/avatars/rene-wells.jpg"
import Profile4 from "@/assets/avatars/julien-gournay.jpeg"
import Image from "next/image";

export function TestimonialsSection() {
  const TESTIMONIALS = [
    {
      quote: "AfriBullion made my first gold investment easy and secure. The team guided me every step of the way!",
      from: "Julien Gournay",
      position: "Private Investor",
      profile_picture: Profile4,
    },
    {
      quote: "I trust AurumTrust for all my gold purchases. Their insured storage and transparent pricing are unmatched.",
      from: "Ashwin Santiago",
      position: "Wealth Manager",
      profile_picture: Profile1,
    },
    {
      quote: "Fast delivery, excellent support, and genuine LBMA gold bars. Highly recommended for serious investors.",
      from: "Alec Whitten",
      position: "Financial Advisor",
      profile_picture: Profile2,
    },
    {
      quote: "AfriBullion offers the best buyback guarantee and customer service I've experienced in the industry.",
      from: "Rene Wells",
      position: "Retired Executive",
      profile_picture: Profile3,
    }
  ]

  return (
    <section className="w-full bg-white py-16 border-b border-[#E5E7EB]" id="testimonials">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-10 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center border border-[#D4AF37] rounded-lg bg-white p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] mb-4">
                <Image src={testimonial.profile_picture} alt={testimonial.from} className="object-cover w-full h-full" />
              </div>
              <p className="text-base text-[#222] mb-4 text-center italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="font-bold text-[#222]">{testimonial.from}</div>
              <div className="text-sm text-[#D4AF37]">{testimonial.position}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
