"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const points = [
  {
    label: "01",
    text: "Windsor Auto Group is a Japanese used car supplier and exporter, helping African dealers and importers connect with Japan's used vehicle market.",
  },
  {
    label: "02",
    text: "We focus on practical sourcing, clear vehicle information and straightforward communication from vehicle selection through the Japan-side export process.",
  },
  {
    label: "03",
    text: "Whether you are building dealership stock or sourcing vehicles for a specific customer requirement, our team can help you search the Japanese market with your business needs in mind.",
  },
];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function SupplyPartnerSection() {
  return (
    <section id="japanese-car-supply-partner" className="section">
      <div className="section-inner">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left – heading */}
          <div className="lg:col-span-4">
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
            >
              Supply Partner
            </motion.p>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="text-[1.7rem] leading-[1.15] sm:text-3xl lg:text-[2.1rem]"
            >
              Your Japanese Used Car Supply Partner
            </motion.h2>
          </div>

          {/* Right – numbered points */}
          <div className="space-y-8 lg:col-span-8">
            {points.map((point, i) => (
              <motion.div
                key={point.label}
                custom={2 + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                className="flex gap-5 border-t pt-6"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                }}
              >
                <span className="shrink-0 text-sm font-semibold tracking-wider text-accent">
                  {point.label}
                </span>
                <p className="text-base leading-relaxed text-secondary sm:text-lg">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}