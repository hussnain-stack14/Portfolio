import SectionHeading from '@/components/SectionHeading';
import { filters } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, GitBranch, ExternalLink } from 'lucide-react';

export default function PortfolioSection({ activeFilter, onFilterChange, filteredProjects }) {
  return (
    <section className="space-y-9">
      <div className="max-w-3xl">
        <SectionHeading title="Selected work" eyebrow="04 / Portfolio" />
        <p className="mt-4 text-base leading-7 text-zinc-400">
          A focused selection of products and business websites built to make complex workflows clearer, brands more credible, and customer journeys easier.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 border-y border-white/10 py-4">
        {filters.map((filter) => (
          <button key={filter} onClick={() => onFilterChange(filter)} className={`rounded-md border px-3 py-2 text-xs font-semibold transition ${activeFilter === filter ? 'border-cyan-300 bg-cyan-300 text-[#071013]' : 'border-white/10 bg-[#1a1a1d] text-zinc-400 hover:border-cyan-400/50 hover:text-white'}`}>
            {filter}
          </button>
        ))}
      </div>
      <div className="space-y-8">
        {filteredProjects.map((project, index) => (
          <article key={project.title} className={`group overflow-hidden rounded-2xl border border-white/10 bg-[#141414] ${index === 2 ? 'lg:grid lg:grid-cols-[1.25fr_0.75fr]' : 'lg:grid lg:grid-cols-2'} ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
            <div className="relative overflow-hidden bg-[#101012] px-6 py-2 sm:px-4 sm:py-8">
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} — ${project.category} project by Hussnain Ali`}
                  width={1200}
                  height={760}
                  className="aspect-[16/10] h-full min-h-[240px] w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#101012]/80 text-white backdrop-blur"><ArrowUpRight className="h-4 w-4" /></span>
              </Link>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-zinc-300">
                {(project.tags || []).map((tag) => <span key={tag} className="rounded-md border border-white/10 px-2.5 py-1.5">{tag}</span>)}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2.5 text-xs font-semibold text-[#071013] transition hover:bg-cyan-200">Live demo <ExternalLink className="h-3.5 w-3.5" /></Link>
                <Link href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-xs font-semibold text-zinc-200 transition hover:border-cyan-300 hover:text-cyan-200"><GitBranch className="h-3.5 w-3.5" /> GitHub</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}