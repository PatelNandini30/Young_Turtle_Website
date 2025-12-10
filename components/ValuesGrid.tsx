import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Zap, Database, Users, Scale, Clock, Lock } from 'lucide-react';

const VALUES = [
  { icon: Database, title: "Data-Driven", desc: "We trust the numbers, not the narrative." },
  { icon: Target, title: "Precision", desc: "Exact execution in microseconds." },
  { icon: Shield, title: "Risk First", desc: "Capital preservation is our primary mandate." },
  { icon: Zap, title: "Speed", desc: "Low latency architecture as a competitive edge." },
  { icon: Users, title: "Meritocracy", desc: "The best idea wins, regardless of hierarchy." },
  { icon: Scale, title: "Balance", desc: "Uncorrelated returns across varied regimes." },
  { icon: Clock, title: "Patience", desc: "Waiting for the highest probability signals." },
  { icon: Lock, title: "Security", desc: "Robust protection of intellectual property." },
];

const ValuesGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-neutralDark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Core Principles</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full opacity-70" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group p-8 border border-white/5 bg-primary/30 rounded-lg hover:border-secondary/30 transition-all duration-500"
            >
              <val.icon className="w-8 h-8 text-secondary mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">{val.title}</h3>
              <p className="text-sm text-neutralMuted leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;