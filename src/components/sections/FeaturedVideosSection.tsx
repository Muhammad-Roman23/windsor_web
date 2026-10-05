"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Play, X } from "lucide-react";

// ---------------------------------------------------------------------------
// BG Image - yahan apni image ka link dal do
// ---------------------------------------------------------------------------
const BG_IMAGE = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80";

// ---------------------------------------------------------------------------
// Videos Data - youtube id dal do, thumb auto aayega
// ---------------------------------------------------------------------------
const videos = [
  { id: "dQw4w9WgXcQ", title: "JAPANESE CAR DELIVERY" },
  { id: "dQw4w9WgXcQ", title: "NOBUKO DELIVERS" },
  { id: "dQw4w9WgXcQ", title: "DELIVERED IN IRELAND" },
  { id: "dQw4w9WgXcQ", title: "TOYOTA CAMRY ARRIVES" },
  { id: "dQw4w9WgXcQ", title: "AUDI A3 DELIVERED" },
  { id: "dQw4w9WgXcQ", title: "How We Export Cars" },
  { id: "dQw4w9WgXcQ", title: "JAPAN CAR REVIEW" },
  { id: "dQw4w9WgXcQ", title: "VINTAGE COLLECTION" },
  { id: "dQw4w9WgXcQ", title: "SEALED CONTAINERS" },
];

// ---------------------------------------------------------------------------
// Motion - tumhara same flow
// ---------------------------------------------------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function FeaturedVideosSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="featured-videos" className="section relative overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark Overlay taake content clear lage - variable based */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-main) 86%, transparent)",
          backdropFilter: "blur(1px)",
        }}
      />

      <div className="section-inner relative">
        
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight font-extrabold sm:text-4xl md:text-[2.75rem]"
          >
            Featured <span style={{ color: "var(--color-accent)" }}>Videos</span>
          </motion.h2>
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-1 text-sm font-medium tracking-wide text-secondary"
          >
            Testimonials
          </motion.p>
        </div>

        {/* Video Grid - Reference jaisa 3 col */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardIn}
              onClick={() => setActiveVideo(video.id)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border"
              style={{
                borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                backgroundColor: "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
              }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
                
                {/* Play Button - variable accent */}
                <span
                  className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--color-accent) 92%, transparent)",
                    boxShadow: "0 8px 25px color-mix(in srgb, var(--color-accent) 40%, transparent)",
                  }}
                >
                  <Play className="h-5 w-5 fill-white text-white ml-[2px]" />
                </span>

                {/* Title Top */}
                <span className="absolute left-2 top-2 rounded bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  {video.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal - Click pe play */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}