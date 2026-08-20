"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { NavItem } from "@/data/nav";

type MobileDropdownProps = {
  item: NavItem;
  onNavigate: () => void;
};

export function MobileDropdown({ item, onNavigate }: MobileDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-secondary/15">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-4 text-left font-heading text-lg font-medium text-alt"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <span
          className={`text-accent transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▾
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {item.children.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2.5 pl-1 font-body text-base leading-7 text-secondary transition-colors hover:text-accent"
                  onClick={onNavigate}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="h-2" aria-hidden />
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
