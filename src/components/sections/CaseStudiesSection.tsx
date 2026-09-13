"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Section } from "@/components/layout/Section";

import "swiper/css";
import "swiper/css/pagination";

// ---------------------------------------------------------------------------
// Dynamic case-study data
// ---------------------------------------------------------------------------

type Stat = { value: string; label: string };

type CaseStudy = {
  id: string;
  logoLabel: string;
  image: string;
  title: string;
  description: string;
  href: string;
  stats: Stat[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "lgpsm",
    logoLabel: "LGPSM",
    image: "https://picsum.photos/seed/case-lgpsm/500/500",
    title: "AI Workflow Automation for SaaS Company",
    description:
      "We analyze your workflows, bottlenecks, and revenue opportunities.",
    href: "/case-studies/lgpsm",
    stats: [
      { value: "+40%", label: "Demo Booking" },
      { value: "+25%", label: "Closing Rate" },
      { value: "3x", label: "Engagement" },
    ],
  },
  {
    id: "nova-teams",
    logoLabel: "NOVA",
    image: "https://picsum.photos/seed/case-nova/500/500",
    title: "Remote Collaboration for Distributive Teams",
    description:
      "We streamlined onboarding and async workflows for a fully remote team.",
    href: "/case-studies/nova-teams",
    stats: [
      { value: "4x", label: "Productivity" },
      { value: "+30%", label: "Retention" },
      { value: "2x", label: "Team Growth" },
    ],
  },
  {
    id: "orbit-crm",
    logoLabel: "ORBIT",
    image: "https://picsum.photos/seed/case-orbit/500/500",
    title: "Lead Funnel Rebuild for B2B CRM Platform",
    description:
      "We rebuilt the funnel end to end to shorten the sales cycle.",
    href: "/case-studies/orbit-crm",
    stats: [
      { value: "+55%", label: "Qualified Leads" },
      { value: "-20%", label: "Sales Cycle" },
      { value: "2.5x", label: "Pipeline Value" },
    ],
  },
  {
    id: "flux-analytics",
    logoLabel: "FLUX",
    image: "https://picsum.photos/seed/case-flux/500/500",
    title: "Data Dashboard Redesign for Analytics Suite",
    description:
      "We simplified complex reporting into a clear, actionable dashboard.",
    href: "/case-studies/flux-analytics",
    stats: [
      { value: "+60%", label: "Daily Active Use" },
      { value: "+35%", label: "Upgrade Rate" },
      { value: "5x", label: "Faster Insights" },
    ],
  },
  {
    id: "pulse-health",
    logoLabel: "PULSE",
    image: "https://picsum.photos/seed/case-pulse/500/500",
    title: "Patient Booking Flow for Health Platform",
    description:
      "We redesigned the booking journey to cut drop-off at every step.",
    href: "/case-studies/pulse-health",
    stats: [
      { value: "+48%", label: "Completed Bookings" },
      { value: "-15%", label: "No-Shows" },
      { value: "4x", label: "Referrals" },
    ],
  },
];


export function CaseStudiesSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="case-studies" className="relative">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-xl text-center sm:mb-12">
        <span
          className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-heading text-[11px] uppercase tracking-[0.14em] text-secondary"
          style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 16%, transparent)" }}
        >
          005
          <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
          Case Studies
        </span>

        <h2 className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
          What We&rsquo;ve Built
        </h2>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Arrows */}
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous case study"
          className="absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-transform hover:scale-105 sm:left-4 sm:h-11 sm:w-11"
          style={{
            backgroundColor: "var(--color-main)",
            border: "1px solid color-mix(in srgb, var(--color-secondary) 14%, transparent)",
          }}
        >
          <ArrowLeft className="h-4 w-4 text-alt" />
        </button>

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next case study"
          className="absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-transform hover:scale-105 sm:right-4 sm:h-11 sm:w-11"
          style={{
            backgroundColor: "var(--color-main)",
            border: "1px solid color-mix(in srgb, var(--color-secondary) 14%, transparent)",
          }}
        >
          <ArrowRight className="h-4 w-4 text-alt" />
        </button>

        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          centeredSlides
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          slidesPerView={1.2}
          spaceBetween={16}
          pagination={{ el: ".case-studies-pagination", clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.3, spaceBetween: 20 },
            1024: { slidesPerView: 1.4, spaceBetween: 24 },
          }}
          className="case-studies-swiper"
        >
          {caseStudies.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <SwiperSlide key={item.id} className="!h-auto">
                <div
                  className="flex h-full flex-col overflow-hidden rounded-[1.75rem] shadow-lg transition-opacity duration-500 sm:flex-row sm:rounded-[2rem]"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                    opacity: isActive ? 1 : 0.3,
                  }}
                >
                  {/* Image */}
                  <div className="relative aspect-square w-full shrink-0 sm:aspect-auto sm:w-[42%]">
                    <div
                      className="absolute inset-2.5 overflow-hidden rounded-[1.25rem] sm:inset-3.5 sm:rounded-[1.5rem]"
                      style={{ backgroundColor: "var(--color-alt)" }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 30vw, 60vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-4 p-5 sm:gap-5 sm:p-7 lg:p-9">
                    <span className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-alt">
                      {item.logoLabel}
                    </span>

                    <div>
                      <h3 className="text-lg font-semibold leading-snug text-alt sm:text-xl lg:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-secondary">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      href={item.href}
                      className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-alt underline underline-offset-4 hover:text-accent"
                    >
                      Read More
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>

                    <div className="mt-auto flex flex-wrap items-center gap-5 pt-2 sm:gap-7">
                      {item.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-lg font-semibold text-alt sm:text-xl lg:text-2xl">
                            {stat.value}
                          </p>
                          <p className="mt-0.5 text-xs text-secondary">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Pagination + CTA */}
      <div className="mt-8 flex flex-col items-center gap-6 sm:mt-10">
        {/* <div className="case-studies-pagination flex items-center gap-1.5" /> */}

        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 rounded-full bg-alt px-7 py-3.5 font-heading text-sm font-medium text-main transition-opacity hover:opacity-90"
        >
          Explore all Case Studies
        </Link>
      </div>

     
    </Section>
  );
}