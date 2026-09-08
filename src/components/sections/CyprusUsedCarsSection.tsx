"use client";

import { motion, type Variants } from "framer-motion";
import {
  Search,
  Car,
  FileText,
  Ship,
  ArrowUpRight,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const paragraphs = [
  "Windsor Auto Group is a Japanese used car supplier helping Cyprus dealers and importers access vehicles from Japan's established automotive market. Our sourcing service covers available stock as well as specific vehicle requests, allowing professional buyers to search beyond the cars already available locally.",
  "From economical hybrids and compact hatchbacks to SUVs and premium vehicles, we help match Japanese vehicles with your requirements. Tell us your preferred model, year, mileage, grade or budget and our team can assist with sourcing, purchase coordination, export preparation and shipping for your Japanese car import to Cyprus.",
];

const features = [
  {
    title: "Stock & Custom Search",
    description: "Available inventory or targeted vehicle requests",
    icon: Search,
  },
  {
    title: "Wide Model Range",
    description: "Hybrids, hatchbacks, SUVs and premium cars",
    icon: Car,
  },
  {
    title: "Purchase Coordination",
    description: "Bidding, buying and Japan-side paperwork",
    icon: FileText,
  },
  {
    title: "Export & Cyprus Shipping",
    description: "Full preparation through to delivery",
    icon: Ship,
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

export function CyprusUsedCarsSection() {
  return (
    <section id="japanese-used-cars-cyprus" className="section">
      <div className="section-inner">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left – text content */}
          <div className="lg:col-span-6">
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
            >
              For Cyprus Dealers & Importers
            </motion.p>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="text-[1.65rem] leading-[1.15] sm:text-3xl lg:text-4xl"
            >
              Japanese Used Cars Cyprus
            </motion.h2>

            <div className="mt-5 space-y-4">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  custom={2 + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                  className="text-base leading-relaxed text-secondary sm:text-lg"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-8"
            >
              <a
                href="#request-vehicle"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80"
              >
                Share your requirements
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </motion.div>
          </div>

          {/* Right – feature list with image accent */}
          <div className="lg:col-span-6">
            <div className="space-y-3">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    custom={3 + i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="flex items-start gap-4 rounded-2xl border p-4 sm:p-5"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                      backgroundColor:
                        "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                    }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)]">
                      <Icon
                        className="h-4.5 w-4.5 text-accent"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-alt sm:text-base">
                        {feature.title}
                      </h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-secondary">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Subtle image strip */}
            <motion.div
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="mt-4 grid grid-cols-3 gap-2.5"
            >
              {[
                "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=260&fit=crop&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=260&fit=crop&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=260&fit=crop&q=80",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <img
                    src={src}
                    alt="Japanese used car"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}