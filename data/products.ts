import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'p1',
    title: 'Turtle Alpha Fund (AIF Cat III)',
    type: 'AIF',
    description: 'A long-short equity fund aiming for absolute returns uncorrelated with broader market indices.',
    features: [
      'Target Volatility: 8-10%',
      'Strategy: Statistical Arbitrage',
      'Liquidity: Monthly',
      'Min Investment: ₹1 Crore'
    ]
  },
  {
    id: 'p2',
    title: 'Systematic Managed Accounts',
    type: 'Solutions',
    description: 'Bespoke quantitative strategies tailored for family offices and institutional treasuries.',
    features: [
      'Custom Risk Profiles',
      'Multi-Asset Exposure (Futures, FX)',
      'Direct Ownership of Assets',
      'Daily Transparency'
    ]
  }
];