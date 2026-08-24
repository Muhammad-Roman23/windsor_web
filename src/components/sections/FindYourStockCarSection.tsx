"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const ctas = [
  { label: "View Stock Cars", href: "#", variant: "primary" as const },
  { label: "Request a Vehicle", href: "#", variant: "secondary" as const },
  { label: "Get an Export Quote", href: "#", variant: "ghost" as const },
];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function FindYourStockCarSection() {
  return (
    <section id="find-your-car" className="section">
      <div className="section-inner">
        <div
          className="relative overflow-hidden rounded-[2.5rem] border px-6 py-16 text-center sm:px-12 sm:py-20"
          style={{
            borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
            backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
          }}
        >
          {/* Ambient glow — the section's single signature flourish */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              backgroundColor: "color-mix(in srgb, var(--color-accent) 30%, transparent)",
            }}
          />

          <div className="relative mx-auto max-w-2xl">
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
            >
              Ready When You Are
            </motion.p>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]"
            >
              Find Your Next Japanese Stock Car
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mt-5 text-base leading-relaxed text-secondary sm:text-lg"
            >
              Looking for a Japanese used car, automatic SUV, hybrid
              hatchback, 7-seater or performance vehicle?
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mt-3 text-base leading-relaxed text-secondary sm:text-lg"
            >
              Tell Windsor Autos your preferred make, model, year, budget and
              destination, and our team can help you source suitable stock
              from Japan and arrange the export process.
            </motion.p>

            {/* ------------------------------------------------------- */}
            {/* CTA row                                                  */}
            {/* ------------------------------------------------------- */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            >
              {ctas.map((cta) => {
                if (cta.variant === "primary") {
                  return (
                    <a
                      key={cta.label}
                      href={cta.href}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 sm:w-auto"
                      style={{
                        backgroundColor: "var(--color-accent)",
                        color: "var(--color-main)",
                      }}
                    >
                      {cta.label}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        strokeWidth={2}
                      />
                    </a>
                  );
                }

                if (cta.variant === "secondary") {
                  return (
                    <a
                      key={cta.label}
                      href={cta.href}
                      className="inline-flex w-full items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold text-alt transition-colors sm:w-auto"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--color-secondary) 24%, transparent)",
                      }}
                    >
                      {cta.label}
                    </a>
                  );
                }

                return (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className="inline-flex w-full items-center justify-center px-6 py-3 text-sm font-semibold text-accent underline-offset-4 hover:underline sm:w-auto"
                  >
                    {cta.label}
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}