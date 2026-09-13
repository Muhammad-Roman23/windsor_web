"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { hero } from "@/data/content";

import "swiper/css";
import "swiper/css/effect-fade";

export function Hero() {
  const slides = hero.slides;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = slides[activeIndex];

  return (
    <Section
      id="top"
      className="relative overflow-hidden pt-[calc(var(--nav-height)+1.25rem)]"
    >
      <div className="relative h-[480px] w-full overflow-hidden rounded-[1.75rem] sm:h-[560px] sm:rounded-[2.25rem] lg:h-[calc(100vh-var(--nav-height)-3rem)] lg:max-h-[680px]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={900}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
          className="absolute inset-0 h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.image.src} className="relative h-full w-full">
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Readability overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-main/85 via-main/45 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-main/60 via-transparent to-transparent" />

        {/* Content — overlaid, left side, vertically centered */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div
            key={activeIndex}
            className="flex max-w-md flex-col gap-5 px-6 opacity-0 animate-[heroFadeIn_0.7s_ease_forwards] sm:px-10 sm:max-w-lg lg:max-w-xl lg:px-14"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 font-heading text-[11px] uppercase tracking-[0.16em] text-accent backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              {active.badge}
            </span>

            <h1 className="whitespace-pre-line text-[1.85rem] leading-[1.12] text-base sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
              {active.title}
            </h1>

            <p className="max-w-md text-sm leading-7 text-alt/80 sm:text-base sm:leading-8">
              {active.body}
            </p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={active.cta.href} className="group w-fit">
                <span className="inline-flex items-center gap-2">
                  {active.cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 right-6 z-10 flex items-center gap-1.5 sm:bottom-7 sm:right-8">
          {slides.map((slide, i) => (
            <span
              key={slide.image.src}
              className={
                i === activeIndex
                  ? "h-1.5 w-4 rounded-full bg-accent transition-all duration-300"
                  : "h-1.5 w-1.5 rounded-full bg-alt/50 transition-all duration-300"
              }
            />
          ))}
        </div>
      </div>
    </Section>
  );
}