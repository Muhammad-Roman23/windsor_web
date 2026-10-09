"use client";

import { motion, type Variants } from "framer-motion";
import { ShieldCheck, HeartHandshake, Globe2, Eye, Sparkles } from "lucide-react";

// ---------------------------------------------------------------------------
// Content - SAME AS SCREENSHOT
// ---------------------------------------------------------------------------

const coreValues = [
  {
    title: "Quality Assurance:",
    desc: "Each vehicle goes through a thorough inspection process to ensure it meets the highest industry standards, guaranteeing reliability and performance.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Satisfaction:",
    desc: "We prioritize your needs by offering personalized services and dedicated support at every stage of the export process, ensuring a smooth experience.",
    icon: HeartHandshake,
  },
  {
    title: "Global Reach:",
    desc: "With an extensive network, we deliver top-quality vehicles to customers worldwide, ensuring fast and efficient shipping to locations across the globe.",
    icon: Globe2,
  },
  {
    title: "Transparent Process:",
    desc: "We provide clear, detailed information about each vehicle and the entire export process, ensuring you\'re always informed and confident in your purchase.",
    icon: Eye,
  },
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

function ValueBlock({ title, desc, icon: Icon, index }: { title: string; desc: string; icon: any; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={index}
      className="group relative overflow-hidden rounded-[28px] border border-secondary/10 p-[1px] h-full"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
      <div className="h-full rounded-[27px] bg-main/80 p-6 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:p-7 flex flex-col">
        
        {/* Top Row - Icon + Number */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 border border-accent/15 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
            <Icon className="h-6 w-6" />
          </div>
          <span className="text-3xl font-bold tracking-tighter text-secondary/10 group-hover:text-accent/10 transition-colors">
            0{index}
          </span>
        </div>

        <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-alt sm:text-[18px]">
          {title}
        </h3>
        <p className="mt-3 text-[14px] leading-6 text-secondary sm:text-[14.5px] sm:leading-7">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Section - NEW UI + RESPONSIVE
// ---------------------------------------------------------------------------

export function OurCoreValuesSection() {
  return (
    <section id="core-values" className="section relative overflow-hidden py-16 sm:py-20">
      {/* Bg Glow - SAME AS REFERENCE */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-accent blur-[120px] opacity-20" />
        <div className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-secondary blur-[120px] opacity-[0.08]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(var(--color-secondary)_1px,transparent_1px),linear-gradient(90deg,var(--color-secondary)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div> */}

      <div className="section-inner relative">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Why Choose Windsor Autos
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-none tracking-tight sm:text-5xl">
            <span className="text-alt">Our </span>
            <span className="text-accent">Core</span>
            <span className="text-alt"> Values</span>
          </h2>
          <p className="mx-auto mt-4 text-sm leading-6 text-secondary sm:text-[14.5px]">
            At Windsor Autos, our values are the cornerstone of our operations.
            We are dedicated to providing:
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </motion.div>

        {/* New Layout - 2x2 Grid Cards - Fully Responsive */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:mt-12">
          {coreValues.map((val, i) => (
            <ValueBlock
              key={val.title}
              title={val.title}
              desc={val.desc}
              icon={val.icon}
              index={i + 1}
            />
          ))}
        </div>

        {/* Bottom Trust Line */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-medium uppercase tracking-widest text-secondary/60"
        >
          <span>Certified Quality</span>
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span>Customer First</span>
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span>Worldwide Delivery</span>
        </motion.div>
      </div>
    </section>
  );
}