import React from 'react';
import { FileText, Mail, ShieldAlert } from 'lucide-react';
import { REGULATORY_EMAIL } from '../constants';

const Regulatory: React.FC = () => {
  return (
    <div className="pt-24 pb-24 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-white mb-12">Regulatory Disclosures</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <FileText className="text-secondary" /> Documents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Disclosure Document', 'Privacy Policy', 'Investor Charter', 'Code of Conduct'].map((doc) => (
            <a 
              key={doc}
              href={`/public/regulatory/${doc.toLowerCase().replace(/\s/g, '-')}.pdf`}
              className="flex items-center justify-between p-4 bg-neutralDark border border-white/5 rounded-lg hover:border-secondary/40 transition-colors group"
            >
              <span className="text-neutralMuted group-hover:text-white transition-colors">{doc}</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded text-neutralMuted">PDF</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <ShieldAlert className="text-secondary" /> Compliance
        </h2>
        <div className="prose prose-invert text-neutralMuted">
          <p>
            Young Turtle Technologies LLP is registered with SEBI as a Category III Alternative Investment Fund (Registration IN/AIF3/22-23/0000).
          </p>
          <p>
            Investments in securities market are subject to market risks. Read all the related documents carefully before investing. Past performance is not indicative of future results.
          </p>
        </div>
      </section>

      <section className="bg-neutralDark p-8 rounded-xl border border-white/5">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Mail className="text-secondary" /> Grievance Redressal
        </h2>
        <p className="text-neutralMuted mb-6">
          For any complaints or grievances, please contact our Compliance Officer:
        </p>
        <div className="space-y-2 text-white">
          <p><span className="text-neutralMuted">Name:</span> Mr. Rajesh Kumar</p>
          <p><span className="text-neutralMuted">Email:</span> <a href={`mailto:${REGULATORY_EMAIL}`} className="text-secondary hover:underline">{REGULATORY_EMAIL}</a></p>
          <p><span className="text-neutralMuted">Address:</span> Unit 1201, One BKC, Bandra Kurla Complex, Mumbai 400051</p>
        </div>
        <p className="text-neutralMuted text-sm mt-6">
          If you are not satisfied with the resolution, you may lodge a complaint on <a href="https://scores.gov.in" target="_blank" rel="noreferrer" className="text-secondary hover:underline">SEBI SCORES</a>.
        </p>
      </section>
    </div>
  );
};

export default Regulatory;