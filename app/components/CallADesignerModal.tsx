"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CallADesignerModal({ open, onClose }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-cream"
          >
            {/* Header */}
            <div className="bg-navy px-8 pt-10 pb-16 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-cream/60 hover:text-cream transition-colors text-xl"
                aria-label="Schließen"
              >
                ✕
              </button>
              <h2 className="font-serif text-cream text-3xl font-light text-center">
                Call a Designer
              </h2>
            </div>

            {/* Price circle */}
            <div className="flex justify-center -mt-10 mb-6">
              <div className="w-24 h-24 rounded-full bg-cream border-4 border-steel/30 flex items-center justify-center shadow-lg">
                <span className="font-serif text-navy text-lg font-light">
                  280 €
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 pb-6">
              <ul className="space-y-4 mb-8">
                {[
                  "Persönliche Beratung per virtuellem Call (90 Min.)",
                  "Shoppingliste mit konkreten Produktempfehlungen",
                  "Raumkonzept",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-navy mt-0.5 text-lg">•</span>
                    <span className="font-sans text-navy/80 text-sm font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="bg-navy px-8 py-6 rounded-b-2xl mx-4 mb-4 rounded-xl">
              <p className="font-serif text-cream text-center text-base italic font-light leading-relaxed">
                Für alle, die eine klare Richtung und erste Orientierung
                brauchen.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
