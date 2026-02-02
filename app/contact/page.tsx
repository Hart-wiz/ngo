"use client"

import React, { useState } from 'react';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,

} from 'lucide-react';

/**
 * Contact Page
 * A professional interface for inquiries, partnerships, and support.
 */
export default function ContactPage() {

  const [formStatus, setFormStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('SENDING');
    setTimeout(() => setFormStatus('SUCCESS'), 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
   
    

      {/* Hero Section */}
      <section className="relative h-[350px] flex items-center bg-zinc-900 overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7C51E] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-20 relative z-10 text-white">
          <span className="text-[#F7C51E] font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Reach Out to Us</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in <span className="text-[#F7C51E]">Touch</span></h1>
          <p className="text-xl opacity-80 max-w-xl font-light leading-relaxed">
            Have a question about our projects or want to discuss a partnership? Our team is ready to listen and collaborate.
          </p>
        </div>
      </section>

      {/* Contact Content Area */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Contact Form */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
              <p className="text-gray-500">Fields marked with an asterisk (*) are required.</p>
            </div>

            {formStatus === 'SUCCESS' ? (
              <div className="bg-green-50 border border-green-200 p-10 text-center rounded-sm">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <Send size={28} />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. A member of our team will contact you within 24 hours.</p>
                <button 
                  onClick={() => setFormStatus('IDLE')}
                  className="mt-8 text-sm font-bold uppercase tracking-widest text-green-900 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name *</label>
                    <input required type="text" className="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#F7C51E] px-4 py-3 text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address *</label>
                    <input required type="email" className="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#F7C51E] px-4 py-3 text-sm" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
                  <select className="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#F7C51E] px-4 py-3 text-sm appearance-none">
                    <option>General Inquiry</option>
                    <option>Donation Support</option>
                    <option>Partnership Proposal</option>
                    <option>Volunteer Application</option>
                    <option>Media/Press Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Message *</label>
                  <textarea required rows={5} className="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#F7C51E] px-4 py-3 text-sm" placeholder="How can we help you?"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'SENDING'}
                  className="bg-black text-white px-10 py-4 font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-[#F7C51E] hover:text-black transition-all flex items-center gap-3"
                >
                  {formStatus === 'SENDING' ? 'Processing...' : 'Send Message'}
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Contact Info */}
          <div className="lg:pl-10">
            <div className="space-y-12">
              
              {/* Info Card 1 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#F7C51E] shrink-0 flex items-center justify-center">
                  <MapPin size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Main Headquarters</h3>
                  <p className="text-gray-500 leading-relaxed">
                  Plot 40 Okigwe Rd Aba<br />
                    Abia State, Nigeria
                  </p>
                </div>
              </div>

              {/* Info Card 2 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#F7C51E] shrink-0 flex items-center justify-center">
                  <Phone size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Phone Support</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Main Office: +234 703 618 0749<br />
                   
                  </p>
                </div>
              </div>

              {/* Info Card 3 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#F7C51E] shrink-0 flex items-center justify-center">
                  <Mail size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Email Addresses</h3>
                  <p className="text-gray-500 leading-relaxed">
             
                   contact@nutureriseinitiative.com.ng<br />
                  </p>
                </div>
              </div>

              {/* Info Card 4 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#F7C51E] shrink-0 flex items-center justify-center">
                  <Clock size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Office Hours</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Mon - Fri: 09:00 AM - 06:00 PM<br />
                    Weekend: Support via Email only
                  </p>
                </div>
              </div>

              {/* Social Block */}
              <div className="pt-10 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">Follow our Impact</h4>
                <div className="flex gap-5">
                  <SocialIcon Icon={Facebook} />
                  <SocialIcon Icon={Twitter} />
                  <SocialIcon Icon={Linkedin} />
                  <SocialIcon Icon={Instagram} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[450px] bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
  <iframe
    width="100%"
    height="100%"
    frameBorder="0"
    scrolling="no"

    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Plot%2040%20Okigwe%20Rd%20Aba,%20Abia%20State,%20Nigeria+(Nurture%20Rise%20Initiative)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    className="absolute inset-0"
  ></iframe>
  
  {/* Optional Overlay to keep your text/icon visible until hover */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
    <div className="text-center bg-white/80 p-6 rounded-lg shadow-xl">
       <MapPin size={32} className="text-[#F7C51E] mx-auto animate-bounce" />
       <p className="text-xs font-bold uppercase tracking-widest text-gray-800">Find Us Here</p>
    </div>
  </div>
</section>

      {/* Partnership CTA */}
      <section className="bg-[#F7C51E] py-20 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-2">Become a Field Partner</h2>
            <p className="text-black/70 font-medium">Join our network of organizations making a difference on the ground.</p>
          </div>
          <button className="bg-black text-white px-10 py-4 font-bold uppercase tracking-widest text-xs whitespace-nowrap hover:bg-white hover:text-black transition-all shadow-2xl">
            Partner Registration
          </button>
        </div>
      </section>
    </div>
  );
}

/**
 * Shared Components
 */


function SocialIcon({ Icon }: { Icon: React.ComponentType<{ size?: number; className?: string }> }) {
  return (
    <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#F7C51E] hover:text-black hover:border-[#F7C51E] transition-all duration-300">
      <Icon size={18} />
    </a>
  );
}