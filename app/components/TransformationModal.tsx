"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

type Feature = string;
type CheckValue = boolean | "text";

interface Package {
  name: string;
  price: string;
  tagline: string;
  checks: CheckValue[];
  individualText?: string;
}

const features: Feature[] = [
  "Moodboard",
  "Produktempfehlungen",
  "Grundriss-Visualisierung",
  "Realistische 3D-Visualisierung",
  "Detaillierte Shoppingliste",
  "Lichtkonzept",
  "Technische Zeichnungen",
  "2–3 Monate Nachbetreuung",
  "Saisonale Dekoration",
  "Hochwertiges Konzept-Booklet",
];

const packages: Package[] = [
  {
    name: "Essentials",
    price: "49 €/m²",
    tagline: "Für alle, die eine klare Richtung und erste Orientierung brauchen.",
    checks: [true, true, true, false, false, false, false, false, false, false],
  },
  {
    name: "Signature",
    price: "79 €/m²",
    tagline: "Für alle, die es vor dem Kauf wirklich sehen wollen.",
    checks: [true, true, true, true, true, true, true, false, false, false],
  },
  {
    name: "Prestige",
    price: "129 €/m²",
    tagline: "Für alle, die auch nach der Umsetzung begleitet werden möchten.",
    checks: [true, true, true, true, true, true, true, true, true, true],
  },
  {
    name: "Individuell",
    price: "Auf Anfrage",
    tagline: "Für alle, die genau wissen was sie brauchen oder es noch herausfinden wollen.",
    checks: ["text", "text", "text", "text", "text", "text", "text", "text", "text", "text"],
    individualText:
      "Einzelne Leistungen, Sonderprojekte oder individuelle Kombinationen. Beispielsweise reine 3D-Visualisierungen für Makler-Exposés, Shoppingbegleitung oder Projektmanagement. Preis und Umfang werden gemeinsam besprochen.",
  },
];

export default function TransformationModal({ open, onClose }: Props) {
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
            className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-cream shadow-2xl"
          >
            <div className="sticky top-0 bg-cream z-10 flex justify-between items-center px-6 pt-6 pb-2">
              <h2 className="font-serif text-navy text-2xl font-light">
                Transformation — Pakete
              </h2>
              <button
                onClick={onClose}
                className="text-navy/50 hover:text-navy transition-colors text-xl w-8 h-8 flex items-center justify-center"
                aria-label="Schließen"
              >
                ✕
              </button>
            </div>

            <div className="overflow-x-auto px-4 pb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 min-w-[600px] pt-4">
                {packages.map((pkg) => (
                  <div key={pkg.name} className="flex flex-col rounded-xl overflow-hidden">
                    {/* Card header */}
                    <div className="bg-navy px-5 pt-6 pb-12 relative">
                      <h3 className="font-serif text-cream text-2xl font-light text-center mb-4">
                        {pkg.name}
                      </h3>
                    </div>

                    {/* Price circle */}
                    <div className="flex justify-center -mt-8 mb-4 relative z-10">
                      <div className="w-20 h-20 rounded-full bg-cream border-2 border-steel/30 flex items-center justify-center shadow-md">
                        <span className="font-serif text-navy text-sm font-light text-center leading-tight px-1">
                          {pkg.price}
                        </span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="bg-cream flex-1 px-4 pb-4">
                      {pkg.individualText ? (
                        <p className="font-sans text-navy/80 text-xs font-light leading-relaxed mt-2">
                          {pkg.individualText}
                        </p>
                      ) : (
                        <ul className="space-y-2">
                          {features.map((feature, i) => {
                            const val = pkg.checks[i];
                            return (
                              <li key={feature} className="flex items-start gap-2">
                                <span
                                  className={`text-sm mt-0.5 flex-shrink-0 ${
                                    val === true ? "text-navy" : "text-steel/50"
                                  }`}
                                >
                                  {val === true ? "✓" : "○"}
                                </span>
                                <span
                                  className={`font-sans text-xs leading-relaxed ${
                                    val === true
                                      ? "text-navy/80"
                                      : "text-steel/60"
                                  }`}
                                >
                                  {feature}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>

                    {/* Tagline footer */}
                    <div className="bg-navy px-4 py-5 mt-2 rounded-b-xl">
                      <p className="font-serif text-cream text-center text-xs italic font-light leading-relaxed">
                        {pkg.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
