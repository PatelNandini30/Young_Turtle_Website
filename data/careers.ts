import { JobPost } from '../types';

export const jobPosts: JobPost[] = [
  {
    id: 'qt-001',
    title: 'Quantitative Researcher - Alpha Generation',
    team: 'Research',
    location: 'Mumbai / Remote',
    seniority: 'Mid-Senior',
    description: [
      'Develop statistical models to predict price movements in global equities.',
      'Analyze large datasets to identify persistent market anomalies.',
      'Collaborate with engineers to deploy signals into production.',
    ],
  },
  {
    id: 'eng-002',
    title: 'Low Latency C++ Engineer',
    team: 'Engineering',
    location: 'Bangalore',
    seniority: 'Senior',
    description: [
      'Optimize our core execution platform for microsecond-level latency.',
      'Design lock-free data structures and high-throughput messaging systems.',
      'Work closely with traders to minimize slippage.',
    ],
  },
  {
    id: 'ops-003',
    title: 'Trading Operations Analyst',
    team: 'Operations',
    location: 'Mumbai',
    seniority: 'Junior',
    description: [
      'Monitor real-time trading systems and manage risk parameters.',
      'Reconcile daily P&L and trade breaks.',
      'Automate operational workflows using Python.',
    ],
  },
];