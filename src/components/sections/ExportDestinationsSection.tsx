"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const destinations = [
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    title: "Import Cars from Japan to the UK",
    body: "The UK is one of Windsor Autos' key markets for Japanese vehicle supply. We support the export and shipping process, while buyers must complete applicable UK customs, tax, vehicle approval and DVLA registration for imported cars requirements.",
    tags: ["Customs & Tax", "Vehicle Approval", "DVLA Registration"],
  },
  {
    flag: "🇮🇪",
    country: "Ireland",
    title: "Japanese Used Car Sales in Ireland",
    body: "Windsor Autos supplies Japanese vehicles to Irish dealers, importers and buyers, including automatic cars, hybrids, SUVs and family vehicles. Importers must meet applicable Irish customs, VAT, VRT and registration requirements.",
    tags: ["Customs & VAT", "VRT", "Registration"],
  },
  {
    flag: "🇨🇾",
    country: "Cyprus",
    title: "Vehicles for Sale from Japan to Cyprus",
    body: "We supply vehicles for sale from Japan to Cyprus, including hatchbacks, SUVs, hybrids and MPVs. Shipping and export documentation can be arranged according to the destination requirements.",
    tags: ["Shipping", "Export Documentation"],
  },
  {
    flag: "🇺🇸",
    country: "United States",
    title: "Japanese Used Cars for the USA",
    body: "Windsor Autos also supplies Japanese vehicles to the USA, subject to applicable federal and state import, age, emissions and compliance requirements. Buyers should confirm eligibility for their specific vehicle and destination state before purchase.",
    tags: ["Federal Compliance", "State Requirements", "Emissions & Age Rules"],
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
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const flagIn: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -6 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function ExportDestinationsSection() {
  const rowBorder = "color-mix(in srgb, var(--color-secondary) 14%, transparent)";

  return (
    <section id="destinations" className="section">
      <div className="section-inner">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Where We Export
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]"
          >
            Bringing Japanese Vehicles to Your Market
          </motion.h2>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* Destination directory                                       */}
        {/* ----------------------------------------------------------- */}
        <div
          className="mt-14 border-t"
          style={{ borderColor: rowBorder }}
        >
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.country}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="grid grid-cols-1 gap-4 border-b py-8 sm:gap-6 md:grid-cols-12 md:items-start md:gap-8 md:py-10"
              style={{ borderColor: rowBorder }}
            >
              {/* Flag + country label */}
              <div className="flex items-center gap-4 md:col-span-4">
                <motion.span
                  variants={flagIn}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                  }}
                >
                  {dest.flag}
                </motion.span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                    {dest.country}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug text-alt sm:text-xl">
                    {dest.title}
                  </h3>
                </div>
              </div>

              {/* Description + tags */}
              <div className="md:col-span-8">
                <p className="text-sm leading-relaxed text-secondary sm:text-base">
                  {dest.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {dest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1 text-xs font-medium text-alt"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
                        backgroundColor:
                          "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}