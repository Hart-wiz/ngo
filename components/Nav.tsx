"use client"

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from "next/link"
import Image from 'next/image';




interface NavItemProps {
  label: string;
  active: boolean;
  href: string;
}

interface MobileNavItemProps {
  label: string;
  active: boolean;
  href: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * NGO Navigation Component
 * Automatically detects the active route using Next.js path hooks.
 * Maintains the signature #F7C51E yellow theme and charcoal UI.
 */
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = "2347036180749"; 
  const message = encodeURIComponent("Hello! I'm interested in supporting your NGO.");

  
  /**
   * THE "MAGIC" LINE:
   * In a real app, this hook updates automatically on every route change.
   */
  const pathname = usePathname();

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/mission" },
    { label: "GALLERY", href: "/gallery" },
    { label: "PROJECTS", href: "/projects" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <div >
      <nav className="bg-[#F7C51E] px-4 md:px-20 sticky top-0 z-50 shadow-md w-full border-b border-black/5">
        <div className="flex justify-between items-center max-w-7xl mx-auto h-16 md:h-20">
          
          {/* Logo Branding */}
          <div className="font-bold italic text-2xl text-black">
            <Image src="/logo.png" alt="Logo" width={90} height={90} className="inline-block mr-2 mb-1 "/>
            {/* Nurture <span className="text-white">Rise</span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-stretch h-full">
            {menuItems.map((item) => (
              <NavItem 
                key={item.label} 
                label={item.label} 
                // Checks if current URL exactly matches the link destination
                active={pathname === item.href} 
                href={item.href} 
              />
            ))}
          </div>

          {/* Desktop Search & Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Search Here" 
                className="bg-transparent border-b border-black/20 focus:outline-none focus:border-black/50 px-2 py-1 text-sm placeholder-black/50 w-32 lg:w-48 transition-all"
              />
              <Search size={18} className="absolute right-0 text-black/60 cursor-pointer hover:text-black transition-colors" />
            </div>
            
            <Link href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" className="hidden lg:block bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-zinc-800 transition-colors shadow-lg">
              Donate
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-black hover:bg-black/10 rounded-md transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#F7C51E] ${
            isMenuOpen ? 'max-h-96 border-t border-black/10' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col py-2">
            {menuItems.map((item) => (
              <MobileNavItem 
                key={item.label} 
                label={item.label} 
                active={pathname === item.href} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
            
            {/* Mobile Specific Action */}
            <div className="px-6 py-4">
               <Link href={`https://sandbox.flutterwave.com/donate/5nrjjgxns6gp`} target="_blank" rel="noopener noreferrer" className="w-full bg-black text-white py-3 px-4 text-xs font-bold uppercase tracking-widest active:scale-95 transition-transform">
                 DONATE
               </Link>
            </div>
          </div>
        </div>
      </nav>

     
    </div>
  );
}

/**
 * Sub-component for Desktop Menu Items
 */
function NavItem({ label, active, href }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`px-4 lg:px-5 flex items-center cursor-pointer text-[11px] font-bold tracking-[0.2em] transition-all border-b-4 h-full whitespace-nowrap ${
        active 
          ? 'bg-black/10 text-black border-black/30' 
          : 'hover:bg-black/5 border-transparent text-black/70 hover:text-black'
      }`}
    >
      {label}
    </Link>
  );
}

/**
 * Sub-component for Mobile Menu Items
 */
function MobileNavItem({ label, active, href, onClick }: MobileNavItemProps) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`px-6 py-4 flex items-center justify-between cursor-pointer text-xs font-bold tracking-widest transition-colors ${
        active 
          ? 'bg-black/10 text-black' 
          : 'text-black/70 hover:bg-black/5'
      }`}
    >
      <span>{label}</span>
      <ChevronRight size={14} className={`transition-opacity ${active ? 'opacity-100' : 'opacity-40'}`} />
    </Link>
  );
}