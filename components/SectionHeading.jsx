export default function SectionHeading({ title, eyebrow = '01 / Portfolio' }) {
  return (
    <div className="mb-6">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-24 bg-cyan-300" />
    </div>
  );
}