import React from 'react';
import { PulseAnimationConfig } from '../../types/performance';
import { defaultAnimationConfig } from '../../lib/data/performanceData';
import styles from './PulseAnimation.module.css';

// Ring dimension constants for better maintainability
const RING_DIMENSIONS = {
  CENTER_RADIUS: 0.25,
  INNER_RING_RADIUS: 0.3,
  MIDDLE_RING_RADIUS: 0.33,
  OUTER_RING_RADIUS: 0.37,
  INNER_CUTOUT: 0.26,
  MIDDLE_CUTOUT: 0.29,
  OUTER_CUTOUT: 0.32,
} as const;

// Opacity constants for different ring layers
const RING_OPACITY = {
  CENTER: 0.2,
  INNER: 0.3,
  MIDDLE: 0.4,
  OUTER: 0.3,
} as const;

// Gradient stop opacity values
const GRADIENT_STOPS = {
  INNER: { start: 1, end: 0.9 },
  MIDDLE: { start: 1, end: 0.8 },
  OUTER: { start: 1, end: 0.7 },
} as const;

export default function PulseAnimation({
  size = defaultAnimationConfig.size,
  pulseIntensity = defaultAnimationConfig.pulseIntensity,
  colors = defaultAnimationConfig.colors,
  className = '',
}: PulseAnimationConfig) {
  const getAnimationClass = () => {
    switch (pulseIntensity) {
      case 'subtle':
        return styles.pulseSubtle;
      case 'strong':
        return styles.pulseStrong;
      default:
        return styles.pulseNormal;
    }
  };

  return (
    <div
      className={`absolute left-1/2 top-1/2 pointer-events-none ${className}`}
      style={{
        transform: 'translate(-13%, -50%)',
        width: `${size}px`,
        height: `${size}px`,
        overflow: 'visible',
      }}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${size} ${size}`} 
        fill="none"
      >
        <defs>
          <radialGradient id="ring1-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor={colors.middleRing} stopOpacity={GRADIENT_STOPS.INNER.start} />
            <stop offset="100%" stopColor={colors.middleRing} stopOpacity={GRADIENT_STOPS.INNER.end} />
          </radialGradient>

          <radialGradient id="ring2-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor={colors.middleRing} stopOpacity={GRADIENT_STOPS.MIDDLE.start} />
            <stop offset="100%" stopColor={colors.middleRing} stopOpacity={GRADIENT_STOPS.MIDDLE.end} />
          </radialGradient>
          
          <radialGradient id="ring3-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor={colors.outerRing} stopOpacity={GRADIENT_STOPS.OUTER.start} />
            <stop offset="100%" stopColor={colors.outerRing} stopOpacity={GRADIENT_STOPS.OUTER.end} />
          </radialGradient>

          {/* Masks for donut shapes */}
          <mask id="donut1">
            <rect width={size} height={size} fill="white" />
            <circle cx={size / 2} cy={size / 2} r={size * RING_DIMENSIONS.INNER_CUTOUT} fill="black" />
          </mask>
          <mask id="donut2">
            <rect width={size} height={size} fill="white" />
            <circle cx={size / 2} cy={size / 2} r={size * RING_DIMENSIONS.MIDDLE_CUTOUT} fill="black" />
          </mask>
          <mask id="donut3">
            <rect width={size} height={size} fill="white" />
            <circle cx={size / 2} cy={size / 2} r={size * RING_DIMENSIONS.OUTER_CUTOUT} fill="black" />
          </mask>
        </defs>
        
        {/* Static center fill */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * RING_DIMENSIONS.CENTER_RADIUS}
          fill={colors.center}
          opacity={RING_OPACITY.CENTER}
        />
        
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * RING_DIMENSIONS.INNER_RING_RADIUS}
          fill="url(#ring1-gradient)"
          mask="url(#donut1)"
          className={getAnimationClass()}
          opacity={RING_OPACITY.INNER}
        />
        
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * RING_DIMENSIONS.MIDDLE_RING_RADIUS}
          fill="url(#ring2-gradient)"
          mask="url(#donut2)"
          className={getAnimationClass()}
          opacity={RING_OPACITY.MIDDLE}
        />
        
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * RING_DIMENSIONS.OUTER_RING_RADIUS}
          fill="url(#ring3-gradient)"
          mask="url(#donut3)"
          className={getAnimationClass()}
          opacity={RING_OPACITY.OUTER}
        />
      </svg>
    </div>
  );
} 