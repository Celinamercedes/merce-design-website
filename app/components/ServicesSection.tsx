"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import CallADesignerModal from "./CallADesignerModal";
import TransformationModal from "./TransformationModal";

const services = [
  {
    id: "call",
    title: "Call a Designer",
    subtitle: "90 Minuten Videokonferenz",
    description:
      "Du hast konkrete Fragen, ein Problem oder weißt einfach nicht, wo du anfangen sollst. In unserem virtuellen Call gehe ich mit dir durch alles – und du gehst mit konkreten Empfehlungen, einer Shoppingliste und einem ersten Raumkonzept raus.",
  },
  {
    id: "transformation",
    title: "Transformation",
    subtitle: "Umfangreiches Projekt",
    description:
      "Kein einzelner Call – sondern ein vollständiges Projekt. Hier gehen wir wirklich ins Detail. Je nach Paket unterscheidet sich der Umfang – aber der Anspruch bleibt derselbe: Schritt für Schritt, bis wirklich alles stimmt.",
  },
];

export default function ServicesSection() {
  const [callOpen, setCallOpen] = useState(false);
  const [transOpen, setTransOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section id="service" className="bg-warm-gray/40 py-20 px-6 md:px-12 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-steel text-xs tracking-widest uppercase mb-3">
            Leistungen
          </p>
          <h2 className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl font-light">
            Viele Wege führen zu deinem{" "}
            <span className="italic">Wohlfühl-Zuhause…</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.15 }}
              className="bg-navy rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="px-8 pt-10 pb-8 flex-1">
                <h3 className="font-serif text-cream text-3xl font-light mb-1">
                  {svc.title}
                </h3>
                <p className="font-sans text-steel text-xs tracking-widest uppercase mb-6">
                  {svc.subtitle}
                </p>
                <p className="font-sans text-cream/70 text-sm font-light leading-relaxed">
                  {svc.description}
                </p>
              </div>
              <div className="px-8 pb-8">
                <button
                  onClick={() =>
                    svc.id === "call" ? setCallOpen(true) : setTransOpen(true)
                  }
                  className="border border-cream/40 text-cream text-xs tracking-[0.2em] uppercase px-8 py-3 font-sans font-light hover:bg-cream hover:text-navy transition-all duration-300 w-full"
                >
                  Inhalt
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CallADesignerModal open={callOpen} onClose={() => setCallOpen(false)} />
      <TransformationModal open={transOpen} onClose={() => setTransOpen(false)} />
    </>
  );
}
