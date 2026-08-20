"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/data/nav";

type DropdownProps = {
  item: NavItem;
  onNavigate?: () => void;
};

export function Dropdown({ item, onNavigate }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    function handlePointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1.5 font-heading text-sm font-medium text-alt transition-colors hover:text-accent"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <span
          className={`inline-block text-[10px] leading-none transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▾
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="menu"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full z-50 min-w-48 pt-3"
          >
            <ul className="rounded-xl border border-secondary/15 bg-main py-2 shadow-[0_18px_50px_color-mix(in_srgb,var(--color-main)_80%,transparent)]">
              {item.children?.map((link) => (
                <li key={link.href} role="none">
                  <a
                    role="menuitem"
                    href={link.href}
                    className="block px-4 py-2 font-body text-sm text-secondary transition-colors hover:bg-alt/5 hover:text-accent"
                    onClick={() => {
                      setOpen(false);
                      onNavigate?.();
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
