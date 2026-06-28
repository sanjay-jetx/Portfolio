import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { ProjectItem } from '../../utils/constants';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          className="modal-content glass-card"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>

          <div className="modal-header">
            <span className="project-badge">{project.badge}</span>
            <span className="project-subtitle">{project.subtitle}</span>
            <h2 id="modal-title" className="modal-title">{project.title}</h2>
          </div>

          <div className="modal-body">
            {project.workflow && project.workflow.length > 0 && (
              <div className="modal-section">
                <h3>Architecture</h3>
                <div className="architecture-flow">
                  {project.workflow.map((step, i) => (
                    <React.Fragment key={step}>
                      <span className="arch-node">{step}</span>
                      {project.workflow && i < project.workflow.length - 1 && <span className="arch-arrow">→</span>}
                    </React.Fragment>
                  ))}
                </div>
                {project.architecture && <p className="modal-text">{project.architecture}</p>}
              </div>
            )}

            <div className="modal-grid">
              {project.challenges && (
                <div className="modal-section">
                  <h3>Challenges</h3>
                  <p className="modal-text">{project.challenges}</p>
                </div>
              )}
              {project.solution && (
                <div className="modal-section">
                  <h3>Solution</h3>
                  <p className="modal-text">{project.solution}</p>
                </div>
              )}
            </div>

            <div className="modal-section">
              <h3>Tech Stack</h3>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {project.codeSnippet && (
              <div className="modal-section">
                <h3>Code Snippet</h3>
                <pre className="code-snippet"><code>{project.codeSnippet}</code></pre>
              </div>
            )}

            <div className="modal-grid">
              {project.impact && (
                <div className="modal-section">
                  <h3>Impact</h3>
                  <p className="modal-text">{project.impact}</p>
                </div>
              )}
              {project.lessons && (
                <div className="modal-section">
                  <h3>Lessons Learned</h3>
                  <p className="modal-text">{project.lessons}</p>
                </div>
              )}
            </div>
          </div>

          <div className="modal-footer">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary magnetic-btn">
              <SiGithub size={16} /> GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary magnetic-btn">
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
