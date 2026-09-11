import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  ExternalLink,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { certifications } from '@/lib/data';

export default function CertificationPage({ params }) {
  const certificationIndex = certifications.findIndex((item) => item.slug === params.company);
  const certification = certifications[certificationIndex];

  if (!certification) notFound();

  const imagePath = path.join(process.cwd(), 'public', certification.image.slice(1));
  const hasCertificateImage = fs.existsSync(imagePath);
  const technologies = certification.technologies || [];
  const contributions = certification.contributions || certification.description || [];
  const prevCertification = certifications[certificationIndex - 1];
  const nextCertification = certifications[certificationIndex + 1];
  const companyLabel = `${certification.company} Internship`;

  const stats = [
    { label: 'Duration', value: certification.date, icon: Calendar },
    { label: 'Location', value: certification.location, icon: MapPin },
    { label: 'Stack', value: `${technologies.length || 0} tools`, icon: Sparkles },
  ];

  return (
    <main className="min-h-screen bg-[#1a1a1d] px-5 py-7 text-zinc-200 sm:px-8 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl">
        {/* ---------- Breadcrumb ---------- */}
        <header>
          <Link
            href="/?tab=resume"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to Resume
          </Link>
          <p className="mt-5 text-xs uppercase tracking-[0.16em] text-zinc-500">
            Resume <span className="px-2 text-zinc-700">/</span> Certifications{' '}
            <span className="px-2 text-zinc-700">/</span> {companyLabel}
          </p>
        </header>

        <article>
          {/* ---------- Hero ---------- */}
          <header className="mx-auto max-w-5xl pb-10 pt-14 sm:pb-12 sm:pt-20 lg:pt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Case Study · Certification
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(1.6rem,3vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
              {certification.title}
            </h1>
            <p className="mt-5 text-lg font-medium text-cyan-200 sm:text-xl">
              {certification.company} <span className="px-2 text-zinc-700">·</span>{' '}
              <span className="text-zinc-400">{certification.type || 'Internship'}</span>
            </p>

            {/* Stat strip */}
            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-[#27272A] bg-[#141414] px-4 py-3 transition-colors hover:border-cyan-300/40"
                >
                  <Icon size={18} className="shrink-0 text-cyan-300" aria-hidden="true" />
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.12em] text-zinc-500">{label}</p>
                    <p className="text-sm font-medium text-zinc-100">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </header>

          {/* ---------- Certificate image (smaller) ---------- */}
          <figure className="mx-auto mb-16 max-w-[650px] sm:mb-20">
            <div className="group overflow-hidden rounded-lg border border-[#27272A] bg-[#141414] p-2 shadow-xl shadow-black/20 transition-shadow hover:shadow-black/40 sm:p-3">
              {hasCertificateImage ? (
                <Image
                  src={certification.image}
                  alt={`${certification.title} certificate from ${certification.company}`}
                  width={650}
                  height={650}
                  className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                />
              ) : (
                <div className="flex min-h-56 flex-col items-center justify-center gap-4 px-6 text-center text-zinc-400">
                  <Award className="text-cyan-300" size={40} aria-hidden="true" />
                  <p>Certificate image will appear here soon.</p>
                </div>
              )}
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500 sm:text-sm">
              <span>{certification.company} — Certificate of Completion</span>
              {hasCertificateImage ? (
                <Link
                  href={certification.certificateUrl || certification.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#27272A] px-3 py-2 font-semibold text-cyan-200 transition-colors hover:border-cyan-300/50 hover:text-white"
                >
                  View Full Certificate <ExternalLink size={14} aria-hidden="true" />
                </Link>
              ) : null}
            </figcaption>
          </figure>

          <div className="mx-auto max-w-[820px]">
            {/* ---------- Overview ---------- */}
            <section className="mt-16 sm:mt-20">
              <SectionLabel>The Context</SectionLabel>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                About the Internship
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-[0.95rem]">
                {certification.intro ||
                  `Successfully completed the ${certification.company} Virtual Internship Program in Full Stack Development, gaining practical experience through real-world projects, collaborative development tasks, and hands-on problem solving.`}
              </p>
            </section>

            {/* ---------- At a glance ---------- */}
            <section className="mt-16 sm:mt-20">
              <SectionLabel>At a Glance</SectionLabel>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                Internship Details
              </h2>
              <div className="mt-7 grid gap-px overflow-hidden rounded-lg border border-[#27272A] bg-[#27272A] sm:grid-cols-2">
                <DetailCell label="Company" value={certification.company} />
                <DetailCell label="Role" value={certification.title} />
                <DetailCell label="Duration" value={certification.date} />
                <DetailCell label="Location" value={certification.location} />
                <DetailCell label="Type" value={certification.type || 'Internship'} />
              </div>
            </section>

            {/* ---------- Toolkit ---------- */}
            <section className="mt-16 sm:mt-20">
              <SectionLabel>Toolkit</SectionLabel>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                Technologies &amp; Skills
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-[0.95rem]">
                Technologies and development skills used during the internship.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-[#27272A] px-3 py-1.5 text-xs text-cyan-100 transition-colors hover:border-cyan-300/50 hover:bg-cyan-300/5 sm:text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>

            {/* ---------- Contributions timeline ---------- */}
            <section className="mt-16 sm:mt-20">
              <SectionLabel>The Work</SectionLabel>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                What I Worked On
              </h2>
              <div className="relative mt-10 space-y-10 border-l border-[#27272A] pl-8">
                {contributions.map((item, index) => {
                  const contribution = typeof item === 'string' ? item : item.description;
                  const title =
                    typeof item === 'string'
                      ? index === 0
                        ? 'Project Delivery'
                        : 'Full-Stack Development'
                      : item.title;

                  return (
                    <div key={contribution} className="relative">
                      <span className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/40 bg-[#1a1a1d] text-xs font-semibold text-cyan-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-base font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-400 sm:text-[0.95rem]">
                        {contribution}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ---------- Reflection callout ---------- */}
            <section className="mt-16 sm:mt-20">
              <SectionLabel>The Outcome</SectionLabel>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                What I Gained
              </h2>
              <div className="mt-6 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.04] p-6 sm:p-7">
                <p className="text-sm leading-7 text-zinc-300 sm:text-[0.95rem]">
                  {certification.reflection ||
                    'This internship provided practical exposure to full-stack application development, MERN stack workflows, frontend and backend integration, collaborative development across multiple projects, and real-world problem solving.'}
                </p>
              </div>
            </section>

            {/* ---------- Verification ---------- */}
            <section className="mt-16 border-l-2 border-cyan-400/50 pl-5 sm:mt-20 sm:pl-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 shrink-0 text-cyan-300" size={21} aria-hidden="true" />
                <div>
                  <SectionLabel>Trust &amp; Verification</SectionLabel>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                    Certificate Verification
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-[0.95rem]">
                    {certification.verificationUrl
                      ? 'Use the official verification link to confirm this certification.'
                      : 'This certificate can be verified using the QR code provided on the official certificate.'}
                  </p>
                  {certification.verificationUrl ? (
                    <Link
                      href={certification.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
                    >
                      Open verification <ExternalLink size={15} aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </section>
          </div>
        </article>

        {/* ---------- Prev / Next ---------- */}
        <footer className="mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-between gap-5 border-t border-[#27272A] pt-6 text-sm font-semibold">
          {prevCertification ? (
            <Link
              href={`/certifications/${prevCertification.slug}`}
              className="inline-flex items-center gap-2 text-cyan-200 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Previous Certification
            </Link>
          ) : (
            <Link
              href="/?tab=resume"
              className="inline-flex items-center gap-2 text-cyan-200 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to Resume
            </Link>
          )}
          {nextCertification ? (
            <Link
              href={`/certifications/${nextCertification.slug}`}
              className="inline-flex items-center gap-2 text-cyan-200 transition-colors hover:text-white"
            >
              Next Certification <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ) : null}
        </footer>
      </div>
    </main>
  );
}

function SectionLabel({ children }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{children}</p>;
}

function DetailCell({ label, value }) {
  return (
    <div className="bg-[#141414] px-5 py-4">
      <dt className="text-xs uppercase tracking-[0.1em] text-zinc-500">{label}</dt>
      <dd className="mt-1.5 text-sm text-zinc-200">{value}</dd>
    </div>
  );
}