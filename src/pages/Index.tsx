import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import PremiumSection from '@/components/PremiumSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <PremiumSection />
        <ContactSection />
      </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
