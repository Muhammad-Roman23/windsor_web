"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/data/nav";
import { site } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Dropdown } from "@/components/ui/Dropdown";
import { MobileDropdown } from "@/components/ui/MobileDropdown";

export function Navbar() {
  const [fixed, setFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setFixed(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`nav-section left-0 right-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          fixed ? "fixed top-0" : "absolute top-0"
        } ${
          fixed
            ? "border-b border-secondary/10 bg-main/90 shadow-[0_10px_40px_color-mix(in_srgb,var(--color-main)_55%,transparent)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto section-inner flex h-[var(--nav-height)] items-center justify-between ">
          <a href="#top" className="font-heading text-lg font-semibold tracking-tight text-alt">
            {site.name}
            <span className="text-accent">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navItems.map((item) => (

              
              <Dropdown key={item.label} item={item} />
             
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#contact" variant="accent">
              Request a Car
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary/20 text-alt md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-px w-4 bg-alt transition ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`block h-px w-4 bg-alt transition ${menuOpen ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-40 bg-main px-[var(--space-section-x)] pt-[calc(var(--nav-height)+1.5rem)] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {navItems.map((item) => (
                <MobileDropdown
                  key={item.label}
                  item={item}
                  onNavigate={() => setMenuOpen(false)}
                />
              ))}
              <div className="pt-6">
                <Button href="#contact" onClick={() => setMenuOpen(false)}>
                  Enquire
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
