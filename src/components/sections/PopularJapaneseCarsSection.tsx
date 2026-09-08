"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Motion
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function PopularJapaneseCarsSection({ eyebrow ,cars, paragraphs,heading,badgeText }: { eyebrow?: string; cars: any[]; paragraphs?: string; heading?: string; badgeText?: string }) {
  return (
    <section id="popular-japanese-cars" className="section">
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
        </div>

      <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mb-3 text-sm mt-4 text-center"
          >
            {paragraphs}
          </motion.p>


        {/* Cars list – alternating layout */}
        <div className="mt-14 space-y-16 lg:space-y-20">
          {cars.map((car, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={car.title}
                custom={index + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 ${
                  isReversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="group relative overflow-hidden rounded-2xl">
                  <div
                    className="absolute inset-0 z-10 rounded-2xl"
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px color-mix(in srgb, var(--color-secondary) 12%, transparent)",
                    }}
                  />
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[color-mix(in_srgb,var(--color-secondary)_6%,transparent)]">
                    <Image
                      src={car.image}
                      alt={car.alt}
                      width={900}
                      height={675}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl lg:text-[1.65rem]">
                    {car.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-secondary sm:text-[1.05rem]">
                    {car.description}
                  </p>

                  <div className="mt-6">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium text-alt transition-colors hover:text-accent cursor-pointer"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                        backgroundColor:
                          "color-mix(in srgb, var(--color-secondary) 5%, transparent)",
                      }}
                    >
                      {badgeText}
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}