"use client";

import { motion, type Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BadgeCheck, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

// ---------------------------------------------------------------------------
// Data — replace with real client testimonials whenever you have them.
// countryCode is a 2-letter ISO code, used to render the flag emoji.
// ---------------------------------------------------------------------------

interface Testimonial {
  number: string;
  quote: string;
  name: string;
  role: string;
  country: string;
  countryCode: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    number: "01",
    quote:
      "Windsor sourced exactly the stock we needed within days, not weeks. Every unit matched its auction sheet, and the paperwork was ready before the ship even docked.",
    name: "Client Name",
    role: "Dealer / Importer",
    country: "United Kingdom",
    countryCode: "GB",
    verified: true,
  },
  {
    number: "02",
    quote:
      "What stood out was the communication. Our advisor gave us weekly updates without us having to chase, and flagged a shipping delay before we even noticed it.",
    name: "Client Name",
    role: "Automotive Business",
    country: "Kenya",
    countryCode: "KE",
    verified: true,
  },
  {
    number: "03",
    quote:
      "We've imported through three brokers before Windsor. This is the first time the condition report matched the car on arrival, down to the interior wear.",
    name: "Client Name",
    role: "Vehicle Importer",
    country: "United Arab Emirates",
    countryCode: "AE",
    verified: false,
  },
];

function flagEmoji(countryCode: string) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
}

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1 },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.1 + custom * 0.12 },
  }),
};

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------
function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-3xl border p-8"
      style={{
        borderColor:
          "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
        backgroundColor:
          "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
      }}
    >
      {/* Watermark quote mark — the signature element */}
      <Quote
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 rotate-6"
        strokeWidth={0}
        style={{
          fill: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
        }}
      />

      <div className="relative mb-6 flex items-center justify-between">
        <span
          className="text-xs font-semibold tracking-[0.14em]"
          style={{ color: "var(--color-accent)" }}
        >
          REVIEW {item.number}
        </span>
        {item.verified && (
          <span
            className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-accent) 14%, transparent)",
              color: "var(--color-accent)",
            }}
          >
            <BadgeCheck size={13} strokeWidth={2.5} />
            Verified Customer
          </span>
        )}
      </div>

      <p className="relative mb-8 flex-1 text-base leading-relaxed sm:text-lg">
        &ldquo;{item.quote}&rdquo;
      </p>

      <div
        className="relative flex items-center justify-between border-t pt-5"
        style={{
          borderColor:
            "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
        }}
      >
        <div>
          <p className="text-sm font-semibold">{item.name}</p>
          <p className="text-xs text-secondary">{item.role}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-secondary">
          <span aria-hidden className="text-base leading-none">
            {flagEmoji(item.countryCode)}
          </span>
          {item.country}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export function Testimonials() {
  return (
    <section id="testimonials" className="section">
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
            Testimonials
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="mt-2 text-lg font-medium sm:text-xl"
          >
            Trusted by Dealers &amp; Importers
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="mt-4 text-base leading-relaxed text-secondary sm:text-lg"
          >
            Our customers work in different markets, but they all need the
            same things from a vehicle supplier: reliable sourcing, clear
            communication and confidence throughout the buying process. See
            what dealers, importers and automotive buyers say about their
            experience sourcing vehicles from Japan with Windsor Auto Group.
          </motion.p>
        </div>

        {/* Desktop: static three-column grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="h-full"
            >
              <TestimonialCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: swipe carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="testimonials-mobile md:hidden"
        >
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={16}
            grabCursor
            className="!pb-10"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.number}>
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonials-mobile .swiper-pagination-bullet {
          background: color-mix(in srgb, var(--color-secondary) 30%, transparent);
          opacity: 1;
        }
        .testimonials-mobile .swiper-pagination-bullet-active {
          background: var(--color-accent);
        }
      `}</style>
    </section>
  );
}