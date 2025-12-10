import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ASSETS.hero3} 
          alt="Abstract deep ocean visualization" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 text-white"
        >
          <span className="text-accent">Depth.</span> Discipline. Direction.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-lg md:text-2xl text-neutralMuted max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Engineering quantified strategies with patient insight to build lasting capital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link 
            to="/products"
            className="inline-flex items-center gap-3 bg-secondary/10 hover:bg-secondary/20 border border-secondary text-secondary px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm group"
          >
            <span className="font-medium tracking-wide">Explore Our Approach</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-neutralMuted to-transparent opacity-50" />
      </motion.div>
    </section>
  );
};

export default Hero;