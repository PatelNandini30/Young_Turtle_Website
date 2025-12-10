import React from 'react';
import { motion } from 'framer-motion';

const PHILOSOPHY_POINTS = [
  {
    theme: "Data-Driven Decision Making",
    detail: "We strip away cognitive bias. Every trade is backed by statistically significant evidence from decades of market data."
  },
  {
    theme: "Anomaly Hunting",
    detail: "Markets are efficient, but not perfect. We relentlessly search for the subtle imperfections that persist across time."
  },
  {
    theme: "Dispassionate Execution",
    detail: "Our systems trade without fear or greed. Strict adherence to algorithmic rules ensures consistency in volatile times."
  },
  {
    theme: "Team & Talent",
    detail: "We hire mathematicians, physicists, and engineers. A collaborative environment where research is shared, not siloed."
  },
  {
    theme: "Asymmetric Payoff",
    detail: "We seek opportunities where the potential upside significantly outweighs the capped downside risk."
  }
];

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
            The Mathematics of <span className="text-secondary">Certainty</span> in an Uncertain World.
          </h2>
          <p className="text-lg text-neutralMuted mb-6 leading-relaxed font-light">
            At Young Turtle, we don't predict the future; we calculate the probabilities. Inspired by the pioneers of quantitative finance, we treat the market not as a casino, but as a complex system of signals waiting to be decoded.
          </p>
          <p className="text-lg text-neutralMuted leading-relaxed font-light">
            Our approach is purely scientific. We form hypotheses, test them against historical data, and only deploy strategies that have withstood the rigors of statistical validation.
          </p>
        </motion.div>

        {/* Right Column: Points */}
        <div className="space-y-8">
          {PHILOSOPHY_POINTS.map((point, idx) => (
            <motion.div
              key={point.theme}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex gap-4"
            >
              <div className="w-1 h-full min-h-[40px] bg-gradient-to-b from-secondary to-transparent" />
              <div>
                <h3 className="text-xl font-medium text-white mb-2">{point.theme}</h3>
                <p className="text-neutralMuted text-sm leading-relaxed">{point.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;