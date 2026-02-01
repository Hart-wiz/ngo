"use client"

import React, { useState } from 'react';
import { 
  Target,
  Eye,
  Heart,
  Users,
  Award,
  BookOpen,
 
} from 'lucide-react';


export default function MissionPage() {


  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
   
      <section className="relative h-[400px] flex items-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 md:px-20 relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Our <span className="text-[#F7C51E]">Mission</span></h1>
          <p className="text-xl opacity-90 max-w-2xl font-light leading-relaxed">
            Dedicating our lives to ensuring every woman has a voice and every child has a future. Discover the heartbeat of our organization.
          </p>
        </div>
      </section>

      {/* Core Mission Statement */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#F7C51E] font-bold uppercase tracking-[0.3em] text-sm block mb-4">Who We Are</span>
            <h2 className="text-4xl font-bold mb-8 leading-tight">Empowering the Heart of the Family.</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded in 2014, our NGO was born from a simple realization: when you empower a woman, you change a family; when you educate a child, you change the future. 
              </p>
              <p>
                We work in the world's most vulnerable communities to break the cycle of poverty through sustainable health initiatives, vocational training for mothers, and comprehensive education for orphans and at-risk youth.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://charlies-travels.com/wp-content/uploads/2024/10/CSR-Ethisch-Verantwoord-Reizen-Lachende-kinderen-Trevor-Cole-header-1200x800-1-1.jpg" alt="Mission 1" className="rounded-sm shadow-xl" />
            <img src="https://images.unsplash.com/photo-1489440543286-a69330151c0b?auto=format&fit=crop&q=80&w=600" alt="Mission 2" className="mt-8 rounded-sm shadow-xl" />
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="bg-gray-50 py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <ValueCard 
            Icon={Target}
            title="Our Vision"
            desc="A world where gender equality is not just a goal, but a reality, and where every child's potential is unlocked regardless of their birthplace."
          />
          <ValueCard 
            Icon={Eye}
            title="Our Focus"
            desc="Prioritizing maternal health, primary education, and clean water access—the three pillars that allow a community to thrive autonomously."
          />
          <ValueCard 
            Icon={Heart}
            title="Our Values"
            desc="Integrity, transparency, and deep-rooted respect for the cultures we serve. We listen first, and act in partnership with local leaders."
          />
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24 px-6 md:px-20 bg-[#222] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <Stat icon={Users} count="25,000+" label="Women Empowered" />
          <Stat icon={BookOpen} count="12,400+" label="Children Educated" />
          <Stat icon={Award} count="150+" label="Active Programs" />
          <Stat icon={Heart} count="1M+" label="Lives Impacted" />
        </div>
      </section>

      {/* Meet the Drive - Writeup section */}
      <section className="py-24 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Why Focus on Women & Children?</h2>
        <div className="prose prose-lg mx-auto text-gray-600 italic">
          <p className="mb-8">
            "Statistics show that women invest 90% of their income back into their families, compared to 35% for men. By providing a mother with the skills to earn a living, we are effectively feeding, clothing, and educating her children."
          </p>
          <div className="w-20 h-1 bg-[#F7C51E] mx-auto mb-8"></div>
          <p className="font-bold text-gray-900 not-italic">
            Our mission is to create a ripple effect of change that starts in the home and transforms the world.
          </p>
        </div>
      </section>
    </div>
  );
}

/**
 * Shared Components for the Mission Page
 */



function ValueCard({ Icon, title, desc }: { Icon: React.ComponentType<{ size?: number; className?: string }>; title: string; desc: string }) {
  return (
    <div className="bg-white p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
      <div className="w-16 h-16 bg-[#F7C51E] flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
        <Icon size={32} className="text-black" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function Stat({ icon: Icon, count, label }: { icon: React.ComponentType<{ size?: number; className?: string }>; count: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <Icon size={40} className="text-[#F7C51E] mb-6" />
      <div className="text-4xl font-bold mb-2">{count}</div>
      <div className="text-[#F7C51E] uppercase tracking-widest text-xs font-bold">{label}</div>
    </div>
  );
}

