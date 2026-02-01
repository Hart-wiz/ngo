import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram } from  'lucide-react'; // Adjust the import based on the actual library

export default function Header() {
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
        <button className="bg-transparent border border-gray-500 px-4 py-1 text-xs uppercase tracking-widest hover:bg-[#F7C51E] hover:border-[#F7C51E] transition-all">
          Become Volunteer
        </button>
      </div>
    </div>
  )
}
