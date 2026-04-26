"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs: { q: string; a: string }[] = [
  {
    q: "Kann ich nicht einfach KI für mein Interior nutzen?",
    a: "KI kann inspirieren – aber keine Person ersetzen, die deinen Raum und dich wirklich versteht. Meine Empfehlungen sind unabhängig, auf dein Budget abgestimmt und basieren auf echtem Fachwissen. Kein Algorithmus weiß, wie dein Licht um 17 Uhr fällt.",
  },
  {
    q: "Warum nicht einfach selbst einrichten?",
    a: "Kannst du. Aber Fehlkäufe summieren sich schneller als gedacht – finanziell und emotional. Als Expertin weiß ich, was zusammenpasst, bevor du kaufst. Und ich erkenne Fehler, die auf den ersten Blick unsichtbar sind.",
  },
  {
    q: "Wie lange dauert ein Projekt?",
    a: "Als Richtwert: ca. ein Monat pro 100 m². Die genaue Dauer hängt vom Paket und den Korrekturschleifen ab. Sobald deine Anfrage eingeht, reserviere ich deinen Slot.",
  },
  {
    q: "Ich habe bereits einen Architekten – brauche ich dann noch eine Interior Designerin?",
    a: "Ja – denn beide Berufe überschneiden sich kaum. Ein Architekt plant Struktur und Statik. Ich gestalte, was danach kommt: Atmosphäre, Materialien, Licht, Einrichtung. Wie sich dein Zuhause anfühlt, wenn du reinkommst.",
  },
  {
    q: "Wie läuft die Bezahlung ab?",
    a: "Ein \u201ECall a Designer\u201C wird vorab bezahlt. Bei Paketen erfolgt die Zahlung in transparenten Etappen – alles wird vorab schriftlich festgehalten, damit du jederzeit den Überblick hast.",
  },
  {
    q: "Warum ich die passende Interior Designerin bin?",
    a: "Design ist subjektiv – wenn dir gefällt, was du hier siehst, ist das schon ein gutes Zeichen. Was mich darüber hinaus auszeichnet: Ich arbeite nicht nur nach Ästhetik. Ich frage mich, wie ein Raum auf dich wirkt. Diese Frage steckt in jeder Entscheidung, die ich treffe.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="bg-cream py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="font-sans text-steel text-xs tracking-widest uppercase mb-3">
            Häufige Fragen
          </p>
          <h2 className="font-serif text-navy text-3xl md:text-4xl font-light">
            FAQs
          </h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-warm-gray">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-6 text-left group"
              >
                <span className="font-serif text-navy text-lg md:text-xl font-light group-hover:text-steel transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`text-steel text-xl flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-navy/70 text-sm font-light leading-relaxed pb-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
