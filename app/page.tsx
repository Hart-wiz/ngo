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
import VideoFrame from '@/components/VideoFrame';
import Link from 'next/link';

interface CauseCardProps {
  image: string;
  title: string;
  progress: number; 
  raised: number | string;
  goal: number | string;
  desc: string;
}
const App = () => {
  
  const phoneNumber = "2347036180749"; 
  const message = encodeURIComponent("Hello! I'm interested in supporting your NGO.");

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
            image="stdgirls.jpeg"
            title="Girl Child Support and Orphan Care consortium" 
            desc="Providing support to women and children through education, healthcare, and empowerment programs."
            progress={(195000/6500000)*100}
            raised="₦195,400"
            goal="₦6,500,000"
          />
          <CauseCard 
            image="/girlsfund.jpeg"
            title="Girls' Education Fund"
            desc="Breaking barriers by providing scholarships, school supplies, and safe transport for young girls to finish secondary school."
            progress={(250000/10000000)*100}
            raised="₦250,000"
            goal="₦10,000,000"
          />
          <CauseCard 
            image="/girlhealth.jpeg"
            title="Girl and children Health Support"
            desc="Ensuring safe good girl health and well-being through access to medical care, nutrition, and hygiene education."
            progress={(31200/6000000)*100}
            raised="₦31,200"
            goal="₦6,000,000"
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
          <div className=" bg-zinc-100 flex items-center justify-center">
                <VideoFrame />
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="relative py-32 bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('/girlsfund.jpeg')" }}>
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <h2 className="text-6xl font-light text-black mb-6">Your Time <span className="font-bold">Saves Lives</span></h2>
          <p className="max-w-xl text-gray-800 text-lg mb-10 leading-relaxed font-medium">
            We are looking for passionate individuals to join our field teams and local chapters. Whether you're a doctor, teacher, or just have a heart to help, we have a place for you.
          </p>
          <Link href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#F7C51E] hover:text-black transition-all shadow-xl">
            Start Volunteering
          </Link>
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
            image="/girlchildedu.jpeg"
            title="!0th conference and awards for the Girl child campaign"
            desc="After 10 years in our scholarship program, Mary becomes the first woman in her village to attend university."
            date="15 JAN 2024"
          />
          <NewsCard 
            image="/vocationcenter.jpeg"
            title="New Vocational Center Opens in Aba, Abia state Nigeria"
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
      <section className="relative py-32 text-center text-white bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/girlchildedu.jpeg')" }}>
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