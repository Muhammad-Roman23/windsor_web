"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Gauge, Timer, ArrowUpRight, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Section } from "@/components/layout/Section";

import "swiper/css";
import "swiper/css/navigation";

// ---------------------------------------------------------------------------
// Dynamic data — max 10 cars
// ---------------------------------------------------------------------------

type Car = {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  locatedport: string;
  grade: string;
  engine: string;
  milege:string;
  price: string;
  href: string;
};
const cars: Car[] = [
  {
    id: "sf90",
    name: "Ferrari SF90 Stradale",
    subtitle: "Supercar",
    year: "2024",
    image: "https://picsum.photos/seed/windsor-auto-port/700/500",
    locatedport: "986 HP",
    grade: "S",
    engine: "1600 cc",
    milege: "50,000 km",
    price: "$625,000",
    href: "/inventory/sf90",
  },
  {
    id: "revuelto",
    name: "Lamborghini Revuelto",
    subtitle: "Hybrid Hypercar",
    year: "2024",
    image: "https://picsum.photos/seed/revuelto/600/450",
    locatedport: "1015 HP",
    grade: "S",
    engine: "1600 cc",
    milege: "50,000 km",
    price: "$699,000",
    href: "/inventory/revuelto",
  },
  {
    id: "gt3rs",
    name: "Porsche 911 GT3 RS",
    subtitle: "Track Beast",
    year: "2024",
    image: "https://picsum.photos/seed/gt3rs/600/450",
    locatedport: "525 HP",
    grade: "S",
     engine: "1600 cc",
    milege: "50,000 km",
    price: "$241,000",
    href: "/inventory/gt3rs",
  },
  {
    id: "gtr",
    name: "Nissan GT-R Nismo",
    subtitle: "Performance Icon",
    year: "2024",
    image: "https://picsum.photos/seed/gtr/600/450",
    locatedport: "600 HP",
    grade: "S",
    engine: "1600 cc",
    milege: "50,000 km",
    price: "$215,000",
    href: "/inventory/gtr",
  },
  {
    id: "amgt",
    name: "Mercedes-AMG GT",
    subtitle: "Grand Tourer",
    year: "2024",
    image: "https://picsum.photos/seed/amgt/600/450",
    locatedport: "577 HP",
    grade: "S",
    engine: "1600 cc",
    milege: "50,000 km",
    price: "$185,000",
    href: "/inventory/amgt",
  },
  {
    id: "r8",
    name: "Audi R8 V10 Performance",
    subtitle: "Everyday Supercar",
    year: "2024",
    image: "https://picsum.photos/seed/r8/600/450",
    locatedport: "602 HP",
    grade: "S",
    engine: "1600 cc",
    milege: "50,000 km",
    price: "$205,000",
    href: "/inventory/r8",
  },
  {
    id: "m4",
    name: "BMW M4 Competition",
    subtitle: "Sport Coupe",
    year: "2024",
    image: "https://picsum.photos/seed/m4/600/450",
    locatedport: "503 HP",
    grade: "S",
    engine: "1600 cc",
    milege: "50,000 km",
    price: "$92,000",
    href: "/inventory/m4",
  },
  {
    id: "z06",
    name: "Chevrolet Corvette Z06",
    subtitle: "American Muscle",
    year: "2024",
    image: "https://picsum.photos/seed/z06/600/450",
    locatedport: "670 HP",
    grade: "S",
    engine: "1600 cc",
    milege: "50,000 km",
    price: "$112,000",
    href: "/inventory/z06",
  },
];

// ---------------------------------------------------------------------------
// Card (same design as Top Picks)
// ---------------------------------------------------------------------------

function CarCard({ car }: { car: Car }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="group flex h-full flex-col overflow-hidden rounded-2xl border"
      style={{
        borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
        backgroundColor: "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-main/85 px-2.5 py-1 font-heading text-[11px] font-medium text-alt backdrop-blur-sm">
          {car.year}
        </span>

        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-label="Save to favorites"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-main/85 backdrop-blur-sm transition-colors hover:bg-main"
        >
          <Heart
            className={liked ? "h-4 w-4 fill-accent text-accent" : "h-4 w-4 text-alt"}
            strokeWidth={1.75}
          />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-base font-semibold leading-snug text-alt sm:text-lg">
            {car.name}
          </h3>
          <p className="mt-0.5 text-sm text-secondary">{car.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-x-4 gap-y-1.5 text-xs text-secondary">
          <span className="inline-flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
            {car.locatedport}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Timer className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
            {car.grade}
          </span>
        </div>
        <div   className="flex flex-wrap justify-between items-center gap-x-4 gap-y-1.5 text-xs text-secondary" >

          <span className="inline-flex items-center gap-1.5">
            <ArrowUpRight className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
            {car.engine}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ArrowUpRight className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
            {car.engine}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <p className="text-lg font-semibold text-accent">{car.price}</p>
          <Link
            href={car.href}
            aria-label={`View ${car.name}`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-main transition-transform duration-200 hover:scale-105"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export const LiveStock = () => {
  return (
    <Section id="live-stock" className="relative">
      <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
        <div>
          <span className="mb-2 block h-0.5 w-8 bg-accent" aria-hidden />
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
            Live Stock
          </h2>
        </div>

        <Link
          href="/inventory"
          className="inline-flex shrink-0 items-center gap-1.5 font-heading text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1.15}
        spaceBetween={20}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        // navigation
        breakpoints={{
          640: { slidesPerView: 2.1, spaceBetween: 20 },
          1024: { slidesPerView: 3.15, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="live-stock-swiper !pb-2"
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id} className="h-auto">
            <CarCard car={car} />
          </SwiperSlide>
        ))}
      </Swiper>

   
    </Section>
  );
};