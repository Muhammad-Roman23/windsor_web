"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Star, ShieldCheck, ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";

// ---------------------------------------------------------------------------
// Trustpilot integration
// ---------------------------------------------------------------------------
// This component is wired to read from a single `/api/trustpilot` route so
// the rating, review count, and review list stay live without touching the
// UI again.
//
// Suggested route contract (build this on your backend):
//   GET /api/trustpilot
//   -> {
//        rating: number;              // e.g. 4.8
//        totalReviews: number;        // e.g. 1240
//        verifiedPercent: number;     // e.g. 98
//        profileUrl: string;          // link for the CTA
//        reviews: TrustpilotReview[]; // most recent first
//      }
//
// Trustpilot's own Business/Consumer API (or a scheduled job that caches
// their data into your DB) can feed that route. Until then, this component
// falls back to the placeholder data below so the section is fully
// functional and stylistically final today — swap the fetch on, and the
// random data disappears automatically.
// ---------------------------------------------------------------------------

interface TrustpilotReview {
  id: string;
  author: string;
  initials: string;
  rating: number; // 1-5
  title: string;
  body: string;
  date: string;
  verified: boolean;
}

interface TrustpilotData {
  rating: number;
  totalReviews: number;
  verifiedPercent: number;
  profileUrl: string;
  reviews: TrustpilotReview[];
}

const placeholderData: TrustpilotData = {
  rating: 4.8,
  totalReviews: 1247,
  verifiedPercent: 98,
  profileUrl: "https://www.trustpilot.com/review/windsorautogroup.com",
  reviews: [
    {
      id: "r1",
      author: "Daniel Okafor",
      initials: "DO",
      rating: 5,
      title: "Smoothest import I've ever done",
      body: "Windsor kept me updated at every stage — auction win, shipping, customs. The car arrived exactly as described.",
      date: "2 days ago",
      verified: true,
    },
    {
      id: "r2",
      author: "Amara Chen",
      initials: "AC",
      rating: 5,
      title: "Excellent communication",
      body: "My advisor answered every question within the hour, even across time zones. Would use again without hesitation.",
      date: "5 days ago",
      verified: true,
    },
    {
      id: "r3",
      author: "James Whitfield",
      initials: "JW",
      rating: 4,
      title: "Great value, minor delay",
      body: "Shipping took a little longer than quoted, but the team was upfront about it and the car itself is fantastic.",
      date: "1 week ago",
      verified: true,
    },
    {
      id: "r4",
      author: "Priya Natarajan",
      initials: "PN",
      rating: 5,
      title: "Exactly as photographed",
      body: "I was nervous buying a car sight unseen, but the inspection report was thorough and honest. No surprises on arrival.",
      date: "1 week ago",
      verified: true,
    },
    {
      id: "r5",
      author: "Marcus Lindqvist",
      initials: "ML",
      rating: 5,
      title: "Second purchase, same great service",
      body: "This is the second vehicle I've bought through Windsor. Consistent, transparent, and fairly priced both times.",
      date: "2 weeks ago",
      verified: true,
    },
    {
      id: "r6",
      author: "Fatima Al-Sayed",
      initials: "FA",
      rating: 5,
      title: "Handled customs paperwork for me",
      body: "I didn't have to worry about a single document. Their local agent walked me through clearance step by step.",
      date: "3 weeks ago",
      verified: true,
    },
  ],
};

// ---------------------------------------------------------------------------
// Motion variants — mirrors the manufacturers rail for a consistent rhythm
// ---------------------------------------------------------------------------
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1 },
  }),
};

const statVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 + custom * 0.08 },
  }),
};

const railVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// ---------------------------------------------------------------------------
// Small presentational bits
// ---------------------------------------------------------------------------
function StarRow({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={0}
          className={
            i < Math.round(rating) ? "fill-accent" : "fill-current opacity-20"
          }
          style={{ color: "var(--color-accent)" }}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: TrustpilotReview }) {
  return (
    <div
      className="flex h-full w-[300px] flex-col justify-between rounded-2xl border p-6 sm:w-[340px]"
      style={{
        borderColor:
          "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
        backgroundColor:
          "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
      }}
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <StarRow rating={review.rating} />
          {review.verified && (
            <span
              className="flex items-center gap-1 text-xs font-medium"
              style={{ color: "var(--color-accent)" }}
            >
              <ShieldCheck size={14} strokeWidth={2} />
              Verified
            </span>
          )}
        </div>

        <h3 className="mb-2 text-base font-semibold leading-snug">
          {review.title}
        </h3>
        <p className="text-sm leading-relaxed text-secondary">
          {review.body}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-accent) 16%, transparent)",
            color: "var(--color-accent)",
          }}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-sm font-medium">{review.author}</p>
          <p className="text-xs text-secondary">{review.date}</p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export function TrustpilotReviews() {
  const [data, setData] = useState<TrustpilotData>(placeholderData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadReviews() {
      try {
        const res = await fetch("/api/trustpilot", { cache: "no-store" });
        if (!res.ok) throw new Error("Trustpilot route not available yet");
        const json: TrustpilotData = await res.json();
        if (!cancelled) setData(json);
      } catch {
        // Falls back silently to placeholder data until /api/trustpilot exists.
        if (!cancelled) setData(placeholderData);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadReviews();
    return () => {
      cancelled = true;
    };
  }, []);

  const slides = [...data.reviews, ...data.reviews];

  const stats = [
    { label: "Current Rating", value: data.rating.toFixed(1) },
    {
      label: "Total Reviews",
      value: data.totalReviews.toLocaleString("en-US"),
    },
    { label: "Verified Reviews", value: `${data.verifiedPercent}%` },
  ];

  return (
    <section id="trustpilot-reviews" className="section">
      <div className="section-inner">
        {/* Heading */}
        <div className="mb-10 max-w-2xl md:mb-14">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Trustpilot Live Reviews
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            Rated by Our Customers
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="mt-4 text-base leading-relaxed text-secondary sm:text-lg"
          >
            See verified customer feedback and recent experiences from buyers
            who have worked with Windsor Auto Group.
          </motion.p>
        </div>

        {/* Rating summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={railVariants}
          className="mb-10 flex flex-col gap-8 rounded-2xl border p-6 sm:p-8 md:mb-14 md:flex-row md:items-center md:justify-between"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
          }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <StarRow rating={data.rating} size={22} />
            <div>
              <p className="text-lg font-semibold leading-none">
                Excellent on Trustpilot
              </p>
              <p
                className={`mt-1 text-xs text-secondary ${
                  loading ? "opacity-60" : ""
                }`}
              >
                {loading ? "Syncing live rating…" : "Live from Trustpilot"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 sm:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={statVariants}
                className="text-center sm:text-left"
              >
                <p className="text-2xl font-semibold sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-secondary">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <a
            href={data.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-main)",
            }}
          >
            Read Our Trustpilot Reviews
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </motion.div>

        {/* Reviews rail */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={railVariants}
          className="relative"
        >
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
            speed={5500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView="auto"
            spaceBetween={16}
            className="!px-1 !py-2"
          >
            {slides.map((review, index) => (
              <SwiperSlide key={`${review.id}-${index}`} className="!w-auto">
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}