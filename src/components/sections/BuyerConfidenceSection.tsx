"use client";

import { motion, type Variants } from "framer-motion";
import {
  FileSearch,
  SlidersHorizontal,
  MessagesSquare,
  PackageCheck,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const features = [
  {
    title: "Vehicle Information",
    description:
      "Review the available details of a vehicle before moving forward with a purchase.",
    icon: FileSearch,
  },
  {
    title: "Flexible Sourcing",
    description:
      "Choose from available stock or request a specific model, specification or vehicle type.",
    icon: SlidersHorizontal,
  },
  {
    title: "Direct Communication",
    description:
      "Get clear communication throughout the sourcing and purchasing process.",
    icon: MessagesSquare,
  },
  {
    title: "Export Coordination",
    description:
      "Japan-side export steps can be coordinated to help prepare your vehicle for international shipment.",
    icon: PackageCheck,
  },
];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function BuyerConfidenceSection() {
  return (
    <section id="buyer-confidence" className="section">
      <div className="section-inner">
        {/* Header */}
        <div className="mx-auto max-w-xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            How We Work
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-[1.7rem] leading-[1.15] sm:text-3xl lg:text-4xl"
          >
            Built Around Buyer Confidence
          </motion.h2>
        </div>

        {/* Feature grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={2 + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="rounded-2xl border p-7 sm:p-8"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_14%,transparent)]">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold text-alt sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}