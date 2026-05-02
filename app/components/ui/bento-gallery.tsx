"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

export interface ImageItem {
  id: number;
  title: string;
  desc: string;
  url: string;
  span: string;
}

interface BentoGalleryProps {
  items: ImageItem[];
  title?: string;
  description?: string;
}

function BentoItem({ item, onClick }: { item: ImageItem; onClick: (item: ImageItem) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      onClick={() => onClick(item)}
      className={cn(
        "relative overflow-hidden cursor-pointer group rounded-sm",
        item.span
      )}
    >
      <Image
        src={item.url}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-500 flex items-end">
        <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 p-5 w-full">
          <p className="font-serif text-cream text-xl font-light">{item.title}</p>
          {item.desc && (
            <p className="font-sans text-cream/80 text-xs tracking-wide mt-1">{item.desc}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ImageModal({ item, onClose }: { item: ImageItem; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-navy/90 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        className="relative max-w-4xl w-full max-h-[85vh] bg-navy rounded-sm shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full flex-1 min-h-0 overflow-hidden rounded-t-sm">
          <Image
            src={item.url}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 900px"
          />
        </div>
        <div className="flex-shrink-0 px-6 py-4 bg-navy">
          <h3 className="font-serif text-cream text-2xl font-light">{item.title}</h3>
          {item.desc && (
            <p className="font-sans text-cream/60 text-sm tracking-wide mt-1">{item.desc}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-navy/80 text-cream rounded-full p-2 hover:bg-navy transition-colors"
          aria-label="Schließen"
        >
          <X size={20} />
        </button>
      </motion.div>
    </motion.div>
  );
}

export function BentoGallery({ items, title, description }: BentoGalleryProps) {
  const [selected, setSelected] = useState<ImageItem | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const delta = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - delta;
  }, []);

  const stopDrag = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }, []);

  const handleItemClick = useCallback((item: ImageItem) => {
    if (!isDragging.current) setSelected(item);
  }, []);

  return (
    <section id="portfolio" className="bg-cream py-20 overflow-hidden">
      {(title || description) && (
        <div className="text-center mb-12 px-6">
          {title && (
            <h2 className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl font-light">
              {title}
            </h2>
          )}
          {description && (
            <p className="font-sans text-steel text-sm tracking-wide mt-4">{description}</p>
          )}
        </div>
      )}

      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        className="flex gap-3 px-6 md:px-12 lg:px-20 overflow-x-auto scrollbar-hide select-none"
        style={{ cursor: "grab", WebkitOverflowScrolling: "touch" }}
      >
        {items.map((item) => (
          <BentoItem key={item.id} item={item} onClick={handleItemClick} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ImageModal item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
