import { Mail, MessageSquare, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Rejoignez la <span className="text-primary">Révolution</span>
            </h2>
            <p className="section-subtitle">
              Faites partie de la communauté qui façonne l'avenir de la gestion intelligente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all hover:shadow-xl group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <MessageSquare className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Rejoindre Discord</h3>
              <p className="text-muted-foreground mb-6">
                Connectez-vous avec notre communauté, partagez vos idées et obtenez de l'aide
              </p>
              <button className="w-full py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-semibold transition-all hover:scale-105">
                Rejoindre maintenant
              </button>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent transition-all hover:shadow-xl group">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all">
                <Mail className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Contact Direct</h3>
              <p className="text-muted-foreground mb-6">
                Une question ? Notre équipe est là pour vous accompagner
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                Envoyer un message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-3xl p-12 text-center backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4">Prêt à commencer ?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Créez votre compte gratuitement et découvrez comment Fylink peut transformer votre communauté
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Essayer Fylink Gratuitement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
