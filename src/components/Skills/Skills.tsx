import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layout, Server, Database, Workflow, Brain, Cloud, Code2, Wrench, LucideIcon
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { SKILL_CATEGORIES } from '../../utils/constants';
import { fadeUp, staggerContainer, defaultViewport, defaultTransition } from '../../utils/animations';

const ICON_MAP: Record<string, LucideIcon> = {
  Layout, Server, Database, Workflow, Brain, Cloud, Code2, Wrench,
};

const Skills: React.FC = () => {
  const firstCategory = SKILL_CATEGORIES[0];
  const [activeCategory, setActiveCategory] = useState(firstCategory ? firstCategory.id : 'frontend');

  const current = SKILL_CATEGORIES.find((c) => c.id === activeCategory) || firstCategory;
  const CategoryIcon = current ? (ICON_MAP[current.icon] || Code2) : Code2;

  return (
    <section id="skills" className="container section-container">
      <SectionHeader
        number="02 // THE CAPABILITIES"
        title="Interactive Skills Dashboard"
        subtitle="Hover, explore, and inspect proficiency across every domain."
      />

      {current && (
        <div className="skills-dashboard glass-card">
          <div className="skills-tabs">
            {SKILL_CATEGORIES.map((cat) => {
              const Icon = ICON_MAP[cat.icon] || Code2;
              return (
                <button
                  key={cat.id}
                  className={`skill-tab ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                >
                  <Icon size={18} />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={current.id}
            className="skills-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
          >
            <div className="skills-panel-header">
              <div className="skills-panel-icon">
                <CategoryIcon size={28} />
              </div>
              <div>
                <h3>{current.title}</h3>
                <p>{current.skills.length} technologies mastered</p>
              </div>
            </div>

            <motion.div
              className="skills-bars"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {current.skills.map((skill) => (
                <motion.div key={skill.name} className="skill-bar-item" variants={fadeUp} transition={defaultTransition}>
                  <div className="skill-bar-header">
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={defaultViewport}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )}

      <motion.div
        className="skills-grid-mini"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        {SKILL_CATEGORIES.map((cat) => {
          const Icon = ICON_MAP[cat.icon] || Code2;
          return (
            <motion.div
              key={cat.id}
              className="skill-float-card"
              variants={fadeUp}
              transition={defaultTransition}
              onMouseEnter={() => setActiveCategory(cat.id)}
            >
              <div className="skill-float-glow" />
              <Icon size={24} className="skill-float-icon" />
              <span>{cat.title}</span>
              <span className="skill-float-count">{cat.skills.length}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
