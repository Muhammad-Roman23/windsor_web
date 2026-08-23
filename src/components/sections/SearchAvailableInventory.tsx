"use client";

import { motion, type Variants } from "framer-motion";
import { Search, ArrowUpRight, ArrowRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Popular models as equal-weight quick-search cards.
// ---------------------------------------------------------------------------
const popularModels = [
  "Toyota Prius",
  "Nissan Serena",
  "Honda Vezel",
  "Mazda CX-5",
  "Subaru Forester",
];

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

const searchBarVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.35, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.5 + custom * 0.07 },
  }),
};

export function SearchAvailableInventory() {
  return (
    <section id="search-inventory" className="section">
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
            Available Now
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            Search Available Japanese Auction Cars
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            Ready to find your next vehicle? Browse our available inventory
            to explore Japanese auction cars for sale from Japan. Our
            selection can include Toyota, Nissan, Honda, Mazda, Subaru,
            Suzuki and Lexus, alongside selected European vehicles available
            through Japanese auctions.
          </motion.p>
        </div>

        {/* Prominent search bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={searchBarVariants}
          className="mx-auto mt-10 flex w-full max-w-2xl items-center gap-3 rounded-full border-2 bg-main px-5 py-4 shadow-sm sm:mt-12 sm:gap-4 sm:px-6 sm:py-5"
          style={{ borderColor: "var(--color-accent)" }}
        >
          <Search size={20} strokeWidth={2} className="shrink-0 text-accent" />
          <span className="flex-1 truncate text-sm text-secondary sm:text-base">
            Search by make, model or keyword…
          </span>
          <a
            href="#inventory"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.06em] transition-opacity hover:opacity-90 sm:px-5 sm:py-3 sm:text-sm"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-main)",
            }}
          >
            Search
          </a>
        </motion.div>

        {/* Quick-search model grid */}
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {popularModels.map((model, i) => (
            <motion.a
              key={model}
              href="#inventory"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              className="group flex flex-col justify-between gap-6 rounded-2xl border p-4 transition-colors hover:border-accent sm:p-5"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
              }}
            >
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="text-secondary transition-colors group-hover:text-accent"
              />
              <span className="text-sm font-medium leading-snug sm:text-base">
                {model}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          custom={0}
          className="mt-10 flex flex-col items-center gap-3 text-center sm:mt-12"
        >
          <p className="max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
            Whether you are searching for one of these models or another,
            Japanese auctions can provide a broad range of options.
          </p>
          <a
            href="#inventory"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-accent transition-opacity hover:opacity-80"
          >
            Browse full inventory
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}