
"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Gauge, Calendar, Star } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type StockCar = {
  image: string;
  title: string;
  meta: string;
};

type PickBestVehiclesSectionProps = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  stockCars: StockCar[];
  stockBadgeText: string;
  ctaLabel: string;
  ctaHref: string;
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

export function PickBestVehiclesSection({
  eyebrow,
  heading,
  paragraphs,
  stockCars,
  stockBadgeText,
  ctaLabel,
  ctaHref,
}: PickBestVehiclesSectionProps) {
  return (
    <section id="pick-best-japanese-vehicles" className="section">
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

        {/* Sample stock cards */}
        <motion.div
          custom={2 + paragraphs.length}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stockCars.map((car, i) => (
            <motion.article
              key={car.title}
              custom={2 + paragraphs.length + i * 0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl border transition-shadow hover:shadow-md"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--color-secondary) 2%, transparent)",
              }}
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
                  <Star className="h-3 w-3 fill-current" />
                  {stockBadgeText}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold text-alt">
                  {car.title}
                </h3>

                <p className="mt-1 flex items-center gap-1.5 text-sm text-secondary">
                  <Calendar
                    className="h-3.5 w-3.5"
                    strokeWidth={1.75}
                  />
                  {car.meta}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={3 + paragraphs.length}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mt-10 flex justify-center"
        >
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {ctaLabel}

            <ArrowRight
              className="h-4 w-4"
              strokeWidth={2}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


