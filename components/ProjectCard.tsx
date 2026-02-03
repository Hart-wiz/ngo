"use client"

import React, {  useState} from 'react';
import { 
  MapPin,
  Users,
  ArrowRight,
} from 'lucide-react';






function ProjectCard({ project, onViewDetails }: { project: { id: number; title: string; category: string; status: string; location: string; impact: string; desc: string; img: string; },onViewDetails: (project: any) => void }) {
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

  export default ProjectCard;