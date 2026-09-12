'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile, sidebarContacts } from '@/lib/data';
import Link from 'next/link';
import WhatsAppButton from "./WhatsAppButton";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 w-full max-w-lg space-y-4 rounded-2xl border border-white/10 bg-[#1a1a1d] p-4 shadow-2xl shadow-black/20 transition-shadow duration-300 hover:shadow-cyan-500/5 sm:space-y-6 sm:p-6 lg:max-w-xl lg:p-8 xl:max-w-2xl items-center justify-center"
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:items-start">
          <div className="group rounded-t-xl relative h-16 w-16 shrink-0 overflow-hidden ring-2 ring-cyan-500/40 transition-all duration-300 hover:ring-cyan-400 hover:ring-4 sm:h-24 sm:w-24 lg:h-40 lg:w-40 lg:ml-6">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              sizes="(max-width: 640px) 64px, (max-width: 1024px) 96px, 112px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="whitespace-nowrap text-lg font-bold text-white transition-colors duration-300 hover:text-cyan-200 sm:text-2xl lg:text-3xl">
                {profile.name}
              </h1>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-medium text-emerald-300" title="Available for work">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.7)]" />
                Available for work
              </span>
            </div>
            <span className="mt-2 inline-flex max-w-full rounded-md border border-cyan-400/60 bg-cyan-400/5 px-2 py-1 text-center text-[11px] leading-5 tracking-[0.08em] text-cyan-100">
              {profile.role}
            </span>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle details"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-zinc-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-200 hover:scale-110 active:scale-95 sm:h-9 sm:w-9 lg:hidden"
        >
          <svg
            className={`h-3.5 w-3.5 transition-transform duration-200 sm:h-4 sm:w-4 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className={`${open ? 'block' : 'hidden'} space-y-4 sm:space-y-6 lg:block`}>
        <div className="h-px w-full border-b border-[#333]" />

        <div className="space-y-2 sm:space-y-3">
          {sidebarContacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                className="group flex w-full items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-xs text-zinc-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-black/40 sm:px-4 sm:py-4 sm:text-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20 sm:h-10 sm:w-10">
                  {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-500 sm:text-[10px] sm:tracking-[0.2em]">
                    {item.label}
                  </p>
                  <p className="truncate whitespace-nowrap text-[13px] font-medium text-zinc-200 transition-colors duration-300 group-hover:text-cyan-100 sm:text-sm" title={item.value}>
                    {item.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex gap-2 justify-evenly sm:gap-[10px] sm:justify-center">
          {profile.socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_4px_12px_rgba(103,232,249,0.2)] sm:h-12 sm:w-12"
                >
                  {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <WhatsAppButton
          phoneNumber="923155254877"
          message={`Hi ${profile.name}, I found your portfolio and would like to connect!`}
        />
      </div>
    </motion.div>
  );
}