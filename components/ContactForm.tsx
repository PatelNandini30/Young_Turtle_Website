import React, { useState } from 'react';
import { Loader2, Send } from 'lucide-react';
import { submitContactForm } from '../lib/api';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', reason: 'General Inquiry', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-secondary/10 border border-secondary text-secondary p-6 rounded-xl text-center">
        <h3 className="font-bold text-xl mb-2">Message Sent</h3>
        <p>Thank you for reaching out. Our team will respond shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm underline hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-neutralMuted">Full Name</label>
          <input
            id="name"
            type="text"
            required
            className="w-full bg-neutralDark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-neutralMuted">Email Address</label>
          <input
            id="email"
            type="email"
            required
            className="w-full bg-neutralDark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="reason" className="text-sm font-medium text-neutralMuted">Inquiry Type</label>
        <select
          id="reason"
          className="w-full bg-neutralDark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors appearance-none"
          value={formData.reason}
          onChange={(e) => setFormData({...formData, reason: e.target.value})}
        >
          <option>General Inquiry</option>
          <option>Investor Relations</option>
          <option>Careers</option>
          <option>Media</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-neutralMuted">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full bg-neutralDark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors resize-none"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-white hover:text-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;