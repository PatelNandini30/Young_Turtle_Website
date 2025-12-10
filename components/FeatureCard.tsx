import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, items, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-neutralDark/50 border border-white/5 p-8 rounded-xl hover:border-secondary/30 transition-colors group"
    >
      <div className="mb-6 p-4 bg-primary rounded-full w-fit group-hover:bg-secondary/10 transition-colors">
        <Icon className="w-8 h-8 text-secondary" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-neutralMuted text-sm">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeatureCard;