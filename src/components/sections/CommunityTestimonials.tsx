"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Video, Feather } from "lucide-react";

// ---------------------------------------------------------------------------
// Dynamic testimonial data
// ---------------------------------------------------------------------------

type Client = {
  id: string;
  name: string;
  avatar: string;
  feedback: string[];
  // position as percentage from top-left of the container, avatar center = this point
  position: { top: string; left: string };
};

const clients: Client[] = [
  // Ring 3 (inner avatar ring) — 3 avatars
  {
    id: "amara",
    name: "Amara",
    avatar: "https://picsum.photos/seed/amara/160/160",
    feedback: [
      "I'm passionate about sharing not just the drinks, but the journey.",
      "I get to connect with you, share the wins and challenges, and grow a community that's as much about people as it is about matcha.",
      "Every cup is an invitation to be part of that story.",
    ],
    position: { top: "12%", left: "50%" },
  },
  {
    id: "leo",
    name: "Leo",
    avatar: "https://picsum.photos/seed/leo/160/160",
    feedback: [
      "For me, this brand is about honesty — no shortcuts, no filler.",
      "Every batch is tested, tasted and tweaked until it's right, because our name is on every cup that goes out.",
      "That care is what keeps people coming back.",
    ],
    position: { top: "69%", left: "83%" },
  },
  {
    id: "priya",
    name: "Priya",
    avatar: "https://picsum.photos/seed/priya/160/160",
    feedback: [
      "Community is the whole point — the product is just the reason we meet.",
      "I love seeing regulars turn into friends, and friends turn into people who bring their own friends along.",
      "That's the kind of growth that actually means something.",
    ],
    position: { top: "69%", left: "17%" },
  },

  // Ring 4 (outer avatar ring) — 3 avatars, offset for spread
  {
    id: "jonah",
    name: "Jonah",
    avatar: "https://picsum.photos/seed/jonah/160/160",
    feedback: [
      "I get to talk to people about something I genuinely love every single day.",
      "Hearing how a small ritual, like your morning cup, fits into someone's bigger story never gets old.",
      "It's a small thing that means a lot.",
    ],
    position: { top: "25%", left: "90%" },
  },
  {
    id: "maya",
    name: "Maya",
    avatar: "https://picsum.photos/seed/maya/160/160",
    feedback: [
      "What keeps me here is how personal it stays even as we grow.",
      "Every message, every order, every comment — I try to actually respond like a human, not a brand.",
      "People notice that, and they stick around because of it.",
    ],
    position: { top: "96%", left: "50%" },
  },
  {
    id: "eli",
    name: "Eli",
    avatar: "https://picsum.photos/seed/eli/160/160",
    feedback: [
      "I never expected a drink to become a reason people plan their day around.",
      "But that's what happens when you actually care about the small details — sourcing, taste, packaging, all of it.",
      "It adds up to something people trust.",
    ],
    position: { top: "25%", left: "10%" },
  },
];

const AUTOPLAY_MS = 5000;

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function CommunityTestimonials() {
  const [activeId, setActiveId] = useState(clients[0].id);
  const [paragraphIndex, setParagraphIndex] = useState(0);

  const active = clients.find((c) => c.id === activeId) ?? clients[0];

  const goToClient = useCallback((id: string) => {
    setActiveId(id);
    setParagraphIndex(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setParagraphIndex((prev) => {
        const isLast = prev >= active.feedback.length - 1;
        if (isLast) {
          const currentIdx = clients.findIndex((c) => c.id === activeId);
          const nextClient = clients[(currentIdx + 1) % clients.length];
          setActiveId(nextClient.id);
          return 0;
        }
        return prev + 1;
      });
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [activeId, active.feedback.length]);

  return (
    <section id="community" className="section">
      <div className="section-inner">
        <div className="relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[480px]">
          {/* 4 concentric rings, small to large */}
        {/* 4 concentric rings, small to large — animated + faded top/bottom */}
<div
  className="pointer-events-none absolute inset-0 flex items-center justify-center"
  style={{
    maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
    WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
  }}
>
  {[1, 2, 3, 4].map((ring) => (
    <span
      key={ring}
      className="absolute rounded-full border"
      style={{
        width: `${ring * 25}%`,
        paddingBottom: `${ring * 25}%`,
        borderColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)",
        animation: `ringPulse 6s ease-in-out ${ring * 0.4}s infinite`,
      }}
    />
  ))}
</div>

          {/* Avatars — only on ring 3 and ring 4 borders */}
          {clients.map((client, i) => {
            const isActive = client.id === activeId;
            return (
              <button
                key={client.id}
                type="button"
                onClick={() => goToClient(client.id)}
                aria-label={`Show ${client.name}'s feedback`}
                className="absolute z-10 flex items-center justify-center rounded-full p-1 transition-transform duration-300 hover:scale-105"
                style={{
                  top: client.position.top,
                  left: client.position.left,
                  transform: "translate(-50%, -50%)",
                  animation: `floatY 5s ease-in-out ${i * 0.35}s infinite`,
                  backgroundColor: isActive
                    ? "var(--color-accent)"
                    : "color-mix(in srgb, var(--color-main) 100%, transparent)",
                  boxShadow: isActive
                    ? "0 0 0 3px color-mix(in srgb, var(--color-accent) 40%, transparent)"
                    : "0 4px 14px color-mix(in srgb, var(--color-secondary) 20%, transparent)",
                }}
              >
                <span className="relative h-10 w-10 overflow-hidden rounded-full sm:h-12 sm:w-12">
                  <Image
                    src={client.avatar}
                    alt={client.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
              </button>
            );
          })}

          {/* Speech bubble — dead center, sits within the inner 3 rings */}
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <div
              key={`${activeId}-${paragraphIndex}`}
              className="relative z-20 w-full max-w-[220px] rounded-3xl px-5 py-5 shadow-xl opacity-0 animate-[bubbleFadeIn_0.6s_ease_forwards] sm:max-w-[250px] sm:px-6 sm:py-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              <p className="text-center text-sm leading-relaxed text-main sm:text-base">
                {active.feedback[paragraphIndex]}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-5">
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 rounded-full bg-alt px-7 py-3.5 font-heading text-sm font-medium text-main transition-opacity hover:opacity-90"
          >
            Join Waitlist
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="flex items-center gap-6 text-sm text-secondary">
            <Link href="/behind-the-scenes" className="inline-flex items-center gap-1.5 underline underline-offset-2 hover:text-alt">
              <Video className="h-4 w-4 text-accent" strokeWidth={1.75} />
              Behind-the-scenes
            </Link>
            <Link href="/story" className="inline-flex items-center gap-1.5 underline underline-offset-2 hover:text-alt">
              <Feather className="h-4 w-4 text-accent" strokeWidth={1.75} />
              How it all started
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes floatY {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        @keyframes bubbleFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}