"use client";

import { motion, type Variants } from "framer-motion";
import { Gavel } from "lucide-react";

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function ReadyToBuySection() {
  return (
    <section
      id="ready-to-buy"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        backgroundColor: "color-mix(in srgb, var(--color-secondary) 5%, transparent)",
      }}
    >
      {/* Diagonal accent stripe — the section's single signature flourish */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rotate-45 sm:h-96 sm:w-96"
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rotate-45 sm:h-96 sm:w-96"
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-accent) 6%, transparent)",
        }}
      />

      <div className="section-inner relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Ready To Buy From Japan?
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]"
          >
            Let&rsquo;s Find Your Next Car.
          </motion.h2>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-9"
          >
            <a
              href="#"
              className="group inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-main)",
              }}
            >
              <Gavel
                className="h-5 w-5 transition-transform group-hover:rotate-[-8deg]"
                strokeWidth={2}
              />
              Start Your Auction Bid Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}