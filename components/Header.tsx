import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram } from  'lucide-react'; // Adjust the import based on the actual library
import Link from 'next/link';

export default function Header() {
    const phoneNumber = "2347036180749"; 
    const message = encodeURIComponent("Hello! I'm interested to Volunteer with your NGO.");
  return (
    <div>

      {/* Top Header Bar */}
      <div className="bg-[#222] text-white py-2 px-4 md:px-20 flex justify-between items-center text-sm">
        <div className="flex gap-4">
          <Facebook size={16} className="cursor-pointer hover:text-[#F7C51E] transition-colors" />
          <Twitter size={16} className="cursor-pointer hover:text-[#F7C51E] transition-colors" />
          <Linkedin size={16} className="cursor-pointer hover:text-[#F7C51E] transition-colors" />
          <Instagram size={16} className="cursor-pointer hover:text-[#F7C51E] transition-colors" />
        </div>
        <Link href={"/contact#form"} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-gray-500 px-4 py-1 text-xs uppercase tracking-widest hover:bg-[#F7C51E] hover:border-[#F7C51E] transition-all">
          Become Volunteer
        </Link>
      </div>
    </div>
  )
}
