import { Mail, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {t.contact.title.split(' ').slice(0, 2).join(' ')} <span className="text-primary color-animate">{t.contact.title.split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="section-subtitle">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all hover:shadow-xl group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all color-animate">
                <MessageSquare className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t.contact.discord.title}</h3>
              <p className="text-muted-foreground mb-6">
                {t.contact.discord.description}
              </p>
              <button className="w-full py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-semibold transition-all hover:scale-105">
                {t.contact.discord.cta}
              </button>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent transition-all hover:shadow-xl group">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all color-animate">
                <Mail className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t.contact.email.title}</h3>
              <p className="text-muted-foreground mb-6">
                {t.contact.email.description}
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 group color-animate">
                {t.contact.email.cta}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
