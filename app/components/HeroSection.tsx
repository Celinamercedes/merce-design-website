"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-serif text-cream font-light leading-[1.1] mb-10">
            <span className="block text-5xl md:text-7xl lg:text-8xl">
              Dein Zuhause.
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl">
              Neu gedacht.
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl italic">
              Wirklich wohlfühlen.
            </span>
          </h1>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            onClick={() => handleScroll("#portfolio")}
            className="border border-cream text-cream text-xs tracking-[0.2em] uppercase px-10 py-4 font-sans font-light hover:bg-cream hover:text-navy transition-all duration-300"
          >
            Aktuelle Projekte
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
