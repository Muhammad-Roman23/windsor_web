"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1 },
  }),
};

export function FinalCta() {
  return (
    <section id="final-cta" className="section relative overflow-hidden">
      <div className="section-inner relative mx-auto text-center">
        {/* Ambient accent glow — single, restrained, sits behind the copy */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        />

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

        <motion.h1
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="text-3xl leading-tight sm:text-4xl md:text-5xl"
        >
          Let&apos;s find your next car.
        </motion.h1>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mt-8 flex justify-center"
        >
            <a 
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 will-change-transform hover:scale-[1.03] sm:text-base">
            <span>Start Your Auction Bid Today</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2}
            />

            {/* Sheen sweep on hover */}
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}