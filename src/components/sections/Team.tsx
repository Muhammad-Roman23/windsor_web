"use client";

import { motion, type Variants } from "framer-motion";
import { Lightbulb } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
// This content genuinely describes a sequence (source → review → coordinate
// purchase), so a numbered process timeline is used deliberately here —
// unlike the earlier sourcing-options section, where three parallel choices
// were shown as equal-weight cards instead.
// ---------------------------------------------------------------------------

const steps = [
  {
    number: "01",
    title: "Source Suitable Vehicles",
    description:
      "We help identify auction vehicles that match your preferred make, model, grade and specification.",
  },
  {
    number: "02",
    title: "Review Vehicle Information",
    description:
      "Available auction sheets and vehicle details are reviewed with you before any commitment is made.",
  },
  {
    number: "03",
    title: "Coordinate the Purchase",
    description:
      "Once the right vehicle is identified, we manage the purchasing process on your behalf.",
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
  hidden: { opacity: 0, x: -20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export  function AuctionAccessSection() {
  return (
    <section id="auctions" className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ------------------------------------------------------------- */}
          {/* Intro column                                                  */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-5">
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
            >
              Auction Sourcing
            </motion.p>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]"
            >
              Access Japanese Car Auctions
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mt-5 text-base leading-relaxed text-secondary sm:text-lg"
            >
              Japan&apos;s vehicle auction network gives buyers access to a
              wide selection of vehicles across different makes, models,
              years, grades and specifications.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed text-secondary sm:text-lg"
            >
              Windsor Auto Group helps international buyers source suitable
              Japanese auction cars, review the available vehicle information
              and coordinate the purchasing process once the right vehicle is
              identified.
            </motion.p>

            {/* Tip callout */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mt-8 flex gap-3 rounded-2xl border p-5"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-accent) 30%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--color-accent) 6%, transparent)",
              }}
            >
              <Lightbulb
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                strokeWidth={1.75}
              />
              <p className="text-sm leading-relaxed text-secondary sm:text-base">
                Auction sourcing is particularly useful when a specific
                vehicle, grade, mileage range or specification isn&apos;t
                available in current stock.
              </p>
            </motion.div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* Process timeline                                              */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Connecting line */}
              {/* <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px origin-top sm:block"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                }}
              /> */}

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={stepIn}
                    className="relative flex gap-5 rounded-2xl border p-6 sm:pl-6"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                      backgroundColor:
                        "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                    }}
                  >
                    <span
                      className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-heading text-sm font-medium text-accent"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--color-accent) 40%, transparent)",
                        backgroundColor: "var(--color-main)",
                      }}
                    >
                      {step.number}
                    </span>
                    <div className="pt-1">
                      <h3 className="text-lg sm:text-xl">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-secondary sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}