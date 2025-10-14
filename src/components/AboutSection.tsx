import { Target, Eye, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import TypewriterText from './TypewriterText';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-title">
              {t.about.title.split(' ').slice(0, 2).join(' ')} <span className="text-accent color-animate">{t.about.title.split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="section-subtitle">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse color-animate">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.about.mission}</h3>
              <p className="text-muted-foreground">
                {t.about.missionDesc}
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse color-animate" style={{ animationDelay: '0.2s' }}>
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.about.vision}</h3>
              <p className="text-muted-foreground">
                {t.about.visionDesc}
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse color-animate" style={{ animationDelay: '0.4s' }}>
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.about.innovation}</h3>
              <p className="text-muted-foreground">
                {t.about.innovationDesc}
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-3xl p-12 text-center">
            <p className="text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="px-6 py-3 bg-primary/10 rounded-full color-animate">
                <span className="text-primary font-semibold">+10K</span> {t.footer.company === 'Company' ? 'Users' : 'Utilisateurs'}
              </div>
              <div className="px-6 py-3 bg-accent/10 rounded-full color-animate">
                <span className="text-accent font-semibold">99.9%</span> Uptime
              </div>
              <div className="px-6 py-3 bg-primary/10 rounded-full color-animate">
                <span className="text-primary font-semibold">24/7</span> Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
