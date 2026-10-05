"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
const cars = [
  { name: "AUDI S3 2021", image: "https://pngimg.com/d/audi_PNG1736.png" },
  { name: "TOYOTA LAND CRUISER", image: "https://pngimg.com/d/audi_PNG1736.png" },
  { name: "AUDI S5 2021", image: "https://pngimg.com/d/audi_PNG1736.png" },
  { name: "VOLKSWAGEN GOLF 2014", image: "https://pngimg.com/d/audi_PNG1736.png" },
  { name: "NISSAN ELGRAND 2019", image: "https://pngimg.com/d/audi_PNG1736.png" },
  { name: "TOYOTA ALPHARD 2023", image: "https://pngimg.com/d/audi_PNG1736.png" },
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

export function TrendingCarsSection() {
  return (
    <section id="top-trending" className="section">
      <div className="section-inner">
        
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight font-extrabold sm:text-4xl md:text-[2.75rem]"
          >
            T<span style={{ color: "var(--color-accent)" }}>o</span>p{" "}
            <span style={{ color: "var(--color-accent)" }}>Trend</span>ing
          </motion.h2>
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-1 text-sm font-medium tracking-wide text-secondary sm:text-base"
          >
            Windsor Autos Japan
          </motion.p>
        </div>

        {/* Grid - Big Triangle Concept */}
        <div className="mt-16 grid grid-cols-1 gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, i) => (
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
              <div className="relative flex h-[300px] w-full items-end justify-center overflow-visible">
                
                {/* Triangle Shape - Bottom Left / Bottom Right / Top Right */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[210px] w-full transition-all duration-500 group-hover:h-[218px]"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--color-accent) 13%, transparent)",
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
                    borderRadius: "24px",
                    filter: "drop-shadow(0 18px 25px color-mix(in srgb, var(--color-accent) 18%, transparent))",
                  }}
                />
                {/* Inner light border triangle for depth */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[210px] w-full opacity-40"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
                    borderRadius: "24px",
                    transform: "translate(-4px, -4px)",
                  }}
                />

                {/* Car - Half inside Half outside + Shadow */}
                <img
                  src={car.image}
                  alt={car.name}
                  className="relative z-10 mb-6 h-[190px] w-auto object-contain transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.04] sm:h-[205px] lg:h-[215px]"
                  style={{
                    filter: "drop-shadow(0 22px 22px rgba(0,0,0,0.22)) drop-shadow(0 6px 6px rgba(0,0,0,0.15))",
                  }}
                />
              </div>

              {/* Content */}
              <h3 className="mt-7 text-sm font-bold uppercase tracking-wide text-alt">
                {car.name}
              </h3>

              <a
                href="#"
                className="mt-3 inline-flex items-center justify-center rounded-full border px-7 py-2 text-xs font-semibold transition-all hover:scale-105"
                style={{
                  borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                  backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                  color: "var(--color-alt)",
                }}
              >
                Buy now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}