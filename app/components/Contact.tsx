"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, Linkedin, FileText, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
    }
  };

  const contactLinks = [
    {
      label: 'yashaswipulukuri@gmail.com',
      href: 'mailto:yashaswipulukuri@gmail.com',
      icon: <Mail className="w-5 h-5 text-[#1E2B24] stroke-[2.5]" />,
    },
    {
      label: '+91 9494293585', // Replace with your actual phone number
      href: 'tel:+919494293585',
      icon: <Phone className="w-5 h-5 text-[#1E2B24] stroke-[2.5]" />,
    },
    {
      label: 'linkedin.com/in/yashaswipriya',
      href: 'https://www.linkedin.com/in/yashaswi-priya-5a5123305/',
      icon: <Linkedin className="w-5 h-5 text-[#1E2B24] stroke-[2.5]" />,
    },
    {
      label: 'Download Resume (PDF)',
      href: '/resume.pdf',
      icon: <FileText className="w-5 h-5 text-[#1E2B24] stroke-[2.5]" />,
      download: 'Yashaswi_Priya_Resume.pdf',
    },
  ];

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-12 space-y-6">
      {/* Section Header */}
      <div className="space-y-1">
        <p className="font-pixel text-[11px] font-bold text-[#DCA832] tracking-widest uppercase">
          CONTACT
        </p>
        <h2 className="font-pixel font-black text-4xl sm:text-5xl text-[#1E2B24] tracking-tight uppercase">
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
                  download={item.download}
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

          {/* Success Banner */}
          {status === 'success' && (
            <div className="bg-[#D5E2D4] border-2 border-[#1E2B24] p-4 flex items-center gap-3 text-[#1E2B24]">
              <CheckCircle className="w-5 h-5 text-[#1E2B24] shrink-0" />
              <span className="font-pixel text-xs font-bold">
                MAIL SENT! I'LL GET BACK TO YOU SOON.
              </span>
            </div>
          )}

          {/* Error Banner */}
          {status === 'error' && (
            <div className="bg-[#F8D7DA] border-2 border-[#1E2B24] p-4 text-[#721C24]">
              <span className="font-pixel text-xs font-bold">
                FAILED TO SEND. PLEASE TRY AGAIN LATER.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#FAF8ED] border-2 border-[#1E2B24] px-4 py-3 text-sm text-[#1E2B24] placeholder-[#71717A] font-sans font-medium outline-none focus:ring-2 focus:ring-[#DCA832]"
              required
              disabled={status === 'loading'}
            />

            <input
              type="email"
              placeholder="your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#FAF8ED] border-2 border-[#1E2B24] px-4 py-3 text-sm text-[#1E2B24] placeholder-[#71717A] font-sans font-medium outline-none focus:ring-2 focus:ring-[#DCA832]"
              required
              disabled={status === 'loading'}
            />

            <textarea
              rows={4}
              placeholder="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#FAF8ED] border-2 border-[#1E2B24] px-4 py-3 text-sm text-[#1E2B24] placeholder-[#71717A] font-sans font-medium outline-none focus:ring-2 focus:ring-[#DCA832] resize-none"
              required
              disabled={status === 'loading'}
            />

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full font-pixel text-xs font-bold py-4 bg-[#DCA832] text-[#1E2B24] border-2 border-[#1E2B24] hover:bg-[#c9972b] transition-colors disabled:opacity-50"
              style={{ boxShadow: '4px 4px 0px #000000' }}
            >
              {status === 'loading' ? 'SENDING...' : 'SEND →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}