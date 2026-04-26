"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function QuoteSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-cream py-24 px-6 md:px-12 lg:px-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="font-serif text-navy text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
          Wir verbringen mehr als zwei Drittel unseres Lebens in unseren vier
          Wänden.{" "}
          <span className="font-semibold italic">
            Dein Zuhause sollte kein Kompromiss sein.
          </span>
        </p>
      </motion.div>
    </section>
  );
}
