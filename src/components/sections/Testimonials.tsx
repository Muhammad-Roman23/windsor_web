"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const buyerTypes = ["Dealers", "Importers", "Automotive Traders"];

const scenarios = [
  "Replenishing dealership stock",
  "Purchasing for confirmed customer orders",
  "Sourcing multiple units at once",
];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export  function DealersImportersSection() {
  return (
    <section id="dealers-importers" className="section">
      <div className="section-inner">
        {/* Heading */}
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
        >
          Built For You
        </motion.p>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="max-w-3xl text-3xl leading-tight sm:text-4xl md:text-5xl"
        >
          Built Around the Needs of Dealers &amp; Importers
        </motion.h2>

        {/* Lede statement */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mt-8 max-w-3xl border-l-4 pl-6"
          style={{ borderColor: "var(--color-accent)" }}
        >
          <p className="text-xl leading-relaxed text-alt sm:text-2xl md:text-[1.75rem]">
            For professional vehicle buyers, successful sourcing is not only
            about finding a car. It is about finding{" "}
            <span className="text-accent">
              the right vehicle, at the right specification, for the right
              market
            </span>
            .
          </p>
        </motion.div>

        {/* Two-column detail */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Who we support */}
          <div>
            <motion.h3
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeIn}
              className="text-lg sm:text-xl"
            >
              Who We Support
            </motion.h3>

            <motion.p
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeIn}
              className="mt-3 text-base leading-relaxed text-secondary sm:text-lg"
            >
              Windsor Auto Group supports dealers, importers and automotive
              traders who regularly source used cars from Japan for resale
              and customer demand.
            </motion.p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {buyerTypes.map((type, i) => (
                <motion.span
                  key={type}
                  custom={2 + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={fadeIn}
                  className="rounded-full border px-4 py-1.5 text-sm font-medium text-alt"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                    backgroundColor:
                      "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                  }}
                >
                  {type}
                </motion.span>
              ))}
            </div>
          </div>

          {/* How we help */}
          <div>
            <motion.h3
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeIn}
              className="text-lg sm:text-xl"
            >
              Common Buying Scenarios
            </motion.h3>

            <motion.p
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeIn}
              className="mt-3 text-base leading-relaxed text-secondary sm:text-lg"
            >
              Whether you are replenishing dealership stock, purchasing
              vehicles for confirmed customer orders or sourcing multiple
              units, we help make the buying process from Japan more
              structured and dependable.
            </motion.p>

            <ul className="mt-5 space-y-3">
              {scenarios.map((item, i) => (
                <motion.li
                  key={item}
                  custom={2 + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={fadeIn}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    strokeWidth={1.75}
                  />
                  <span className="text-base leading-relaxed text-secondary sm:text-lg">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}