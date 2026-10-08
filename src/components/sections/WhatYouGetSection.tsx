"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ScrollText, LayoutGrid, PlaneTakeoff } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

// ---------------------------------------------------------------------------
// Content (same)
// ---------------------------------------------------------------------------

const brands = ["Toyota","Nissan","Honda","Mazda","Subaru","Mitsubishi"];

const features = [
  {
    icon: ScrollText,
    badge: "EVERY CAR COMES WITH",
    title: "Auction Documentation",
    description:
      "Available vehicles can include the original Japanese auction sheet showing inspection grade, mileage, condition and inspection notes. We provide the available vehicle documentation so buyers can review important details before purchasing.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    icon: LayoutGrid,
    badge: "WIDE SELECTION",
    title: "Wide Japanese Vehicle Selection",
    description:
      "Stock can include Toyota used cars, Nissan used cars, Honda used cars, Mazda used cars, Subaru used cars and Mitsubishi used cars across multiple body styles and price ranges.",
    tags: brands,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
  },
  {
    icon: PlaneTakeoff,
    badge: "GLOBAL EXPORT",
    title: "International Export Support",
    description:
      "Windsor Autos supports the vehicle export and shipping process for customers importing Japanese vehicles to the UK, Ireland, Cyprus, USA and other international destinations.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
  },
];

const AUTO_MS = 3500;

// ---------------------------------------------------------------------------
// Motion variants (same)
// ---------------------------------------------------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function WhatYouGetSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const border = "color-mix(in srgb, var(--color-secondary) 16%, transparent)";

  return (
    <section id="what-you-get" className="section">
      <div className="section-inner">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem] font-extrabold"
          >
            What You Get <span style={{ color: "var(--color-accent)" }}>?</span>
          </motion.h2>
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-2 text-xl font-bold sm:text-2xl"
          >
            with <span style={{ color: "var(--color-accent)" }}>Every</span> Windsor Autos <span style={{ color: "var(--color-accent)" }}>Stock Car</span>
          </motion.p>
        </div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-12"
        >
          {/* ---------------- Cinematic slider ---------------- */}
          <div
            className="relative overflow-hidden rounded-3xl border"
            style={{ borderColor: border }}
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop={true}
              speed={700}
              autoplay={{ delay: AUTO_MS, disableOnInteraction: false }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <SwiperSlide key={feature.title}>
                    <div className="relative flex min-h-[520px] items-end sm:min-h-[560px] lg:min-h-[520px]">
                      {/* Background image */}
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      {/* Dark overlays for readability */}
                      <span
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 100%)",
                        }}
                      />

                      {/* Top row: icon + counter */}
                      <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">
                        <span
                          className="flex h-14 w-14 items-center justify-center rounded-2xl"
                          style={{ backgroundColor: "var(--color-accent)", color: "var(--color-main)" }}
                        >
                          <Icon size={26} strokeWidth={2} />
                        </span>
                        <span className="rounded-full bg-black/45 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-white backdrop-blur-md">
                          {String(i + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Glass content card */}
                      <div className="relative w-full p-5 sm:p-8 lg:p-10">
                        <div className="max-w-2xl rounded-3xl border border-white/15 bg-black/40 p-6 backdrop-blur-md sm:p-8">
                          <span
                            className="inline-flex items-center rounded-full border px-4 py-1 text-[11px] font-bold uppercase tracking-widest"
                            style={{
                              color: "var(--color-accent)",
                              borderColor: "color-mix(in srgb, var(--color-accent) 50%, transparent)",
                              backgroundColor: "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                              boxShadow: "0 0 15px color-mix(in srgb, var(--color-accent) 25%, transparent)",
                            }}
                          >
                            {feature.badge}
                          </span>

                          <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                            {feature.title}
                          </h3>

                          <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                            {feature.description}
                          </p>

                          {feature.tags && (
                            <div className="mt-5 flex flex-wrap gap-2">
                              {feature.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* ---------------- Tab-cards navigation (replaces dots) ---------------- */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {features.map((feature, index) => {
              const isActive = activeIndex === index;
              const Icon = feature.icon;
              return (
                <button
                  key={feature.title}
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={isActive}
                  className="cursor-pointer relative flex items-center gap-3 overflow-hidden rounded-2xl border px-4 py-4 text-left transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: isActive ? "var(--color-accent)" : border,
                    backgroundColor: isActive
                      ? "color-mix(in srgb, var(--color-accent) 12%, transparent)"
                      : "color-mix(in srgb, var(--color-accent) 4%, transparent)",
                  }}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300"
                    style={{
                      backgroundColor: isActive
                        ? "var(--color-accent)"
                        : "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                      color: isActive ? "var(--color-main)" : "var(--color-accent)",
                    }}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold tracking-[0.18em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="block text-sm font-semibold leading-snug text-alt">
                      {feature.title}
                    </span>
                  </span>

                  {/* Autoplay progress */}
                  {isActive && (
                    <motion.span
                      key={`progress-${activeIndex}`}
                      aria-hidden
                      className="absolute bottom-0 left-0 h-1 w-full origin-left"
                      style={{ backgroundColor: "var(--color-accent)" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}