import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { jobPosts } from '../data/careers';
import { JobPost } from '../types';
import JobCard from '../components/JobCard';
import Modal from '../components/Modal';
import { submitApplication } from '../lib/api';
import { Loader2 } from 'lucide-react';

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState<'idle' | 'success'>('idle');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    submitApplication({ jobId: selectedJob?.id }).then(() => {
      setIsSubmitting(false);
      setApplicationStatus('success');
      setTimeout(() => {
        setApplicationStatus('idle');
        setSelectedJob(null);
      }, 2000);
    });
  };

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Join Us
        </motion.h1>
        <p className="text-xl text-neutralMuted leading-relaxed mb-8">
          Solve the hardest problems in finance. We are looking for world-class talent in mathematics, physics, and computer science.
        </p>
        <div className="flex justify-center gap-8 text-sm font-semibold tracking-wider text-secondary">
          <span>NO BUREAUCRACY</span>
          <span>MERITOCRACY</span>
          <span>HIGH IMPACT</span>
        </div>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {jobPosts.map((job) => (
          <JobCard key={job.id} job={job} onApply={setSelectedJob} />
        ))}
      </div>

      {/* Application Modal */}
      <Modal 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)} 
        title={`Apply for ${selectedJob?.title}`}
      >
        {applicationStatus === 'success' ? (
           <div className="text-center py-8">
             <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
             <h4 className="text-xl font-bold text-white mb-2">Application Received</h4>
             <p className="text-neutralMuted">We will review your profile and get back to you soon.</p>
           </div>
        ) : (
          <form onSubmit={handleApply} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutralMuted mb-1">Full Name</label>
              <input type="text" required className="w-full bg-neutralDark border border-white/10 rounded p-2 text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutralMuted mb-1">Email</label>
              <input type="email" required className="w-full bg-neutralDark border border-white/10 rounded p-2 text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutralMuted mb-1">LinkedIn Profile</label>
              <input type="url" required className="w-full bg-neutralDark border border-white/10 rounded p-2 text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutralMuted mb-1">Resume / CV</label>
              <input type="file" className="w-full text-neutralMuted text-sm" />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-secondary text-white font-bold py-3 rounded hover:bg-white hover:text-primary transition-colors mt-4 flex justify-center items-center gap-2"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : 'Submit Application'}
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Careers;