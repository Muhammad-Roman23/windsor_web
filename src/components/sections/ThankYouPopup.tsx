"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ThankYouPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
}

export function ThankYouPopup({ 
  isOpen, 
  onClose, 
  title = "Thank You!", 
  message = "Your request has been submitted successfully. Our team will contact you within 24 hours.",
  buttonText = "Okay, Got it"
}: ThankYouPopupProps) {

  // ESC press & Scroll lock
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handler);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
          />
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[420px] rounded-3xl border p-8 text-center shadow-2xl"
              style={{
                backgroundColor: "var(--color-card, white)",
                borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                color: "var(--color-alt)"
              }}
            >
              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-xl text-white" style={{ backgroundColor: "var(--color-accent)" }}>✓</div>
              </div>

              <h3 className="mt-5 text-2xl font-bold leading-tight" style={{ color: "var(--color-alt)" }}>{title}</h3>
              <p className="mt-2 text-sm leading-6" style={{ color: "var(--color-secondary)" }}>{message}</p>

              <button
                onClick={onClose}
                className="mt-6 w-full rounded-full py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                {buttonText}
              </button>

              <button onClick={onClose} className="mt-3 text-xs font-medium underline" style={{ color: "var(--color-secondary)" }}>
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}