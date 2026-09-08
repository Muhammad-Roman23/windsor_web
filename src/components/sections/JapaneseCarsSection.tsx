
"use client";

import { motion, type Variants } from "framer-motion";
import { Settings, Fuel, Gavel, Wallet } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type FeatureIcon = "settings" | "fuel" | "gavel" | "wallet";

type Feature = {
  number: string;
  title: string;
  description: string;
  icon: FeatureIcon;
};

type JapaneseCarsSectionProps = {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  headingBeforeAccent: string;
  headingAfterAccent: string;
  description: string;
  features: Feature[];
};

// ---------------------------------------------------------------------------
// Icon Map
// ---------------------------------------------------------------------------

const iconMap = {
  settings: Settings,
  fuel: Fuel,
  gavel: Gavel,
  wallet: Wallet,
};

// ---------------------------------------------------------------------------
// Motion
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function JapaneseCarsSection({
  eyebrow,
  heading,
  headingAccent,
  headingBeforeAccent,
  headingAfterAccent,
  description,
  features,
}: JapaneseCarsSectionProps) {
  return (
    <section id="japanese-used-cars" className="section">
      <div className="section-inner">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
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
            className="text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.75rem]"
          >
            {headingBeforeAccent}{" "}
            <span className="text-accent">{headingAccent}</span>{" "}
            {headingAfterAccent}
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            {description}
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Soft dotted connectors (desktop) */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            aria-hidden="true"
          >
            <path
              d="M 48% 28% Q 50% 50% 52% 72%"
              fill="none"
              stroke="color-mix(in srgb, var(--color-secondary) 18%, transparent)"
              strokeWidth="1.5"
              strokeDasharray="5 7"
            />
            <path
              d="M 28% 48% Q 50% 50% 72% 52%"
              fill="none"
              stroke="color-mix(in srgb, var(--color-secondary) 18%, transparent)"
              strokeWidth="1.5"
              strokeDasharray="5 7"
            />
          </svg>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];

              return (
                <motion.article
                  key={feature.title}
                  custom={index + 3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className="group relative rounded-2xl border p-6 sm:p-7 transition-all duration-300"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                    backgroundColor:
                      "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                  }}
                >
                  {/* soft hover glow using accent */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--color-accent) 10%, transparent), transparent 60%)",
                    }}
                  />

                  <div className="relative">
                    {/* Icon badge */}
                    <div
                      className="mb-5 flex h-11 w-11 items-center justify-center rounded-full"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--color-secondary) 6%, transparent)",
                        boxShadow:
                          "0 0 0 1px color-mix(in srgb, var(--color-secondary) 12%, transparent), 0 0 20px color-mix(in srgb, var(--color-accent) 15%, transparent)",
                      }}
                    >
                      <Icon
                        className="h-5 w-5 text-accent"
                        strokeWidth={1.75}
                      />
                    </div>

                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-sm font-semibold tracking-wider text-accent">
                        {feature.number}
                      </span>

                      <span
                        className="hidden h-1 w-1 rounded-full sm:block"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--color-secondary) 40%, transparent)",
                        }}
                      />

                      <h3 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-base leading-relaxed text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}