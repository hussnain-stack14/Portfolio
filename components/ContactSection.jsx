'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/lib/data';
import WhatsAppButton from "./WhatsAppButton";
export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
  access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
  name: formData.name,
  email: formData.email,
  message: formData.message,
  subject: 'New message from portfolio',
}),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="space-y-9">
      <div className="max-w-3xl"><SectionHeading title="Let&apos;s build something that works." eyebrow="05 / Contact" /><p className="mt-4 text-base leading-7 text-zinc-400">Whether you are a local business looking for a better website or a team looking for a thoughtful full-stack developer, I&apos;d be glad to hear what you are working on.</p></div>
      <div className="overflow-hidden border border-white/10 bg-[#141414]">
        <div className="relative h-72">
          <iframe
            title="Location map"
            src="https://www.google.com/maps?q=Faisalabad%2C%20Punjab%2C%20Pakistan&z=12&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
          />
          <div className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-[#121214]/90 p-4 shadow-xl">
            <p className="text-sm font-semibold text-white">Based in Faisalabad, Pakistan</p>
            <p className="mt-1 text-sm text-zinc-400">Open to remote and hybrid collaborations.</p>
          </div>
        </div>
      </div>

      <div className="border border-white/10 bg-[#141414] p-6 sm:p-8">
        <h3 className="mb-4 text-xl font-semibold text-white">Contact Form</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm text-zinc-400">
              <span className="mb-2 block">Full Name</span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm text-zinc-400">
              <span className="mb-2 block">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="block text-sm text-zinc-400">
            <span className="mb-2 block">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
              placeholder="Tell me about your project..."
            />
          </label>
          <div className="flex items-center justify-between">
            <p className="text-sm">
              {status === 'success' && <span className="text-emerald-400">Message sent successfully!</span>}
              {status === 'error' && <span className="text-red-400">Something went wrong. Please try again.</span>}
            </p>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </div>
       <div className='group inline-flex items-center justify-center gap-2
             rounded-full border border-primary
             bg-cyan-600/5 px-6 py-3
             text-sm font-semibold uppercase tracking-wider text-primary
             transition-all duration-300
             hover:bg-primary hover:text-white 
             hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
             hover:-translate-y-1"'>
        <p>Let's Work Together</p>
        <WhatsAppButton
          phoneNumber="923155254877"
          message={`Hi ${profile.name}, I found your portfolio and would like to connect!`}
        />
       </div>
    </section>
  );
}