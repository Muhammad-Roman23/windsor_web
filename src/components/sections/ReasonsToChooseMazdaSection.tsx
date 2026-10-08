"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const reasons = [
  {
    id: "01",
    label: "Driving Pleasure",
    title: "A focus on driving pleasure",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
    desc: "Mazda builds cars with agile handling, balanced performance, and a strong connection with the driver. The most popular Mazda models for UK drivers deliver an excellent experience with precise steering, impressive performance, and enjoyable driving, making every journey more comfortable for drivers.",
  },
  {
    id: "02",
    label: "Craftsmanship",
    title: "Japanese Craftsmanship in Every Detail",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop",
    desc: "Each Mazda reflects Japanese craftsmanship through its beautiful interiors, high-quality materials, and careful design. Japanese-import Mazda vehicles offer a luxurious feel with comfortable interiors, quality materials, and thoughtfully designed features that make every journey more enjoyable, practical, and engaging for drivers.",
  },
  {
    id: "03",
    label: "KODO Design",
    title: "Design That Creates Emotion",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    desc: "The design concept KODO is employed by Mazda to produce stylish cars with contemporary designs. Examples of popular cars designed in the style include the Mazda3 and CX-5 models which represent the unique design philosophy of the car company.",
  },
];

export function ReasonsToChooseMazdaSection() {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section id="reasons-choose-mazda" className="section">
      <div className="section-inner">
        
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <span
              className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-widest uppercase text-accent"
              style={{ borderColor: "color-mix(in srgb, var(--color-accent) 20%, transparent)" }}
            >
              Why Choose Mazda
            </span>
            <h2 className="mt-4 text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-semibold tracking-tight">
              Reasons to Choose a Used <br /> <span className="text-accent">Mazda from Japan</span>
            </h2>
          </motion.div>
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="lg:col-span-5 text-sm leading-6 sm:text-[15px] sm:leading-7 text-secondary lg:pb-1"
          >
            Beyond everyday transport, a used Japanese Mazda offers a blend of driver-focused engineering and reliability.
          </motion.p>
        </div>

        <div className="mt-8 h-px w-full" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)" }} />

        {/* FILTER BUTTONS - CLICK PE SLIDE CHANGE */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-8 flex flex-wrap gap-3"
        >
          {reasons.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActive(idx);
                swiperRef.current?.slideToLoop(idx);
              }}
              className="inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300"
              style={
                active === idx
                  ? { backgroundColor: "var(--color-accent)", borderColor: "var(--color-accent)", color: "white" }
                  : { borderColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)", color: "var(--color-secondary)" }
              }
            >
              <span className="text-xs font-bold tracking-widest opacity-80">{item.id}</span>
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* SWIPER SLIDER - NO BG, ONLY BORDER */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-8 overflow-hidden rounded-2xl lg:rounded-[24px]"
          style={{ border: "1px solid color-mix(in srgb, var(--color-secondary) 12%, transparent)" }}
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            speed={600}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActive(swiper.realIndex)}
          >
            {reasons.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-6 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[420px]"
                    />
                    <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold tracking-widest text-white" style={{ backgroundColor: "var(--color-accent)" }}>
                      {item.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight text-alt">
                      {item.title}
                    </h3>

                    {/* NUMBER KE SATH WALI LINE AB PROGRESS HAI */}
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-accent">{item.id}</span>
                      <div className="h-[2px] flex-1 max-w-[140px] overflow-hidden rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)" }}>
                        <motion.div
                          key={active}
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 4, ease: "linear" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                      </div>
                      <span className="text-xs text-secondary">{active + 1} / {reasons.length}</span>
                    </div>

                    <p className="mt-4 text-sm leading-6 sm:text-[15px] sm:leading-7 text-secondary">
                      {item.desc}
                    </p>
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