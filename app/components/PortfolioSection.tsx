"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const portfolioImages = [
  { src: "/images/portfolio/wohnzimmer.jpeg", alt: "Wohnzimmer" },
  { src: "/images/portfolio/wohnzimmer2.jpeg", alt: "Wohnzimmer 2" },
  { src: "/images/portfolio/wohnzimmer3.jpeg", alt: "Wohnzimmer 3" },
  { src: "/images/portfolio/kueche.jpeg", alt: "Küche" },
  { src: "/images/portfolio/kueche2.jpeg", alt: "Küche 2" },
  { src: "/images/portfolio/bad.jpeg", alt: "Badezimmer" },
  { src: "/images/portfolio/bad2.jpeg", alt: "Badezimmer 2" },
  { src: "/images/portfolio/arbeitszimmer.jpeg", alt: "Arbeitszimmer" },
  { src: "/images/portfolio/bar.jpeg", alt: "Bar" },
  { src: "/images/portfolio/kinderzimmer.jpeg", alt: "Kinderzimmer" },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="bg-cream py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h2 className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl font-light">
          Räume sprechen für sich.{" "}
          <span className="italic">Hier sprechen sie.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {portfolioImages.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className={`relative overflow-hidden group ${
              i === 0 || i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
            } ${i === 0 ? "lg:col-span-2" : ""}`}
          >
            <div className={`relative ${i === 0 ? "h-72 lg:h-96" : "h-64"}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
