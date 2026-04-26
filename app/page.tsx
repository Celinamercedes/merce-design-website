import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import QuoteSection from "./components/QuoteSection";
import ProblemSection from "./components/ProblemSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <QuoteSection />
        <ProblemSection />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
