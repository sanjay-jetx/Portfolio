import React from 'react';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label?: string;
  duration?: number;
  inline?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  label,
  duration = 2000,
  inline = false,
}) => {
  const { count, ref } = useAnimatedCounter(value, duration);

  const formatCount = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K`;
    return n.toLocaleString();
  };

  if (inline) {
    return (
      <span ref={ref}>
        {formatCount(count)}
        {suffix}
      </span>
    );
  }

  return (
    <div className="counter-item" ref={ref}>
      <div className="counter-value">
        {formatCount(count)}
        <span className="counter-suffix">{suffix}</span>
      </div>
      {label && <div className="counter-label">{label}</div>}
    </div>
  );
};

export default AnimatedCounter;
