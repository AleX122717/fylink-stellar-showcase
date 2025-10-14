import { Shield, Zap, Flame, Settings, Sparkles, Lock } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import TypewriterText from './TypewriterText';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const features = [
    { icon: Shield, key: 'security', color: 'text-blue-500', animation: 'hover:rotate-12' },
    { icon: Zap, key: 'speed', color: 'text-yellow-500', animation: 'hover:scale-110' },
    { icon: Flame, key: 'power', color: 'text-orange-500', animation: 'hover:rotate-6' },
    { icon: Settings, key: 'automation', color: 'text-purple-500', animation: 'hover:rotate-180' },
    { icon: Sparkles, key: 'innovation', color: 'text-pink-500', animation: 'hover:scale-110' },
    { icon: Lock, key: 'reliability', color: 'text-green-500', animation: 'hover:-rotate-12' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.feature-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title">
            {t.features.title.split(' ')[0]} <span className="text-primary color-animate">{t.features.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="section-subtitle animate-fade-in">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const featureData = t.features[feature.key as keyof typeof t.features] as { title: string; description: string };
            return (
              <div
                key={index}
                className="feature-card opacity-0 group p-8 bg-card border border-border rounded-2xl hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 ${feature.animation} color-animate`}>
                  <Icon className={`w-8 h-8 ${feature.color} group-hover:text-white transition-all duration-300`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {featureData.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {featureData.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
