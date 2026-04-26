import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata = {
  title: "Datenschutzerklaerung – Merce.Design Interior",
};

export default function Datenschutz() {
  return (
    <>
      <Navigation />
      <main className="bg-cream min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-20">
        <article className="max-w-3xl mx-auto">

          <h1 className="font-serif text-navy text-4xl md:text-5xl font-light mb-12 pb-4 border-b border-warm-gray">
            Datenschutzerkl&auml;rung
          </h1>

          {/* Praembel */}
          <section className="mb-10">
            <h2 id="m4158" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Pr&auml;ambel
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Mit der folgenden Datenschutzerkl&auml;rung m&ouml;chten wir Sie dar&uuml;ber aufkl&auml;ren, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als &bdquo;Daten&ldquo; bezeichnet) wir zu welchen Zwecken und in welchem Umfang im Rahmen der Bereitstellung unserer Applikation verarbeiten.
            </p>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
            </p>
            <p className="font-sans text-navy/70 text-sm leading-relaxed font-light">
              Stand: 26. April 2026
            </p>
          </section>

          {/* Inhaltsübersicht */}
          <section className="mb-10 bg-warm-gray/30 p-6 rounded-lg">
            <h2 className="font-serif text-navy text-xl font-light mb-4">Inhalts&uuml;bersicht</h2>
            <ul className="space-y-1">
              {[
                ["#m4158", "Präambel"],
                ["#m3", "Verantwortlicher"],
                ["#mOverview", "Übersicht der Verarbeitungen"],
                ["#m2427", "Maßgebliche Rechtsgrundlagen"],
                ["#m27", "Sicherheitsmaßnahmen"],
                ["#m12", "Allgemeine Informationen zur Datenspeicherung und Löschung"],
                ["#m10", "Rechte der betroffenen Personen"],
                ["#m317", "Geschäftliche Leistungen"],
                ["#m225", "Bereitstellung des Onlineangebots und Webhosting"],
                ["#m134", "Einsatz von Cookies"],
                ["#m182", "Kontakt- und Anfrageverwaltung"],
                ["#m136", "Präsenzen in sozialen Netzwerken (Social Media)"],
                ["#m15", "Änderung und Aktualisierung"],
                ["#m42", "Begriffsdefinitionen"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="font-sans text-steel text-sm hover:text-navy underline underline-offset-2 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Verantwortlicher */}
          <section className="mb-10">
            <h2 id="m3" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Verantwortlicher
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Celina Mercedes M&uuml;ller,<br />
              Merce.Design Interior, L&ouml;hriether Stra&szlig;e 45, 97616 Bad Neustadt an der Saale
            </p>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Vertretungsberechtigte Personen: Celina Mercedes M&uuml;ller
            </p>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              E-Mail-Adresse:{" "}
              <a href="mailto:celina.mercedes@web.de" className="text-steel underline hover:text-navy transition-colors">
                celina.mercedes@web.de
              </a>
            </p>
            <p className="font-sans text-navy/70 text-sm leading-relaxed font-light">
              Telefon: 015163402122
            </p>
          </section>

          {/* Übersicht der Verarbeitungen */}
          <section className="mb-10">
            <h2 id="mOverview" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              &Uuml;bersicht der Verarbeitungen
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-4 font-light">
              Die nachfolgende &Uuml;bersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
            </p>
            <h3 className="font-serif text-navy text-lg font-light mb-3 mt-6">Arten der verarbeiteten Daten</h3>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              {["Bestandsdaten.", "Beschäftigtendaten.", "Zahlungsdaten.", "Kontaktdaten.", "Inhaltsdaten.", "Vertragsdaten.", "Nutzungsdaten.", "Meta-, Kommunikations- und Verfahrensdaten.", "Protokolldaten."].map(item => (
                <li key={item} className="font-sans text-navy/70 text-sm font-light">{item}</li>
              ))}
            </ul>
            <h3 className="font-serif text-navy text-lg font-light mb-3 mt-6">Kategorien betroffener Personen</h3>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              {["Leistungsempfänger und Auftraggeber.", "Beschäftigte.", "Interessenten.", "Kommunikationspartner.", "Nutzer.", "Geschäfts- und Vertragspartner.", "Dritte Personen.", "Hinweisgeber."].map(item => (
                <li key={item} className="font-sans text-navy/70 text-sm font-light">{item}</li>
              ))}
            </ul>
            <h3 className="font-serif text-navy text-lg font-light mb-3 mt-6">Zwecke der Verarbeitung</h3>
            <ul className="list-disc pl-5 space-y-1">
              {["Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten.", "Kommunikation.", "Sicherheitsmaßnahmen.", "Büro- und Organisationsverfahren.", "Organisations- und Verwaltungsverfahren.", "Feedback.", "Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.", "Informationstechnische Infrastruktur.", "Hinweisgeberschutz.", "Öffentlichkeitsarbeit.", "Geschäftsprozesse und betriebswirtschaftliche Verfahren."].map(item => (
                <li key={item} className="font-sans text-navy/70 text-sm font-light">{item}</li>
              ))}
            </ul>
          </section>

          {/* Rechtsgrundlagen */}
          <section className="mb-10">
            <h2 id="m2427" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Ma&szlig;gebliche Rechtsgrundlagen
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-4 font-light">
              <strong className="text-navy font-medium">Ma&szlig;gebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie eine &Uuml;bersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten k&ouml;nnen.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {[
                ["Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)", "Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben."],
                ["Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)", "Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen."],
                ["Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)", "Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt."],
                ["Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)", "Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen."],
              ].map(([title, desc]) => (
                <li key={title} className="font-sans text-navy/70 text-sm font-light leading-relaxed">
                  <strong className="text-navy font-medium">{title}</strong> &ndash; {desc}
                </li>
              ))}
            </ul>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              <strong className="text-navy font-medium">Nationale Datenschutzregelungen in Deutschland:</strong> Zus&auml;tzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu geh&ouml;rt insbesondere das Bundesdatenschutzgesetz (BDSG).
            </p>
          </section>

          {/* Sicherheitsmaßnahmen */}
          <section className="mb-10">
            <h2 id="m27" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Sicherheitsma&szlig;nahmen
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Wir treffen nach Ma&szlig;gabe der gesetzlichen Vorgaben unter Ber&uuml;cksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umst&auml;nde und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausma&szlig;es der Bedrohung der Rechte und Freiheiten nat&uuml;rlicher Personen geeignete technische und organisatorische Ma&szlig;nahmen, um ein dem Risiko angemessenes Schutzniveau zu gew&auml;hrleisten.
            </p>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Zu den Ma&szlig;nahmen geh&ouml;ren insbesondere die Sicherung der Vertraulichkeit, Integrit&auml;t und Verf&uuml;gbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verf&uuml;gbarkeit und ihrer Trennung.
            </p>
            <p className="font-sans text-navy/70 text-sm leading-relaxed font-light">
              <strong className="text-navy font-medium">TLS-/SSL-Verschl&uuml;sselung (HTTPS):</strong> Um die Daten der Nutzer, die &uuml;ber unsere Online-Dienste &uuml;bertragen werden, vor unerlaubten Zugriffen zu sch&uuml;tzen, setzen wir auf die TLS-/SSL-Verschl&uuml;sselungstechnologie.
            </p>
          </section>

          {/* Datenspeicherung */}
          <section className="mb-10">
            <h2 id="m12" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Allgemeine Informationen zur Datenspeicherung und L&ouml;schung
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Wir l&ouml;schen personenbezogene Daten, die wir verarbeiten, gem&auml;&szlig; den gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen f&uuml;r die Verarbeitung bestehen.
            </p>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-4 font-light">
              <strong className="text-navy font-medium">Aufbewahrungsfristen nach deutschem Recht:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              {[
                "10 Jahre – Bücher und Aufzeichnungen, Jahresabschlüsse, Inventare (§ 147 AO, § 257 HGB).",
                "8 Jahre – Buchungsbelege, Rechnungen und Kostenbelege (§ 147 AO, § 257 HGB).",
                "6 Jahre – Übrige Geschäftsunterlagen, empfangene und abgesandte Handelsschreiben (§ 147 AO, § 257 HGB).",
                "3 Jahre – Daten für potenzielle Gewährleistungs- und Schadensersatzansprüche (§§ 195, 199 BGB).",
              ].map(item => (
                <li key={item} className="font-sans text-navy/70 text-sm font-light leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>

          {/* Rechte der betroffenen Personen */}
          <section className="mb-10">
            <h2 id="m10" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Rechte der betroffenen Personen
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-4 font-light">
              Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              {[
                ["Widerspruchsrecht", "Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen."],
                ["Widerrufsrecht bei Einwilligungen", "Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen."],
                ["Auskunftsrecht", "Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten."],
                ["Recht auf Berichtigung", "Sie haben das Recht, die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen."],
                ["Recht auf Löschung und Einschränkung der Verarbeitung", "Sie haben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden."],
                ["Recht auf Datenübertragbarkeit", "Sie haben das Recht, Sie betreffende Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten."],
                ["Beschwerde bei Aufsichtsbehörde", "Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts."],
              ].map(([title, desc]) => (
                <li key={title} className="font-sans text-navy/70 text-sm font-light leading-relaxed">
                  <strong className="text-navy font-medium">{title}:</strong> {desc}
                </li>
              ))}
            </ul>
          </section>

          {/* Geschäftliche Leistungen */}
          <section className="mb-10">
            <h2 id="m317" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Gesch&auml;ftliche Leistungen
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Wir verarbeiten personenbezogene Daten unserer Vertrags- und Gesch&auml;ftspartner, etwa Kunden, Auftraggeber, Interessenten, Lieferanten und sonstige Kooperationspartner, zur Anbahnung, Durchf&uuml;hrung und Abwicklung von Vertragsverh&auml;ltnissen sowie vergleichbaren Rechtsverh&auml;ltnissen. Dies umfasst auch vorvertragliche Ma&szlig;nahmen, die auf Anfrage erfolgen, sowie die Kommunikation im Zusammenhang mit dem jeweiligen Vertragsverh&auml;ltnis.
            </p>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Die Verarbeitung dient insbesondere der Erf&uuml;llung unserer vertraglichen Haupt- und Nebenpflichten. Hierzu z&auml;hlen die Erbringung der vereinbarten Leistungen, etwaige Aktualisierungs- und Informationspflichten, die Bearbeitung von Gew&auml;hrleistungs- und sonstigen Leistungsst&ouml;rungen.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="font-sans text-navy/70 text-sm font-light leading-relaxed"><strong className="text-navy font-medium">Verarbeitete Datenarten:</strong> Bestandsdaten; Zahlungsdaten; Kontaktdaten; Vertragsdaten.</li>
              <li className="font-sans text-navy/70 text-sm font-light leading-relaxed"><strong className="text-navy font-medium">Betroffene Personen:</strong> Leistungsempfänger und Auftraggeber; Interessenten; Geschäfts- und Vertragspartner.</li>
              <li className="font-sans text-navy/70 text-sm font-light leading-relaxed"><strong className="text-navy font-medium">Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
          </section>

          {/* Webhosting */}
          <section className="mb-10">
            <h2 id="m225" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Bereitstellung des Onlineangebots und Webhosting
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verf&uuml;gung stellen zu k&ouml;nnen. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endger&auml;t der Nutzer zu &uuml;bermitteln.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="font-sans text-navy/70 text-sm font-light leading-relaxed"><strong className="text-navy font-medium">Verarbeitete Datenarten:</strong> Nutzungsdaten; Meta-, Kommunikations- und Verfahrensdaten; Protokolldaten.</li>
              <li className="font-sans text-navy/70 text-sm font-light leading-relaxed"><strong className="text-navy font-medium">Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
              <li className="font-sans text-navy/70 text-sm font-light leading-relaxed"><strong className="text-navy font-medium">Logfiles:</strong> Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert.</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 id="m134" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Einsatz von Cookies
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Unter dem Begriff &bdquo;Cookies&ldquo; werden Funktionen, die Informationen auf Endgeräten der Nutzer speichern und aus ihnen auslesen, verstanden. Wir verwenden Cookies gemäß den gesetzlichen Vorschriften. Dazu holen wir, wenn erforderlich, vorab die Zustimmung der Nutzer ein. Ist eine Zustimmung nicht notwendig, setzen wir auf unsere berechtigten Interessen.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="font-sans text-navy/70 text-sm font-light leading-relaxed"><strong className="text-navy font-medium">Temporäre Cookies (Session-Cookies):</strong> Werden spätestens gelöscht, nachdem ein Nutzer ein Onlineangebot verlassen und sein Endgerät geschlossen hat.</li>
              <li className="font-sans text-navy/70 text-sm font-light leading-relaxed"><strong className="text-navy font-medium">Permanente Cookies:</strong> Bleiben auch nach dem Schließen des Endgeräts gespeichert. Die Speicherdauer kann bis zu zwei Jahre betragen.</li>
            </ul>
          </section>

          {/* Kontakt */}
          <section className="mb-10">
            <h2 id="m182" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Kontakt- und Anfrageverwaltung
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="font-sans text-navy/70 text-sm font-light leading-relaxed"><strong className="text-navy font-medium">Verarbeitete Datenarten:</strong> Kontaktdaten; Inhaltsdaten; Meta-, Kommunikations- und Verfahrensdaten.</li>
              <li className="font-sans text-navy/70 text-sm font-light leading-relaxed"><strong className="text-navy font-medium">Betroffene Personen:</strong> Kommunikationspartner.</li>
              <li className="font-sans text-navy/70 text-sm font-light leading-relaxed"><strong className="text-navy font-medium">Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</li>
            </ul>
          </section>

          {/* Social Media */}
          <section className="mb-10">
            <h2 id="m136" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Präsenzen in sozialen Netzwerken (Social Media)
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen über uns anzubieten.
            </p>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so zum Beispiel die Durchsetzung der Nutzerrechte erschwert werden könnte.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="font-sans text-navy/70 text-sm font-light leading-relaxed">
                <strong className="text-navy font-medium">Instagram:</strong> Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.{" "}
                <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer" className="text-steel underline hover:text-navy transition-colors">
                  Datenschutzerklärung Instagram
                </a>.{" "}
                <strong className="text-navy font-medium">Rechtsgrundlage:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
              </li>
            </ul>
          </section>

          {/* Änderung */}
          <section className="mb-10">
            <h2 id="m15" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Änderung und Aktualisierung
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-3 font-light">
              Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen.
            </p>
          </section>

          {/* Begriffsdefinitionen */}
          <section className="mb-10">
            <h2 id="m42" className="font-serif text-navy text-2xl font-light mb-4 mt-10 pb-2 border-b border-warm-gray/60">
              Begriffsdefinitionen
            </h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed mb-4 font-light">
              In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten.
            </p>
            <dl className="space-y-4">
              {[
                ["Personenbezogene Daten", "Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen identifiziert werden kann."],
                ["Verarbeitung", "Jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten."],
                ["Verantwortlicher", "Die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet."],
                ["Bestandsdaten", "Wesentliche Informationen, die für die Identifikation und Verwaltung von Vertragspartnern, Benutzerkonten, Profilen und ähnlichen Zuordnungen notwendig sind."],
                ["Nutzungsdaten", "Informationen, die erfassen, wie Nutzer mit digitalen Produkten, Dienstleistungen oder Plattformen interagieren."],
                ["Kontaktdaten", "Essentielle Informationen, die die Kommunikation mit Personen oder Organisationen ermöglichen, wie Telefonnummern, Adressen und E-Mail-Adressen."],
                ["Vertragsdaten", "Spezifische Informationen, die sich auf die Formalisierung einer Vereinbarung zwischen zwei oder mehr Parteien beziehen."],
                ["Zahlungsdaten", "Sämtliche Informationen, die zur Abwicklung von Zahlungstransaktionen zwischen Käufern und Verkäufern benötigt werden."],
                ["Protokolldaten", "Informationen über Ereignisse oder Aktivitäten, die in einem System oder Netzwerk protokolliert wurden, wie Zeitstempel, IP-Adressen und Benutzeraktionen."],
              ].map(([term, def]) => (
                <div key={term}>
                  <dt className="font-serif text-navy text-base font-semibold mb-1">{term}</dt>
                  <dd className="font-sans text-navy/70 text-sm font-light leading-relaxed pl-4 border-l border-warm-gray">{def}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Seal */}
          <p className="mt-12 pt-6 border-t border-warm-gray font-sans text-navy/40 text-xs">
            Erstellt mit kostenlosem{" "}
            <a href="https://datenschutz-generator.de/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-navy/70 transition-colors">
              Datenschutz-Generator.de von Dr. Thomas Schwenke
            </a>
          </p>

        </article>
      </main>
      <Footer />
    </>
  );
}
