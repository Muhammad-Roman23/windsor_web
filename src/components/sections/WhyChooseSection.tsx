"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

type Reason = {
  title: string;
  body: (string | { emphasis: string })[];
};

const reasons: Reason[] = [
  {
    title: "Direct Japanese Vehicle Sourcing",
    body: ["Access to Japanese domestic-market stock and auction opportunities."],
  },
  {
    title: "Auction Sheet Transparency",
    body: [
      "Available vehicle documentation helps buyers understand condition, mileage and inspection information before purchase.",
    ],
  },
  {
    title: "International Supply",
    body: [
      "We supply vehicles to the UK, Ireland, Cyprus, USA and other worldwide destinations.",
    ],
  },
  {
    title: "Dealer-Focused Service",
    body: [
      "We support dealers and importers looking for Japanese stock cars suitable for their local markets.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ReasonBody({ body }: { body: Reason["body"] }) {
  return (
    <p className="mt-1.5 text-sm leading-relaxed text-secondary sm:text-base">
      {body.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i} className="font-semibold text-accent">
            {part.emphasis}
          </span>
        )
      )}
    </p>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function WhyChooseSection() {
  const lineColor = "color-mix(in srgb, var(--color-secondary) 18%, transparent)";

  return (
    <section id="why-windsor-autos" className="section">
      <div className="section-inner">
        <div className="mx-auto max-w-3xl">
          {/* --------------------------------------------------------- */}
          {/* Two-tone heading                                          */}
          {/* --------------------------------------------------------- */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-center text-3xl leading-tight sm:text-4xl md:text-[2.75rem]"
          >
            {/* <span className="text-accent">Why</span>{" "} */}
            <span className="text-alt">Why Choose Windsor Autos</span>
          </motion.h2>

          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-secondary sm:text-lg"
          >
            Windsor Autos is a Japanese vehicle supplier focused on
            international sourcing and export. We help customers identify
            suitable stock, review available vehicle information and arrange
            the export process.
          </motion.p>

          {/* --------------------------------------------------------- */}
          {/* Vertical timeline                                         */}
          {/* --------------------------------------------------------- */}
          <div
            className="relative mt-10 space-y-9 border-l pl-8"
            style={{ borderColor: lineColor }}
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="relative"
              >
                <span
                  className="absolute -left-[38px] top-1.5 h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <h3 className="text-base font-semibold leading-snug text-alt sm:text-lg">
                  {reason.title}.
                </h3>
                <ReasonBody body={reason.body} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}