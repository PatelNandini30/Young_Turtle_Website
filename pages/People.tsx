import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/team';
import TeamCard from '../components/TeamCard';

const People: React.FC = () => {
  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Our People
        </motion.h1>
        <p className="text-xl text-neutralMuted leading-relaxed">
          Our edge is our talent. We combine academic rigor with practical trading experience.
        </p>
      </div>

      {/* Founder Highlight */}
      <div className="mb-24">
        <div className="bg-neutralDark border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img 
              src={teamMembers[0].image} 
              alt={teamMembers[0].name} 
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
          <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-2">{teamMembers[0].name}</h2>
            <p className="text-secondary text-lg mb-6">{teamMembers[0].role}</p>
            <p className="text-neutralMuted text-lg leading-relaxed mb-8">
              "{teamMembers[0].bio} At Young Turtle, we believe that the markets are the ultimate test of intelligence and discipline. We've built a culture where the best idea wins, regardless of title."
            </p>
            <a 
              href={teamMembers[0].linkedin} 
              className="text-white hover:text-secondary underline underline-offset-4 transition-colors w-fit"
            >
              View Full Profile
            </a>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <h3 className="text-2xl font-bold text-white mb-10 border-b border-white/5 pb-4">Leadership Team</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.slice(1).map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default People;