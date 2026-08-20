"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
// Drop each maker's logo (SVG or PNG, transparent background) into
// /public/images/makers/ using the slug below as the filename,
// e.g. /public/images/makers/toyota.svg
// ---------------------------------------------------------------------------

interface Manufacturer {
  name: string;
  slug: string;
}

const manufacturers: Manufacturer[] = [
  { name: "Toyota", slug: "toyota" },
  { name: "Honda", slug: "honda" },
  { name: "Nissan", slug: "nissan" },
  { name: "Suzuki", slug: "suzuki" },
  { name: "Mazda", slug: "mazda" },
  { name: "Mitsubishi", slug: "mitsubishi" },
  { name: "Subaru", slug: "subaru" },
  { name: "Lexus", slug: "lexus" },
  { name: "Daihatsu", slug: "daihatsu" },
  { name: "BMW", slug: "bmw" },
  { name: "Mercedes-Benz", slug: "mercedes-benz" },
  { name: "Audi", slug: "audi" },
  { name: "Volkswagen", slug: "volkswagen" },
];

// Duplicate the list so the loop has enough slides to feel continuous
// even on very wide screens.
const slides = [...manufacturers, ...manufacturers];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const railVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ManufacturersSlider() {
  return (
    <section id="manufacturers" className="section">
      <div className="section-inner">
        {/* Heading */}
        <div className="mb-10 max-w-2xl md:mb-14">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants as Variants}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Trusted Manufacturers
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants as Variants}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            Find Cars From Leading Manufacturers
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants as Variants}
            className="mt-4 text-base leading-relaxed text-secondary sm:text-lg"
          >
            Explore vehicles from popular Japanese and international
            manufacturers available through the Japanese used car market.
          </motion.p>
        </div>

        {/* Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={railVariants as Variants}
          className="relative"
        >
          {/* Edge fade masks */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-20"
            style={{
              background:
                "linear-gradient(to right, var(--color-main), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-20"
            style={{
              background:
                "linear-gradient(to left, var(--color-main), transparent)",
            }}
          />

          <Swiper
            modules={[Autoplay, FreeMode]}
            freeMode={{ enabled: true, momentum: false }}
            loop
            allowTouchMove
            grabCursor
            speed={4500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView="auto"
            spaceBetween={16}
            className="!px-1 !py-2"
          >
            {slides.map((maker, index) => (
              <SwiperSlide key={`${maker.slug}-${index}`} className="!w-auto">
                <div
                  className="group flex h-24 w-40 items-center justify-center rounded-2xl border transition-all duration-300 sm:h-28 sm:w-48"
                  style={{
                    borderColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                    backgroundColor:
                      "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                  }}
                >
                  <div className="relative h-10 w-28 opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-12 sm:w-32">
                    <Image
                      src={`/images/makers/${maker.slug}.svg`}
                      alt={`${maker.name} logo`}
                      fill
                      sizes="160px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}