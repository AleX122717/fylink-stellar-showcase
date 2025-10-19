import { Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { t } = useLanguage();
  const searchRef = useRef<HTMLDivElement>(null);

  const allSuggestions = [
    { id: 'features', label: t.nav.features, href: '#features' },
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'premium', label: t.nav.premium, href: '#premium' },
    { id: 'reviews', label: t.nav.reviews, href: '#reviews' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ];

  const filteredSuggestions = allSuggestions.filter(suggestion =>
    suggestion.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (href: string) => {
    setShowSuggestions(false);
    setSearchTerm('');
    window.location.hash = href;
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder={t.search.placeholder}
          className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {showSuggestions && searchTerm && filteredSuggestions.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50">
          {filteredSuggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion.href)}
              className="w-full text-left px-4 py-3 hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <Search className="w-4 h-4 text-muted-foreground" />
              <span>{suggestion.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
