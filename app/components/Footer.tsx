import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa6";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Service", href: "#service" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Social links */}
          <div className="space-y-3">
            <a
              href="mailto:celina.mercedes@web.de"
              className="flex items-center gap-3 font-sans text-cream/60 text-xs tracking-wide hover:text-cream transition-colors"
            >
              <FaEnvelope className="text-steel text-base flex-shrink-0" />
              <span>celina.mercedes@web.de</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 font-sans text-cream/60 text-xs tracking-wide hover:text-cream transition-colors"
            >
              <FaInstagram className="text-steel text-base flex-shrink-0" />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 font-sans text-cream/60 text-xs tracking-wide hover:text-cream transition-colors"
            >
              <FaTiktok className="text-steel text-base flex-shrink-0" />
              <span>TikTok</span>
            </a>
          </div>

          {/* Logo centered */}
          <div className="flex justify-center">
            <Image
              src="/images/logo-dark.png"
              alt="Merce.Design Interior"
              width={360}
              height={144}
              className="h-36 w-auto object-contain"
            />
          </div>

          {/* Nav + legal */}
          <div className="flex flex-col items-start md:items-end space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-cream/60 text-xs tracking-widest uppercase hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 mt-4 pt-4 border-t border-cream/10">
              <Link
                href="/datenschutz"
                className="font-sans text-cream/40 text-xs hover:text-cream/70 transition-colors"
              >
                Datenschutzerklärung
              </Link>
              <Link
                href="/impressum"
                className="font-sans text-cream/40 text-xs hover:text-cream/70 transition-colors"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 text-center">
          <p className="font-sans text-cream/30 text-xs">
            © {new Date().getFullYear()} Merce.Design Interior · Celina Mercedes Müller · Würzburg
          </p>
        </div>
      </div>
    </footer>
  );
}
