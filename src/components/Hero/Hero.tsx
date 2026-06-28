import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const statuses = [
    "Available for Work",
    "Waiting for Opportunity",
    "Open to Collaborate"
  ];
  const [statusIndex, setStatusIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
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
    navigator.clipboard.writeText("sanjaynathiya81@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const widgetHover = {
    y: -8,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        {/* Left Column: Intro & Info */}
        <motion.div 
          className="hero-info"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="status-badge" variants={itemVariants}>
            <span className="status-dot"></span>
            <span className={`status-text ${fadeState}`}>{statuses[statusIndex]}</span>
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            Hey there <span className="wave-hand">👋</span><br />
            I'm <span className="highlight-text">Sanjay</span>,<br />
            <span className="serif-title">Creative Developer</span> &amp;<br />
            AI Automation Engineer
          </motion.h1>
          
          <motion.p className="hero-description" variants={itemVariants}>
            I build intelligent digital experiences using AI, Automation, Python, Java and creative coding.
          </motion.p>
          
          <motion.div className="hero-ctas" variants={itemVariants}>
            <a href="#projects" className="btn-primary">
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Hire Me
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </motion.div>
          
          <motion.div className="social-connect" variants={itemVariants}>
            <span className="connect-label">Let's connect</span>
            <div className="social-icons">
              <a href="https://github.com/sanjay-jetx" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/sanjay-m-86830426a/" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://leetcode.com/u/s4njay/" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="LeetCode">
                <SiLeetcode size={20} />
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
          </motion.div>
        </motion.div>
        
        {/* Right Column: Profile & Floating Space-theme Cards */}
        <div className="hero-visuals">
          <div className="space-glow"></div>
          
          <motion.div 
            className="photo-card-target-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
          >
            <div className="target-corner top-left"></div>
            <div className="target-corner top-right"></div>
            <div className="target-corner bottom-left"></div>
            <div className="target-corner bottom-right"></div>
            
            <div className="photo-card">
              <div className="photo-inner">
                <div className="photo-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <p>Upload Photo Later</p>
                </div>
                {/* <img 
                  src="/profile.png" 
                  alt="Sanjay" 
                  className="profile-img" 
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                  onLoad={(e) => { 
                    const placeholder = (e.target as HTMLElement).previousSibling as HTMLElement;
                    if(placeholder) placeholder.style.display = 'none';
                    (e.target as HTMLElement).style.display = 'block'; 
                  }}
                /> */}
                <div className="photo-brand-overlay">
                  <span className="brand-logo text-orange">PEC-Hacks</span>
                  <span className="brand-divider">|</span>
                  <span className="brand-logo">DEVFOLIO</span>
                  <span className="brand-divider">|</span>
                  <span className="brand-logo text-blue">ECSoc</span>
                </div>
              </div>

            </div>
          </motion.div>
          
          {/* Widget 1 (Left Side): Developer JSON Code block */}
          <motion.div 
            className="widget-card widget-code"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={widgetHover}
          >
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
          </motion.div>
          
          {/* Widget 2 (Top Right): Automation Workflow */}
          <motion.div 
            className="widget-card widget-workflow"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={widgetHover}
          >
            <div className="widget-title">AUTOMATION WORKFLOW</div>
            <div className="workflow-steps" style={{ paddingBottom: '35px' }}>
              <div className="step-node" title="Data Intake">
                <div className="step-icon webhook">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </div>
                <span>Data Intake</span>
              </div>
              <div className="step-arrow">➔</div>
              <div className="step-node" title="AI Agent" style={{ position: 'relative' }}>
                <div className="step-icon n8n">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="4" y="9" width="16" height="10" rx="2" ry="2"></rect><path d="M12 9V5"></path><path d="M10 5h4"></path><path d="M9 13v2"></path><path d="M15 13v2"></path><path d="M4 14H2"></path><path d="M22 14h-2"></path></svg>
                </div>
                <span>AI Agent</span>
                
                {/* Agent Sub-nodes Diagram */}
                <div style={{ 
                  position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', 
                  display: 'flex', gap: '12px', marginTop: '10px', pointerEvents: 'none', whiteSpace: 'nowrap'
                }}>
                  {/* Chat Model */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--text-muted)', transform: 'rotate(45deg)', marginBottom: '-6px', zIndex: 1 }} />
                    <svg width="2" height="16" viewBox="0 0 2 16"><line x1="1" y1="0" x2="1" y2="16" stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="2 2"/></svg>
                    <span style={{ fontSize: '0.5rem', color: 'var(--text-muted)', marginTop: '2px' }}>Chat Model<span style={{color: 'var(--color-rose)'}}>*</span></span>
                  </div>
                  
                  {/* Memory */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--text-muted)', transform: 'rotate(45deg)', marginBottom: '-6px', zIndex: 1 }} />
                    <div style={{ width: '1px', height: '16px', background: 'var(--text-muted)' }}></div>
                    <div style={{ width: '14px', height: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>+</span>
                    </div>
                    <span style={{ fontSize: '0.5rem', color: 'var(--text-muted)' }}>Memory</span>
                  </div>

                  {/* Tool */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--text-muted)', transform: 'rotate(45deg)', marginBottom: '-6px', zIndex: 1 }} />
                    <div style={{ width: '1px', height: '16px', background: 'var(--text-muted)' }}></div>
                    <div style={{ width: '14px', height: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>+</span>
                    </div>
                    <span style={{ fontSize: '0.5rem', color: 'var(--text-muted)' }}>Tool</span>
                  </div>
                </div>
              </div>
              <div className="step-arrow">➔</div>
              <div className="step-node" title="Execute Task">
                <div className="step-icon db">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <span>Execute Task</span>
              </div>
            </div>
          </motion.div>
          
          {/* Widget 3 (Bottom Right): Beyond the Terminal */}
          <motion.div 
            className="widget-card widget-beyond"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={widgetHover}
          >
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
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
