import React, { useEffect, useState } from 'react';

const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (isDesktop) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CursorGlow;
