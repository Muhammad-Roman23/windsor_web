"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const paragraphs = [
  "Windsor Auto Group works with vehicle buyers across international markets, helping dealers and importers source and ship cars from Japan to their destination.",
  "Shipping methods, documentation and import requirements vary by country, so every shipment is handled according to the vehicle, destination and available shipping route.",
  "Whether you are importing a single vehicle or developing a regular supply of dealership inventory, our team can help coordinate the Japan-side export and shipping process.",
];

const supplyModes = ["Single Vehicle Imports", "Regular Dealership Supply"];

// Illustrative destination regions arranged around the Japan hub.
// Swap labels for the specific regions/countries you serve if you'd like
// the diagram to reflect exact markets rather than broad regions.
const regions = [
  { label: "America", x: 70.1, y: 125, anchor: "end" as const },
  { label: "Europe", x: 200, y: 50, anchor: "middle" as const },
  { label: "Middle East", x: 329.9, y: 125, anchor: "start" as const },
  { label: "Southeast Asia", x: 329.9, y: 275, anchor: "start" as const },
  { label: "Oceania", x: 200, y: 350, anchor: "middle" as const },
  { label: "Africa", x: 70.1, y: 275, anchor: "end" as const },
];

const HUB = { x: 200, y: 200 };

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

export  function GlobalReachSection() {
  return (
    <section id="global-reach" className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ------------------------------------------------------------- */}
          {/* Text column                                                   */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-6">
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
            >
              Global Reach
            </motion.p>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="text-3xl leading-tight sm:text-4xl md:text-5xl"
            >
              Supplying Japanese Used Cars Worldwide
            </motion.h2>

            <div className="mt-5 space-y-4">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  custom={2 + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={fadeUp}
                  className="text-base leading-relaxed text-secondary sm:text-lg"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mt-6 flex flex-wrap gap-2.5"
            >
              {supplyModes.map((mode) => (
                <span
                  key={mode}
                  className="rounded-full border px-4 py-1.5 text-sm font-medium text-alt"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                    backgroundColor:
                      "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                  }}
                >
                  {mode}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* Route diagram                                                 */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-md"
            >
              <svg
                viewBox="0 0 400 400"
                className="h-auto w-full"
                role="img"
                aria-label="Diagram showing Japan connected by shipping routes to international regions"
              >
                {/* Routes */}
                {regions.map((region, i) => (
                  <motion.line
                    key={region.label}
                    x1={HUB.x}
                    y1={HUB.y}
                    x2={region.x}
                    y2={region.y}
                    stroke="var(--color-accent)"
                    strokeOpacity={0.35}
                    strokeWidth={1.5}
                    strokeDasharray="5 6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.3 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                ))}

                {/* Destination nodes */}
                {regions.map((region, i) => (
                  <motion.g
                    key={`${region.label}-node`}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r={5}
                      fill="var(--color-main)"
                      stroke="var(--color-accent)"
                      strokeWidth={1.75}
                    />
                    <text
                      x={
                        region.anchor === "middle"
                          ? region.x
                          : region.anchor === "end"
                          ? region.x - 12
                          : region.x + 12
                      }
                      y={region.y + (region.y < HUB.y ? -12 : 22)}
                      textAnchor={region.anchor}
                      className="fill-secondary font-body text-[11px]"
                    >
                      {region.label}
                    </text>
                  </motion.g>
                ))}

                {/* Japan hub */}
                <motion.circle
                  cx={HUB.x}
                  cy={HUB.y}
                  r={30}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeOpacity={0.4}
                  strokeWidth={1.5}
                  animate={{ scale: [1, 1.35, 1], opacity: [0.45, 0, 0.45] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
                />
                <circle
                  cx={HUB.x}
                  cy={HUB.y}
                  r={26}
                  fill="var(--color-accent)"
                  fillOpacity={0.15}
                  stroke="var(--color-accent)"
                  strokeWidth={1.75}
                />
                <text
                  x={HUB.x}
                  y={HUB.y + 5}
                  textAnchor="middle"
                  className="fill-alt font-heading text-sm font-medium"
                >
                  Japan
                </text>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}