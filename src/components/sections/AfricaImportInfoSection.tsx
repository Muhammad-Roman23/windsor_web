"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, ShieldAlert, Globe2 } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const countries = ["Kenya", "Tanzania", "Uganda", "Zambia"];

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

export function AfricaImportInfoSection() {
  return (
    <section id="japanese-car-import-africa" className="section">
      <div className="section-inner">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-12 sm:px-10 sm:py-14 lg:px-14"
          style={{
            background:
              "linear-gradient(160deg, color-mix(in srgb, var(--color-accent) 8%, transparent) 0%, color-mix(in srgb, var(--color-secondary) 5%, transparent) 100%)",
          }}
        >
          {/* Decorative circle */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-3xl">
            {/* Header */}
            <div className="flex items-start gap-4">
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--color-accent)_18%,transparent)]"
              >
                <ShieldAlert className="h-5 w-5 text-accent" strokeWidth={1.75} />
              </motion.div>

              <div>
                <motion.p
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-accent"
                >
                  Before You Import
                </motion.p>

                <motion.h2
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  className="text-[1.6rem] leading-[1.15] sm:text-3xl lg:text-[2.1rem]"
                >
                  What to Know Before a Japanese Car Import to Africa
                </motion.h2>
              </div>
            </div>

            {/* Main text */}
            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-secondary sm:text-lg"
            >
              Import requirements are not the same across Africa. Vehicle age
              limits, pre-shipment inspections, duties, taxes, documentation and
              registration requirements can vary considerably between countries.
            </motion.p>

            {/* Countries row */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-7"
            >
              <p className="mb-3 flex items-center gap-2 text-sm font-medium text-alt">
                <Globe2 className="h-4 w-4 text-accent" strokeWidth={1.75} />
                Requirements differ by country — for example:
              </p>

              <div className="flex flex-wrap gap-2.5">
                {countries.map((country) => (
                  <span
                    key={country}
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-alt"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                    }}
                  >
                    <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
                    {country}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Advice */}
            <motion.p
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="mt-7 text-base leading-relaxed text-secondary sm:text-lg"
            >
              Before purchasing, buyers should confirm the current requirements
              for their destination country, including vehicle eligibility,
              inspection requirements, applicable taxes and port procedures.
            </motion.p>

            {/* Bottom note bar - fixed contrast */}
            <motion.div
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-8 rounded-2xl border px-5 py-4 sm:px-6"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--color-secondary) 6%, transparent)",
              }}
            >
              <p className="text-sm leading-relaxed text-secondary sm:text-base">
                <span className="font-semibold text-alt">Windsor Auto Group</span>{" "}
                can support the Japan-side sourcing and export process, while
                destination-side customs, taxation and registration should be
                confirmed according to local regulations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}