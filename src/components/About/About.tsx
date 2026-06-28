import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, BookOpen, Trophy, Workflow, Server, Brain, Target, LucideIcon
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedCounter from '../ui/AnimatedCounter';
import { ABOUT_TIMELINE, ABOUT_COUNTERS } from '../../utils/constants';
import { fadeUp, slideLeft, slideRight, staggerContainer, defaultViewport, defaultTransition } from '../../utils/animations';

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap, BookOpen, Trophy, Workflow, Server, Brain, Target,
};

const About: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" className="container section-container">
      <SectionHeader number="01 // THE NARRATIVE" title="Where Engineering Meets Teamwork" />

      <div className="about-grid">
        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={slideLeft}
          transition={defaultTransition}
        >
          <span className="bio-tag">BIOGRAPHY</span>
          <p className="narrative-desc">
            I approach software development much like playing a cricket match — it requires focus,
            structural discipline, and the ability to adapt to fast-changing conditions. Whether
            optimizing a database query or setting a field, execution is everything.
          </p>

          <div className="detail-cards">
            <div className="detail-card">
              <h3 className="detail-title">Mission</h3>
              <p className="detail-text">
                Build intelligent systems that automate human effort and create frictionless
                digital experiences at scale.
              </p>
            </div>
            <div className="detail-card">
              <h3 className="detail-title">Journey</h3>
              <p className="detail-text">
                From college hackathons to production automations — every project sharpened my
                ability to architect, ship, and iterate under pressure.
              </p>
            </div>
            <div className="detail-card">
              <h3 className="detail-title">Systems Thinker</h3>
              <p className="detail-text">
                Designing workflows that automate human efforts and reduce manual cycles by 90%.
              </p>
            </div>
          </div>

          <div className="about-counters">
            {ABOUT_COUNTERS.map((item) => (
              <AnimatedCounter
                key={item.label}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-timeline-panel glass-card"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={slideRight}
          transition={defaultTransition}
        >
          <div className="timeline-header">
            <span className="timeline-label">INTERACTIVE TIMELINE</span>
          </div>

          <motion.div
            className="timeline-track"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {ABOUT_TIMELINE.map((item, index) => {
              const Icon = ICON_MAP[item.icon] || Target;
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={item.year + item.title}
                  className={`timeline-node ${isActive ? 'active' : ''}`}
                  variants={fadeUp}
                  transition={defaultTransition}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                >
                  <div className="timeline-node-marker">
                    <Icon size={16} />
                  </div>
                  <div className="timeline-node-content">
                    <span className="timeline-year">{item.year}</span>
                    <h4>{item.title}</h4>
                    {isActive && <p>{item.description}</p>}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
