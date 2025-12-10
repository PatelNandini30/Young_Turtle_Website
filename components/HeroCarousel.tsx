import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { ASSETS } from '../constants';

const SLIDES = [
  { id: 1, type: 'image', src: ASSETS.hero1, alt: 'Deep ocean abstract' },
  { id: 2, type: 'image', src: ASSETS.hero2, alt: 'Data visualization' },
  { id: 3, type: 'image', src: ASSETS.hero3, alt: 'Technological abstract' },
];

const HeroCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={SLIDES[index].id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={SLIDES[index].src} 
            alt={SLIDES[index].alt}
            className="w-full h-full object-cover" 
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-overlay-gradient z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Parallax Layer (Subtle particles simulation via CSS/SVG) */}
      <div className="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-20"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="max-w-4xl px-6 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Young Turtle
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-secondary font-light mb-8"
          >
            Mathematics. Engineering. Edge.
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-neutralMuted mb-10 max-w-2xl mx-auto"
          >
            Trade like the tide: disciplined, patient, and driven by data.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <NavLink 
              to="/products"
              className="bg-secondary text-white px-8 py-3 rounded-2xl font-medium hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 group"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink 
              to="/careers"
              className="border border-neutralMuted text-white px-8 py-3 rounded-2xl font-medium hover:border-secondary hover:text-secondary transition-all duration-300"
            >
              Careers
            </NavLink>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-secondary' : 'w-2 bg-white/40'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;