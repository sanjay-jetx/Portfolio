import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import SectionHeader from '../ui/SectionHeader';
import ProjectModal from '../ui/ProjectModal';
import { PROJECTS, ProjectItem } from '../../utils/constants';
import { fadeUp, staggerContainer, defaultViewport, defaultTransition } from '../../utils/animations';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="container section-container">
      <SectionHeader
        number="04 // THE ARCHITECTURES"
        title="Featured Projects"
        subtitle="Production systems, automation pipelines, and full-stack applications."
      />

      <motion.div
        className="projects-showcase"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        {featured.map((project) => (
          <motion.article
            key={project.id}
            className="project-card-premium glass-card"
            variants={fadeUp}
            transition={defaultTransition}
            whileHover={{ y: -8 }}
          >
            <div className="project-card-glow" />
            <div className="project-card-image">
              <div className="project-image-placeholder">
                <span>{project.title.charAt(0)}</span>
              </div>
              <span className="project-badge">{project.badge}</span>
            </div>

            <div className="project-card-body">
              <span className="project-subtitle">{project.subtitle}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-meta">
                <div className="project-meta-item">
                  <span className="meta-label">Architecture</span>
                  <span className="meta-value">
                    {project.architecture ? `${project.architecture.split('→')[0]?.trim()}...` : 'N/A'}
                  </span>
                </div>
                <div className="project-meta-item">
                  <span className="meta-label">Impact</span>
                  <span className="meta-value">
                    {project.impact ? project.impact.split('.')[0] : 'N/A'}
                  </span>
                </div>
              </div>

              <div className="project-actions">
                <button
                  className="project-link magnetic-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  CASE STUDY <ArrowUpRight size={14} />
                </button>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="GitHub">
                  <SiGithub size={18} />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="Live demo">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {others.length > 0 && (
        <>
          <h3 className="projects-subheading">More Projects</h3>
          <motion.div
            className="projects-grid-compact"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {others.map((project) => (
              <motion.article
                key={project.id}
                className="project-card-compact glass-card"
                variants={fadeUp}
                transition={defaultTransition}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
              >
                <span className="project-subtitle">{project.subtitle}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description.slice(0, 100)}...</p>
                <span className="project-link">View Case Study →</span>
              </motion.article>
            ))}
          </motion.div>
        </>
      )}

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
