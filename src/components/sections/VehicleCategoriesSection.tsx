"use client";

import { motion, type Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import {
  Car,
  CarFront,
  CarTaxiFront,
  Users,
  Truck,
  Leaf,
  Gauge,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const categories = [
  { icon: Car, label: "SUVs" },
  { icon: CarFront, label: "Hatchbacks" },
  { icon: CarTaxiFront, label: "Sedans" },
  { icon: Users, label: "MPVs" },
  { icon: Truck, label: "Vans" },
  { icon: Leaf, label: "Hybrids" },
  { icon: Gauge, label: "Performance Vehicles" },
  { icon: Sparkles, label: "More Categories" },
];

// Duplicated so the loop has enough slides to feel continuous on wide screens.
const slides = [...categories, ...categories];

const manufacturers = [
  "Toyota",
  "Honda",
  "Nissan",
  "Suzuki",
  "Mazda",
  "Mitsubishi",
  "Subaru",
  "Lexus",
];

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

export  function VehicleCategoriesSection() {
  return (
    <section id="vehicle-categories" className="section">
      <div className="section-inner">
        {/* Heading */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
            >
              Vehicle Categories
            </motion.p>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="text-3xl leading-tight sm:text-4xl md:text-5xl"
            >
              Find the Right Vehicles for Your Market
            </motion.h2>
          </div>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-lg font-medium text-secondary sm:text-xl"
          >
            Different markets require different cars.
          </motion.p>
        </div>

        <motion.p
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mt-6 max-w-3xl text-base leading-relaxed text-secondary sm:text-lg"
        >
          Through the Japanese used vehicle market, buyers can source a broad
          selection of SUVs, hatchbacks, sedans, MPVs, vans, hybrids,
          performance vehicles and other popular vehicle categories.
        </motion.p>

        {/* Category slider */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10"
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
            {slides.map((category, i) => {
              const Icon = category.icon;
              return (
                <SwiperSlide
                  key={`${category.label}-${i}`}
                  className="!w-40 sm:!w-48"
                >
                  <div
                    className="group flex h-32 cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border px-4 py-8 text-center transition-colors duration-300 sm:h-36"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                      backgroundColor:
                        "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                    }}
                  >
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                      }}
                    >
                      <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-medium text-alt sm:text-base">
                      {category.label}
                    </span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>

        {/* Manufacturer note */}
        <motion.p
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mt-10 max-w-3xl text-sm leading-relaxed text-secondary sm:text-base"
        >
          Vehicles from manufacturers such as{" "}
          <span className="font-medium text-alt">
            {manufacturers.join(", ")}
          </span>{" "}
          are regularly available alongside selected European and
          international brands sold within Japan.
        </motion.p>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border p-7 sm:flex-row sm:items-center"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-accent) 30%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--color-accent) 6%, transparent)",
          }}
        >
          <p className="text-base leading-relaxed text-alt sm:text-lg">
            Explore the market and build an inventory that fits the buyers
            you serve.
          </p>
          <a
            href="#"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-main)",
            }}
          >
            Explore Inventory
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}