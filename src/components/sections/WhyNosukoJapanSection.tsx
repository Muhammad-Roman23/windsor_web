"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const features = [
  {
    id: "01",
    title: "Genuine Japanese Mazda Vehicles",
    desc: "We source quality Mazda vehicles from Japan, carefully selecting models that meet our standards for reliability.",
  },
  {
    id: "02",
    title: "Verified Auction Information",
    desc: "Every vehicle includes auction details and history records, helping customers confidently buy a used Mazda imported from Japan.",
  },
  {
    id: "03",
    title: "Wide Range of Mazda Models",
    desc: "Explore popular Mazda models including Demio, Mazda3, CX-3, Mazda CX-5 used, and MX-5 options.",
  },
  {
    id: "04",
    title: "Reliable Import Support",
    desc: "Our team guides you through importing your chosen Mazda, making the process simple from Japan to UK.",
  },
];

export function WhyNosukoJapanSection() {
  return (
    <section id="why-nosuko-japan" className="section">
      <div className="section-inner">
        
        {/* Header - Same Code Flow */}
        <div className="grid lg:grid-cols-6 gap-6 lg:gap-10 items-start">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="lg:col-span-6"
          >
            <span
              className="inline-flex rounded-full border px-3 py-1 text-[11px] font-bold tracking-widest uppercase"
              style={{
                borderColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)",
                backgroundColor: "color-mix(in srgb, var(--color-secondary) 6%, transparent)",
                color: "var(--color-secondary)",
              }}
            >
              WHY NOSUKO JAPAN
            </span>
            <h2 className="mt-3 text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-semibold tracking-tight text-alt">
              Your Trusted Partner for <br /> <span className="text-accent">Japanese Mazda Imports</span>
            </h2>
          </motion.div>
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="lg:col-span-6 text-sm leading-6 sm:text-[15px] sm:leading-7 text-secondary lg:pt-2 lg:border-l lg:pl-6"
            style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }}
          >
            We help UK buyers import genuine, verified Mazda cars directly from Japan — with transparent auction history and full support from selection to delivery.
          </motion.p>
        </div>

        {/* NEW LAYOUT - Roadmap Left Spine | Zigzag nahi hai */}
        <div className="relative mt-10 lg:mt-14">
          
       

          {/* CARDS - Single Column Roadmap */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, idx) => (
              <motion.div
                key={item.id}
                custom={idx + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[24px] p-6 sm:p-7 lg:p-8"
                style={{
                  border: "1px solid color-mix(in srgb, var(--color-secondary) 12%, transparent)",
                  backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                }}
              >
                {/* Premium Watermark Number */}
                <span
                  className="absolute -top-1 right-5 text-[3.5rem] font-bold leading-none pointer-events-none select-none"
                  style={{ color: "color-mix(in srgb, var(--color-secondary) 7%, transparent)" }}
                >
                  {item.id}
                </span>

                <div className="relative flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold shrink-0"
                    style={{ backgroundColor: "var(--color-accent)", color: "var(--color-bg)" }}
                  >
                    {item.id}
                  </span>
                  <span className="h-px flex-1" style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)" }} />
                </div>

                <h3 className="relative mt-5 text-base font-semibold leading-tight tracking-tight text-alt group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-6 text-secondary">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}