import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Merce.Design Interior — Celina Mercedes Müller",
  description:
    "Interior Design aus Würzburg. Dein Zuhause. Neu gedacht. Wirklich wohlfühlen.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
