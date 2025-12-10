import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import FeatureCard from '../components/FeatureCard';
import QuoteCarousel from '../components/QuoteCarousel';
import { BrainCircuit, TrendingUp, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main>
      <HeroCarousel />
      
      {/* Value Props */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={BrainCircuit}
            title="Research"
            items={[
              "Proprietary statistical models",
              "Multi-asset signal generation",
              "Rigorous backtesting framework"
            ]}
            delay={0.1}
          />
          <FeatureCard 
            icon={TrendingUp}
            title="Trading"
            items={[
              "24/7 global market coverage",
              "Automated risk management",
              "High-frequency execution"
            ]}
            delay={0.2}
          />
          <FeatureCard 
            icon={Code2}
            title="Engineering"
            items={[
              "Low-latency C++ architecture",
              "Cloud-native data pipelines",
              "Resilient infrastructure"
            ]}
            delay={0.3}
          />
        </div>
      </section>

      {/* Product Teaser */}
      <section className="py-24 bg-neutralDark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Investment Solutions
            </h2>
            <p className="text-neutralMuted text-lg mb-8 leading-relaxed">
              We offer sophisticated investment vehicles for institutional and accredited investors. Our strategies are designed to deliver uncorrelated returns in varying market conditions.
            </p>
            <div className="flex gap-6">
              <NavLink to="/products" className="text-secondary font-medium hover:text-white transition-colors flex items-center gap-2">
                Discover AIF <span aria-hidden="true">&rarr;</span>
              </NavLink>
              <NavLink to="/products" className="text-secondary font-medium hover:text-white transition-colors flex items-center gap-2">
                Managed Accounts <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div>
          </motion.div>
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary to-neutralDark rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center group">
             {/* Abstract visual placeholder */}
             <div className="absolute inset-0 bg-[url('https://picsum.photos/id/196/800/600')] bg-cover bg-center opacity-40 mix-blend-overlay transition-opacity group-hover:opacity-60 duration-500"></div>
             <div className="z-10 text-center">
                <span className="text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors">ALPHA</span>
             </div>
          </div>
        </div>
      </section>

      <QuoteCarousel />

    </main>
  );
};

export default Home;