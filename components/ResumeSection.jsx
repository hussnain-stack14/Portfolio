import Link from 'next/link';
import { Award, ArrowUpRight, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { certifications, education, experience } from '@/lib/data';

export default function ResumeSection() {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl"><SectionHeading title="Experience &amp; skills" eyebrow="03 / Resume" /><p className="mt-4 text-base leading-7 text-zinc-400">A practical foundation in software engineering, shaped by internships, real client work, and a focus on building maintainable products.</p></div>

      <div>
        <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white"><GraduationCap className="h-5 w-5 text-cyan-300" /> Education</h3>
        <div className="space-y-4">
          {education.map((item) => (
            <div key={item.title} className="border-l border-cyan-300/40 bg-[#141414] p-5 sm:p-6">
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
        <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white"><BriefcaseBusiness className="h-5 w-5 text-cyan-300" /> Experience</h3>
        <div className="space-y-4">
          {experience.map((item) => (
            <div key={item.title} className="border-l border-cyan-300/40 bg-[#141414] p-5 sm:p-6">
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
        <h3 className="mb-5 text-xl font-semibold text-white">Skills &amp; technologies</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {['Frontend|React, Next.js, JavaScript, HTML, CSS, Tailwind CSS', 'Backend|Node.js, Express.js, REST APIs', 'Database|MongoDB, SQL, PostgreSQL', 'Tools|Git, GitHub, Postman, Figma, VS Code'].map((group) => {
            const [title, items] = group.split('|');
            return <div key={title} className="border border-white/10 bg-[#141414] p-5"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{title}</p><p className="mt-3 text-sm leading-7 text-zinc-300">{items}</p></div>;
          })}
        </div>
      </div>
    </section>
  );
}