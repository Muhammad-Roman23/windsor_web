"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Section } from "@/components/layout/Section";

import "swiper/css";

// ---------------------------------------------------------------------------
// Dynamic car data (max 6)
// ---------------------------------------------------------------------------

type AuctionCar = {
  id: string;
  image: string;
};

const auctionCars: AuctionCar[] = [
  { id: "car-1", image: "https://picsum.photos/seed/auction-car-1/700/420" },
  { id: "car-2", image: "https://picsum.photos/seed/auction-car-2/700/420" },
  { id: "car-3", image: "https://picsum.photos/seed/auction-car-3/700/420" },
  { id: "car-4", image: "https://picsum.photos/seed/auction-car-4/700/420" },
  { id: "car-5", image: "https://picsum.photos/seed/auction-car-5/700/420" },
  { id: "car-6", image: "https://picsum.photos/seed/auction-car-6/700/420" },
];

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function AuctionCarsSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section
      id="auction-cars"
      className="relative overflow-hidden bg-alt"
    //   style={{ backgroundColor: "var(--color-alt)" }
    >
      {/* Background silhouettes */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[28%] opacity-[0.12] grayscale sm:block">
        <Image
          src="https://picsum.photos/seed/pagoda-left/500/900"
          alt=""
          fill
          className="object-cover object-right"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[28%] opacity-[0.12] grayscale sm:block">
        <Image
          src="https://picsum.photos/seed/pagoda-right/500/900"
          alt=""
          fill
          className="object-cover object-left"
        />
      </div>

      {/* Center emblem watermark */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 opacity-30 sm:h-80 sm:w-80"
        style={{ borderColor: "var(--color-accent)" }}
        aria-hidden
      />

      {/* Heading — one per section */}
      <h1 className="relative z-10 text-center text-3xl leading-tight text-alt sm:text-4xl md:text-[2.75rem]">
        Auction Cars
      </h1>

      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        centeredSlides
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={1.6}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        className="auction-cars-swiper relative mt-8 sm:mt-10"
      >
        {auctionCars.map((car, i) => {
          const isActive = i === activeIndex;

          return (
            <SwiperSlide key={car.id} className="!flex !items-center !justify-center">
              <div
                className={`flex min-h-[180px] w-full items-center justify-center px-2 transition-all duration-500 sm:min-h-[260px] md:min-h-[320px] ${
                  isActive ? "z-10 scale-100 opacity-100" : "scale-[0.8] opacity-60"
                }`}
              >
                <Image
                  src={car.image}
                  alt=""
                  width={700}
                  height={420}
                  className="h-auto w-full object-contain drop-shadow-2xl"
                  priority={isActive}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* CTA */}
      <div className="relative z-10 mt-6 flex justify-center sm:mt-8">
        <Link
          href="/auctions"
          className="inline-flex items-center gap-2 rounded-full bg-alt px-7 py-3.5 font-heading text-sm font-medium text-main transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-accent)", color: "var(--color-alt)" }}
        >
          View Auction
        </Link>
      </div>
    </Section>
  );
}