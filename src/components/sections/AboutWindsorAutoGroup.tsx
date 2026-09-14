"use client";

import Link from "next/link";

// ---------------------------------------------------------------------------
// Copy — key phrases wrapped so we can highlight them inline
// ---------------------------------------------------------------------------

export function AboutWindsorCard() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div
          className="relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20"
          style={{ backgroundColor: "var(--color-main)" }}
        >
          {/* corner glows, built from the theme's own accent + secondary */}
          <span
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 35%, transparent)" }}
          />
          <span
            className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full blur-3xl"
            style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 30%, transparent)" }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-medium text-secondary">About</p>

            <h2 className="mt-3 font-heading text-4xl text-alt sm:text-5xl lg:text-6xl">
              Windsor <span className="text-accent">Auto</span> Group
            </h2>

            <div className="mt-8 space-y-5 text-center text-[15px] leading-relaxed text-secondary sm:text-base">
              <p>
              Windsor Auto Group is a Japanese used car supplier focused on connecting international automotive businesses with the Japanese vehicle market.
We understand that buying vehicles internationally is about more than finding a low price. Dealers and importers need dependable sourcing, clear vehicle information, consistent communication and a process they can rely on when purchasing vehicles from Japan.

              </p>

              <p>
            That is why Windsor Auto Group works closely with professional buyers to understand what they need, identify suitable vehicles and coordinate the important steps involved in sourcing and supplying vehicles from Japan.
Our approach combines access to Japanese vehicle stock and auction opportunities with practical sourcing support, helping businesses find vehicles for resale, customer orders and ongoing dealership inventory.

              </p>

              <p>
             Whether you are looking for a Toyota from Japan, a Japanese SUV, a hybrid vehicle, a premium European car or a specific auction vehicle, Windsor Auto Group gives you a direct route to vehicle sourcing opportunities within Japan.
              </p>
            </div>

            <Link
              href="/waitlist"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-alt px-7 py-3.5 font-heading text-sm font-medium text-main transition-opacity hover:opacity-90"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}