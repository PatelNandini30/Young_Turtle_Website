import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Mail, Phone } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Get in Touch</h1>
          <p className="text-xl text-neutralMuted mb-12">
            Whether you are an investor looking for opportunities or an engineer looking for a challenge, we'd like to hear from you.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-neutralDark p-3 rounded-lg border border-white/5">
                <MapPin className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Visit Us</h3>
                <address className="text-neutralMuted not-italic leading-relaxed">
                  Unit 1201, Tower B<br />
                  One BKC, Bandra Kurla Complex<br />
                  Mumbai, MH 400051, India
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-neutralDark p-3 rounded-lg border border-white/5">
                <Mail className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Email Us</h3>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-neutralMuted hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-neutralDark p-3 rounded-lg border border-white/5">
                <Phone className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Call Us</h3>
                <p className="text-neutralMuted">
                  +91 22 4000 5000
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 h-64 bg-neutralDark border border-white/5 rounded-xl flex items-center justify-center text-neutralMuted text-sm">
            [Google Maps Integration Placeholder]
          </div>
        </div>

        {/* Form */}
        <div className="bg-neutralDark/30 p-8 md:p-12 rounded-2xl border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;