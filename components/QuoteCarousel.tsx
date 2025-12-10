import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { quotes } from '../data/quotes';

const QuoteCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-neutralDark border-y border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <Quote className="w-16 h-16 text-secondary/20 mx-auto mb-8" />
        
        <div className="h-48 md:h-40 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <blockquote className="text-2xl md:text-3xl font-light text-white mb-6 italic leading-relaxed">
                "{quotes[index].text}"
              </blockquote>
              <div className="text-secondary font-medium tracking-wide">
                {quotes[index].author}
              </div>
              <div className="text-neutralMuted text-sm mt-1">
                {quotes[index].role}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-secondary' : 'w-1.5 bg-neutralMuted/30'
              }`}
              aria-label={`View quote ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteCarousel;