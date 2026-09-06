"use client";

import { motion, type Variants } from "framer-motion";
import { Settings, Fuel, Gavel, Wallet } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const features = [
  {
    number: "01",
    title: "Proven Japanese Engineering",
    description:
      "Japanese manufacturers have built global reputations around dependable vehicle engineering and long-term usability. Toyota, Honda, Nissan, Mazda and Subaru all offer extensive model ranges covering hatchbacks, hybrids, crossovers and SUVs. Windsor Autos considers factors such as mileage, age, condition and available vehicle information when helping customers source a Japanese used car for Ireland.",
    icon: Settings,
  },
  {
    number: "02",
    title: "Efficient Hybrid and Petrol Models",
    description:
      "Fuel economy is an important consideration for Irish motorists, particularly commuters covering regular daily distances. Japanese manufacturers offer a broad range of hybrid and efficient petrol vehicles, from compact hatchbacks to larger SUVs. Toyota's hybrid range is especially prominent in Ireland, with hybrid vehicles representing 22.48% of new-car registrations in 2025. Windsor Autos gives buyers access to Japanese hybrid and petrol stock across different vehicle categories.",
    icon: Fuel,
  },
  {
    number: "03",
    title: "Wider Choice From Japanese Auctions",
    description:
      "Buying through the Japanese export market can open access to a larger range of vehicles than the stock available at one local dealership. Buyers can explore different model years, grades, colours, mileage ranges and specifications. Japanese auction documentation can also provide useful information about an individual vehicle before purchase. Windsor Autos helps customers navigate this sourcing process and identify vehicles that match their requirements.",
    icon: Gavel,
  },
  {
    number: "04",
    title: "Options for Different Budgets",
    description:
      "Japanese used cars are available across a broad range of vehicle types and price points. Whether you are looking for a compact commuter, a hybrid crossover or a larger family SUV, the Japanese market provides numerous options. Windsor Autos works with customers to narrow down suitable vehicles according to their budget, preferred model, age, mileage and specification rather than taking a one-size-fits-all approach.",
    icon: Wallet,
  },
];

// ---------------------------------------------------------------------------
// Motion
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function JapaneseCarsSection() {
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
            Japanese Imports
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.75rem]"
          >
            Why{" "}
            <span className="text-accent">Irish</span> Drivers Choose Japanese
            Used Cars
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            Japan has a well-established automotive industry with globally
            recognised manufacturers including Toyota, Nissan, Honda, Mazda and
            Subaru. Japanese vehicles are known for practical engineering,
            efficient powertrains and a broad selection of hybrid and petrol
            models. For Irish buyers, sourcing directly from Japan can also
            provide access to different model years, grades and specifications.
            Windsor Autos focuses on helping customers identify vehicles that
            suit their individual requirements rather than simply offering one
            type of car.
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
              const Icon = feature.icon;

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