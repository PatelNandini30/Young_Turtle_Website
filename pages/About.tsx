import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="px-6 max-w-4xl mx-auto text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          About Us
        </motion.h1>
        <p className="text-xl text-neutralMuted leading-relaxed">
          We are a team of scientists and engineers solving the market's most complex puzzles.
        </p>
      </section>

      {/* Subnav */}
      <div className="sticky top-20 z-40 bg-primary/95 backdrop-blur border-b border-white/5 mb-16">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-8">
          {['Who We Are', 'What We Do', 'Why Us'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
              className="text-sm font-medium text-neutralMuted hover:text-secondary transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-32">
        {/* Who We Are */}
        <section id="who-we-are" className="scroll-mt-40">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-secondary pl-6">Who We Are</h2>
          <div className="prose prose-invert prose-lg max-w-none text-neutralMuted">
            <p className="mb-6">
              Young Turtle was founded on the belief that rigorous scientific method is the only reliable way to navigate financial markets. We don't guess; we test.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-neutralDark p-6 rounded-xl border border-white/5">
                <span className="text-accent font-bold text-xl block mb-2">2018</span>
                <p className="text-sm">Founded in Mumbai by Dr. Arjun Mehta.</p>
              </div>
              <div className="bg-neutralDark p-6 rounded-xl border border-white/5">
                <span className="text-accent font-bold text-xl block mb-2">2020</span>
                <p className="text-sm">Expanded into FX and Commodities markets.</p>
              </div>
              <div className="bg-neutralDark p-6 rounded-xl border border-white/5">
                <span className="text-accent font-bold text-xl block mb-2">2022</span>
                <p className="text-sm">Launched Turtle Alpha Fund (AIF Cat III).</p>
              </div>
              <div className="bg-neutralDark p-6 rounded-xl border border-white/5">
                <span className="text-accent font-bold text-xl block mb-2">Today</span>
                <p className="text-sm">Managing significant proprietary and client capital.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="what-we-do" className="scroll-mt-40">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-secondary pl-6">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-neutralMuted space-y-6">
              <p>
                We build algorithmic trading strategies that operate across multiple frequencies and asset classes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Statistical Arbitrage</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Volatility Trading</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Market Making</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutralDark rounded-xl p-8 border border-white/5 flex items-center justify-center">
              {/* Abstract graphic */}
              <div className="w-48 h-48 rounded-full border-4 border-secondary/20 flex items-center justify-center relative">
                 <div className="w-32 h-32 rounded-full border-4 border-secondary/40 animate-pulse"></div>
                 <div className="absolute text-center">
                   <span className="block text-2xl font-bold text-white">20+</span>
                   <span className="text-xs text-neutralMuted uppercase">Strategies</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section id="why-us" className="scroll-mt-40">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-secondary pl-6">Why Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Research Pipeline", desc: "A formalized process for turning raw data into production alpha." },
              { title: "Risk Controls", desc: "Real-time risk monitoring ensuring capital preservation." },
              { title: "Governance", desc: "Transparency and alignment of interest with our investors." }
            ].map((card, i) => (
              <div key={i} className="bg-neutralDark/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-neutralMuted text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;