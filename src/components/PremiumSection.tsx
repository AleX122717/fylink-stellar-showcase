import { Crown, Check, Star } from 'lucide-react';

const premiumFeatures = [
  'Accès illimité à toutes les fonctionnalités IA',
  'Support prioritaire 24/7',
  'Personnalisation avancée',
  'Analyses détaillées et rapports',
  'Intégrations premium',
  'API dédiée avec limites étendues',
];

const PremiumSection = () => {
  return (
    <section id="premium" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-premium/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-premium/10 border border-premium/30 rounded-full mb-6">
              <Star className="w-4 h-4 text-premium animate-pulse" />
              <span className="text-sm font-medium text-premium">Offre Exclusive</span>
            </div>
            
            <h2 className="section-title mb-6">
              Passez au <span className="bg-gradient-premium bg-clip-text text-transparent">Premium</span>
            </h2>
            <p className="section-subtitle">
              Débloquez tout le potentiel de Fylink avec des fonctionnalités exclusives
            </p>
          </div>

          <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 border-premium/30 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-premium/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-premium rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <Crown className="w-12 h-12 text-premium-foreground" />
                </div>
              </div>

              <div className="text-center mb-10">
                <div className="text-6xl font-bold mb-2">
                  <span className="bg-gradient-premium bg-clip-text text-transparent">49€</span>
                </div>
                <p className="text-muted-foreground">par mois</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-premium/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-premium" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-5 bg-gradient-premium text-premium-foreground rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 group">
                <Crown className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Passer à Premium
                <Crown className="w-6 h-6 group-hover:-rotate-12 transition-transform" />
              </button>

              <p className="text-center text-xs text-muted-foreground mt-6">
                Essai gratuit de 14 jours • Sans engagement • Annulation à tout moment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
