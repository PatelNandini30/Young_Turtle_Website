import React from 'react';
import { JobPost } from '../types';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';

interface JobCardProps {
  job: JobPost;
  onApply: (job: JobPost) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onApply }) => {
  return (
    <div className="bg-neutralDark border border-white/5 rounded-xl p-6 hover:border-secondary/30 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group">
      <div className="flex-1">
        <div className="flex flex-wrap gap-3 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded">
            {job.team}
          </span>
          <span className="flex items-center gap-1 text-xs text-neutralMuted bg-white/5 px-2 py-1 rounded">
            <MapPin size={12} /> {job.location}
          </span>
          <span className="flex items-center gap-1 text-xs text-neutralMuted bg-white/5 px-2 py-1 rounded">
            <Briefcase size={12} /> {job.seniority}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
          {job.title}
        </h3>
        <ul className="space-y-1 mb-4 md:mb-0">
          {job.description.slice(0, 2).map((point, idx) => (
            <li key={idx} className="text-sm text-neutralMuted flex items-start gap-2">
              <span className="text-accent mt-1.5">•</span> {point}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => onApply(job)}
        className="shrink-0 px-6 py-3 rounded-lg border border-secondary text-secondary font-medium hover:bg-secondary hover:text-white transition-all duration-300 flex items-center gap-2"
      >
        Apply Now
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default JobCard;