"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState('IDLE');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus('SENDING');

    // 1. Capture the data
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // 2. Set your WhatsApp Number (International format, no + or spaces)
    const phoneNumber = "2347036180749"; 

    // 3. Construct the message
    const whatsappMessage = `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Subject:* ${subject}%0A` +
      `*Message:* ${message}`;

    // 4. Open WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(url, "_blank");

    // Set to success so they see the thank you screen
    setFormStatus('SUCCESS');
  }

  return (
    <div className=" border border-green-200 p-10 text-center rounded-sm">
      <div>
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
          <p className="text-gray-500">Form will open in WhatsApp.</p>
        </div>

        {formStatus === 'SUCCESS' ? (
          <div className="bg-green-50 border border-green-200 p-10 text-center rounded-sm">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Send size={28} />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">Redirected to WhatsApp!</h3>
            <p className="text-green-700">Please remember to hit "Send" in your WhatsApp app to finish the process.</p>
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
                <input name="name" required type="text" className="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#F7C51E] px-4 py-3 text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address *</label>
                <input name="email" required type="email" className="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#F7C51E] px-4 py-3 text-sm" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
              <select name="subject" className="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#F7C51E] px-4 py-3 text-sm appearance-none">
                <option>General Inquiry</option>
                <option>Donation Support</option>
                <option>Partnership Proposal</option>
                <option>Volunteer Application</option>
                <option>Media/Press Inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Message *</label>
              <textarea name="message" required rows={5} className="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#F7C51E] px-4 py-3 text-sm" placeholder="How can we help you?"></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-black text-white px-10 py-4 font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-[#25D366] hover:text-white transition-all flex items-center gap-3"
            >
              Open WhatsApp
              <Send size={14} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}