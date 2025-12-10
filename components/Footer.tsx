import React from 'react';
import { NavLink } from 'react-router-dom';
import { Turtle, Linkedin, Twitter, Mail } from 'lucide-react';
import { NAV_LINKS, CONTACT_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutralDark pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Turtle className="w-6 h-6 text-secondary" />
              <span className="text-lg font-bold text-white">YOUNGTURTLE</span>
            </div>
            <p className="text-neutralMuted text-sm leading-relaxed mb-6">
              Engineering persistent edges in global markets through rigorous mathematics and technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutralMuted hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutralMuted hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-neutralMuted hover:text-secondary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Firm</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 4).map(link => (
                <li key={link.name}>
                  <NavLink to={link.path} className="text-neutralMuted hover:text-secondary text-sm transition-colors">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-white font-semibold mb-4">Business</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(4).map(link => (
                <li key={link.name}>
                  <NavLink to={link.path} className="text-neutralMuted hover:text-secondary text-sm transition-colors">
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <a href="/assets/investor-login" className="text-neutralMuted hover:text-secondary text-sm transition-colors">
                  Investor Login
                </a>
              </li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h3 className="text-white font-semibold mb-4">Mumbai Office</h3>
            <address className="text-neutralMuted text-sm not-italic leading-relaxed">
              Unit 1201, Tower B<br />
              One BKC, Bandra Kurla Complex<br />
              Mumbai, MH 400051<br />
              India
            </address>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutralMuted">
          <p>&copy; {new Date().getFullYear()} Young Turtle Technologies LLP. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;