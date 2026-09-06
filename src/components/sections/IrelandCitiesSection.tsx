"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const cities = [
  {
    number: "01",
    title: "Used Cars in Dublin",
    description:
      "Dublin drivers often need economical vehicles that are easy to manoeuvre through busy urban roads while remaining comfortable for regular commuting. Hybrid hatchbacks and compact crossovers can be particularly practical choices. Windsor Autos gives Dublin buyers access to Japanese vehicle stock beyond what may be available from local dealers. If you are searching for used cars in Dublin or considering a Japanese vehicle import, we can help you find suitable cars from Japan based on your preferred model, budget and specification.",
  },
  {
    number: "02",
    title: "Used Cars in Cork",
    description:
      "Cork combines urban driving with suburban and regional journeys, so many drivers look for vehicles that offer practicality without excessive running costs. Compact cars, hybrids and SUVs provide different solutions depending on individual needs. Windsor Autos sources vehicles from Japanese auctions and export channels, giving Cork buyers access to a broader selection of Japanese used cars. Our team can help you explore suitable vehicles and understand the steps involved in bringing a car from Japan to Ireland.",
  },
  {
    number: "03",
    title: "Used Cars in Galway",
    description:
      "Galway drivers may need a vehicle that performs comfortably across city streets, regional roads and longer journeys. Japanese hatchbacks, crossovers and SUVs offer a range of options for different lifestyles. Windsor Autos helps customers in Galway source vehicles from Japan according to their preferred model, age, mileage and budget. Whether you need an efficient commuter car or a practical family vehicle, our Japanese vehicle sourcing service provides access to options beyond standard local stock.",
  },
  {
    number: "04",
    title: "Used Cars in Limerick",
    description:
      "Limerick buyers can choose from a wide range of Japanese vehicles depending on their driving requirements and household needs. Compact hatchbacks can work well for city use, while crossovers and SUVs offer additional space for families. Windsor Autos helps customers source vehicles from Japan and supports the export process once a suitable car has been selected. If you are considering Japanese car import Ireland services, our team can help you understand the vehicle sourcing and export stages before purchase.",
  },
];

// ---------------------------------------------------------------------------
// Motion
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function IrelandCitiesSection() {
  return (
    <section id="used-cars-ireland" className="section">
      <div className="section-inner">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Nationwide Coverage
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.75rem]"
          >
            Japanese Used Cars Available Across Ireland
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            Windsor Autos helps customers across Ireland access vehicles sourced
            from Japan. Whether you are based in Dublin, Cork, Galway or
            Limerick, our team can help you identify suitable Japanese used cars
            according to your budget and requirements. We support the vehicle
            sourcing and export stages, giving customers a clearer route from
            selecting a car in Japan to arranging its shipment for Ireland.
          </motion.p>
        </div>

        {/* Timeline with center pole */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Center vertical pole */}
          <div
            className="absolute left-4 top-0 bottom-0 w-[2px] md:left-1/2 md:-translate-x-1/2"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
            }}
          />

          <div className="space-y-12 md:space-y-16">
            {cities.map((city, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={city.title}
                  custom={index + 3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  className={`relative flex md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot on the pole */}
                  <div
                    className="absolute left-4 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      boxShadow: "0 0 0 4px color-mix(in srgb, var(--color-accent) 18%, transparent)",
                    }}
                  />

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden w-1/2 md:block" />

                  {/* Content card */}
                  <div
                    className={`ml-10 w-full md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-10 lg:pr-14" : "md:pl-10 lg:pl-14"
                    }`}
                  >
                    <div
                      className="rounded-2xl border p-6 sm:p-7"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                        backgroundColor:
                          "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                      }}
                    >
                      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-sm font-semibold tracking-wider text-accent">
                          {city.number}
                        </span>
                        <span
                          className="hidden h-1 w-1 rounded-full sm:block"
                          style={{
                            backgroundColor:
                              "color-mix(in srgb, var(--color-secondary) 40%, transparent)",
                          }}
                        />
                        <div className="flex items-center gap-2">
                          <MapPin
                            className="h-4 w-4 text-accent"
                            strokeWidth={2}
                          />
                          <h3 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                            {city.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-base leading-relaxed text-secondary">
                        {city.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}