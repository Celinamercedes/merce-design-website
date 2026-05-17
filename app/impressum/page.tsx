import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata = {
  title: "Impressum – Merce.Design Interior",
};

export default function Impressum() {
  return (
    <>
      <Navigation />
      <main className="bg-cream min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-20">
        <article className="max-w-3xl mx-auto">

          <h1 className="font-serif text-navy text-4xl md:text-5xl font-light mb-12 pb-4 border-b border-warm-gray">
            Impressum
          </h1>

          {/* Angaben gem§ 5 TMG */}
          <section className="mb-10">
            <h2 className="font-serif text-navy text-2xl font-light mb-4 pb-2 border-b border-warm-gray/60">
              Angaben gem&auml;&szlig; &sect;&nbsp;5 TMG
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed font-light">
              Celina Mercedes M&uuml;ller<br />
              L&ouml;hrierther Str. 45<br />
              97616 Bad Neustadt an der Saale
            </p>
          </section>

          {/* Kontakt */}
          <section className="mb-10">
            <h2 className="font-serif text-navy text-2xl font-light mb-4 pb-2 border-b border-warm-gray/60">
              Kontakt
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed font-light">
              Telefon:{" "}
              <a
                href="tel:+4915163402122"
                className="text-navy hover:text-steel transition-colors"
              >
                +49 151 634 02122
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:celina@merce-design.de"
                className="text-navy hover:text-steel transition-colors"
              >
                celina@merce-design.de
              </a>
            </p>
          </section>

          {/* Steuernummer */}
          <section className="mb-10">
            <h2 className="font-serif text-navy text-2xl font-light mb-4 pb-2 border-b border-warm-gray/60">
              Steuernummer
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed font-light">
              Steuernummer: 206/252/90000<br />
              Zust&auml;ndiges Finanzamt: Finanzamt Bad Neustadt an der Saale
            </p>
          </section>

          {/* Kleinunternehmerregelung */}
          <section className="mb-10">
            <h2 className="font-serif text-navy text-2xl font-light mb-4 pb-2 border-b border-warm-gray/60">
              Hinweis zur Kleinunternehmerregelung
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed font-light">
              Gem&auml;&szlig; &sect;&nbsp;19 UStG wird keine Umsatzsteuer berechnet.
            </p>
          </section>

        </article>
      </main>
      <Footer />
    </>
  );
}
