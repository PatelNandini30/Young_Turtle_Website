import React from 'react';
import { TeamMember } from '../types';
import { Linkedin } from 'lucide-react';

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="group relative overflow-hidden bg-neutralDark border border-white/5 rounded-xl hover:border-secondary/40 transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 text-center">
          <p className="text-neutralMuted text-sm mb-6 leading-relaxed">
            {member.bio}
          </p>
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-2 text-secondary hover:text-white transition-colors"
          >
            <Linkedin size={20} />
            <span className="text-sm font-medium">LinkedIn Profile</span>
          </a>
        </div>
      </div>
      <div className="p-6 bg-neutralDark relative z-10 border-t border-white/5">
        <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
        <p className="text-secondary text-sm">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamCard;