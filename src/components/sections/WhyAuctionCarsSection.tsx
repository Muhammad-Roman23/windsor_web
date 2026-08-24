"use client";

import { motion, type Variants } from "framer-motion";
import { Warehouse, FileSearch, Sparkles } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const points = [
  { icon: Warehouse, label: "A large used vehicle market" },
  { icon: FileSearch, label: "Detailed vehicle information" },
  { icon: Sparkles, label: "Models & specs rarely found elsewhere" },
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

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function WhyAuctionCarsSection() {
  return (
    <section id="why-auction-cars" className="section">
      <div className="section-inner">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            The Auction Advantage
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]"
          >
            Why Buy Auction Cars from Japan?
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            Japanese auctions provide access to a large used vehicle market,
            detailed vehicle information and many models and specifications
            that may not be readily available in other markets.
          </motion.p>

          {/* --------------------------------------------------------- */}
          {/* Supporting points                                          */}
          {/* --------------------------------------------------------- */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-9 flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center"
          >
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.label}
                  className="flex items-center justify-center gap-2.5 rounded-full border px-4 py-2.5"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
                    backgroundColor:
                      "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                  }}
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-alt">
                    {point.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}