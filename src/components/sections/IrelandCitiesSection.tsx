
"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type City = {
  number: string;
  title: string;
  description: string;
};

type IrelandCitiesSectionProps = {
  eyebrow: string;
  heading: string;
  description: string;
  cities: City[];
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

export function IrelandCitiesSection({
  eyebrow,
  heading,
  description,
  cities,
}: IrelandCitiesSectionProps) {
  return (
    <section id="used-cars-ireland" className="section">
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
            {heading}
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

        {/* Timeline with center pole */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Center vertical pole */}
          <div
            className="absolute left-4 top-0 bottom-0 w-[2px] md:left-1/2 md:-translate-x-1/2"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
            }}
          />

          <div className="space-y-12 md:space-y-16">
            {cities.map((city, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={city.title}
                  custom={index + 3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  className={`relative flex md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot on the pole */}
                  <div
                    className="absolute left-4 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      boxShadow:
                        "0 0 0 4px color-mix(in srgb, var(--color-accent) 18%, transparent)",
                    }}
                  />

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden w-1/2 md:block" />

                  {/* Content card */}
                  <div
                    className={`ml-10 w-full md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-10 lg:pr-14" : "md:pl-10 lg:pl-14"
                    }`}
                  >
                    <div
                      className="rounded-2xl border p-6 sm:p-7"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                        backgroundColor:
                          "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                      }}
                    >
                      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-sm font-semibold tracking-wider text-accent">
                          {city.number}
                        </span>

                        <span
                          className="hidden h-1 w-1 rounded-full sm:block"
                          style={{
                            backgroundColor:
                              "color-mix(in srgb, var(--color-secondary) 40%, transparent)",
                          }}
                        />

                        <div className="flex items-center gap-2">
                          <MapPin
                            className="h-4 w-4 text-accent"
                            strokeWidth={2}
                          />

                          <h3 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                            {city.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-base leading-relaxed text-secondary">
                        {city.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
