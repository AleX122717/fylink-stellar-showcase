import { Target, Eye, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-title">
              À Propos de <span className="text-accent">Fylink</span>
            </h2>
            <p className="section-subtitle">
              Notre vision : révolutionner la gestion communautaire par l'innovation technologique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mission</h3>
              <p className="text-muted-foreground">
                Simplifier la gestion communautaire grâce à l'intelligence artificielle et l'automatisation
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse" style={{ animationDelay: '0.2s' }}>
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vision</h3>
              <p className="text-muted-foreground">
                Devenir la référence mondiale en solutions technologiques pour communautés digitales
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse" style={{ animationDelay: '0.4s' }}>
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Repousser constamment les limites avec des technologies de pointe
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-3xl p-12 text-center">
            <p className="text-lg leading-relaxed mb-8">
              Fylink est né d'une passion pour l'innovation et d'une volonté de transformer la manière dont les communautés interagissent en ligne. 
              Notre équipe d'experts en IA et en développement travaille sans relâche pour créer des solutions qui non seulement répondent aux besoins actuels, 
              mais anticipent également les défis de demain.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="px-6 py-3 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold">+10K</span> Utilisateurs
              </div>
              <div className="px-6 py-3 bg-accent/10 rounded-full">
                <span className="text-accent font-semibold">99.9%</span> Uptime
              </div>
              <div className="px-6 py-3 bg-primary/10 rounded-full">
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
