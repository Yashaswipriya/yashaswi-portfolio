"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import PixelButton from './ui/PixelButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', formData);
  };

  const contactLinks = [
    {
      label: 'yashaswi.priya@example.com',
      href: 'mailto:yashaswi.priya@example.com',
      icon: <Mail className="w-5 h-5 text-[#1E2B24] stroke-[2.5]" />,
    },
    {
      label: 'linkedin.com/in/yashaswipriya',
      href: 'https://linkedin.com/in/yashaswipriya',
      icon: <Linkedin className="w-5 h-5 text-[#1E2B24] stroke-[2.5]" />,
    },
    {
      label: 'github.com/yashaswipriya',
      href: 'https://github.com/yashaswipriya',
      icon: <Github className="w-5 h-5 text-[#1E2B24] stroke-[2.5]" />,
    },
    {
      label: 'codolio.com/yashaswipriya',
      href: 'https://codolio.com/yashaswipriya',
      icon: <ExternalLink className="w-5 h-5 text-[#1E2B24] stroke-[2.5]" />,
    },
  ];

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-16 space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <p className="font-pixel text-xs font-bold text-[#DCA832] tracking-widest uppercase">
          CONTACT
        </p>
        <h2 className="font-pixel text-3xl sm:text-5xl font-bold text-[#1E2B24] tracking-tight">
          LET'S TALK
        </h2>
        <p className="text-[#1E2B24] font-sans text-base sm:text-lg font-medium pt-2">
          Open to backend and full-stack roles. Reach out directly or drop a message below.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
        {/* Left Column: Direct Links Card */}
        <div
          className="bg-white border-4 border-[#1E2B24] p-6 sm:p-8 flex flex-col justify-between space-y-6"
          style={{ boxShadow: '8px 8px 0px #1E2B24' }}
        >
          <div className="space-y-6">
            {contactLinks.map((item, idx) => (
              <React.Fragment key={idx}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  {item.icon}
                  <span className="font-sans text-sm sm:text-base font-medium text-[#1E2B24]">
                    {item.label}
                  </span>
                </Link>
                {idx < contactLinks.length - 1 && (
                  <div className="border-b-2 border-dashed border-[#1E2B24]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column: Dark Form Container */}
        <div
          className="bg-[#1E2B24] border-4 border-[#1E2B24] p-6 sm:p-8 text-[#FAF8ED] space-y-6 flex flex-col justify-between"
          style={{ boxShadow: '8px 8px 0px #DCA832' }}
        >
          <div className="font-pixel text-xs font-bold text-[#DCA832] tracking-wider">
            $ SEND_MESSAGE
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#FAF8ED] border-2 border-[#1E2B24] px-4 py-3 text-sm text-[#1E2B24] placeholder-[#71717A] font-sans font-medium outline-none focus:ring-2 focus:ring-[#DCA832]"
              required
            />

            <input
              type="email"
              placeholder="your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#FAF8ED] border-2 border-[#1E2B24] px-4 py-3 text-sm text-[#1E2B24] placeholder-[#71717A] font-sans font-medium outline-none focus:ring-2 focus:ring-[#DCA832]"
              required
            />

            <textarea
              rows={4}
              placeholder="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#FAF8ED] border-2 border-[#1E2B24] px-4 py-3 text-sm text-[#1E2B24] placeholder-[#71717A] font-sans font-medium outline-none focus:ring-2 focus:ring-[#DCA832] resize-none"
              required
            />

            <button
              type="submit"
              className="w-full font-pixel text-xs font-bold py-4 bg-[#DCA832] text-[#1E2B24] border-2 border-[#1E2B24] hover:bg-[#c9972b] transition-colors"
              style={{ boxShadow: '4px 4px 0px #000000' }}
            >
              SEND →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}