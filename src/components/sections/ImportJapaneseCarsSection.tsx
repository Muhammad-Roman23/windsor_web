
"use client";

import { motion, type Variants } from "framer-motion";
import {
  Search,
  FileCheck,
  Ship,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type StepIcon =
  | "search"
  | "file-check"
  | "ship"
  | "clipboard-list";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: StepIcon;
};

type ImportJapaneseCarsSectionProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  steps: ProcessStep[];
  ctaLabel: string;
  ctaHref: string;
};

// ---------------------------------------------------------------------------
// Icon mapping
// ---------------------------------------------------------------------------

const iconMap = {
  search: Search,
  "file-check": FileCheck,
  ship: Ship,
  "clipboard-list": ClipboardList,
};

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ImportJapaneseCarsSection({
  eyebrow,
  heading,
  intro,
  steps,
  ctaLabel,
  ctaHref,
}: ImportJapaneseCarsSectionProps) {
  return (
    <section id="import-japanese-cars-uk" className="section">
      <div className="section-inner">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-[1.65rem] leading-[1.15] sm:text-3xl lg:text-4xl"
          >
            {heading}
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-secondary sm:text-lg"
          >
            {intro}
          </motion.p>
        </div>

        {/* Process timeline */}
        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Vertical line (desktop) */}
          <div
            className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-px md:block"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-accent), color-mix(in srgb, var(--color-secondary) 20%, transparent))",
            }}
          />

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon];

              return (
                <motion.div
                  key={step.number}
                  custom={3 + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  className="relative flex gap-5 md:gap-8"
                >
                  {/* Number + icon circle */}
                  <div
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 bg-[var(--color-background,white)]"
                    style={{
                      borderColor: "var(--color-accent)",
                    }}
                  >
                    <Icon
                      className="h-5 w-5 text-accent"
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className="flex-1 rounded-2xl border p-5 sm:p-6"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                      backgroundColor:
                        "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                    }}
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-wider text-accent">
                        {step.number}
                      </span>

                      <h3 className="text-base font-semibold text-alt sm:text-lg">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-secondary sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Soft CTA */}
        <motion.div
          custom={3 + steps.length}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mt-12 flex justify-center"
        >
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium text-alt transition-colors hover:bg-[color-mix(in_srgb,var(--color-secondary)_6%,transparent)]"
            style={{
              borderColor:
                "color-mix(in srgb, var(--color-secondary) 20%, transparent)",
            }}
          >
            {ctaLabel}

            <ArrowRight
              className="h-4 w-4 text-accent"
              strokeWidth={2}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


