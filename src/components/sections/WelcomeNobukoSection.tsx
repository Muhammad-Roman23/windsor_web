"use client";

import { motion, type Variants } from "framer-motion";
import { CarFront, ShieldCheck, Globe2, Sparkles } from "lucide-react";

// ---------------------------------------------------------------------------
// Content - SAME
// ---------------------------------------------------------------------------

const content = {
  heading: "Welcome",
  sub1: "to",
  accent: "Nobuko",
  sub2: "Japan",
  badge: "Trusted Japanese Used Car Exporter",
  description:
    "With years of expertise as a leading Japanese used car supplier, we specialize in sourcing, inspecting, and delivering premium vehicles from Japan to the UK, Ireland, Cyprus, and markets worldwide. Our mission is straightforward: to offer businesses and individuals access to certified, high-quality used cars through a streamlined, transparent, and professional process, ensuring complete satisfaction from start to finish",
};

const features = [
  { icon: CarFront, title: "Sourcing", desc: "Direct Auction Access" },
  { icon: ShieldCheck, title: "Inspected", desc: "Certified Quality" },
  { icon: Globe2, title: "Worldwide", desc: "UK • Ireland • Cyprus" },
];

// ---------------------------------------------------------------------------
// Motion - SAME TUMHARA FLOW
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function WelcomeNobukoSection() {
  return (
    <section id="welcome" className="section relative overflow-hidden py-16 sm:py-20">
      
      {/* Background Glow - tailwind based */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-accent blur-[120px] opacity-20" />
        <div className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-secondary blur-[120px] opacity-[0.08]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(var(--color-secondary)_1px,transparent_1px),linear-gradient(90deg,var(--color-secondary)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div> */}

      <div className="section-inner relative">
        {/* Badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            {content.badge}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="mt-6 text-center"
        >
          <h2 className="text-5xl font-semibold leading-none tracking-tight text-alt sm:text-6xl md:text-[4.2rem]">
            {content.heading}
          </h2>
          <p className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
            <span className="text-secondary">{content.sub1} </span>
            <span className="text-accent">{content.accent} </span>
            <span className="text-secondary">{content.sub2}</span>
          </p>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-accent" />
        </motion.div>

        {/* Main Glass Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="relative mt-10 overflow-hidden rounded-[28px] border border-secondary/10 p-[1px]"
        >
          {/* Top Gradient Line */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
          
          <div className="rounded-[27px] bg-main/80 p-7 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(0,0,0,0.06)] sm:p-9 md:p-11 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            {/* Quote Icon */}
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-accent/15 bg-accent/10 text-accent">
              <span className="font-serif text-xl">“</span>
            </div>

            <p className="mt-5 text-center text-[15px] leading-[1.9] text-secondary sm:text-[16.5px]">
              {content.description}
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-center gap-3 rounded-2xl border border-secondary/10 bg-secondary/5 px-4 py-3.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-none text-alt">{f.title}</p>
                    <p className="mt-1 text-xs text-secondary">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-medium uppercase tracking-widest text-secondary/60"
        >
          <span>15+ Years Experience</span>
          <span className="text-accent">•</span>
          <span>10000+ Vehicles Shipped</span>
          <span className="text-accent">•</span>
          <span>100% Transparency</span>
        </motion.div>
      </div>
    </section>
  );
}