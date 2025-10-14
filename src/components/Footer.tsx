import { Github, Twitter, Linkedin, Heart, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center color-animate">
                <span className="text-white font-bold">I</span>
              </div>
              <span className="text-xl font-bold">IceFy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.product}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">{t.footer.features}</a></li>
              <li><a href="#premium" className="hover:text-primary transition-colors">{t.footer.premium}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.docs}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.api}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">{t.footer.about}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.blog}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.careers}</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">{t.footer.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.terms}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.cookies}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.licenses}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © 2025 IceFy.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all flex items-center justify-center group">
              <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all flex items-center justify-center group">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all flex items-center justify-center group">
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white transition-all flex items-center justify-center group">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-black hover:text-white transition-all flex items-center justify-center group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
