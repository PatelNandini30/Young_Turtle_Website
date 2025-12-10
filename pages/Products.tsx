import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { Check } from 'lucide-react';
import ChartPlaceholder from '../components/ChartPlaceholder';
import { NavLink } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Investment Products
        </motion.h1>
        <p className="text-xl text-neutralMuted leading-relaxed">
          Quantitative strategies designed for capital preservation and consistent compounding.
        </p>
      </div>

      <div className="space-y-24">
        {products.map((product, index) => (
          <div key={product.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
            <div className="flex-1 space-y-6">
              <span className="text-secondary font-bold tracking-wider text-sm uppercase">{product.type}</span>
              <h2 className="text-3xl font-bold text-white">{product.title}</h2>
              <p className="text-neutralMuted text-lg leading-relaxed">
                {product.description}
              </p>
              <ul className="space-y-3 pt-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <Check className="text-secondary w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <NavLink 
                  to="/contact" 
                  className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-secondary hover:text-white transition-colors"
                >
                  Request Factsheet
                </NavLink>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="bg-neutralDark border border-white/5 rounded-2xl p-6 shadow-2xl">
                 <ChartPlaceholder />
                 <div className="mt-4 flex justify-between text-xs text-neutralMuted border-t border-white/5 pt-4">
                   <span>*For illustrative purposes only</span>
                   <span>Source: Internal Data</span>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;