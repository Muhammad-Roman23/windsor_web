"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Compass, PenTool, FlaskConical, Code2, Rocket } from "lucide-react";
import { Section } from "@/components/layout/Section";

// ---------------------------------------------------------------------------
// Dynamic process-step data
// ---------------------------------------------------------------------------

type ProcessStep = {
  id: string;
  icon: React.ElementType;
  title: string;
  duration: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    id: "research",
    icon: Search,
    title: "Research",
    duration: "1 Week",
    description:
      "We explore your users, market, and workflows to uncover what's really slowing growth down.",
  },
  {
    id: "strategy",
    icon: Compass,
    title: "Strategy",
    duration: "3-4 Days",
    description:
      "We turn research into a clear roadmap with priorities, scope, and metrics everyone agrees on.",
  },
  {
    id: "visual-design",
    icon: PenTool,
    title: "Visual Design",
    duration: "2 Weeks",
    description:
      "We build a clean, energetic design with easy navigation and visuals that keep people engaged.",
  },
  {
    id: "prototype-test",
    icon: FlaskConical,
    title: "Prototype & Test",
    duration: "1-2 Weeks",
    description:
      "We run multiple rounds of testing to make sure every flow feels smooth, secure, and reliable.",
  },
  {
    id: "development",
    icon: Code2,
    title: "Development",
    duration: "3-4 Weeks",
    description:
      "We build on a scalable stack, keeping performance and maintainability front and center.",
  },
  {
    id: "delivery",
    icon: Rocket,
    title: "Final Delivery",
    duration: "3-5 Days",
    description:
      "We wrap it up with a polished release and show you exactly how it drives value from day one.",
  },
];

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

// Builds a right-angle "step" connector with rounded corners, like a flowchart
// elbow line: down from the source, a rounded turn, across, another rounded
// turn, then down into the target. This is what the reference UI uses instead
// of a plain diagonal or a straight vertical line.
function buildStepPath(x1: number, y1: number, x2: number, y2: number, radius = 18) {
  if (Math.abs(x2 - x1) < 1) {
    return `M ${x1} ${y1} L ${x2} ${y2}`;
  }

  const midY = (y1 + y2) / 2;
  const sign = x2 > x1 ? 1 : -1;
  const r = Math.max(4, Math.min(radius, Math.abs(x2 - x1) / 2, Math.abs(y2 - y1) / 2));

  return `
    M ${x1} ${y1}
    L ${x1} ${midY - r}
    Q ${x1} ${midY} ${x1 + r * sign} ${midY}
    L ${x2 - r * sign} ${midY}
    Q ${x2} ${midY} ${x2} ${midY + r}
    L ${x2} ${y2}
  `;
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function computeConnectors() {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const rects = cardRefs.current.map((el) => el?.getBoundingClientRect());

      const newPaths: string[] = [];

      rects.forEach((rect, i) => {
        if (!rect) return;

        const next = rects[i + 1];
        if (!next) return;

        const x1 = rect.left + rect.width / 2 - containerRect.left;
        const y1 = rect.bottom - containerRect.top;
        const x2 = next.left + next.width / 2 - containerRect.left;
        const y2 = next.top - containerRect.top;

        newPaths.push(buildStepPath(x1, y1, x2, y2));
      });

      setPaths(newPaths);
      setReady(true);
    }

    computeConnectors();

    const raf = requestAnimationFrame(computeConnectors);
    window.addEventListener("resize", computeConnectors);

    const ro = new ResizeObserver(computeConnectors);
    if (containerRef.current) ro.observe(containerRef.current);
    cardRefs.current.forEach((el) => el && ro.observe(el));

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", computeConnectors);
      ro.disconnect();
    };
  }, []);

  return (
    <Section id="process" className="relative">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-xl text-center sm:mb-12">
        <span
          className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-heading text-[11px] uppercase tracking-[0.14em] text-secondary"
          style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 16%, transparent)" }}
        >
          006
          <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
          Our Process
        </span>

        <h2 className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
          How We Bring Ideas to Life
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
          Six steps, one team, zero guesswork &mdash; from first conversation to
          the day your product goes live.
        </p>
      </div>

      {/* Timeline */}
      <div ref={containerRef} className="relative mx-auto max-w-3xl">
        {/* Connector lines that follow the real card positions */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-500"
          style={{ opacity: ready ? 1 : 0 }}
          aria-hidden
        >
          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="var(--color-secondary)"
              strokeOpacity={0.4}
              strokeWidth={1.5}
              strokeDasharray="5 6"
              strokeLinecap="round"
            />
          ))}
        </svg>

        <ol className="flex flex-col gap-8 sm:gap-10">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            const isDark = i % 2 === 1;

            return (
              <li
                key={step.id}
                className={`relative flex ${isDark ? "md:justify-end" : "md:justify-start"}`}
              >
                <div
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="w-full md:w-[58%]"
                >
                  <div
                    className={`relative flex flex-col gap-3 overflow-hidden rounded-[1.5rem] p-5 pl-8 shadow-lg sm:gap-4 sm:p-6 sm:pl-9 ${
                      isDark ? "bg-alt text-main" : "text-alt"
                    }`}
                    style={
                      isDark
                        ? undefined
                        : { backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)" }
                    }
                  >
                    {/* Duration ribbon */}
                    <span
                      className="absolute -left-2 top-5 origin-left -rotate-90 whitespace-nowrap rounded-sm px-2 py-1 font-heading text-[10px] font-medium uppercase tracking-[0.08em]"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--color-accent) 55%, transparent)",
                        color: "var(--color-alt)",
                      }}
                    >
                      {step.duration}
                    </span>

                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: isDark
                            ? "color-mix(in srgb, var(--color-main) 90%, transparent)"
                            : "color-mix(in srgb, var(--color-accent) 22%, transparent)",
                        }}
                      >
                        <Icon className="h-[18px] w-[18px]" style={{ color: "var(--color-alt)" }} />
                      </span>

                      <h3
                        className={`text-base font-semibold leading-snug sm:text-lg ${
                          isDark ? "text-main" : "text-alt"
                        }`}
                      >
                        {i + 1} {step.title}
                      </h3>
                    </div>

                    <p
                      className="text-sm leading-relaxed sm:text-[0.9rem]"
                      style={{
                        color: isDark
                          ? "color-mix(in srgb, var(--color-main) 65%, transparent)"
                          : "var(--color-secondary)",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}