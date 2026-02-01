import React from 'react'
import Link from 'next/link'

export default function Hero() {
    const phoneNumber = "2347036180749"; 
    const message = encodeURIComponent("Hello! I'm interested in supporting your NGO.");
  return (
    <div><section className="relative h-[85vh] flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/children.jpeg')" }}>
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="container mx-auto px-4  relative z-10 text-white max-w-3xl">
      <span className="bg-[#F7C51E] text-black px-3 py-1 text-xs font-bold uppercase mb-4 inline-block tracking-widest">Featured Mission</span>
      <h1 className="text-4xl font-bold leading-tight mb-6">Empowering Women, <br/>Protecting Children</h1>
      <p className="text-lg mb-8 opacity-90 leading-relaxed font-light">
        Every woman deserves a voice, and every child deserves a future. We are dedicated to providing health, education, and economic opportunities to the world's most vulnerable communities.
      </p>
      <div className="flex gap-4">
        
        <Link href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" className="bg-[#F7C51E] text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg">
          Donate Now
        </Link>
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
