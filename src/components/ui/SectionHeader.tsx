import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, defaultViewport, defaultTransition } from '../../utils/animations';

interface SectionHeaderProps {
  number: string;
  title?: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title, subtitle }) => (
  <motion.div
    className="section-header"
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    variants={fadeUp}
    transition={defaultTransition}
  >
    <span className="section-num">{number}</span>
    {title && <h2 className="section-title">{title}</h2>}
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </motion.div>
);

export default SectionHeader;
