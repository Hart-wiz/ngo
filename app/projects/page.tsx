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
              <p className="text-gray-600 leading-relaxed text-lg mb-6 text-justify">
                {project.desc}
              </p>
              <h3 className="text-xl font-bold mb-4 text-gray-900 mt-8">Detailed Report</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
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
{/*               
              <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#F7C51E] hover:text-black transition-colors duration-300">
                Download Report
              </button> */}
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
      fullDetails: "This project has successfully installed 10 solar-powered water filtration units across 5 villages, providing clean drinking water to over 500 residents. The initiative has led to a significant decrease in water-borne illnesses, improving overall community health. Ongoing maintenance training is provided to local volunteers to ensure sustainability.",
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
      fullDetails: "successful conclusion of the Rural Women’s Digital Literacy Initiative marks a significant turning point for the local economy and the social standing of women within our community. This project was designed with the understanding that while our rural mothers possess immense creative talent and entrepreneurial drive, they were historically sidelined by a lack of access to the modern tools of trade. By focusing on the intersection of traditional craftsmanship and digital proficiency, the project has successfully transitioned dozens of micro-enterprises from localized, subsistence-level trading to structured, growth-oriented businesses capable of engaging with a national and global audience. The first phase of the intervention addressed the primary barrier: digital phobia. Many participants initially viewed computing devices as complex and fragile instruments beyond their reach. The training curriculum broke these barriers through tactile, mother-tongue instruction that related hardware functions to everyday tasks. Mothers learned to navigate smartphone interfaces with the same precision they apply to their weaving looms. This foundational shift allowed for the introduction of professional digital photography. By mastering basic lighting and framing on their mobile devices, the women moved from merely making products to creating a brand. They can now produce high-quality visual catalogs of their beadwork, pottery, and textiles, which serve as their primary marketing assets in a visual-first digital economy. The second core achievement of the project was the formalization of business operations through mobile technology. Before this intervention, financial records were often nonexistent or kept in easily misplaced notebooks, leading to a blurred line between household spending and business capital. Participants are now proficient in using simplified digital ledger applications and mobile banking platforms. This shift has not only secured their earnings against physical loss or theft but has also built a digital footprint for these women. By conducting transactions through formal mobile channels, they are establishing the financial history necessary to access micro-loans and government grants in the future—resources that were previously out of reach due to a lack of documentation. Perhaps the most transformative outcome is the establishment of direct-to-consumer pipelines. By training the mothers in the use of social media business tools and instant messaging for commerce, the project has effectively eliminated the exploitative middleman. The women now utilize WhatsApp Business and Facebook Marketplace to showcase their wares directly to urban centers. They have been educated on the logistics of waybilling—the Nigerian system of using interstate transport networks to deliver goods—enabling a mother in a remote village to fulfill an order for a customer in a distant city with confidence. This connectivity has boosted the average profit margin per item, as the women now retain the full market value of their labor.",
      img: "/market-digital.webp"
    },
    {
      id: 3,
      title: "Mobile Primary Schooling",
      category: "EDUCATION",
      status: "ONGOING",
      location: "Nigeria",
      impact: "800 Children",
      desc: "Deploying converted container classrooms to nomadic communities, ensuring education is consistent even during seasonal migrations.",
      fullDetails: "In rural and northern Nigeria, the education of children in nomadic communities has historically been disrupted by the necessity of seasonal migration. As families move their herds in search of water and greener pastures, students are forced to drop out of conventional stationary schools, leading to high rates of illiteracy and a cycle of economic limitation. The Mobile Primary Schooling initiative addresses this challenge by introducing converted container classrooms. These units are designed to be durable, secure, and, most importantly, transportable, allowing the school to move alongside the community to ensure that learning remains a constant factor in a child’s life, regardless of their location. The technical design of these container classrooms is tailored to the environmental realities of Nigeria’s nomadic routes. Each unit is constructed from repurposed shipping containers that have been insulated against the intense heat of the Sahel and Savanna regions. They are equipped with solar power systems to provide lighting and power for digital learning tools, ensuring that students in remote areas have access to the same educational technology as their urban counterparts. Because these containers are mounted on specialized trailers or designed for easy loading onto heavy-duty trucks, the entire school infrastructure can be packed and relocated within hours when the community decides to move to a new grazing site. The curriculum and teaching model are also adapted to the nomadic lifestyle. Rather than a rigid 9-to-5 schedule that might conflict with the children’s duties in animal husbandry, the mobile schools offer flexible learning hours. Teachers, who are often recruited from similar backgrounds or trained specifically for nomadic engagement, live in proximity to the community. This ensures a high level of trust and cultural synergy. By bringing the classroom to the people, the initiative removes the distance barrier that previously prevented nomadic girls and boys from attending school, leading to a significant increase in enrollment and retention rates. Furthermore, these mobile units serve as more than just classrooms; they act as community hubs. During evening hours, the solar-powered containers provide a space for adult literacy classes and community meetings, while the integrated water catchment systems often attached to the units provide a secondary benefit to the migration group. The completion of a school year in a mobile container is recognized by the national education board, allowing these students to transition into conventional secondary schools or vocational programs. This initiative proves that migration does not have to be an obstacle to intellectual growth, and that with innovative infrastructure, Nigeria can provide quality education to every child, no matter where their journey leads.",
      
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
      fullDetails: "In the heart of rural Nigeria, the condition of a widow is often defined by a sudden and sharp descent into economic instability. When a woman loses her husband, she frequently loses her primary link to land, credit, and household income, leaving her to anchor the future of her children alone. The upcoming livestock initiative is designed to address this vulnerability directly, transforming the widow’s role from a recipient of communal pity to a resilient manager of a self-sustaining business. By providing productive animals—such as goats, sheep, or local poultry—this program establishes a living bank that provides a consistent source of high-quality protein and a reliable path toward financial autonomy.The effectiveness of using livestock as a developmental tool in Nigeria lies in the animal’s ability to serve as a compounding asset. Unlike a cash grant, which is easily depleted by the rising costs of daily living, a healthy animal reproduces and grows in value over time. This project moves away from traditional, haphazard rearing methods where animals are left to roam and scavenge. Instead, it focuses on a semi-intensive management system. Through practical training delivered in local languages, widows will master the technical skills of animal husbandry, including biosecurity and the formulation of high-protein feed using local agricultural by-products like cassava peels and maize husks. This ensures that their livestock reaches market weight quickly and remains resistant to common local diseases. The nutritional impact of this initiative is a critical component of its design. In many rural households, animal protein is a luxury that is often priced out of reach. By maintaining a backyard flock or herd, these mothers can ensure their children have daily access to eggs, milk, or meat. This steady supply of protein is vital for physical growth and cognitive development, protecting the next generation from the long-term effects of malnutrition. Furthermore, the initiative is built on a Pass-on-the-Gift model, where each beneficiary eventually gives the first-born female offspring to another widow in the community. This creates a sustainable cycle of empowerment that strengthens the social fabric and ensures the project’s benefits continue to expand without further external funding. Ultimately, this initiative is about restoring dignity to the Nigerian widow. It recognizes that while she may face cultural barriers to land ownership, her right to manage livestock is an established avenue for wealth creation. By equipping her with both the physical assets and the technical knowledge to manage them, the project enables her to pay school fees, handle medical emergencies, and contribute to the food security of her village. The transformation of a widow into a successful livestock entrepreneur proves that with the right resources, these women can move from the margins of society to become the very pillars of rural economic resilience.",
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
       fullDetails:"In Nigeria’s densely populated urban slums, the absence of accessible healthcare often turns manageable medical conditions into life-threatening crises. For expectant mothers and infants living in these underserved areas, the distance to a general hospital, combined with the high cost of transport and services, creates a significant barrier to care. The construction of five Community Health Hubs is a strategic response to this gap. These satellite clinics are designed to function as decentralized maternal health centers, bringing essential medical services directly into the heart of the slums to reduce mortality rates and improve long-term nutritional outcomes for children. The architectural and operational design of these hubs focuses on efficiency and high-volume care within a small physical footprint. Each clinic is equipped with a dedicated maternal wing featuring delivery rooms, prenatal consultation offices, and ultrasound facilities. By focusing specifically on maternal health, the hubs alleviate the pressure on overstretched state hospitals, providing a safe, clean environment for both routine checkups and uncomplicated deliveries. Because the clinics are located within the community, they facilitate early detection of pregnancy complications, allowing for timely referrals to larger teaching hospitals before a situation becomes critical. A core component of these hubs is the integrated Infant Nutrition Center. Recognizing that malnutrition is a leading cause of infant mortality in urban poor populations, the centers provide more than just treatment; they offer continuous education and support. Mothers are enrolled in programs focusing on exclusive breastfeeding, the preparation of nutrient-dense local weaning foods, and regular growth monitoring. These centers also serve as distribution points for micronutrient supplements and fortified food packets for children showing signs of stunting or wasting. By tracking a child’s development from birth, the clinics ensure that nutritional interventions are applied during the critical first 1,000 days of life. The sustainability of the Community Health Hubs relies on a community-based staffing model. Each hub is managed by a team of professional midwives and nurses, supported by trained Community Health Extension Workers (CHEWs) recruited from within the slums. These health workers conduct home visits, ensuring that mothers do not miss their immunization schedules or postnatal appointments. This last-mile delivery of healthcare builds a high level of trust between the facility and the residents. Through this model, the five satellite clinics act as a protective shield for the most vulnerable urban populations, ensuring that every mother has a safe place to give birth and every child has a healthy start to life.",
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
      fullDetails: "In Nigeria, the transition from primary to secondary school represents one of the most significant leakage points in the national education system. While primary education is officially free and compulsory, the financial burden of secondary schooling—ranging from tuition and exam fees to uniforms and textbooks—often forces high-performing students from low-income families into premature withdrawal. The Secondary School Scholarship initiative is an ongoing commitment to bridge this gap, ensuring that academic merit, rather than economic status, determines a child's educational trajectory. By supporting over 500 students, this program acts as a critical intervention in the human capital development of the nation. The core of the initiative is a merit-based selection process that identifies students who have demonstrated exceptional academic promise during their First School Leaving Certificate (FSLC) examinations. For a child in a low-income household, these results are often bittersweet; they prove the child's capability but highlight the family's inability to fund the next six years of learning. The scholarship removes this anxiety by providing comprehensive financial coverage that spans the entire secondary education cycle—from Junior Secondary School (JSS1) through to the completion of the West African Senior School Certificate Examination (WASSCE). This continuity is essential, as it prevents the stop-start pattern of schooling that often leads to permanent dropout. Beyond the payment of fees, the program addresses the ancillary costs that frequently derail a student's progress. In many Nigerian communities, the cost of specialized textbooks, science laboratory fees, and mandatory school uniforms can equal or exceed the cost of tuition. The scholarship provides an annual allowance for these essentials, ensuring that beneficiaries are not just enrolled, but are fully equipped to compete with their more affluent peers. This all-in approach levels the playing field, allowing high-performing students to focus entirely on their studies rather than the looming threat of being sent home due to unpaid levies.The long-term impact of supporting 500+ students extends far beyond the individuals themselves. Each scholarship recipient represents a potential first-generation secondary school graduate for their family, creating a powerful ripple effect of aspiration within their local community. As these students maintain high academic standards to retain their funding, they become unofficial mentors and role models for younger primary pupils. By investing in the brightest minds from the most underserved backgrounds, this initiative ensures that Nigeria does not lose its most valuable resource—its intellectual talent—to the cycle of poverty. The successful transition of these students into secondary education is a foundational step toward university and professional careers, ultimately contributing to the socio-economic elevation of their families and the country at large.",
     
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