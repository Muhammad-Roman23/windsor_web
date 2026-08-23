"use client";

import { motion, type Variants } from "framer-motion";
import {
  Search,
  FileText,
  Wallet,
  Gavel,
  CreditCard,
  FileCheck,
  Ship,
  Globe2,
  ArrowRight,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Bidding process — genuinely sequential, so numbered steps are appropriate.
// ---------------------------------------------------------------------------
interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Search,
    title: "Find a suitable vehicle",
    description:
      "Search listings from auction houses for the make, model and spec you need.",
  },
  {
    icon: FileText,
    title: "Check the auction information",
    description:
      "Review the listing and auction sheet for condition, grade and inspector notes.",
  },
  {
    icon: Wallet,
    title: "Set a maximum bid",
    description:
      "Decide the highest price you're willing to pay before bidding opens.",
  },
  {
    icon: Gavel,
    title: "Place your bid & win",
    description:
      "Bid within the auction window. Once successful, the vehicle is secured.",
  },
];

// ---------------------------------------------------------------------------
// Post-auction flow — payment through to export.
// ---------------------------------------------------------------------------
interface FlowItem {
  icon: React.ElementType;
  label: string;
}

const flow: FlowItem[] = [
  { icon: CreditCard, label: "Payment" },
  { icon: FileCheck, label: "Documentation" },
  { icon: Ship, label: "Shipping" },
  { icon: Globe2, label: "Import" },
];

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

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 + custom * 0.12 },
  }),
};

const flowVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.15 + custom * 0.08 },
  }),
};

export function HowAuctionsWork() {
  return (
    <section id="how-it-works" className="section">
      <div className="section-inner">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            The Process
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            How Japanese Car Auctions Work
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            Vehicles are inspected and listed through auction houses before
            being offered for bidding. The listing normally includes
            important vehicle details, while the auction sheet provides
            additional information about condition.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            Major auction networks such as USS and TAA provide access to
            vehicles from manufacturers including Toyota, Nissan, Honda and
            Mazda.
          </motion.p>
        </div>

        {/* Step timeline */}
        <div className="relative mx-auto mt-14 max-w-3xl sm:mt-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <motion.div
                key={step.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={stepVariants}
                className="relative flex gap-5 pb-10 last:pb-0 sm:gap-6"
              >
                {/* Connector line */}
                {!isLast ? (
                  <span
                    className="absolute left-6 top-14 h-[calc(100%-3.25rem)] w-px sm:left-7"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                    }}
                  />
                ) : null}

                <span
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-semibold sm:h-14 sm:w-14"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                    backgroundColor: "var(--color-main)",
                    color: "var(--color-accent)",
                  }}
                >
                  <Icon size={20} strokeWidth={2} />
                </span>

                <div className="pt-1.5 sm:pt-2.5">
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-accent sm:text-sm">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-secondary sm:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* From auction search to export */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          custom={0}
          className="mt-16 rounded-3xl border p-8 sm:mt-20 sm:p-10 lg:p-12"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--color-accent) 6%, transparent)",
          }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-accent">
              Beyond The Bid
            </p>
            <h3 className="text-2xl leading-tight sm:text-3xl">
              From Auction Search to Export
            </h3>
            <p className="mt-4 text-base leading-relaxed text-secondary sm:text-lg">
              Winning the auction is only one part of the process.
              International buyers also need to consider payment, export
              documentation, shipping and destination-country import
              requirements.
            </p>
            <p className="mt-4 text-base leading-relaxed text-secondary sm:text-lg">
              Windsor Auto Group helps simplify this process by supporting
              customers from vehicle sourcing through to international
              export.
            </p>
          </div>

          {/* Post-auction flow */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-2 gap-y-4 sm:mt-10 sm:gap-x-3">
            {flow.map((item, i) => {
              const Icon = item.icon;
              const isLast = i === flow.length - 1;
              return (
                <div key={item.label} className="flex items-center gap-2 sm:gap-3">
                  <motion.div
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={flowVariants}
                    className="flex flex-col items-center gap-2 rounded-2xl border px-5 py-4 sm:px-6"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                      backgroundColor: "var(--color-main)",
                    }}
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                        color: "var(--color-accent)",
                      }}
                    >
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.1em] text-secondary sm:text-sm">
                      {item.label}
                    </span>
                  </motion.div>

                  {!isLast ? (
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="hidden shrink-0 text-accent sm:block"
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}