import React from 'react';

interface NavbarProps {
  fadeLoader: boolean;
  logoRef: React.RefObject<SVGSVGElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ fadeLoader, logoRef }) => {
  return (
    <>


      <header className={`navbar ${fadeLoader ? 'navbar-loaded' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <a href="#home" className="nav-logo">
            <div className="logo-icon-box">
              <svg
                ref={logoRef}
                className="logo-svg"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="inner-spin-group">
                  {/* Left bracket < */}
                  <path
                    d="M17 10 L8 20 L17 30"
                    stroke="url(#bracket-grad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Right bracket > */}
                  <path
                    d="M23 10 L32 20 L23 30"
                    stroke="url(#bracket-grad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Slash / */}
                  <path
                    d="M22 10 L18 30"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                </g>
                <defs>
                  <linearGradient id="bracket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFB224" />
                    <stop offset="100%" stopColor="#FF5E3A" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className={`logo-text ${fadeLoader ? 'fade-in' : ''}`}>
              SA<span style={{ color: 'var(--color-rose)' }}>N</span>JAY
            </span>
          </a>

          {/* Nav Links */}
          <nav className={`nav-menu ${fadeLoader ? 'fade-in' : ''}`}>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* CTA Button */}
          <a href="#contact" className={`nav-cta-btn ${fadeLoader ? 'fade-in' : ''}`}>
            Let's Talk
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
