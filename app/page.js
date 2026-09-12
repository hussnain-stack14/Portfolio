'use client';

import { useMemo, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Hero from '@/components/Hero';
import { projects } from '@/lib/data';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window === 'undefined') return 'home';

    return new URLSearchParams(window.location.search).get('tab') || 'home';
  });
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-[#0e0e10] text-zinc-200">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col lg:flex-row">
        <aside className="w-full border-b border-white/10 bg-[#121214]/90 p-4 backdrop-blur lg:sticky lg:top-0 lg:min-h-screen lg:w-[292px] lg:shrink-0 lg:border-b-0 lg:border-r lg:p-5 xl:w-[320px]">
          <Sidebar />
        </aside>

        <section className="flex-1">
          <div className="sticky top-0 z-30 hidden border-b border-white/10 bg-[#121214]/95 px-6 py-4 shadow-lg shadow-black/10 backdrop-blur lg:block">
            <TopNav activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          <div key={activeTab} className="section-transition px-4 py-4 pb-24 lg:px-8 lg:py-8 lg:pb-8">
            {activeTab === 'home' && <Hero onNavigate={setActiveTab} />}
            {activeTab === 'resume' && <ResumeSection />}
            {activeTab === 'portfolio' && <PortfolioSection activeFilter={activeFilter} onFilterChange={setActiveFilter} filteredProjects={filteredProjects} />}
            {activeTab === 'contact' && <ContactSection />}
            {activeTab === 'about' && <AboutSection />}
          </div>

          <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#121214]/95 px-3 py-2 backdrop-blur lg:hidden">
            <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </section>
      </div>
    </main>
  );
}
