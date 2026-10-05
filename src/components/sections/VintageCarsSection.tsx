"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Content - Vintage ke liye alag data
// ---------------------------------------------------------------------------
const vintageCars = [
  { name: "BMW 2002", image: "https://pngimg.com/d/bmw_PNG99567.png" },
  { name: "BMW 7 Series", image: "https://pngimg.com/d/bmw_PNG99548.png" },
  { name: "BMW 3.0 CS", image: "https://pngimg.com/d/bmw_PNG99560.png" },
  { name: "LINCOLN CONTINENTAL", image: "https://pngimg.com/d/lincoln_PNG26.png" },
  { name: "BMW 2002", image: "https://pngimg.com/d/bmw_PNG99567.png" },
  { name: "BMW 7 Series", image: "https://pngimg.com/d/bmw_PNG99548.png" },
  { name: "BMW 3.0 CS", image: "https://pngimg.com/d/bmw_PNG99560.png" },
  { name: "LINCOLN CONTINENTAL", image: "https://pngimg.com/d/lincoln_PNG26.png" },
  { name: "BMW 2002", image: "https://pngimg.com/d/bmw_PNG99567.png" },
  { name: "BMW 7 Series", image: "https://pngimg.com/d/bmw_PNG99548.png" },
  { name: "BMW 3.0 CS", image: "https://pngimg.com/d/bmw_PNG99560.png" },
  { name: "LINCOLN CONTINENTAL", image: "https://pngimg.com/d/lincoln_PNG26.png" },
  { name: "BMW 2002", image: "https://pngimg.com/d/bmw_PNG99567.png" },
  { name: "BMW 7 Series", image: "https://pngimg.com/d/bmw_PNG99548.png" },
  { name: "BMW 3.0 CS", image: "https://pngimg.com/d/bmw_PNG99560.png" },
  { name: "LINCOLN CONTINENTAL", image: "https://pngimg.com/d/lincoln_PNG26.png" },
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

const cardIn: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function VintageCarsSection() {
  return (
    <section id="vintage-cars" className="section">
      <div className="section-inner">
        
        {/* Heading - Reference jaisa Vintage accent me */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight font-extrabold sm:text-4xl md:text-[2.75rem]"
          >
            <span style={{ color: "var(--color-accent)" }}>Vin</span>tage Cars
          </motion.h2>
        </div>

        {/* Grid - 1 row me 2 cars */}
        <div className="mt-16 grid grid-cols-1 gap-y-16 gap-x-10 md:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {vintageCars.map((car, i) => (
            <motion.div
              key={car.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardIn}
              className="group flex flex-col items-center text-center"
            >
              {/* Image + Big Triangle BG */}
              <div className="relative flex h-[340px] w-full items-end justify-center overflow-visible">
                
                {/* Triangle Shape - Bottom Left / Bottom Right / Top Right */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[230px] w-full transition-all duration-500 group-hover:h-[240px]"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--color-accent) 13%, transparent)",
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
                    borderRadius: "28px",
                    filter: "drop-shadow(0 20px 25px color-mix(in srgb, var(--color-accent) 18%, transparent))",
                  }}
                />
                {/* Depth layer */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[230px] w-full opacity-40"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
                    borderRadius: "28px",
                    transform: "translate(-5px, -5px)",
                  }}
                />

                {/* Car - Half inside Half outside + Big Size + Shadow */}
                <img
                  src={car.image}
                  alt={car.name}
                  className="relative z-10 mb-8 h-[210px] w-auto object-contain transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.04] sm:h-[230px] lg:h-[245px]"
                  style={{
                    filter: "drop-shadow(0 24px 22px rgba(0,0,0,0.24)) drop-shadow(0 7px 6px rgba(0,0,0,0.16))",
                  }}
                />
              </div>

              {/* Content */}
              <h3 className="mt-8 text-sm font-bold uppercase tracking-wide text-alt sm:text-[15px]">
                {car.name}
              </h3>

              <a
                href="#"
                className="mt-3 inline-flex items-center justify-center rounded-full border px-8 py-2 text-xs font-semibold transition-all hover:scale-105"
                style={{
                  borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                  backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                  color: "var(--color-alt)",
                }}
              >
                Request now
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}