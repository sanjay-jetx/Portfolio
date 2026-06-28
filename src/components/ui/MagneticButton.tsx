import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className, ...props }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Limit pull distance to max 10px
    const pullFactor = 0.15;
    const maxX = 10;
    const maxY = 10;
    
    let x = middleX * pullFactor;
    let y = middleY * pullFactor;
    
    x = Math.max(-maxX, Math.min(maxX, x));
    y = Math.max(-maxY, Math.min(maxY, y));

    setPosition({ x, y });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      {...(props as any)}
    >
      {children}
    </motion.a>
  );
};

export default MagneticButton;
