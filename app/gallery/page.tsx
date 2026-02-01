"use client"

import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X,
  ChevronRight,
  Plus,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Camera
} from 'lucide-react';

/**
 * Gallery Page
 * Features a category-filtered image grid showcasing the NGO's impact.
 */
export default function GalleryPage() {
 
  const [activeFilter, setActiveFilter] = useState('ALL');

  const galleryItems = [
    { id: 1, category: 'EDUCATION', title: 'Classroom Support', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800' },
    { id: 2, category: 'HEALTH', title: 'Medical Outreach', img: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800' },
    { id: 3, category: 'COMMUNITY', title: 'Women Empowerment', img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800' },
    { id: 4, category: 'EDUCATION', title: 'School Supplies', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800' },
    { id: 5, category: 'HEALTH', title: 'Clean Water Project', img: 'https://images.unsplash.com/photo-1594498653385-d5172b532c00?auto=format&fit=crop&q=80&w=800' },
    { id: 6, category: 'COMMUNITY', title: 'Local Workshops', img: 'https://images.unsplash.com/photo-1489440543286-a69330151c0b?auto=format&fit=crop&q=80&w=800' },
    { id: 7, category: 'EDUCATION', title: 'Library Opening', img: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80&w=800' },
    { id: 8, category: 'HEALTH', title: 'Vaccination Drive', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' },
    { id: 9, category: 'COMMUNITY', title: 'Rural Development', img: 'https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?auto=format&fit=crop&q=80&w=800' },
  ];

  const filters = ['ALL', 'EDUCATION', 'HEALTH', 'COMMUNITY'];

  const filteredItems = activeFilter === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navigation Component */}
      

      {/* Hero Section */}
      <section className="relative h-[350px] flex items-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2070')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-6 md:px-20 relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Our <span className="text-[#F7C51E]">Gallery</span></h1>
          <p className="text-xl opacity-90 max-w-xl font-light leading-relaxed">
            A visual journey through our projects and the lives we've touched together. Transparency in every frame.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-20 flex flex-wrap justify-center gap-4 md:gap-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs font-bold tracking-[0.2em] px-6 py-2 transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-[#F7C51E] text-black shadow-md' 
                  : 'bg-white text-gray-400 hover:text-black hover:shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden aspect-square bg-gray-200 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full border border-[#F7C51E] flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Plus className="text-[#F7C51E]" size={24} />
                </div>
                <h3 className="text-white text-xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
                <span className="text-[#F7C51E] text-[10px] font-bold tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <Camera size={48} className="mx-auto text-gray-200 mb-4" />
            <p className="text-gray-400 font-bold uppercase tracking-widest">No images found in this category.</p>
          </div>
        )}
      </section>

      {/* Call to Action Bar */}
      <section className="bg-[#F7C51E] py-16 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black uppercase tracking-tight">Support Our Vision</h2>
          <p className="text-black/70 mb-8 font-medium">Your donation helps us capture more smiles and create lasting change in communities around the world.</p>
          <button className="bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors shadow-xl">
            Donate Now
          </button>
        </div>
      </section>

     
    </div>
  );
}


