"use client";

import { motion, type Variants } from "framer-motion";
import { Globe2, ShieldCheck, Warehouse } from "lucide-react";

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

const cards = [
  {
    icon: Globe2,
    title: "Sourced From Japan's Auctions",
    description:
      "Windsor Auto Group helps customers source auction cars from Japan and supports the export process according to the destination market's requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Know Your Landed Cost",
    description:
      "Import duties, taxes, registration rules and vehicle eligibility vary by country, so buyers should always calculate the complete landed cost before bidding.",
  },
  {
    icon: Warehouse,
    title: "Built for Dealers & Importers",
    description:
      "For dealers and importers, Japanese auctions can provide a reliable sourcing channel for used stock and access to models that may be difficult to find locally.",
  },
];

export function AuctionCarsExport() {
  return (
    <section id="auction-cars" className="section">
      <div className="section-inner mx-auto text-center">
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
        >
          Global Sourcing
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="text-3xl leading-tight sm:text-4xl md:text-5xl"
        >
          Auction Cars Available for Export
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
        >
          Japanese auction cars for export provide international buyers and dealerships with access to Japan's extensive used vehicle market.
        </motion.p>

        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={i + 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeUp}
                className="group relative rounded-2xl border border-border/60 bg-card/40 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-card/70"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/15">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <h3 className="text-lg font-semibold leading-snug sm:text-xl">
                  {card.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-secondary sm:text-base">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}