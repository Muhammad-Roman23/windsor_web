"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ScrollText, LayoutGrid, PlaneTakeoff } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

// ---------------------------------------------------------------------------
// Content - Tumhara content 100% same hai, sirf image + badge add kiya hai
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

// ---------------------------------------------------------------------------
// Motion variants - Tumhare wale same
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

  return (
    <section id="what-you-get" className="section">
      <div className="section-inner">
        
        {/* Heading - Reference jaisa but color variable se */}
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

        {/* Swiper Slider */}
        <div className="mt-12">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            speed={700}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <SwiperSlide key={feature.title}>
                  <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 py-2">
                    
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                      <span
                        className="inline-flex items-center rounded-full border px-4 py-1 text-[11px] font-bold uppercase tracking-widest"
                        style={{
                          color: "var(--color-accent)",
                          borderColor: "color-mix(in srgb, var(--color-accent) 40%, transparent)",
                          backgroundColor: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                          boxShadow: "0 0 15px color-mix(in srgb, var(--color-accent) 20%, transparent)"
                        }}
                      >
                        {feature.badge}
                      </span>

                      <h3 className="mt-5 text-2xl font-extrabold leading-tight text-alt sm:text-3xl lg:text-[40px]">
                        {feature.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base max-w-xl">
                        {feature.description}
                      </p>

                      {feature.tags && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {feature.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border px-3 py-1 text-xs font-medium text-alt"
                              style={{
                                borderColor: "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
                                backgroundColor: "color-mix(in srgb, var(--color-main) 92%, transparent)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <span
                        className="mt-6 flex lg:hidden h-10 w-10 items-center justify-center rounded-xl"
                        style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 14%, transparent)" }}
                      >
                        <Icon className="h-5 w-5 text-accent" />
                      </span>
                    </div>

                    {/* Right Image - Slide ke sath change hogi */}
                    <div className="order-1 lg:order-2">
                      <div
                        className="relative overflow-hidden rounded-2xl border"
                        style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)" }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[380px]"
                        />
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Pagination Dots - Reference jaisa but variable color */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className="h-[10px] rounded-full border transition-all duration-300"
                style={{
                  width: activeIndex === index ? "40px" : "32px",
                  borderColor: activeIndex === index ? "var(--color-accent)" : "color-mix(in srgb, var(--color-secondary) 40%, transparent)",
                  backgroundColor: activeIndex === index ? "color-mix(in srgb, var(--color-accent) 18%, transparent)" : "transparent",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}