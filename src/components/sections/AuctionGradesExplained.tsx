"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// ---------------------------------------------------------------------------
// Grade scale — highest to lowest. Accent intensity fades with grade so the
// visual itself communicates "better condition" without relying on color
// semantics (red/green) that would clash with the theme.
// ---------------------------------------------------------------------------
const grades = [
  { grade: "S", label: "Like New", intensity: 100 },
  { grade: "6", label: "Almost New", intensity: 85 },
  { grade: "5", label: "Excellent", intensity: 70 },
  { grade: "4.5", label: "Very Good", intensity: 55 },
  { grade: "4", label: "Good", intensity: 42 },
  { grade: "3.5", label: "Average", intensity: 30 },
  { grade: "3", label: "Below Average", intensity: 18 },
  { grade: "R", label: "Repaired", intensity: 8 },
];

// ---------------------------------------------------------------------------
// What to cross-check before bidding.
// ---------------------------------------------------------------------------
const checklist = [
  "Auction sheet",
  "Inspection diagram",
  "Photographs",
  "Mileage",
  "Comments",
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

const gradeVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.25 + custom * 0.05 },
  }),
};

export function AuctionGradesExplained() {
  return (
    <section id="auction-grades" className="section">
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
            Grading System
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            Japanese Car Auction Grades Explained
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            Japanese car auction grades provide an indication of a
            vehicle&apos;s general condition. However, grading systems can
            vary between auction houses, so the grade should not be
            considered on its own.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            A higher grade generally indicates better overall condition,
            while lower grades may indicate greater wear, repairs or other
            issues.
          </motion.p>
        </div>

        {/* Grade scale */}
        <div className="mt-12 sm:mt-14">
          <div className="flex justify-between px-1 text-[11px] uppercase tracking-[0.14em] text-secondary sm:text-xs">
            <span>Better condition</span>
            <span>More wear / repaired</span>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-2 sm:mt-5 sm:grid sm:grid-cols-8 sm:gap-3 sm:overflow-visible">
            {grades.map((item, i) => (
              <motion.div
                key={item.grade}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={gradeVariants}
                className="flex w-24 shrink-0 flex-col items-center gap-1 rounded-2xl border px-3 py-4 text-center sm:w-auto"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                  backgroundColor: `color-mix(in srgb, var(--color-accent) ${item.intensity * 0.14}%, transparent)`,
                }}
              >
                <span
                  className="text-xl font-semibold sm:text-2xl"
                  style={{
                    color: `color-mix(in srgb, var(--color-accent) ${item.intensity}%, var(--color-secondary))`,
                  }}
                >
                  {item.grade}
                </span>
                <span className="text-[10px] leading-tight text-secondary sm:text-[11px]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compare before you bid — callout panel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          custom={0}
          className="mx-auto mt-12 max-w-3xl rounded-3xl border p-8 sm:mt-14 sm:p-10"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--color-accent) 6%, transparent)",
          }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-accent">
            Before You Bid
          </p>
          <h3 className="text-2xl leading-tight sm:text-3xl">
            Compare the Grade, Not Just the Number
          </h3>
          <p className="mt-4 text-base leading-relaxed text-secondary sm:text-lg">
            Buyers should compare the grade with the auction sheet,
            inspection diagram, photographs, mileage and comments before
            bidding. Understanding Japan car auction grading makes it easier
            to compare vehicles and assess their condition.
          </p>

          <ul className="mt-6 flex flex-wrap gap-3">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium text-secondary sm:text-sm"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                }}
              >
                <CheckCircle2 size={15} strokeWidth={2} className="text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}