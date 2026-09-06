"use client";

import { motion, type Variants } from "framer-motion";
import { CarFront, ShieldCheck, Fuel, Globe2 } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const paragraphs = [
  "Finding the right Japanese cars for sale in Ireland can give you access to dependable vehicles, efficient hybrid technology and a wider choice of specifications than you may find in local stock. Windsor Autos is a Japanese used car supplier helping customers and automotive businesses source vehicles directly from Japan.",
  "We work with Japanese vehicle auctions and export networks to help you find cars that match your preferred model, budget, mileage and specification. From compact city cars to family SUVs and hybrid vehicles, our goal is to make buying Japanese used cars in Ireland simple, transparent and straightforward from vehicle selection through export.",
];

const highlights = [
  { label: "Verified Auction Stock", icon: ShieldCheck },
  { label: "Hybrid & Efficient Models", icon: Fuel },
  { label: "Direct Japan Export", icon: Globe2 },
];

const bodyTypes = [
  "City Cars",
  "Hatchbacks",
  "SUVs",
  "Hybrids",
  "Family Cars",
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

export function IrelandCarsHeroSection() {
  return (
    <section id="japan-cars-ireland" className="section">
      <div className="section-inner">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Japanese Used Cars • Ireland
          </motion.p>

          {/* H1 */}
          <motion.h1
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-5xl xl:text-[3.25rem]"
          >
            Japanese Cars for Sale in Ireland
          </motion.h1>

          {/* Body copy */}
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

          {/* Highlight pills */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {highlights.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-alt"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                }}
              >
                <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
                {label}
              </span>
            ))}
          </motion.div>

          {/* Body type chips */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-6 flex flex-wrap justify-center gap-2"
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
                <CarFront
                  className="h-3.5 w-3.5 text-accent"
                  strokeWidth={1.75}
                />
                {type}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}