import { Crown, Check, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PremiumSection = () => {
  const { t } = useLanguage();

  return (
    <section id="premium" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-premium/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-premium/10 border border-premium/30 rounded-full mb-6 color-animate">
            <Star className="w-4 h-4 text-premium animate-pulse" />
            <span className="text-sm font-medium text-premium">{t.premium.title}</span>
          </div>
          
          <h2 className="section-title mb-6">
            {t.premium.title.split(' ')[0]} <span className="bg-gradient-premium bg-clip-text text-transparent color-animate">{t.premium.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="section-subtitle">
            {t.premium.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Premium Basic */}
          <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 border-primary/30 rounded-3xl p-10 shadow-xl relative overflow-hidden hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg color-animate">
                  <Crown className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-center mb-2">{t.premium.basic.name}</h3>
              
              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent color-animate">{t.premium.basic.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{t.premium.basic.price.includes('€') ? 'par mois' : 'per month'}</p>
              </div>

              <div className="space-y-3 mb-8">
                {t.premium.basic.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 color-animate">
                {t.premium.cta}
              </button>
            </div>
          </div>

          {/* Premium Plus */}
          <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 border-premium/50 rounded-3xl p-10 shadow-2xl relative overflow-hidden hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-premium/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-premium text-premium-foreground rounded-full text-xs font-bold">
              POPULAIRE
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-premium rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <Crown className="w-12 h-12 text-premium-foreground" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-center mb-2">{t.premium.plus.name}</h3>
              
              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2">
                  <span className="bg-gradient-premium bg-clip-text text-transparent">{t.premium.plus.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{t.premium.plus.price.includes('€') ? 'par mois' : 'per month'}</p>
              </div>

              <div className="space-y-3 mb-8">
                {t.premium.plus.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-premium/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-premium" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-gradient-premium text-premium-foreground rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                <Crown className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                {t.premium.cta}
                <Crown className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          {t.premium.trial}
        </p>
      </div>
    </section>
  );
};

export default PremiumSection;
