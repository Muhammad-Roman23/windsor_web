"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Sample sheet data + damage markers for the mock auction-sheet diagram.
// ---------------------------------------------------------------------------
const fields = [
  { label: "Mileage", value: "42,300 km" },
  { label: "Grade", value: "4.5" },
  { label: "Exterior", value: "B" },
  { label: "Interior", value: "B" },
];

const legend = [
  { code: "A", meaning: "Scratch" },
  { code: "U", meaning: "Dent" },
  { code: "W", meaning: "Repaired" },
  { code: "S", meaning: "Rust" },
];

const markers = [
  { x: 78, y: 62, code: "A1" },
  { x: 150, y: 40, code: "W1" },
  { x: 222, y: 62, code: "U2" },
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

const sheetVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.15, ease: "easeOut" },
  },
};

export function AuctionSheetsExplainer() {
  return (
    <section id="auction-sheets" className="section">
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
            Reading The Sheet
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            Understanding Japanese Auction Sheets
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            A Japanese auction sheet is an important document to review
            before buying an auction vehicle. It can provide information
            about mileage, condition, equipment, repairs and visible damage.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            The Japan auction sheet may also include an inspection diagram
            showing the location of scratches, dents and other
            imperfections. Understanding the sheet helps buyers look beyond
            photographs and make a more informed bidding decision.
          </motion.p>
        </div>

        {/* What it shows: copy + mock auction sheet */}
        <div className="mt-14 grid items-center gap-10 sm:mt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            custom={0}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent">
              What&apos;s On The Sheet
            </p>
            <h3 className="text-2xl leading-tight sm:text-3xl">
              What Does a Japanese Auction Sheet Show?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-secondary sm:text-lg">
              Depending on the auction, the sheet may include the
              vehicle&apos;s mileage, overall auction grade, interior and
              exterior condition, repair information, visible damage and
              equipment.
            </p>
            <p className="mt-4 text-base leading-relaxed text-secondary sm:text-lg">
              Because Japanese auction terminology can be difficult for
              international buyers to understand, reviewing the sheet
              carefully is an important part of the purchasing process.
            </p>
          </motion.div>

          {/* Mock auction sheet card — signature visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={sheetVariants}
            className="mx-auto w-full max-w-md rounded-3xl border p-6 sm:p-8"
            style={{
              borderColor:
                "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
              backgroundColor:
                "color-mix(in srgb, var(--color-accent) 5%, transparent)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  Sample
                </p>
                <p className="text-sm font-semibold sm:text-base">
                  Auction Sheet
                </p>
              </div>
              <div
                className="flex h-14 w-14 flex-col items-center justify-center rounded-2xl border"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                  backgroundColor: "var(--color-main)",
                }}
              >
                <span className="text-lg font-semibold leading-none text-accent">
                  4.5
                </span>
                <span className="mt-1 text-[9px] uppercase tracking-[0.1em] text-secondary">
                  Grade
                </span>
              </div>
            </div>

            {/* Field grid */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {fields.map((field) => (
                <div
                  key={field.label}
                  className="rounded-xl border px-3 py-2.5"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                    backgroundColor: "var(--color-main)",
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[0.1em] text-secondary">
                    {field.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold sm:text-base">
                    {field.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Inspection diagram */}
            <div
              className="relative mt-6 overflow-hidden rounded-xl border"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                backgroundColor: "var(--color-main)",
              }}
            >
              <svg viewBox="0 0 300 140" className="h-auto w-full">
                {/* Car silhouette */}
                <rect
                  x="20"
                  y="70"
                  width="260"
                  height="45"
                  rx="14"
                  fill="none"
                  stroke="var(--color-secondary)"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                />
                <path
                  d="M72 70 L102 34 L198 34 L228 70"
                  fill="none"
                  stroke="var(--color-secondary)"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <circle
                  cx="82"
                  cy="118"
                  r="17"
                  fill="var(--color-main)"
                  stroke="var(--color-secondary)"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                />
                <circle
                  cx="218"
                  cy="118"
                  r="17"
                  fill="var(--color-main)"
                  stroke="var(--color-secondary)"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                />

                {/* Damage markers */}
                {markers.map((marker) => (
                  <g key={marker.code}>
                    <circle
                      cx={marker.x}
                      cy={marker.y}
                      r="11"
                      fill="var(--color-accent)"
                    />
                    <text
                      x={marker.x}
                      y={marker.y + 4}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="600"
                      fill="var(--color-main)"
                    >
                      {marker.code}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-2">
              {legend.map((item) => (
                <span
                  key={item.code}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] text-secondary"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                  }}
                >
                  <span className="font-semibold text-accent">{item.code}</span>
                  {item.meaning}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}