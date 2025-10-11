import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-nav-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">Fylink</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Fonctionnalités
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            À propos
          </a>
          <a href="#premium" className="text-sm font-medium hover:text-primary transition-colors">
            Premium
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
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
      </div>
    </nav>
  );
};

export default Navigation;
