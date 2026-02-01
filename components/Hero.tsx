import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div><section className="relative h-[85vh] flex items-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')" }}>
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="container mx-auto px-4  relative z-10 text-white max-w-3xl">
      <span className="bg-[#F7C51E] text-black px-3 py-1 text-xs font-bold uppercase mb-4 inline-block tracking-widest">Featured Mission</span>
      <h1 className="text-4xl font-bold leading-tight mb-6">Empowering Women, <br/>Protecting Children</h1>
      <p className="text-lg mb-8 opacity-90 leading-relaxed font-light">
        Every woman deserves a voice, and every child deserves a future. We are dedicated to providing health, education, and economic opportunities to the world's most vulnerable communities.
      </p>
      <div className="flex gap-4">
        
        <button className="bg-[#F7C51E] text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg">
          Donate Now
        </button>
        <Link href="/mission">
        <button className="bg-transparent border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Our Impact
        </button>
        </Link>
      </div>
    </div>
  </section></div>
  )
}
