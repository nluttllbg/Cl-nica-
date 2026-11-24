import { AboutSection } from './components/AboutSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F8F5F0] text-[#352820]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TreatmentsSection />
        <ExperienceSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
