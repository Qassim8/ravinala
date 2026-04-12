import FeaturesBar from "@/src/components/Features";
import Hero from "../src/components/HeroSection";
import AboutSection from "@/src/components/About";
import Services from "@/src/components/Services";
import Portfolio from "@/src/components/Portfolio";
import QuoteSection from "@/src/components/Quote";
import ContactSection from "@/src/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesBar />
      <AboutSection />
      <Services />
      <Portfolio />
      <QuoteSection />
      <ContactSection />
    </main>
  );
}
