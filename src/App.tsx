import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import TechBackground from './components/TechBackground';
import { useLenis } from './hooks/useLenis';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);
  const logoRef = useRef<SVGSVGElement | null>(null);

  // Initialize Lenis smooth scroll globally
  useLenis();

  useEffect(() => {
    const logoEl = logoRef.current;
    if (logoEl) {
      // 1. Calculate coordinates to center the logo on mount
      const rect = logoEl.getBoundingClientRect();
      const logoCenterX = rect.left + rect.width / 2;
      const logoCenterY = rect.top + rect.height / 2;
      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;
      const dx = viewportCenterX - logoCenterX;
      const dy = viewportCenterY - logoCenterY;

      // 2. Position in center, scaled up
      logoEl.style.transform = `translate(${dx}px, ${dy}px) scale(3.5)`;
      logoEl.style.transition = 'none';
      logoEl.style.zIndex = '10001';

      // 3. Accelerate ball animation
      const ballEl = logoEl.querySelector('.logo-ball') as HTMLElement;
      if (ballEl) {
        ballEl.style.animationDuration = '1.5s';
      }

      // 4. Fly back to navbar
      const transitionTimeout = setTimeout(() => {
        if (logoEl) {
          logoEl.style.transition = 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
          logoEl.style.transform = 'translate(0px, 0px) scale(1)';
        }
        if (ballEl) {
          ballEl.style.transition = 'animation-duration 0.9s';
          ballEl.style.animationDuration = '6s';
        }
        setFadeLoader(true);
      }, 600);

      // 5. Complete transition
      const finishTimeout = setTimeout(() => {
        setLoading(false);
        if (logoEl) {
          logoEl.style.zIndex = '';
          logoEl.style.transition = '';
        }
      }, 1500);

      return () => {
        clearTimeout(transitionTimeout);
        clearTimeout(finishTimeout);
      };
    }
  }, []);

  return (
    <>
      {loading && (
        <div className={`page-loader ${fadeLoader ? 'fade-out' : ''}`} />
      )}
      <div className="portfolio-app">
        <TechBackground />
        <Navbar fadeLoader={fadeLoader} logoRef={logoRef} />
        
        <main className={`main-content ${fadeLoader ? 'fade-in' : ''}`}>
          <Hero />
        </main>
      </div>
    </>
  );
};

export default App;
