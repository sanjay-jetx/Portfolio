import React, { useState } from 'react';

function App() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);

  const statuses = [
    "Available for Work",
    "Waiting for Opportunity",
    "Open to Collaborate"
  ];
  const [statusIndex, setStatusIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  React.useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setFadeLoader(true);
    }, 2000);

    const removeTimeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setStatusIndex((prev) => (prev + 1) % statuses.length);
        setFadeState("fade-in");
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("sanjay@example.com"); // Replace with actual email later
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {loading && (
        <div className={`page-loader ${fadeLoader ? 'fade-out' : ''}`}>
          <div className="loader-logo-wrapper">
            <svg className="loader-logo-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="loader-bat-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFB224" />
                  <stop offset="100%" stopColor="#FF5E3A" />
                </linearGradient>
              </defs>
              <path d="M 50 12 A 38 38 0 0 0 50 88" stroke="#1A1D20" strokeWidth="6" strokeLinecap="round" />
              <path d="M 50 88 A 38 38 0 0 0 77 24" stroke="#FFB224" strokeWidth="6" strokeLinecap="round" />
              <path d="M 35 36 L 22 50 L 35 64" stroke="#1A1D20" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 65 36 L 78 50 L 65 64" stroke="#1A1D20" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="48" y="24" width="4" height="20" rx="2" fill="#FF9F1C" />
              <path d="M 45 44 h 10 v 20 a 5 5 0 0 1 -10 0 Z" fill="url(#loader-bat-grad)" />
              <g className="logo-ball">
                <circle cx="77" cy="24" r="8" fill="#FF5E3A" />
                <path d="M 72 21 C 74 23 76 26 82 25" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="1.5,1" fill="none" />
              </g>
            </svg>
          </div>
        </div>
      )}
      <div className="portfolio-app">
      {/* Sticky Navigation Bar */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            <svg className="logo-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bat-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFB224" />
                  <stop offset="100%" stopColor="#FF5E3A" />
                </linearGradient>
              </defs>
              <path d="M 50 12 A 38 38 0 0 0 50 88" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              <path d="M 50 88 A 38 38 0 0 0 77 24" stroke="#FFB224" strokeWidth="6" strokeLinecap="round" />
              <path d="M 35 36 L 22 50 L 35 64" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 65 36 L 78 50 L 65 64" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="48" y="24" width="4" height="20" rx="2" fill="#FF9F1C" />
              <path d="M 45 44 h 10 v 20 a 5 5 0 0 1 -10 0 Z" fill="url(#bat-grad)" />
              <g className="logo-ball">
                <circle cx="77" cy="24" r="8" fill="#FF5E3A" />
                <path d="M 72 21 C 74 23 76 26 82 25" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="1.5,1" fill="none" />
              </g>
            </svg>
            SANJAY
          </a>
          <nav className="nav-menu">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#resume" className="nav-link">Resume</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <a href="#contact" className="nav-cta-btn">
            Let's Talk 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        </div>
      </header>

      {/* Main Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          
          {/* Left Column: Intro & Info */}
          <div className="hero-info">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span className={`status-text ${fadeState}`}>{statuses[statusIndex]}</span>
            </div>
            
            <h1 className="hero-title">
              Hey there <span className="wave-hand">👋</span><br />
              I'm <span className="highlight-text">Sanjay</span>,<br />
              <span className="serif-title">Creative Developer</span> &amp;<br />
              AI Automation Engineer
            </h1>
            
            <p className="hero-description">
              I build intelligent digital experiences using AI, Automation, Python, Java and creative coding.
            </p>
            
            <div className="hero-ctas">
              <a href="#projects" className="btn-primary">
                View Projects
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Hire Me
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            </div>
            
            <div className="social-connect">
              <span className="connect-label">Let's connect</span>
              <div className="social-icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <button onClick={copyToClipboard} className="social-icon-link email-btn" title="Copy Email">
                  {copied ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#52B788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  )}
                  {copied && <span className="copied-tooltip">Copied!</span>}
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column: Profile & Floating Space-theme Cards */}
          <div className="hero-visuals">
            {/* Pulsing Space Glow background */}
            <div className="space-glow"></div>
            
            {/* Target corner frame wrapper */}
            <div className="photo-card-target-wrapper">
              {/* Corner brackets */}
              <div className="target-corner top-left"></div>
              <div className="target-corner top-right"></div>
              <div className="target-corner bottom-left"></div>
              <div className="target-corner bottom-right"></div>
              
              {/* Central Photo Frame Container */}
              <div className="photo-card">
                <div className="photo-inner">
                  {/* Fallback pattern */}
                  <div className="photo-placeholder">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <p>Image Loading...</p>
                  </div>
                  <img 
                    src="/src/assets/sanjay.jpg" 
                    alt="Sanjay" 
                    className="profile-img" 
                    onError={(e) => { e.target.style.display = 'none'; }}
                    onLoad={(e) => { 
                      const placeholder = e.target.previousSibling;
                      if(placeholder) placeholder.style.display = 'none';
                      e.target.style.display = 'block'; 
                    }}
                  />
                  {/* MLH / Devfolio brand overlay strip */}
                  <div className="photo-brand-overlay">
                    <span className="brand-logo text-orange">MLH</span>
                    <span className="brand-divider">|</span>
                    <span className="brand-logo">Devfolio</span>
                    <span className="brand-divider">|</span>
                    <span className="brand-logo">orkes</span>
                    <span className="brand-divider">|</span>
                    <span className="brand-logo text-blue">IEEE</span>
                  </div>
                </div>
                {/* Chennai Coordinates */}
                <div className="photo-coords">
                  LAT: 13.0827° N / LON: 80.2707° E
                </div>
              </div>
            </div>
            
            {/* Widget 1 (Left Side): Developer JSON Code block */}
            <div className="widget-card widget-code">
              <div className="widget-code-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <pre className="widget-code-body">
                <code>
<span className="code-keyword">const</span> developer = &#123;<br />
&nbsp;&nbsp;name: <span className="code-string">"Sanjay"</span>,<br />
&nbsp;&nbsp;role: <span className="code-string">"Software Engineer"</span>,<br />
&nbsp;&nbsp;passion: <span className="code-string">"Automation &amp; Code"</span>,<br />
&nbsp;&nbsp;hobby: <span className="code-string">"Cricket 🏏"</span><br />
&#125;;
                </code>
              </pre>
            </div>
            
            {/* Widget 2 (Top Right): Automation Workflow */}
            <div className="widget-card widget-workflow">
              <div className="widget-title">AUTOMATION WORKFLOW</div>
              <div className="workflow-steps">
                <div className="step-node" title="Webhook Trigger">
                  <div className="step-icon webhook">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
                  </div>
                  <span>Webhook</span>
                </div>
                <div className="step-arrow">➔</div>
                <div className="step-node" title="n8n Pipeline">
                  <div className="step-icon n8n">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  </div>
                  <span>n8n Pipeline</span>
                </div>
                <div className="step-arrow">➔</div>
                <div className="step-node" title="Vector Database">
                  <div className="step-icon db">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>
                  </div>
                  <span>Vector DB</span>
                </div>
              </div>
            </div>
            
            {/* Widget 3 (Bottom Right): Beyond the Terminal */}
            <div className="widget-card widget-beyond">
              <div className="widget-title">BEYOND THE TERMINAL</div>
              <div className="beyond-content">
                <div className="beyond-item">
                  <div className="beyond-bullet color-yellow">🏏</div>
                  <div className="beyond-text">
                    <strong>Active Cricketer</strong>
                    <p>Tactical gameplay &amp; field discipline</p>
                  </div>
                </div>
                <div className="beyond-item">
                  <div className="beyond-bullet color-amber">⚡</div>
                  <div className="beyond-text">
                    <strong>Problem Solver</strong>
                    <p>Analyzing logic at speed</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Floating Tech Stack Capsule */}
      <section className="tech-capsule-section">
        <div className="tech-capsule">
          <div className="tech-item" title="Python">
            <span className="tech-dot" style={{ backgroundColor: '#3776AB' }}></span> Python
          </div>
          <div className="tech-item" title="Java">
            <span className="tech-dot" style={{ backgroundColor: '#007396' }}></span> Java
          </div>
          <div className="tech-item" title="JavaScript">
            <span className="tech-dot" style={{ backgroundColor: '#F7DF1E' }}></span> JavaScript
          </div>
          <div className="tech-item" title="React">
            <span className="tech-dot" style={{ backgroundColor: '#61DAFB' }}></span> React
          </div>
          <div className="tech-item" title="Node.js">
            <span className="tech-dot" style={{ backgroundColor: '#339933' }}></span> Node.js
          </div>
          <div className="tech-item" title="n8n">
            <span className="tech-dot" style={{ backgroundColor: '#FF6C37' }}></span> n8n
          </div>
          <div className="tech-item" title="Docker">
            <span className="tech-dot" style={{ backgroundColor: '#2496ED' }}></span> Docker
          </div>
          <div className="tech-item" title="Git">
            <span className="tech-dot" style={{ backgroundColor: '#F05032' }}></span> Git
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default App;
