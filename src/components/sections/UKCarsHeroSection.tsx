
"use client";

import { motion, type Variants } from "framer-motion";
import {
  CarFront,
  ShieldCheck,
  Gavel,
  Ship,
  MapPin,
  ArrowRight,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const paragraphs = [
  "Quality Japanese used cars sourced from Japan for UK dealers, importers and automotive businesses. Windsor Auto Group helps professional buyers access vehicles through Japanese stock and auctions, with options to source specific makes, models, years, mileages and specifications.",
  "Whether you are looking for ready-to-export stock or a particular vehicle for your dealership, our team supports the sourcing, purchase coordination and export process from Japan. Explore our available vehicles or tell us what you are looking for and let Windsor help you source the right Japanese cars from Japan for the UK market.",
];

const usps = [
  { label: "Japanese Stock", icon: ShieldCheck },
  { label: "Auction Sourcing", icon: Gavel },
  { label: "Export Support", icon: Ship },
  { label: "UK Shipping", icon: MapPin },
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

export function UKCarsHeroSection() {
  return (
    <section id="japan-cars-uk" className="section">
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
            Japanese Used Cars • UK
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
            Japanese Cars for Sale UK
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

          {/* USP pills */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {usps.map(({ label, icon: Icon }) => (
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

          {/* CTAs */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#browse-japanese-cars"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Browse Japanese Cars
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#request-vehicle"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium text-alt transition-colors hover:bg-[color-mix(in_srgb,var(--color-secondary)_6%,transparent)]"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 20%, transparent)",
              }}
            >
              Request a Vehicle
              <CarFront className="h-4 w-4 text-accent" strokeWidth={1.75} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}