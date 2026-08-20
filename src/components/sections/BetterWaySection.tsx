"use client";

import { motion, type Variants } from "framer-motion";
import { MessageCircle, Target, LifeBuoy } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const focusAreas = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "You always know what's happening with your vehicle and what comes next.",
  },
  {
    icon: Target,
    title: "Suitable Vehicle Selection",
    description:
      "Sourcing matched to your model, specification and market — not just what's on the lot.",
  },
  {
    icon: LifeBuoy,
    title: "Consistent Support",
    description:
      "The same level of guidance from the first search through to export.",
  },
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

const focusIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export  function BetterWaySection() {
  return (
    <section id="approach" className="section">
      <div className="section-inner">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Our Approach
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            A Better Way to Source Vehicles From Japan
          </motion.h2>

          {/* Typographic "not X, but Y" contrast statement — the section's
              signature element, since the source content itself is framed
              as a direct contrast (professional sourcing vs. simply
              listing cars online). */}
          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-6 text-xl leading-relaxed sm:text-2xl md:text-[1.65rem]"
          >
            <span className="text-alt">Windsor Auto Group is built around</span>{" "}
            <span className="text-accent">professional vehicle sourcing</span>
            <span className="text-secondary">, rather than simply</span>{" "}
            <span className="text-secondary line-through decoration-2 opacity-60">
              listing cars online
            </span>
            <span className="text-secondary">.</span>
          </motion.p>
        </div>

        {/* Supporting description */}
        <motion.p
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-secondary sm:text-lg"
        >
          We help buyers search across available Japanese stock and auction
          opportunities, understand the information available before
          purchasing and coordinate the important steps required to move a
          vehicle from Japan to its destination.
        </motion.p>

        {/* Focus areas */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={focusIn}
                className="flex flex-col items-center rounded-2xl border px-6 py-8 text-center"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                }}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                  }}
                >
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-lg sm:text-xl">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary sm:text-base">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border-l-4 px-6 py-5 text-center sm:text-left"
          style={{
            borderColor: "var(--color-accent)",
            backgroundColor:
              "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
          }}
        >
          <p className="text-base leading-relaxed text-secondary sm:text-lg">
            For dealers and importers, this creates a{" "}
            <span className="font-medium text-alt">
              more reliable way to build stock from Japan
            </span>{" "}
            without depending on a limited selection of vehicles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}