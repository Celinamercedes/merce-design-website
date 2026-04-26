"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream">
      {/* Problem block */}
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-warm-gray px-8 md:px-14 py-16 flex flex-col justify-center"
        >
          <h2 className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl font-light mb-10">
            Die ständige Unsicherheit…
          </h2>
          <ul className="space-y-5">
            {[
              "Wo fange ich an?",
              "Was muss ich beachten?",
              "Und warum sieht es trotzdem nicht so aus wie gedacht?",
            ].map((q) => (
              <li key={q} className="font-serif text-navy/80 text-xl md:text-2xl italic font-light">
                {q}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex flex-col justify-center"
        >
          <div className="relative h-64 lg:h-full min-h-[300px]">
            <Image
              src="/images/fuellbild1.png"
              alt="Materialproben und Designkonzept"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-cream px-8 md:px-12 py-10 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:bg-cream/95">
            <p className="font-sans text-navy/80 text-sm md:text-base leading-relaxed font-light max-w-lg">
              Viele Räume wirken irgendwie unfertig – nicht falsch, aber auch
              nicht richtig. Fehlkäufe stapeln sich, Möbel passen nicht, und
              das Gefühl von Zuhause bleibt aus. Nicht weil der Geschmack fehlt.
              Sondern weil Einrichten mehr ist als Möbel auswählen.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Solution block */}
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-8 md:px-14 py-16 flex flex-col justify-center order-2 lg:order-1"
        >
          <h2 className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Lehn dich zurück.
          </h2>
          <p className="font-sans text-navy/80 text-sm md:text-base leading-relaxed font-light mb-8 max-w-lg">
            Du bekommst Räume, die wirklich durchdacht sind. Ein Zuhause, das
            sich richtig für dich anfühlt.
          </p>
          <ul className="space-y-3">
            {[
              "Keine Fehlkäufe mehr",
              "Mehr Zeit für das, was zählt",
              "Räume, über die deine Gäste noch Wochen später sprechen",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-sans text-navy/80 text-sm font-light">
                <span className="text-steel mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex items-center justify-center bg-warm-gray/30 py-12 px-8 order-1 lg:order-2"
        >
          <div className="relative w-full h-72 lg:h-96">
            <div className="absolute top-4 right-4 md:right-8 w-48 md:w-56 h-64 md:h-72 shadow-xl rotate-3 overflow-hidden rounded-sm">
              <Image
                src="/images/moodboard.png"
                alt="Moodboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 md:left-8 w-44 md:w-52 h-60 md:h-68 shadow-xl -rotate-2 overflow-hidden rounded-sm">
              <Image
                src="/images/skizze.png"
                alt="Raumskizze"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:w-48 h-52 md:h-60 shadow-xl rotate-1 overflow-hidden rounded-sm">
              <Image
                src="/images/moodboard2.png"
                alt="Designkonzept"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
