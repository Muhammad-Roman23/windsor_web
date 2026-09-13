"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Star, TrendingUp } from "lucide-react";
import { Section } from "@/components/layout/Section";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const heroContent = {
  badge: "Available for May 2025",
  titlePrefix: "Fuelling",
  titleSuffix: "growth with every click",
  body: "From landing pages to automation, we craft lead funnels that grow your business on autopilot.",
  primaryCta: { label: "Drive results now", href: "/contact" },
  secondaryCta: { label: "Learn more", href: "/about" },
  rating: 5,
  avatars: [
    "https://picsum.photos/seed/avatar-a/80/80",
    "https://picsum.photos/seed/avatar-b/80/80",
    "https://picsum.photos/seed/avatar-c/80/80",
  ],
};

// ---------------------------------------------------------------------------
// Dynamic feed data — grouped by day
// ---------------------------------------------------------------------------

type CallEntry = {
  id: string;
  name: string;
  avatar: string;
  time: string;
  duration: string;
};

type DayGroup = {
  day: string;
  date: string;
  calls: CallEntry[];
};

const feed: DayGroup[] = [
  {
    day: "MON",
    date: "18 MAY",
    calls: [
      { id: "c1", name: "David", avatar: "https://picsum.photos/seed/david/80/80", time: "9:30 AM - 10:30 AM", duration: "1hr" },
    ],
  },
  {
    day: "TUE",
    date: "19 MAY",
    calls: [
      { id: "c2", name: "Sarah", avatar: "https://picsum.photos/seed/sarah/80/80", time: "9:30 AM - 10:30 AM", duration: "1hr" },
      { id: "c3", name: "Leah", avatar: "https://picsum.photos/seed/leah/80/80", time: "12:45 PM - 1:15 PM", duration: "30m" },
    ],
  },
  {
    day: "THU",
    date: "21 MAY",
    calls: [
      { id: "c4", name: "Joshua", avatar: "https://picsum.photos/seed/joshua/80/80", time: "2:00 PM - 3:00 PM", duration: "1hr" },
    ],
  },
  {
    day: "MON",
    date: "25 MAY",
    calls: [
      { id: "c5", name: "Edward", avatar: "https://picsum.photos/seed/edward/80/80", time: "10:30 AM - 11:00 AM", duration: "30m" },
    ],
  },
  {
    day: "THU",
    date: "28 MAY",
    calls: [
      { id: "c6", name: "Mia", avatar: "https://picsum.photos/seed/mia/80/80", time: "11:00 AM - 12:00 PM", duration: "1hr" },
      { id: "c7", name: "Ryan", avatar: "https://picsum.photos/seed/ryan/80/80", time: "3:15 PM - 3:45 PM", duration: "30m" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Feed column (rendered twice for seamless loop)
// ---------------------------------------------------------------------------

function FeedColumn() {
  return (
    <div className="flex flex-col gap-5 px-1">
      {feed.map((group, gi) => (
        <div key={`${group.day}-${group.date}-${gi}`} className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary">
              {group.day}
            </span>
            <span className="font-heading text-[11px] uppercase tracking-[0.1em] text-secondary/70">
              {group.date}
            </span>
          </div>

          {group.calls.map((call) => (
            <div
              key={call.id}
              className="flex items-center gap-3 rounded-2xl border p-3.5 shadow-sm"
              style={{
                borderColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)",
                backgroundColor: "color-mix(in srgb, var(--color-main) 96%, transparent)",
              }}
            >
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                <Image src={call.avatar} alt={call.name} fill sizes="36px" className="object-cover" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-alt">
                  New client call: {call.name}
                </p>
                <p className="mt-0.5 text-xs text-secondary">{call.time}</p>
              </div>

              <span className="shrink-0 font-heading text-[11px] text-secondary/70">
                {call.duration}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function GrowthHero() {
  return (
    <Section
      id="top"
      className="relative overflow-hidden pt-[calc(var(--nav-height)+1.25rem)]"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        {/* Left — static content */}
        <div className="max-w-xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-heading text-[11px] uppercase tracking-[0.14em] text-secondary"
            style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 16%, transparent)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {heroContent.badge}
          </span>

          <h1 className="text-[1.85rem] leading-[1.12] text-alt sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
            {heroContent.titlePrefix}{" "}
            <TrendingUp className="mb-1 inline h-8 w-8 text-accent sm:h-9 sm:w-9" strokeWidth={2.25} />{" "}
            {heroContent.titleSuffix}
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-secondary sm:text-base sm:leading-8">
            {heroContent.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={heroContent.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-alt px-6 py-3 font-heading text-sm font-medium text-main transition-opacity hover:opacity-90"
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center gap-2 px-2 py-3 font-heading text-sm font-medium text-alt transition-opacity hover:opacity-70"
            >
              <Play className="h-3.5 w-3.5 fill-alt text-alt" strokeWidth={1.5} />
              {heroContent.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: heroContent.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" strokeWidth={0} />
              ))}
            </div>
            <div className="flex -space-x-2.5">
              {heroContent.avatars.map((src, i) => (
                <div
                  key={i}
                  className="relative h-8 w-8 overflow-hidden rounded-full border-2"
                  style={{ borderColor: "var(--color-main)" }}
                >
                  <Image src={src} alt="Client" fill sizes="32px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — continuous vertical auto-scroll feed */}
        <div
          className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[480px] lg:h-[560px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="animate-[feedScroll_28s_linear_infinite] hover:[animation-play-state:paused]">
            <FeedColumn />
            <FeedColumn />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes feedScroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
      `}</style>
    </Section>
  );
}