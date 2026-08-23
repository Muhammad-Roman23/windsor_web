"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Brands regularly available through Japanese auctions.
// ---------------------------------------------------------------------------
const brands = ["Toyota", "Nissan", "Honda", "Mazda", "Subaru", "Suzuki", "Lexus"];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1 },
  }),
};

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.25 + custom * 0.05 },
  }),
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.35, ease: "easeOut" },
  },
};

export function BuyJapaneseAuctionCars() {
  return (
    <section id="buy-from-japan" className="section">
      <div className="section-inner">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Buy From Japan
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            Buy Cars From Japanese Auctions
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            Buying from Japanese auctions gives international buyers access
            to a much wider selection than many local used-car markets.
            Vehicles from Toyota, Nissan, Honda, Mazda, Subaru, Suzuki and
            Lexus are regularly available.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            Windsor Auto Group helps customers find suitable Japanese auction
            vehicles based on their preferred model, year, mileage,
            specifications and budget.
          </motion.p>
        </div>

        {/* Brand strip */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5 sm:mt-12 sm:gap-3">
          {brands.map((brand, i) => (
            <motion.span
              key={brand}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={chipVariants}
              className="rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-secondary sm:px-5 sm:text-sm"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
              }}
            >
              {brand}
            </motion.span>
          ))}
        </div>

        {/* Why buy — highlighted panel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={panelVariants}
          className="mt-14 rounded-3xl border p-8 sm:mt-16 sm:p-10 lg:p-12"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--color-accent) 6%, transparent)",
          }}
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-center lg:gap-12">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-accent">
                The Value
              </p>
              <h3 className="text-2xl leading-tight sm:text-3xl">
                Why Buy Auction Cars From Japan?
              </h3>
            </div>

            <p className="text-base leading-relaxed text-secondary sm:text-lg">
              Japanese auctions offer access to a large selection of used
              vehicles, including low-mileage cars, hybrids, SUVs, MPVs and
              performance models. This makes them a valuable sourcing option
              for both private buyers and international dealers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}