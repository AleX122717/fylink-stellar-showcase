import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';

const ReviewsSection = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  const reviews = t.reviews.items;
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {t.reviews.title.split(' ')[0]} <span className="text-primary color-animate">{t.reviews.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="section-subtitle">
            {t.reviews.subtitle}
          </p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-hidden px-6"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedReviews.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] p-6 bg-card border border-border rounded-2xl hover:border-primary transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < review.rating ? 'fill-yellow-500 text-yellow-500' : 'text-muted'}`}
                />
              ))}
            </div>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              "{review.text}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                {review.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
