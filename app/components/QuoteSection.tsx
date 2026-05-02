"use client";

import { TextRevealByWord } from "@/app/components/ui/text-reveal";

const quoteText =
  "Wir verbringen mehr als zwei Drittel unseres Lebens in unseren vier Wänden. Dein Zuhause sollte kein Kompromiss sein.";

export default function QuoteSection() {
  return (
    <section className="bg-cream">
      <TextRevealByWord text={quoteText} />
    </section>
  );
}
