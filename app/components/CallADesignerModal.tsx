"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const items = [
  "Persönliche Beratung per virtuellem Call (90 Min.)",
  "Shoppingliste mit konkreten Produktempfehlungen",
  "Raumkonzept",
];

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
            className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-cream flex flex-col"
          >
            {/* Header — gleich wie Transformation-Karten */}
            <div className="bg-navy px-6 pt-6 pb-12 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-cream/50 hover:text-cream transition-colors text-xl w-8 h-8 flex items-center justify-center"
                aria-label="Schließen"
              >
                ✕
              </button>
              <h2 className="font-serif text-cream text-2xl font-light text-center">
                Call a Designer
              </h2>
            </div>

            {/* Preiskreis — vollständig unterhalb des Headers */}
            <div className="flex justify-center -mt-8 mb-4 relative z-10">
              <div className="w-20 h-20 rounded-full bg-cream border-2 border-steel/30 flex items-center justify-center shadow-md">
                <span className="font-serif text-navy text-sm font-light text-center leading-tight px-1">
                  280 €
                </span>
              </div>
            </div>

            {/* Inhalt */}
            <div className="bg-cream flex-1 px-5 pb-4">
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-navy text-sm mt-0.5 flex-shrink-0">✓</span>
                    <span className="font-sans text-navy/80 text-xs font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer — gleich wie Transformation-Karten */}
            <div className="bg-navy px-5 py-5 mt-2 rounded-b-2xl">
              <p className="font-serif text-cream text-center text-xs italic font-light leading-relaxed">
                Für alle, die eine klare Richtung und erste Orientierung brauchen.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
