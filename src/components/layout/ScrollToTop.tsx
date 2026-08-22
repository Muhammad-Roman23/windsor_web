"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SIZE = 48;
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? scrollTop / docHeight : 0;

      setProgress(Math.min(1, Math.max(0, ratio)));
      setVisible(scrollTop > 200);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 12, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.85 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 z-50 flex items-center justify-center rounded-full bg-main/90 shadow-[0_10px_30px_color-mix(in_srgb,var(--color-main)_80%,transparent)] backdrop-blur transition-colors hover:bg-main"
          style={{ width: SIZE, height: SIZE }}
        >
          <svg
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="absolute inset-0 -rotate-90"
          >
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              strokeWidth={STROKE}
              className="stroke-secondary/15"
            />
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
              className="stroke-accent transition-[stroke-dashoffset] duration-150 ease-linear"
            />
          </svg>

          <span className="relative text-accent" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 19V5M12 5L5 12M12 5L19 12"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}