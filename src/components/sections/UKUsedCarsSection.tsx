"use client";

import { motion, type Variants } from "framer-motion";
import {
  Search,
  Gavel,
  ClipboardCheck,
  Ship,
  ArrowUpRight,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const paragraphs = [
  "Windsor Auto Group is a Japanese used car supplier helping UK dealers and importers source vehicles from Japan's established automotive market. Our sourcing options cover everything from available stock to specific auction requirements, giving professional buyers greater flexibility when building their inventory.",
  "Tell us your preferred make, model, year, mileage, grade or budget and our team can help identify suitable vehicles. From sourcing and purchase coordination to Japan-side export preparation and shipping, we provide a straightforward route for businesses looking to import Japanese cars to the UK.",
];

const processSteps = [
  {
    title: "Stock & Auction Search",
    description: "Available inventory or targeted auction bids",
    icon: Search,
  },
  {
    title: "Spec Matching",
    description: "Make, model, year, mileage, grade & budget",
    icon: ClipboardCheck,
  },
  {
    title: "Purchase Coordination",
    description: "Bidding, buying and paperwork handled",
    icon: Gavel,
  },
  {
    title: "Export & UK Shipping",
    description: "Japan-side prep through to UK delivery",
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

export function UKUsedCarsSection() {
  return (
    <section id="japanese-used-cars-uk" className="section">
      <div className="section-inner">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column – text */}
          <div className="lg:col-span-5">
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
            >
              For UK Dealers & Importers
            </motion.p>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="text-[1.65rem] leading-[1.15] sm:text-3xl lg:text-4xl"
            >
              Japanese Used Cars UK
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
                Tell us what you need
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </motion.div>
          </div>

          {/* Right column – process cards + image mosaic */}
          <div className="lg:col-span-7">
            {/* Process steps */}
            <div className="grid gap-3 sm:grid-cols-2">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    custom={3 + i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="rounded-2xl border p-5"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                      backgroundColor:
                        "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                    }}
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)]">
                      <Icon
                        className="h-4 w-4 text-accent"
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-alt">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-secondary">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Image strip – random Japanese car placeholders */}
            <motion.div
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="mt-4 grid grid-cols-3 gap-3"
            >
              {[
                "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=280&fit=crop&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=280&fit=crop&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=280&fit=crop&q=80",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-secondary) 8%, transparent)",
                  }}
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