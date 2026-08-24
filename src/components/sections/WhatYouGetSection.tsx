"use client";

import { motion, type Variants } from "framer-motion";
import { ScrollText, LayoutGrid, PlaneTakeoff } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const brands = [
  "Toyota",
  "Nissan",
  "Honda",
  "Mazda",
  "Subaru",
  "Mitsubishi",
];

const features = [
  {
    icon: ScrollText,
    title: "Auction Documentation",
    description:
      "Available vehicles can include the original Japanese auction sheet showing inspection grade, mileage, condition and inspection notes. We provide the available vehicle documentation so buyers can review important details before purchasing.",
  },
  {
    icon: LayoutGrid,
    title: "Wide Japanese Vehicle Selection",
    description:
      "Stock can include Toyota used cars, Nissan used cars, Honda used cars, Mazda used cars, Subaru used cars and Mitsubishi used cars across multiple body styles and price ranges.",
    tags: brands,
  },
  {
    icon: PlaneTakeoff,
    title: "International Export Support",
    description:
      "Windsor Autos supports the vehicle export and shipping process for customers importing Japanese vehicles to the UK, Ireland, Cyprus, USA and other international destinations.",
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

const cardIn: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function WhatYouGetSection() {
  return (
    <section id="what-you-get" className="section">
      <div className="section-inner">
        {/* --------------------------------------------------------------- */}
        {/* Centered heading block — deliberately different rhythm from the */}
        {/* left/right split used elsewhere on the page.                    */}
        {/* --------------------------------------------------------------- */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            What You Get
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]"
          >
            What You Get with Windsor Autos Stock Cars
          </motion.h2>
        </div>

        {/* --------------------------------------------------------------- */}
        {/* Card grid                                                       */}
        {/* --------------------------------------------------------------- */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardIn}
                className="flex flex-col rounded-3xl border p-7 transition-colors"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                }}
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                  }}
                >
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                </span>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-alt sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                  {feature.description}
                </p>

                {/* {feature.tags && (
                  <div className="mt-5 flex flex-wrap gap-2 border-t pt-5"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--color-secondary) 12%, transparent)",
                    }}
                  >
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 text-xs font-medium text-alt"
                        style={{
                          borderColor:
                            "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
                          backgroundColor:
                            "color-mix(in srgb, var(--color-main) 92%, transparent)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )} */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}