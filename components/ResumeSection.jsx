import Link from 'next/link';
import { Award, ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { certifications, education, experience, skills } from '@/lib/data';

export default function ResumeSection() {
  return (
    <section className="space-y-8">
      <SectionHeading title="Resume" />

      <div>
        <h3 className="mb-4 text-xl font-semibold text-white">Education</h3>
        <div className="space-y-4">
          {education.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-[#1a1a1d] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-zinc-400">{item.meta}</p>
                </div>
                <span className="text-sm font-semibold text-cyan-300">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold text-white">Experience</h3>
        <div className="space-y-4">
          {experience.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-[#1a1a1d] p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-white">{item.title}</p>
                    {item.badge ? <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.badge}</span> : null}
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{item.meta}</p>
                </div>
                <div className="text-sm text-cyan-300">
                  <p>{item.date}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-400">
                {item.details?.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              {(() => {
                const certification = certifications.find((entry) => entry.company === item.meta);

                return certification ? (
                  <Link
                    href={`/certifications/${certification.slug}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-100/10 px-4 py-3 text-sm font-semibold text-white-200 transition hover:border-cyan-300/60 hover:bg-cyan-500/20"
                  >
                    <Award size={22} aria-hidden="true"  className='text-cyan-400'/>
                    View Certification
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                ) : null;
              })()}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold text-white">My Skills &amp; Technologies</h3>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.label} className="rounded-2xl border border-white/10 bg-[#1a1a1d] p-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-zinc-200">{skill.label}</span>
                <span className="text-cyan-300">{skill.percent}%</span>
              </div>
              <div className="h-2 rounded-full bg-zinc-800">
                <div className="h-2 rounded-full bg-cyan-500" style={{ width: `${skill.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}