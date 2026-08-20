"use client";

import { motion, type Variants } from "framer-motion";
import { Camera, FileText, FileCheck2, MessageSquareQuote } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
// Note: the brief's "Recommended Trust Stats UI" (vehicles exported, clients,
// countries supplied, years of experience) was intentionally left out of this
// build, per instruction — those are numeric claims and no verified figures
// were provided to populate them.
// ---------------------------------------------------------------------------

const trustFactors = [
  {
    icon: Camera,
    title: "Real Vehicle Photographs",
    description: "You see the actual vehicle, not a stock image.",
  },
  {
    icon: FileText,
    title: "Relevant Vehicle Information",
    description: "The details that matter before you commit to a purchase.",
  },
  {
    icon: FileCheck2,
    title: "Shipping Documentation",
    description: "A documented export process from Japan to your destination.",
  },
  {
    icon: MessageSquareQuote,
    title: "Genuine Customer Experiences",
    description: "Real accounts of how vehicles are sourced and handled.",
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
  hidden: { opacity: 0, y: 26 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ConfidenceSection() {
  return (
    <section id="confidence" className="section">
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
            Trust &amp; Confidence
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            Confidence at Every Stage
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-5 text-lg font-medium text-alt sm:text-xl"
          >
            International vehicle buying depends on trust.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-secondary sm:text-lg"
          >
            That is why Windsor Auto Group focuses on providing{" "}
            <span className="text-alt">clear vehicle information</span>,{" "}
            <span className="text-alt">transparent communication</span> and{" "}
            <span className="text-alt">documented export processes</span>{" "}
            throughout the buying journey.
          </motion.p>
        </div>

        {/* Trust factor grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustFactors.map((factor, i) => {
            const Icon = factor.icon;
            return (
              <motion.div
                key={factor.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardIn}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col items-start overflow-hidden rounded-2xl border p-6 transition-colors duration-300"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                }}
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                  }}
                >
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base sm:text-lg">{factor.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-secondary">
                  {factor.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-secondary sm:text-lg"
        >
          Together, these give buyers the confidence to{" "}
          <span className="text-accent">
            understand what they are purchasing and how their vehicle is
            being handled
          </span>
          .
        </motion.p>
      </div>
    </section>
  );
}