"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BentoGallery } from "@/app/components/ui/bento-gallery";
import type { ImageItem } from "@/app/components/ui/bento-gallery";

const items: ImageItem[] = [
  {
    id: 1,
    title: "Wohnzimmer",
    desc: "Zeitlose Eleganz trifft Wohnkomfort",
    url: "/images/portfolio/wohnzimmer.jpeg",
    span: "min-w-[420px] h-[320px] md:min-w-[520px] md:h-[380px]",
  },
  {
    id: 2,
    title: "Wohnzimmer",
    desc: "Warme Materialien, ruhige Farbwelt",
    url: "/images/portfolio/wohnzimmer2.jpeg",
    span: "min-w-[300px] h-[320px] md:min-w-[360px] md:h-[380px]",
  },
  {
    id: 3,
    title: "Wohnzimmer",
    desc: "Offenes Raumgefühl mit klarer Linie",
    url: "/images/portfolio/wohnzimmer3.jpeg",
    span: "min-w-[420px] h-[320px] md:min-w-[520px] md:h-[380px]",
  },
  {
    id: 4,
    title: "Küche",
    desc: "Funktional und schön zugleich",
    url: "/images/portfolio/kueche.jpeg",
    span: "min-w-[300px] h-[320px] md:min-w-[360px] md:h-[380px]",
  },
  {
    id: 5,
    title: "Küche",
    desc: "Modernes Design trifft Alltagstauglichkeit",
    url: "/images/portfolio/kueche2.jpeg",
    span: "min-w-[360px] h-[320px] md:min-w-[440px] md:h-[380px]",
  },
  {
    id: 6,
    title: "Badezimmer",
    desc: "Spa-Atmosphäre für zu Hause",
    url: "/images/portfolio/bad.jpeg",
    span: "min-w-[300px] h-[320px] md:min-w-[360px] md:h-[380px]",
  },
  {
    id: 7,
    title: "Badezimmer",
    desc: "Klare Formen, edles Material",
    url: "/images/portfolio/bad2.jpeg",
    span: "min-w-[420px] h-[320px] md:min-w-[500px] md:h-[380px]",
  },
  {
    id: 8,
    title: "Arbeitszimmer",
    desc: "Konzentration durch Gestaltung",
    url: "/images/portfolio/arbeitszimmer.jpeg",
    span: "min-w-[300px] h-[320px] md:min-w-[360px] md:h-[380px]",
  },
  {
    id: 9,
    title: "Bar",
    desc: "Gastlichkeit als Designprinzip",
    url: "/images/portfolio/bar.jpeg",
    span: "min-w-[360px] h-[320px] md:min-w-[440px] md:h-[380px]",
  },
  {
    id: 10,
    title: "Kinderzimmer",
    desc: "Kreativität braucht den richtigen Raum",
    url: "/images/portfolio/kinderzimmer.jpeg",
    span: "min-w-[420px] h-[320px] md:min-w-[520px] md:h-[380px]",
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <BentoGallery
          items={items}
          title="Räume sprechen für sich. Hier sprechen sie."
        />
      </motion.div>
    </>
  );
}
