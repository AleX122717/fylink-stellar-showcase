import { Moon, Sun, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl bg-nav-blur shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center color-animate">
            <span className="text-white font-bold text-xl">I</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">IceFy</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            {t.nav.features}
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            {t.nav.about}
          </a>
          <a href="#premium" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            {t.nav.premium}
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            {t.nav.contact}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="w-10 h-10 rounded-full bg-secondary hover:bg-muted transition-all flex items-center justify-center"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5 text-foreground" />
            </button>
            
            {showLangMenu && (
              <div className="absolute top-12 right-0 bg-card border border-border rounded-lg shadow-xl p-2 min-w-[120px]">
                {(['fr', 'en', 'es'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setShowLangMenu(false);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded hover:bg-secondary transition-colors ${
                      language === lang ? 'bg-secondary text-primary font-semibold' : ''
                    }`}
                  >
                    {lang === 'fr' ? 'Français' : lang === 'en' ? 'English' : 'Español'}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-secondary hover:bg-muted transition-all flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-foreground transition-transform hover:rotate-180 duration-500" />
            ) : (
              <Moon className="w-5 h-5 text-foreground transition-transform hover:-rotate-12 duration-500" />
            )}
          </button>

          <button className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 animate-pulse-glow">
            {t.nav.login}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
