"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const pillars = [
  {
    title: "Accurate Information",
    description: "Clear vehicle details before any purchase decision.",
  },
  {
    title: "Dependable Communication",
    description: "You always know where things stand.",
  },
  {
    title: "An Understandable Process",
    description: "Sourcing built for professional buyers, not guesswork.",
  },
];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pillarIn: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.55 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export  function MissionSection() {
  return (
    <section
      id="mission"
      className="section"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-secondary) 3%, var(--color-main))",
      }}
    >
      <div className="section-inner">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Our Mission
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            Japanese Vehicle Sourcing for Global Automotive Businesses
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-7 text-lg leading-relaxed text-alt sm:text-xl md:text-[1.4rem]"
          >
            Windsor Auto Group is a Japanese used car supplier and exporter
            serving international dealers, importers and automotive
            businesses.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            Our role extends beyond finding vehicles. We support buyers
            through vehicle sourcing, purchase coordination, export
            preparation and international shipping from Japan.
          </motion.p>

          <motion.p
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            We believe long-term vehicle sourcing depends on accurate
            information, dependable communication and a buying process that
            professional customers can understand.
          </motion.p>
        </div>

        {/* Value pillars */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={pillarIn}
              className={`px-6 py-6 text-center sm:py-0 ${
                i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""
              }`}
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
              }}
            >
              <h3 className="text-base font-medium text-alt sm:text-lg">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary sm:text-base">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <span
            className="mx-auto block h-px w-12"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <p className="mt-6 text-xl font-medium leading-snug text-accent sm:text-2xl md:text-[1.75rem]">
            That approach forms the foundation of every vehicle we help
            source and export.
          </p>
        </motion.div>
      </div>
    </section>
  );
}