"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Content - SAME AS SCREENSHOT
// ---------------------------------------------------------------------------

const coreValues = [
  {
    title: "Quality Assurance:",
    desc: "Each vehicle goes through a thorough inspection process to ensure it meets the highest industry standards, guaranteeing reliability and performance.",
    align: "left",
  },
  {
    title: "Customer Satisfaction:",
    desc: "We prioritize your needs by offering personalized services and dedicated support at every stage of the export process, ensuring a smooth experience.",
    align: "left",
  },
  {
    title: "Global Reach:",
    desc: "With an extensive network, we deliver top-quality vehicles to customers worldwide, ensuring fast and efficient shipping to locations across the globe.",
    align: "left",
  },
  {
    title: "Transparent Process:",
    desc: "We provide clear, detailed information about each vehicle and the entire export process, ensuring you\'re always informed and confident in your purchase.",
    align: "left",
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

function ValueBlock({ title, desc, index }: { title: string; desc: string; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={index}
      className="group"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-secondary/15">
          <span className="h-[8px] w-[8px] rounded-full bg-accent" />
        </span>
        <h3 className="text-[18px] font-medium tracking-tight text-alt sm:text-[19px]">
          {title}
        </h3>
      </div>
      <p className="mt-3 pl-[30px] text-[14px] leading-6 text-secondary sm:text-[14.5px] sm:leading-7">
        {desc}
      </p>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function OurCoreValuesSection() {
  return (
    <section id="core-values" className="section relative overflow-hidden py-16 sm:py-20">
      {/* Bg Glow - Consistent with Welcome / Journey */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[140px] opacity-[0.07]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(var(--color-secondary)_1px,transparent_1px),linear-gradient(90deg,var(--color-secondary)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="section-inner">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold leading-none tracking-tight sm:text-5xl">
            <span className="text-alt">Our </span>
            <span className="text-accent">Core</span>
            <br />
            <span className="text-alt">Values</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-secondary sm:text-[14.5px]">
            At Nobuko Japan, our values are the cornerstone of our operations.
            <br className="hidden sm:block" /> We are dedicated to providing:
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </motion.div>

        {/* Main Grid */}
        <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          
          {/* Left Values */}
          <div className="order-2 flex flex-col gap-10 lg:order-1 lg:gap-20">
            <ValueBlock title={coreValues[0].title} desc={coreValues[0].desc} index={1} />
            <ValueBlock title={coreValues[1].title} desc={coreValues[1].desc} index={2} />
          </div>

          {/* Center Car Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="order-1 relative flex justify-center lg:order-2"
          >
            {/* Glow behind car */}
            <div className="absolute inset-0 -z-10 mx-auto h-[90%] w-[80%] rounded-full bg-accent/15 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop"
              alt="Red Sports Car Top View"
              className="h-[340px] w-auto object-contain drop-shadow-2xl sm:h-[420px] lg:h-[520px] lg:w-full"
              style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.3))" }}
            />
            {/* Replace src with your red Ferrari top view PNG for exact look */}
          </motion.div>

          {/* Right Values */}
          <div className="order-3 flex flex-col gap-10 lg:gap-20">
            <ValueBlock title={coreValues[2].title} desc={coreValues[2].desc} index={3} />
            <ValueBlock title={coreValues[3].title} desc={coreValues[3].desc} index={4} />
          </div>
        </div>
      </div>
    </section>
  );
}