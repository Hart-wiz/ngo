import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from  'lucide-react';
import Image from 'next/image';

export default function Footer() {
    
  return (
 
   <footer className="bg-[#111] text-gray-500 pt-20 pb-10 px-6 md:px-20 text-sm">
   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
     <div>

       <h3 className="text-white text-3xl font-bold italic mb-8">     <Image src="/logo.png" alt="Logo" width={90} height={90} className="inline-block mr-2 mb-1"/>Nurture<span className="text-[#F7C51E]"> Rise</span></h3>
       <p className="mb-8 leading-relaxed">
         Implementing field-first solutions for the empowerment of women and protection of children worldwide since 2014.
       </p>
       <div className="space-y-4">
         <FooterContact Icon={MapPin} text=" Plot 40 Okigwe Rd Aba, Abia State, Nigeria" />
         <FooterContact Icon={Phone} text="+234 703 618 0749" />
         <FooterContact Icon={Mail} text="contact@nutureriseinitiative.com.ng" />
       </div>
     </div>
     <div>
       <h4 className="text-white font-bold uppercase mb-8 pb-2 border-b-2 border-[#F7C51E] inline-block tracking-widest">Ongoing Work</h4>
       <ul className="space-y-4 text-xs">
         <li className="flex gap-3 hover:text-white transition-colors cursor-pointer">
           <ArrowRight size={14} className="text-[#F7C51E]" /> 
           Clean Water Initiative - osisioma LGA, Abia State, Nigeria
         </li>
         <li className="flex gap-3 hover:text-white transition-colors cursor-pointer">
           <ArrowRight size={14} className="text-[#F7C51E]" /> 
           Primary School Containers - abia state, Nigeria
         </li>
         <li className="flex gap-3 hover:text-white transition-colors cursor-pointer">
           <ArrowRight size={14} className="text-[#F7C51E]" /> 
           Digital Literacy Hub - Aba, Abia state, Nigeria
         </li>
       </ul>
     </div>
     <div>
       <h4 className="text-white font-bold uppercase mb-8 pb-2 border-b-2 border-[#F7C51E] inline-block tracking-widest">Connect</h4>
       <div className="flex gap-6 mb-10">
         <Facebook className="hover:text-white cursor-pointer" size={20} />
         <Twitter className="hover:text-white cursor-pointer" size={20} />
         <Linkedin className="hover:text-white cursor-pointer" size={20} />
         <Instagram className="hover:text-white cursor-pointer" size={20} />
       </div>
       <div className="bg-zinc-900 p-6 border border-zinc-800">
         <p className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Project Reports Signup</p>
         <div className="flex">
           <input type="email" placeholder="Email" className="bg-zinc-800 border-none text-white px-3 py-2 w-full text-xs focus:ring-1 focus:ring-[#F7C51E]" />
           <button className="bg-[#F7C51E] text-black px-4 py-2 font-bold text-xs">JOIN</button>
         </div>
       </div>
     </div>
   </div>
   <div className="text-center pt-10 border-t border-zinc-900 opacity-30 text-[9px] uppercase tracking-[0.4em]">
     © {new Date().getFullYear()} Nurture Rise Initiative. Humanity in every way.
   </div>
 </footer>
  )
}



  function FooterContact({ Icon, text }: { Icon: React.ComponentType<{ size?: number; className?: string }>; text: string }) {
    return (
      <div className="flex items-start gap-4 text-xs">
        <Icon size={16} className="text-[#F7C51E] mt-0.5 shrink-0" />
        <span>{text}</span>
      </div>
    );
  }