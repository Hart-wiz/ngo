"use client"

import React, { useState } from 'react';
import { 
  MapPin,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  Globe
} from 'lucide-react';

/**
 * Projects Page
 * Showcases specific NGO initiatives with status filtering and impact metrics.
 */
export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    {
      id: 1,
      title: "Rural Clean Water Initiative",
      category: "HEALTH",
      status: "ONGOING",
      location: "East Africa",
      impact: "5,000+ People",
      desc: "Installing solar-powered water filtration systems in remote villages to eliminate water-borne diseases and reduce the daily burden on women and children.",
      img: "https://afdb-rwssp.ng/wp-content/uploads/2020/11/AfDB-project-in-Cameroon.jpg"
    },
    {
      id: 2,
      title: "Digital Literacy for Mothers",
      category: "EMPOWERMENT",
      status: "COMPLETED",
      location: "Southeast Asia",
      impact: "1,200 Women",
      desc: "Providing basic computing and internet skills to help mothers manage small businesses and access global marketplaces for their crafts.",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Mobile Primary Schooling",
      category: "EDUCATION",
      status: "ONGOING",
      location: "Central Africa",
      impact: "800 Children",
      desc: "Deploying converted container classrooms to nomadic communities, ensuring education is consistent even during seasonal migrations.",
      img: "https://verysellgroup.com/wp-content/uploads/2025/02/17.png"
    },
    {
      id: 4,
      title: "Sustainable Poultry Farming",
      category: "EMPOWERMENT",
      status: "FUTURE",
      location: "West Africa",
      impact: "300 Households",
      desc: "Upcoming initiative to provide livestock and training to widows, creating a self-sustaining source of protein and income.",
      img: "https://cdn.wikifarmer.com/images/detailed/2025/02/Non-Conventional%20Feed%20Sources%20for%20Sustainable%20Poultry%20Farming.png"
    },
    {
      id: 5,
      title: "Community Health Hubs",
      category: "HEALTH",
      status: "COMPLETED",
      location: "South Asia",
      impact: "10,000+ Residents",
      desc: "Construction of five satellite clinics focused on maternal health and infant nutrition in underserved urban slums.",
      img: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Secondary School Scholarships",
      category: "EDUCATION",
      status: "ONGOING",
      location: "Global",
      impact: "2,500 Students",
      desc: "Ongoing financial support for high-performing students from low-income families to transition from primary to secondary education.",
      img: "https://i0.wp.com/www.interceptng.com/wp-content/uploads/2021/06/IMG-20210626-WA0007-1.jpg?fit=1077%2C637&ssl=1"
    }
  ];

  const filters = ['ALL', 'ONGOING', 'COMPLETED', 'FUTURE'];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.status === activeFilter);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
    

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2070')" }}>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="container mx-auto px-6 md:px-20 relative z-10 text-white">
          <span className="text-[#F7C51E] font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Groundwork for Change</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our <span className="text-[#F7C51E]">Projects</span></h1>
          <p className="text-xl opacity-90 max-w-2xl font-light leading-relaxed">
            From emergency health interventions to long-term educational infrastructure, explore how your contributions are being put to work in the field.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-100 py-6 px-6 md:px-20 shadow-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-[10px] font-bold tracking-[0.2em] px-5 py-2 transition-all ${
                  activeFilter === f 
                    ? 'bg-[#F7C51E] text-black shadow-md' 
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">
            Showing {filteredProjects.length} Initiatives
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Global Reach Statistics */}
      <section className="bg-[#1a1a1a] py-24 px-6 md:px-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-5 -translate-y-1/4 translate-x-1/4">
          <Globe size={600} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Global Footprint</h2>
            <div className="w-20 h-1 bg-[#F7C51E] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <StatItem icon={Globe} count="14" label="Countries Active" />
            <StatItem icon={Users} count="850k" label="Total Beneficiaries" />
            <StatItem icon={CheckCircle2} count="124" label="Projects Finished" />
            <StatItem icon={Clock} count="22" label="Upcoming Missions" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Ready to Start a Project?</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We partner with local organizations and individual donors to bring high-impact projects to life. Join us as a project sponsor or field partner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#F7C51E] text-black px-10 py-4 font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-black hover:text-white transition-all">
              Sponsor a Project
            </button>
            <button className="bg-white border-2 border-gray-200 text-gray-800 px-10 py-4 font-bold uppercase tracking-widest text-xs hover:border-black transition-all">
              Partner with Us
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
}

/**
 * Project Components
 */


function ProjectCard({ project }: { project: { id: number; title: string; category: string; status: string; location: string; impact: string; desc: string; img: string; } }) {
  const statusColors: { [key: string]: string } = {
    ONGOING: 'bg-blue-600',
    COMPLETED: 'bg-green-600',
    FUTURE: 'bg-[#F7C51E] text-black'
  };

  return (
    <div className="bg-white border border-gray-100 flex flex-col md:flex-row group hover:shadow-2xl transition-all duration-500 overflow-hidden">
      <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
        <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className={`absolute top-4 left-4 px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-lg ${statusColors[project.status] || 'bg-black text-white'}`}>
          {project.status}
        </div>
      </div>
      <div className="md:w-3/5 p-8 flex flex-col">
        <div className="text-[#F7C51E] text-[10px] font-bold tracking-[0.2em] mb-2">{project.category}</div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#F7C51E] transition-colors">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-grow">{project.desc}</p>
        
        <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-6 mt-auto">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-gray-400" />
            <span className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">{project.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={14} className="text-gray-400" />
            <span className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">{project.impact}</span>
          </div>
        </div>
        
        <button className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:gap-4 transition-all">
          View Project Details <ArrowRight size={14} className="text-[#F7C51E]" />
        </button>
      </div>
    </div>
  );
}

function StatItem({ icon: Icon, count, label }: { icon: React.ComponentType<{ size?: number; className?: string }>; count: string; label: string; }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border border-[#F7C51E]/30 rounded-full flex items-center justify-center mb-6">
        <Icon className="text-[#F7C51E]" size={32} />
      </div>
      <div className="text-4xl font-bold mb-2 tracking-tighter">{count}</div>
      <div className="text-[#F7C51E] text-[10px] font-bold uppercase tracking-[0.3em]">{label}</div>
    </div>
  );
}

