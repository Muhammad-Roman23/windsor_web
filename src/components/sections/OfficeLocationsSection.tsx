"use client";

import { motion, type Variants } from "framer-motion";
import { Building2 } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
const locations = [
  {
    city: "London",
    address: ["Ex tunnel garage London", "Road Aveley south", "Ockendon Essex RM15 4XT."],
  },
  {
    city: "Cyprus",
    address: ["STROVOLOS CENTER, Office", "301, Strovolou 77, 2018", "Strovolos, Nicosia, Cyprus."],
  },
  {
    city: "Dublin",
    address: ["UNIT 6 TRINITY COURT", "FONTHILL ROAD Dublin"],
  },
];

// ---------------------------------------------------------------------------
// Motion - tumhara same flow
// ---------------------------------------------------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function OfficeLocationsSection() {
  return (
    <section id="office-locations" className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="relative flex flex-col items-center px-6 py-8 text-center md:py-4"
            >
              {/* Vertical Dashed Divider - Desktop */}
              {i !== locations.length - 1 && (
                <span
                  className="absolute right-0 top-1/2 hidden h-[75%] -translate-y-1/2 border-r-2 border-dashed md:block"
                  style={{ borderColor: "var(--color-accent)" }}
                />
              )}

              {/* City */}
              <div className="flex items-center gap-3">
                <Building2
                  className="h-9 w-9 shrink-0"
                  style={{ color: "var(--color-accent)" }}
                  strokeWidth={1.8}
                />
                <h3 className="text-2xl font-medium tracking-wide text-alt sm:text-[26px]">
                  {loc.city}
                </h3>
              </div>

              {/* Address */}
              <div className="mt-6 space-y-1">
                {loc.address.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-sm leading-relaxed text-alt sm:text-[15px]"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Horizontal Dashed Divider - Mobile */}
              {i !== locations.length - 1 && (
                <span
                  className="mt-8 block w-full border-b-2 border-dashed md:hidden"
                  style={{ borderColor: "color-mix(in srgb, var(--color-accent) 60%, transparent)" }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}