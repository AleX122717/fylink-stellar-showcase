import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SearchBar from '@/components/SearchBar';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import PremiumSection from '@/components/PremiumSection';
import ReviewsSection from '@/components/ReviewsSection';
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
        <div className="container mx-auto px-6 py-8">
          <SearchBar />
        </div>
        <FeaturesSection />
        <AboutSection />
        <PremiumSection />
        <ReviewsSection />
        <ContactSection />
      </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
