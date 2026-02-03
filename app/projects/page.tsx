'use client';

import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Users, 
  ArrowRight, 
  X, 
  Activity, 
  Globe, 
  CheckCircle, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

// --- Components ---

function ProjectModal({ project, onClose }: { project: any, onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (project) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    }
    return () => { 
      document.body.style.overflow = 'unset'; 
    };
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const statusColors: any = {
    ONGOING: 'bg-blue-600',
    COMPLETED: 'bg-green-600',
    FUTURE: 'bg-[#F7C51E] text-black'
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div 
        className={`bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl transition-all duration-500 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur rounded-full shadow-lg hover:bg-gray-100 transition-colors group"
        >
          <X size={20} className="text-gray-600 group-hover:text-red-500 transition-colors" />
        </button>

        <div className="relative h-64 md:h-80 w-full">
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute bottom-6 left-6 md:left-12">
            <span className={`inline-block px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest shadow-lg ${statusColors[project.status] || 'bg-black text-white'}`}>
              {project.status}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 shadow-sm">{project.title}</h2>
            <div className="text-[#F7C51E] font-bold tracking-[0.2em] uppercase text-xs">
              {project.category}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 pb-10 border-b border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <MapPin className="text-[#F7C51E]" size={24} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Location</div>
                <div className="font-bold text-gray-800 text-lg">{project.location}</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <Users className="text-[#F7C51E]" size={24} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Impact</div>
                <div className="font-bold text-gray-800 text-lg">{project.impact}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <Activity className="text-[#F7C51E]" size={24} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Status</div>
                <div className="font-bold text-gray-800 text-lg">{project.status}</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Project Overview</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {project.desc}
              </p>
              <h3 className="text-xl font-bold mb-4 text-gray-900 mt-8">Detailed Report</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.fullDetails || "No further details available at this time. Please contact the project administrator for the full report."}
              </p>
            </div>

            <div className="md:col-span-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Key Milestones</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600" />
                    <span>Planning Phase</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600" />
                    <span>Initial Funding</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                     {project.status === 'COMPLETED' ? <CheckCircle size={16} className="text-green-600" /> : <div className="w-4 h-4 rounded-full border-2 border-gray-300" />}
                    <span>Execution</span>
                  </li>
                </ul>
              </div>
              
              <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#F7C51E] hover:text-black transition-colors duration-300">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onViewDetails }: { project: any, onViewDetails: (p: any) => void }) {
  const statusColors: any = {
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
        
        <button 
          onClick={() => onViewDetails(project)}
          className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:gap-4 transition-all"
        >
          View Project Details <ArrowRight size={14} className="text-[#F7C51E]" />
        </button>
      </div>
    </div>
  );
}

function StatItem({ icon: Icon, count, label }: { icon: any; count: string; label: string; }) {
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

/**
 * Projects Page
 * Showcases specific NGO initiatives with status filtering and impact metrics.
 */
export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Rural Clean Water Initiative",
      category: "HEALTH",
      status: "ONGOING",
      location: "Nigeria",
      impact: "500+ People",
      desc: "Installing solar-powered water filtration systems in remote villages to eliminate water-borne diseases and reduce the daily burden on women and children.",
      img: "https://afdb-rwssp.ng/wp-content/uploads/2020/11/AfDB-project-in-Cameroon.jpg"
    },
    {
      id: 2,
      title: "Digital Literacy for Mothers",
      category: "EMPOWERMENT",
      status: "COMPLETED",
      location: "Nigeria",
      impact: "400+ Women",
      desc: "Providing basic computing and internet skills to help mothers manage small businesses and access global marketplaces for their crafts.",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Mobile Primary Schooling",
      category: "EDUCATION",
      status: "ONGOING",
      location: "West Africa",
      impact: "800 Children",
      desc: "Deploying converted container classrooms to nomadic communities, ensuring education is consistent even during seasonal migrations.",
      img: "https://verysellgroup.com/wp-content/uploads/2025/02/17.png"
    },
    {
      id: 4,
      title: "Sustainable Poultry Farming",
      category: "EMPOWERMENT",
      status: "FUTURE",
      location: "Nigeria",
      impact: "90 Households",
      desc: "Upcoming initiative to provide livestock and training to widows, creating a self-sustaining source of protein and income.",
      img: "https://cdn.wikifarmer.com/images/detailed/2025/02/Non-Conventional%20Feed%20Sources%20for%20Sustainable%20Poultry%20Farming.png"
    },
    {
      id: 5,
      title: "Community Health Hubs",
      category: "HEALTH",
      status: "COMPLETED",
      location: "Nigeria",
      impact: "1000+ Residents",
      desc: "Construction of five satellite clinics focused on maternal health and infant nutrition in underserved urban slums.",
      img: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Secondary School Scholarships",
      category: "EDUCATION",
      status: "ONGOING",
      location: "Nigeria",
      impact: "500+ Students",
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
      <section className="relative h-[450px] flex items-center bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('/girlsfund.jpeg')" }}>
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
      <section className="sticky top-0 md:top-0 z-40 bg-white border-b border-gray-100 py-6 px-6 md:px-20 shadow-sm">
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
            <ProjectCard key={project.id} project={project} onViewDetails={setSelectedProject} />
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
            <StatItem icon={Globe} count="16" label="States Active" />
            <StatItem icon={Users} count="2k" label="Total Beneficiaries" />
            <StatItem icon={CheckCircle2} count="21" label="Projects Finished" />
            <StatItem icon={Clock} count="12" label="Upcoming Missions" />
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

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}