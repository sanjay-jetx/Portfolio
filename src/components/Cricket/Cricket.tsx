import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { fadeUp, staggerContainer, defaultViewport, defaultTransition } from '../../utils/animations';

interface QualityItem {
  title: string;
  desc: string;
}

interface FieldPosition {
  id: string;
  label: string;
  x: string;
  y: string;
  role: string;
  desc: string;
}

interface CricketTimelineItem {
  year: string;
  event: string;
}

const Cricket: React.FC = () => {
  const [activePosition, setActivePosition] = useState<FieldPosition | null>(null);

  const qualities: QualityItem[] = [
    { title: 'Teamwork & Cohesion', desc: 'Understanding roles, backing up partners, and working in sync to achieve group targets.' },
    { title: 'Tactical Leadership', desc: 'Analyzing opposition strategies and deploying tactical field shifts at speed.' },
    { title: 'Crisis Calmness', desc: 'Staying clear-headed when matches go down to the final over — translating directly to deployment uptime.' },
    { title: 'Continuous Focus', desc: 'Consistency in practice translates to clean, zero-defect refactoring sessions.' },
  ];

  const fieldPositions: FieldPosition[] = [
    { id: 'wk', label: 'WicketKeeper // Error Handler', x: '50%', y: '15%', role: 'Exception Handling', desc: 'Catches unhandled errors and edge cases before they crash the application.' },
    { id: 'slips', label: 'Slips // Code Reviewers', x: '62%', y: '20%', role: 'PR Gates', desc: 'Last line of defense, intercepting bugs during code reviews.' },
    { id: 'bowler', label: 'Bowler // API Gateway', x: '50%', y: '75%', role: 'Request Dispatcher', desc: 'Controls the line, length, and pace of incoming payloads.' },
    { id: 'batsman', label: 'Batsman // User Interface', x: '50%', y: '30%', role: 'Client UI', desc: 'Responds dynamically to incoming data streams to hit business targets.' },
    { id: 'cover', label: 'Cover // CDN Edge', x: '25%', y: '45%', role: 'Caching Layer', desc: 'Intercepts requests close to the user, reducing access latency.' },
    { id: 'longon', label: 'Long On // DB Replica', x: '40%', y: '85%', role: 'Data Backup', desc: 'Deep backup for state persistence and heavy read operations.' },
  ];

  const timeline: CricketTimelineItem[] = [
    { year: '2018', event: 'Started playing cricket at school level' },
    { year: '2022', event: 'Joined college department team as all-rounder' },
    { year: '2024', event: 'Department tournament — strategic captaincy' },
    { year: '2025', event: 'Led team with discipline, teamwork, and pressure handling' },
  ];

  return (
    <section id="cricket" className="container section-container cricket-section">
      <div className="cricket-field-bg" aria-hidden="true">
        <div className="cricket-bat-swing" />
      </div>

      <SectionHeader
        number="06 // BEYOND CODE"
        title="Cricket Journey"
        subtitle="How sport shaped my engineering mindset — discipline, strategy, and calm under pressure."
      />

      <div className="cricket-grid">
        <div className="cricket-tactics-panel glass-card">
          <div className="panel-header-bar">
            <div className="tactics-status">
              <span className="ping-dot green" />
              <span>TACTICAL FIELD BOARD // OPERATIONAL</span>
            </div>
            <span className="tactics-tag">ROLE: ALL-ROUNDER</span>
          </div>

          <div className="tactics-pitch-container">
            <svg className="pitch-canvas" viewBox="0 0 400 400" width="100%" height="100%" aria-hidden="true">
              <ellipse cx="200" cy="200" rx="170" ry="170" fill="none" stroke="rgba(255, 200, 0, 0.12)" strokeWidth="1.5" strokeDasharray="5,5" />
              <ellipse cx="200" cy="200" rx="140" ry="140" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              <rect x="182" y="100" width="36" height="200" rx="4" fill="rgba(193, 154, 107, 0.08)" stroke="rgba(193, 154, 107, 0.25)" strokeWidth="1.5" />
              <line x1="182" y1="130" x2="218" y2="130" stroke="rgba(193, 154, 107, 0.25)" strokeWidth="1" />
              <line x1="182" y1="270" x2="218" y2="270" stroke="rgba(193, 154, 107, 0.25)" strokeWidth="1" />
            </svg>

            {fieldPositions.map((pos) => (
              <button
                key={pos.id}
                className={`position-marker ${activePosition?.id === pos.id ? 'active' : ''}`}
                style={{ left: pos.x, top: pos.y }}
                onClick={() => setActivePosition(activePosition?.id === pos.id ? null : pos)}
                aria-label={`Position: ${pos.label}`}
              >
                <span className="marker-pulse" />
                <span className="marker-dot" />
              </button>
            ))}

            {activePosition && (
              <div className="position-tooltip-box glass-card">
                <button className="tooltip-close-btn" onClick={() => setActivePosition(null)} aria-label="Close">&times;</button>
                <h5>{activePosition.label}</h5>
                <span className="role-badge">{activePosition.role}</span>
                <p>{activePosition.desc}</p>
              </div>
            )}

            {!activePosition && (
              <div className="tactics-instruction-box">
                <span>Tap any field position to inspect its architectural mapping.</span>
              </div>
            )}
          </div>

          <div className="tactics-scorecard">
            <div className="score-box">
              <span className="lbl">STRIKE RATE</span>
              <span className="val gold-txt">96.8%</span>
              <span className="desc">Deployment velocity</span>
            </div>
            <div className="score-box">
              <span className="lbl">ECONOMY RATE</span>
              <span className="val gold-txt">4.2</span>
              <span className="desc">Cloud resource usage</span>
            </div>
            <div className="score-box">
              <span className="lbl">BUG CAPTURE</span>
              <span className="val gold-txt">92%</span>
              <span className="desc">Testing suite coverage</span>
            </div>
          </div>
        </div>

        <div className="cricket-narrative">
          <div className="cricket-narrative-intro glass-card">
            <h4>Discipline Beyond Development</h4>
            <p>&ldquo;Cricket has taught me discipline, teamwork, consistency, and staying calm under pressure.&rdquo;</p>
            <p className="sub-quote">
              The mindset that wins matches also builds great software — strategic thinking, quick decisions, and continuous improvement.
            </p>
          </div>

          <div className="cricket-timeline">
            {timeline.map((item) => (
              <div key={item.year} className="cricket-timeline-item">
                <span className="cricket-year">{item.year}</span>
                <span className="cricket-event">{item.event}</span>
              </div>
            ))}
          </div>

          <motion.div
            className="quotes-stack"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {qualities.map((item, index) => (
              <motion.div key={item.title} className="cricket-quote-card glass-card" variants={fadeUp} transition={defaultTransition}>
                <span className="quality-number">0{index + 1}</span>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cricket;
