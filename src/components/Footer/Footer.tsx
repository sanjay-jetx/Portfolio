import React from 'react';
import { Mail } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { FOOTER_LINKS, SOCIAL_LINKS } from '../../utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Find social URLs safely
  const githubUrl = SOCIAL_LINKS.find(s => s.icon === 'github')?.href || 'https://github.com';
  const linkedinUrl = SOCIAL_LINKS.find(s => s.icon === 'linkedin')?.href || 'https://linkedin.com';
  const emailUrl = SOCIAL_LINKS.find(s => s.icon === 'email')?.href || 'mailto:contact@sanjay.dev';

  return (
    <footer className="footer">
      <div className="footer-bg" aria-hidden="true">
        <div className="footer-grid-overlay" />
        <div className="footer-glow" />
      </div>

      <div className="container footer-content">
        <div className="footer-brand">
          <div className="nav-brand">
            <div className="nav-brand-top">
              <span className="brand-name">SANJAY</span>
              <span className="brand-badge">24</span>
            </div>
            <span className="brand-subtitle">DEVELOPER</span>
          </div>
          <p className="footer-tagline">
            Building high-performance systems &amp; playing cover drives.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Quick Links</h4>
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-social-group">
          <h4>Connect</h4>
          <div className="footer-social">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <SiGithub size={20} />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href={emailUrl} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; {currentYear} Sanjay. All rights reserved.</p>
        <p className="footer-built">Crafted with React, Framer Motion &amp; precision.</p>
      </div>
    </footer>
  );
};

export default Footer;
