"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="bg-navy py-20 px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="font-sans text-steel text-xs tracking-widest uppercase mb-4">
            Kontakt
          </p>
          <h2 className="font-serif text-cream text-4xl md:text-5xl font-light mb-3">
            Lass uns starten.
          </h2>
          <p className="font-sans text-cream/60 text-sm font-light leading-relaxed mb-10 max-w-md">
            Du hast eine Frage, eine Idee oder weißt noch nicht genau, was du
            brauchst – meld dich einfach. Ich melde mich innerhalb von 48
            Stunden.
          </p>

          {sent ? (
            <div className="bg-cream/10 border border-cream/20 rounded-xl p-8 text-center">
              <p className="font-serif text-cream text-2xl font-light mb-2">
                Vielen Dank!
              </p>
              <p className="font-sans text-cream/70 text-sm font-light">
                Ich melde mich innerhalb von 48 Stunden bei dir.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-sans text-cream/60 text-xs tracking-widest uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border border-cream/20 text-cream font-sans text-sm font-light px-4 py-3 focus:outline-none focus:border-cream/60 transition-colors placeholder:text-cream/30"
                  placeholder="Dein Name"
                />
              </div>
              <div>
                <label className="block font-sans text-cream/60 text-xs tracking-widest uppercase mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border border-cream/20 text-cream font-sans text-sm font-light px-4 py-3 focus:outline-none focus:border-cream/60 transition-colors placeholder:text-cream/30"
                  placeholder="deine@email.de"
                />
              </div>
              <div>
                <label className="block font-sans text-cream/60 text-xs tracking-widest uppercase mb-2">
                  Nachricht
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-transparent border border-cream/20 text-cream font-sans text-sm font-light px-4 py-3 focus:outline-none focus:border-cream/60 transition-colors resize-none placeholder:text-cream/30"
                  placeholder="Erzähl mir von deinem Projekt…"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cream text-navy font-sans text-xs tracking-[0.2em] uppercase py-4 hover:bg-warm-gray transition-colors duration-300"
              >
                Absenden
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden lg:block relative h-[500px]"
        >
          <Image
            src="/images/shaddow.jpg"
            alt="Kontakt"
            fill
            className="object-cover rounded-lg opacity-70"
          />
        </motion.div>
      </div>
    </section>
  );
}
