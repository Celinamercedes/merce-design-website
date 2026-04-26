"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const usps = [
  {
    title: "Gestaltung mit Methode",
    text: "Ich arbeite mit Prinzipien wie dem goldenen Schnitt, Proportionslehre und Farbpsychologie. Nicht nach Gefühl, sondern mit Begründung.",
  },
  {
    title: "Räume, die etwas auslösen",
    text: "Ruhe, Energie, Geborgensein. Ich entwerfe nicht nur, was schön aussieht, sondern was du spüren sollst.",
  },
  {
    title: "Ein Auge, das Fehler sieht",
    text: "Ich erkenne, was andere übersehen. Und ich kombiniere Trends mit zeitlosem Design, damit dein Zuhause in zehn Jahren noch stimmt.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ueber-mich" className="bg-cream" ref={ref}>
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left: Celina photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative bg-navy min-h-[400px] lg:min-h-0"
        >
          <Image
            src="/images/celina.png"
            alt="Celina Mercedes Müller"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="font-serif text-cream text-2xl font-light italic">
              Celina Mercedes Müller
            </p>
            <p className="font-sans text-cream/70 text-xs tracking-widest uppercase mt-1">
              Interior Designerin · Würzburg
            </p>
          </div>
        </motion.div>

        {/* Right: text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="px-8 md:px-14 py-16 flex flex-col justify-center"
        >
          <p className="font-sans text-steel text-xs tracking-widest uppercase mb-4">
            Über mich
          </p>
          <h2 className="font-serif text-navy text-3xl md:text-4xl font-light leading-snug mb-6">
            Schluss mit Inspiration sammeln.{" "}
            <span className="italic">
              Ich gestalte passend für deine Räume.
            </span>
          </h2>
          <p className="font-sans text-navy/70 text-sm font-light leading-relaxed mb-4">
            Ich bin Celina – Interior Designerin aus Würzburg. Design ist für
            mich kein Beruf, sondern eine Haltung. Ich arbeite nicht nur nach
            Ästhetik, sondern frage mich immer: Wie soll sich dieser Raum
            anfühlen? Was soll er mit dir machen?
          </p>
          <p className="font-sans text-navy/70 text-sm font-light leading-relaxed mb-10">
            Jedes Projekt behandle ich wie mein eigenes. Nicht weil ich das so
            sagen soll – sondern weil ich gar nicht anders kann.
          </p>

          <div className="space-y-6">
            {usps.map((usp, i) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                className="border-l-2 border-steel/30 pl-5"
              >
                <h4 className="font-serif text-navy text-lg font-semibold mb-1">
                  {usp.title}
                </h4>
                <p className="font-sans text-navy/65 text-sm font-light leading-relaxed">
                  {usp.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
