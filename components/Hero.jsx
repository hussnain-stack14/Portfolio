import Image from "next/image";
import { Smartphone, Zap, Search, Briefcase, ArrowRight, Code2, Database, Server } from "lucide-react";
import VantaNetBackground from "./VantaNetBackground";

export default function Hero({ onNavigate }) {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1d] py-12 text-white sm:py-16 lg:py-20">
      {/* Vanta 3D Network Background */}
      <VantaNetBackground />

      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 z-0 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[110px] sm:h-[420px] sm:w-[420px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          {/* ================= LEFT CONTENT ================= */}
          <div className="mx-auto w-full max-w-2xl min-w-0 text-center sm:text-left lg:mx-0">
            {/* Eyebrow */}
            <div className="hero-reveal hero-delay-1 mx-auto mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#27272A] bg-[#141414] px-3.5 py-1.5 sm:mx-0 sm:rounded-md sm:px-3 sm:py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] text-gray-300 uppercase">
                FULL-STACK WEB DEVELOPER
              </span>
            </div>

            {/* Heading */}
            <h1 className="hero-reveal hero-delay-2 break-words text-4xl font-bold leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-4xl">
              I Build Modern Websites {" "}
              <span className="text-cyan-300">
                That Help Businesses Grow.
              </span>
            </h1>

            {/* Description */}
            <p className="hero-reveal hero-delay-3 mx-auto mt-6 max-w-xl text-base leading-7 text-[#A1A1AA] sm:mx-0 lg:text-lg">
              I help ambitious businesses and teams turn ideas into fast, responsive digital products with React, Next.js, Node.js, Express, and MongoDB.
            </p>

            <div className="hero-reveal hero-delay-3 mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-medium text-zinc-400 sm:justify-start">
              <span>React</span><span className="text-cyan-400">•</span><span>Next.js</span><span className="text-cyan-400">•</span><span>Node.js</span><span className="text-cyan-400">•</span><span>Express</span><span className="text-cyan-400">•</span><span>MongoDB</span>
            </div>

            {/* CTA Buttons */}
            <div className="hero-reveal hero-delay-4 mx-auto mt-8 flex w-full max-w-xl flex-col gap-3.5 sm:mx-0 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 text-sm font-semibold text-[#0A0A0A] shadow-lg shadow-cyan-400/10 transition-all duration-300 hover:bg-cyan-200 sm:w-auto sm:px-6 sm:py-3.5"
              >
                Let&apos;s Build Your Website
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate("portfolio")}
                className="order-first inline-flex w-full items-center justify-center rounded-lg border border-[#3f3f46] bg-transparent px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-[#141414] sm:order-none sm:w-auto sm:px-6 sm:py-3.5"
              >
                View My Work
              </button>
            </div>

            {/* Trust / Value Indicators */}
            <div className="hero-reveal hero-delay-5 mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-6 border-t border-[#27272A]/60 pt-6 sm:grid-cols-4 sm:gap-x-6">
              {/* Responsive Design */}
              <div className="group flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9] transition-colors duration-300 group-hover:bg-[#67E8F9]/20">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-white">
                  Responsive
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-xs text-[#71717A]">
                  Design
                </p>
              </div>

              {/* Fast Performance */}
              <div className="group flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9] transition-colors duration-300 group-hover:bg-[#67E8F9]/20">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-white">
                  Fast
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-xs text-[#71717A]">
                  Performance
                </p>
              </div>

              {/* SEO-Friendly Websites */}
              <div className="group flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9] transition-colors duration-300 group-hover:bg-[#67E8F9]/20">
                  <Search className="h-5 w-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-white">
                  SEO
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-xs text-[#71717A]">
                  Websites
                </p>
              </div>

              {/* Business Focused */}
              <div className="group flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9] transition-colors duration-300 group-hover:bg-[#67E8F9]/20">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-white">
                  Business
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-xs text-[#71717A]">
                  Focused
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="hero-float relative mt-2 flex items-center justify-center lg:mt-0 lg:justify-end">
            {/* Image Glow */}
            <div className="pointer-events-none absolute h-[420px] w-[300px] rounded-full bg-cyan-400/10 blur-[90px] sm:h-[520px] sm:w-[380px] sm:blur-[110px]" />

            <div className="hero-reveal hero-delay-3 group surface-grid relative w-full max-w-[620px] overflow-hidden rounded-2xl border border-cyan-400/30 bg-[#141414] p-3 shadow-2xl shadow-black/30 transition-all duration-500 ease-out hover:border-cyan-400/70 xl:max-w-[700px]">
              {/* Hover Inner Glow Overlay */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-cyan-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Hero Laptop Image */}
              <div className="relative overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/Hero-sideImage1.jpg"
                alt="Modern business website design"
                width={800}
                height={1200}
                priority
                className="relative z-10 aspect-[2/3] h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between rounded-lg border border-white/10 bg-[#101012]/90 px-3 py-2 text-[10px] text-zinc-300 backdrop-blur">
                <span className="flex items-center gap-2"><Code2 className="h-3.5 w-3.5 text-cyan-300" /> Product thinking</span>
                <span className="flex items-center gap-2"><Server className="h-3.5 w-3.5 text-cyan-300" /> Full-stack build</span>
              </div>
              </div>

              {/* ================= FLOATING CARDS ================= */}
            </div>
          </div>
        </div>
        <div className="hero-reveal hero-delay-5 mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-y border-white/10 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 sm:justify-between">
          <span className="text-zinc-400">Built with</span>
          {['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'JavaScript'].map((technology) => <span key={technology} className="transition-colors hover:text-cyan-300">{technology}</span>)}
        </div>
      </div>
    </section>
  );
}