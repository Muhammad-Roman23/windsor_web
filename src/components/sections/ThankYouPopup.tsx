
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
  buttonText = "Okay, Got it",
}: ThankYouPopupProps) {
  // ESC press & Scroll lock
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    const handler = (e: KeyboardEvent) =>
      e.key === "Escape" && onClose();

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
  className="w-full max-w-[420px] rounded-3xl border border-secondary/14 bg-white text-black shadow-2xl dark:bg-[#222326] dark:text-alt p-8 text-center"
>
              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/12">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl text-white">
                  ✓
                </div>
              </div>

        <h3 className="mt-5 text-2xl font-bold leading-tight text-black dark:text-alt">
  {title}
</h3>

<p className="mt-2 text-sm leading-6 text-gray-600 dark:text-secondary">
  {message}
</p>

              <button
                onClick={onClose}
                className="mt-6 w-full rounded-full bg-accent py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                {buttonText}
              </button>

              <button
                onClick={onClose}
                className="mt-3 text-xs font-medium text-secondary underline"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
