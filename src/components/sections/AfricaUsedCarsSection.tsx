"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const paragraphs = [
  "Japanese used cars have become a major part of the African vehicle market, with demand spanning East, West and Southern Africa. Toyota, Nissan, Honda and Mazda are particularly well established, while models such as the Corolla, Hilux, Vitz, Note and RAV4 are commonly sourced from Japan.",
  "Windsor Auto Group helps African dealers and importers source vehicles according to their market, budget and vehicle requirements. Whether you need a Toyota Probox for commercial use, a Toyota Vitz for urban driving or a Land Cruiser Prado for a higher-value SUV segment, we can help you source suitable vehicles from Japan.",
];

const brands = ["Toyota", "Nissan", "Honda", "Mazda"];
const models = [
  "Corolla",
  "Hilux",
  "Vitz",
  "Probox",
  "Note",
  "RAV4",
  "Land Cruiser Prado",
];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function AfricaUsedCarsSection() {
  return (
    <section id="japanese-used-cars-africa" className="section">
      <div className="section-inner">
        <div className="relative">
          {/* Accent line */}
          <div
            className="absolute left-0 top-0 hidden h-full w-1 rounded-full md:block"
            style={{ backgroundColor: "var(--color-accent)" }}
          />

          <div className="md:pl-10">
            {/* Eyebrow + H2 */}
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
            >
              African Vehicle Market
            </motion.p>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="max-w-xl text-[1.7rem] leading-[1.15] sm:text-3xl lg:text-4xl"
            >
              Japanese Used Cars Africa
            </motion.h2>

            {/* Two-column text */}
            <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-10">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  custom={2 + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                  className="text-base leading-relaxed text-secondary"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Brands row */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-10"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                Established Brands
              </p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-md px-3.5 py-1.5 text-sm font-medium text-alt"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                    }}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Models row */}
            <motion.div
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-6"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                Commonly Sourced Models
              </p>
              <div className="flex flex-wrap gap-2">
                {models.map((model) => (
                  <span
                    key={model}
                    className="rounded-full border px-3.5 py-1.5 text-sm text-alt"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                    }}
                  >
                    {model}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}