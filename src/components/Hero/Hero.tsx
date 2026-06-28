import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import MagneticButton from '../ui/MagneticButton';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  // Typing effect for code snippet
  const fullCode = `const developer = {\n  name: "Sanjay",\n  role: "AI Automation Engineer",\n  passion: "Automation & Code",\n  hobby: "Cricket 🏏"\n};`;
  const [typedCode, setTypedCode] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedCode(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) clearInterval(interval);
    }, 55); // 55ms per char
    return () => clearInterval(interval);
  }, [fullCode]);

  const renderHighlighted = (code: string) => {
    let html = code
      .replace(/const/g, '<span class="code-keyword">const</span>')
      .replace(/"[^"]*"/g, (match) => `<span class="code-string">${match}</span>`);
    return <code dangerouslySetInnerHTML={{ __html: html }} />;
  };

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

  const titleVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const widgetHover = {
    y: -8,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  };

  const renderWords = (text: string, className = "") => {
    return text.split(" ").map((word, i) => (
      <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em', paddingBottom: '0.1em', verticalAlign: 'bottom' }}>
        <motion.span variants={wordVariants} className={className} style={{ display: 'inline-block' }}>{word}</motion.span>
      </span>
    ));
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
            <span className="status-text fade-in">Available for Work</span>
          </motion.div>
          
          <motion.h1 className="hero-title" variants={titleVariants} initial="hidden" animate="visible">
            <div style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              {renderWords("Hey there")}
              <span style={{ display: 'inline-block', overflow: 'hidden', paddingBottom: '0.1em' }}>
                <motion.span variants={wordVariants} className="wave-hand" style={{ display: 'inline-block' }}>👋</motion.span>
              </span>
            </div>
            <div style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              {renderWords("I'm")}
              <span className="highlight-text" style={{ display: 'inline-block', overflow: 'hidden', paddingBottom: '0.1em' }}>
                <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>Sanjay,</motion.span>
              </span>
            </div>
            <div style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              {renderWords("Creative Developer", "serif-title")}
              {renderWords("&")}
            </div>
            <div style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              {renderWords("AI Automation Engineer", "bold-title")}
            </div>
          </motion.h1>
          
          <motion.p className="hero-description" variants={itemVariants}>
            I build autonomous systems and intelligent workflows using n8n, Python, and AI agents to solve complex business problems.
          </motion.p>
          
          <motion.div className="hero-ctas" variants={itemVariants}>
            <MagneticButton href="#projects" className="btn-primary">
              View Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </MagneticButton>
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
        
        {/* Right Column: Profile & Code Snippet */}
        <div className="hero-visuals">
          <div className="space-glow"></div>
          
          <motion.div 
            className="photo-card-target-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          >
            <div className="photo-card">
              <div className="photo-inner">
                <div className="photo-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <p>Upload Photo Later</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Widget 1: Developer JSON Code block (Typing Effect) */}
          <motion.div 
            className="widget-card widget-code"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={widgetHover}
            style={{ zIndex: 10 }}
          >
            <div className="widget-code-header" style={{ height: '24px', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '12px', background: 'rgba(0,0,0,0.02)' }}>
              {/* Removed dots to clean up design */}
            </div>
            <pre className="widget-code-body">
              {renderHighlighted(typedCode)}
              <span className="typing-cursor">|</span>
            </pre>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
