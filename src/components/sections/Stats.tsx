"use client";

import { motion, type Variants } from "framer-motion";
import { LayoutGrid, Gavel, FileSearch, ArrowRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const options = [
  {
    icon: LayoutGrid,
    title: "Browse Available Stock",
    description:
      "Browse available Japanese used cars for sale and pick from vehicles that are ready now.",
    cta: "Browse inventory",
  },
  {
    icon: Gavel,
    title: "Search Car Auctions",
    description:
      "Search for a specific vehicle through Japanese car auctions when you need an exact model.",
    cta: "Search auctions",
  },
  {
    icon: FileSearch,
    title: "Send Your Requirements",
    description:
      "Send us your requirements if the vehicle you need isn't currently listed and we'll source it.",
    cta: "Submit requirements",
  },
];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export  function SourcingOptionsSection() {
  return (
    <section id="sourcing" className="section">
      <div className="section-inner">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Sourcing Options
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            More Ways to Source Cars From Japan
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-secondary sm:text-lg"
          >
            Every buyer has different inventory requirements, which is why
            Windsor Auto Group gives you access to more than one sourcing
            option.
          </motion.p>
        </div>

        {/* Option cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          {options.map((option, i) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardIn}
                whileHover={{ y: -6 }}
                className="group relative flex h-full flex-col rounded-3xl border p-7 transition-colors duration-300"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                }}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-accent) 15%, transparent)",
                  }}
                >
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                </span>

                <h3 className="mt-5 text-xl sm:text-[1.35rem]">
                  {option.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary sm:text-base">
                  {option.description}
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-alt transition-colors duration-300 group-hover:text-accent"
                >
                  {option.cta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </a>

                {/* subtle accent edge on hover */}
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 rounded-b-3xl transition-transform duration-300 "
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border-l-4 px-6 py-5 text-center sm:text-left"
          style={{
            borderColor: "var(--color-accent)",
            backgroundColor:
              "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
          }}
        >
          <p className="text-base leading-relaxed text-secondary sm:text-lg">
            Our sourcing approach allows dealers and importers to look beyond
            limited stock and find vehicles that better match the demand in
            their own market.
          </p>
        </motion.div>
      </div>
    </section>
  );
}