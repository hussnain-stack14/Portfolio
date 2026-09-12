import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import FadeInSection from "@/components/FadeInSection";
import WordReveal from "@/components/WordReveal";
import { clients, services } from "@/lib/data";

export default function AboutSection() {
  return (
    <section className="relative space-y-10 overflow-hidden">
      <div className="relative z-10 space-y-8">
        <div>
          <SectionHeading title="About Me" eyebrow="02 / About" />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            <WordReveal
              text="I'm a Full Stack Web Developer based in Faisalabad, Pakistan, specializing in modern web applications with"
              delay={0}
              staggerDelay={0.035}
            />{" "}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
              className="mr-1 inline-block rounded-full border border-none bg-[#0e0e10] text-cyan-200"
            >
              Next.js, Express.js, Node.js and MongoDB
            </motion.span>{" "}
            <WordReveal
              text="I help businesses get online with responsive, fast, and practical websites, with clean, maintainable code built to solve real business problems."
              delay={0.95}
              staggerDelay={0.03}
            />
          </p>
          <div className="border-l border-cyan-300/50 pl-5 text-sm leading-7 text-zinc-400"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">The focus</p><p className="mt-3">Responsive UI, dependable APIs, thoughtful database design, clean architecture, and websites that serve a real business goal.</p></div>
          </div>
        </div>

        <FadeInSection delay={0.1}>
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Services
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <FadeInSection key={service.title} delay={index * 0.08}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Worked With</h3>
            <div className="flex flex-wrap items-center gap-3 border border-white/10 bg-[#141414] p-4">
              {clients.map((client) => (
                <div
                  key={client}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}