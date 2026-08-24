"use client";

import { motion, type Variants } from "framer-motion";
import { CarFront } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const paragraphs = [
  "Windsor Autos supplies verified Japanese used cars to dealers, importers and buyers across the UK, Ireland, Cyprus, USA and worldwide. Our stock includes automatic hatchbacks, SUVs, sedans, hybrids, MPVs, sports cars and 7-seater used cars, sourced from Japan's established domestic vehicle market.",
  "We provide available vehicle information, auction documentation and export support so buyers can review mileage, condition and specification before purchasing. Whether you are searching for a used SUV for sale, an economical hybrid, a family MPV or automatic stock for your dealership, Windsor Autos can help you source suitable vehicles from Japan.",
];

const bodyTypes = [
  "Hatchbacks",
  "SUVs",
  "Sedans",
  "Hybrids",
  "MPVs",
  "Sports Cars",
  "7-Seaters",
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

export function InventoryHeroSection() {
  return (
    <section id="inventory" className="section">
      <div className="section-inner">
        {/* ------------------------------------------------------------- */}
        {/* Text column — full width now that the image column is gone   */}
        {/* ------------------------------------------------------------- */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Ready Stock For Global Buyers
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-5xl xl:text-[3.25rem]"
          >
            Japanese Used Cars for Sale, Export Ready Stock for Global Buyers
          </motion.h1>

          <div className="mx-auto mt-5 max-w-2xl space-y-4">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                custom={2 + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeUp}
                className="text-base leading-relaxed text-secondary sm:text-lg"
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Body type chips */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-7 flex flex-wrap justify-center gap-2"
          >
            {bodyTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm text-alt"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                }}
              >
                <CarFront className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
                {type}
              </span>
            ))}
          </motion.div>

          {/* Highlights strip */}
        </div>
      </div>
    </section>
  );
}