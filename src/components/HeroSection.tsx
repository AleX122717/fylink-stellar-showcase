import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-8 border border-border color-animate">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">{t.hero.tagline}</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent color-animate">
              {t.hero.title}
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed min-h-[4em]">
            <TypewriterText texts={t.hero.subtitle} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 color-animate">
              {t.hero.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 bg-secondary hover:bg-muted text-foreground rounded-xl font-semibold text-lg transition-all hover:scale-105">
              {t.hero.learnMore}
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>{t.hero.automation}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>{t.hero.security}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
          <div className="w-1.5 h-3 bg-muted-foreground rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
