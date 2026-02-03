"use client"

import React, { Activity, useState, useEffect } from 'react';
import { 
  MapPin,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  Globe,
  CheckCircle,
  X,
 
} from 'lucide-react';



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
                  <Activity children={undefined}  />
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
                  {project.fullDetails || "No further details available at this time."}
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

  export default ProjectModal;
  
  