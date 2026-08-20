"use client";

import { motion, type Variants } from "framer-motion";
import { SlidersHorizontal, Search, Ship, FileCheck2 } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
// A genuine four-stage sequence (browse/share -> search & review -> purchase
// & export -> shipping docs & import), so a connected step process is the
// right structure here.
// ---------------------------------------------------------------------------

const steps = [
  {
    icon: SlidersHorizontal,
    number: "01",
    title: "Browse or Share Requirements",
    description:
      "Start by browsing available vehicles or sharing the model and specification you need.",
  },
  {
    icon: Search,
    number: "02",
    title: "We Search & Share Vehicle Info",
    description:
      "Our team searches suitable stock or auction opportunities in Japan and shares the relevant vehicle information for your review.",
  },
  {
    icon: Ship,
    number: "03",
    title: "Purchase & Export Coordination",
    description:
      "Once a vehicle is selected and purchased, we coordinate the Japan-side export preparation, documentation and shipping process.",
  },
  {
    icon: FileCheck2,
    number: "04",
    title: "Shipping Documents & Import",
    description:
      "The required shipping documents are provided so you can continue the destination-side import and clearance process in your country.",
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

const stepIn: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.2 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function JapanToMarketProcess() {
  return (
    <section id="process" className="section">
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
            Our Process
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            From Japan to Your Market
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-secondary sm:text-lg"
          >
            Buying cars from Japan should be clear from the beginning.
          </motion.p>
        </div>

        {/* Step process */}
        <div className="relative mt-16">
          {/* Horizontal connecting line — desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px origin-left md:block"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
            }}
          />

          {/* Vertical connecting line — mobile */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-7 top-7 h-[calc(100%-3.5rem)] w-px origin-top md:hidden"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
            }}
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={stepIn}
                  className="relative flex items-start gap-5 md:flex-col md:items-center md:text-center md:gap-0"
                >
                  <span
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--color-accent) 35%, transparent)",
                      backgroundColor: "var(--color-main)",
                    }}
                  >
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                  </span>

                  <div className="pt-2 md:pt-5">
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                      Step {step.number}
                    </span>
                    <h3 className="mt-1.5 text-lg sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-secondary sm:text-base md:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-2xl text-center text-base leading-relaxed text-secondary sm:text-lg"
        >
          A straightforward sourcing process means you always{" "}
          <span className="text-accent">
            understand what stage your vehicle is at and what comes next
          </span>
          .
        </motion.p>
      </div>
    </section>
  );
}