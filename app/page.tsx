"use client"
import React, { useState } from 'react';
import {  
  Megaphone, 
  UserPlus, 
  Heart,
  Play
} from 'lucide-react';

import Hero from '@/components/Hero';
import CauseCard from '@/components/causeCard';
import NewsCard from '@/components/NewsCard';
import HelpIconItem from '../components/HelpIconItem'; 

interface CauseCardProps {
  image: string;
  title: string;
  progress: number; 
  raised: number | string;
  goal: number | string;
  desc: string;
}
const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Hero />
   
      {/* Causes Section */}
      <section className="py-24 px-4 md:px-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-600 uppercase tracking-widest">
            Investing in the future of humanity. <span className="font-bold border-b-2 border-[#F7C51E]">Our Core Causes</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CauseCard 
            image="https://images.unsplash.com/photo-1524062731293-8673abf3013b?q=80&w=1000&auto=format&fit=crop"
            title="Safe Havens for Orphans"
            desc="Providing nurturing environments and trauma-informed care for abandoned children to grow, heal, and thrive."
            progress={85}
            raised="$95,400"
            goal="$112,000"
          />
          <CauseCard 
            image="https://images.unsplash.com/photo-1489440543286-a69330151c0b?q=80&w=1000&auto=format&fit=crop"
            title="Girls' Education Fund"
            desc="Breaking barriers by providing scholarships, school supplies, and safe transport for young girls to finish secondary school."
            progress={62}
            raised="$42,800"
            goal="$68,000"
          />
          <CauseCard 
            image="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop"
            title="Maternal Health Support"
            desc="Ensuring safe delivery and postnatal care for mothers in rural areas through community-led health clinics."
            progress={48}
            raised="$31,200"
            goal="$65,000"
          />
        </div>
      </section>

      {/* How you can help section */}
      <section className="py-24 px-4 md:px-20">
        <h2 className="text-center text-3xl font-light text-gray-600 uppercase tracking-widest mb-16">
          The Path to Change. <span className="font-bold border-b-2 border-[#F7C51E]">Get Involved</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <HelpIconItem 
              Icon={Megaphone} 
              color="bg-[#EF7F45]"
              title="Advocacy & Awareness" 
              desc="Help us amplify the voices of the unheard. Share our mission and advocate for policy changes that protect women's rights." 
            />
            <HelpIconItem 
              Icon={UserPlus} 
              color="bg-[#EF7F45]"
              title="Community Mentors" 
              desc="Join our mentorship program to guide young girls and women towards professional and personal independence." 
            />
            <HelpIconItem 
              Icon={Heart} 
              color="bg-[#EF7F45]"
              title="Sponsorships" 
              desc="Directly sponsor a child's education or a mother's vocational training to witness the impact of your generosity firsthand." 
            />
          </div>
          <div className="relative aspect-video bg-gray-200 group cursor-pointer overflow-hidden shadow-2xl rounded-sm">
             <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" alt="Video" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#F7C51E] rounded-full flex items-center justify-center text-black transform group-hover:scale-110 transition-transform shadow-xl">
                  <Play fill="black" size={32} />
                </div>
             </div>
             <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-xs">Watch our 2024 Impact Report</div>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="relative py-32 bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <h2 className="text-6xl font-light text-black mb-6">Your Time <span className="font-bold">Saves Lives</span></h2>
          <p className="max-w-xl text-gray-800 text-lg mb-10 leading-relaxed font-medium">
            We are looking for passionate individuals to join our field teams and local chapters. Whether you're a doctor, teacher, or just have a heart to help, we have a place for you.
          </p>
          <button className="bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#F7C51E] hover:text-black transition-all shadow-xl">
            Start Volunteering
          </button>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 text-9xl font-black text-white pointer-events-none select-none">
          EMPOWER
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 px-4 md:px-20 bg-gray-50">
        <h2 className="text-center text-3xl font-light text-gray-600 uppercase tracking-widest mb-16">
          Voices of Impact. <span className="font-bold border-b-2 border-[#F7C51E]">Stories of Change</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NewsCard 
            image="https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?q=80&w=1000&auto=format&fit=crop"
            title="The First Graduate: Mary's Journey to Medical School"
            desc="After 10 years in our scholarship program, Mary becomes the first woman in her village to attend university."
            date="15 JAN 2024"
          />
          <NewsCard 
            image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
            title="New Vocational Center Opens in Nairobi"
            desc="Our latest hub provides training in digital literacy and sustainable agriculture for over 200 local mothers."
            date="02 JAN 2024"
          />
          <NewsCard 
            image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop"
            title="Global Giving Day Results: Over $1M Raised"
            desc="A massive thank you to our community for helping us reach our annual goal for clean water initiatives."
            date="20 DEC 2023"
          />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-32 text-center text-white bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h2 className="text-2xl font-light uppercase tracking-[0.3em] mb-16 text-[#F7C51E]">
            Guardian <span className="font-bold text-white">Testimonials</span>
          </h2>
          <p className="italic text-2xl mb-10 opacity-90 leading-relaxed font-serif">
            "Seeing the smile on a child's face when they receive their first school kit is a profound reminder of why we do what we do. This organization doesn't just give aid; they build dignity."
          </p>
          <div className="mb-4">
             <h4 className="text-2xl font-bold uppercase tracking-widest">Sarah Jenkins</h4>
             <p className="text-sm opacity-60 text-[#F7C51E] font-bold">Field Director, East Africa Operations</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default App;