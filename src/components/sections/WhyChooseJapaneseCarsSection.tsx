"use client";

import { motion, type Variants } from "framer-motion";
import {
  Car,
  Leaf,
  Users,
  Zap,
  Mountain,
  Gauge,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const paragraphs = [
  "Japan has a mature automotive industry and is home to globally recognised manufacturers including Toyota, Nissan, Honda, Mazda, Subaru and Lexus. Japanese vehicles cover a broad range of categories, from efficient hybrids and compact hatchbacks to SUVs, MPVs and performance-oriented models.",
  "For UK dealers and importers, sourcing from Japan can also provide access to different specifications and vehicles that may not be readily available through standard domestic stock.",
];

const brands = [
  "Toyota",
  "Nissan",
  "Honda",
  "Mazda",
  "Subaru",
  "Lexus",
];

const categories = [
  { label: "Efficient Hybrids", icon: Leaf },
  { label: "Compact Hatchbacks", icon: Car },
  { label: "SUVs & Crossovers", icon: Mountain },
  { label: "MPVs & Family", icon: Users },
  { label: "Performance Models", icon: Gauge },
  { label: "Electric & e-Power", icon: Zap },
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

export function WhyChooseJapaneseCarsSection() {
  return (
    <section id="why-japanese-used-cars" className="section">
      <div className="section-inner">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Trusted Global Brands
          </motion.p>

          {/* H2 */}
          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-[1.65rem] leading-[1.15] sm:text-3xl lg:text-4xl"
          >
            Why UK Buyers Choose Japanese Used Cars
          </motion.h2>

          {/* Body */}
          <div className="mt-5 space-y-4">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                custom={2 + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="text-base leading-relaxed text-secondary sm:text-lg"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Brand pills */}
        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-2.5"
        >
          {brands.map((brand) => (
            <span
              key={brand}
              className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium text-alt"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
              }}
            >
              {brand}
            </span>
          ))}
        </motion.div>

        {/* Category cards */}
        <motion.div
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map(({ label, icon: Icon }, i) => (
            <motion.div
              key={label}
              custom={5 + i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="flex items-center gap-3 rounded-2xl border px-4 py-3.5"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
              }}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)]">
                <Icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
              </div>
              <span className="text-sm font-medium text-alt">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}