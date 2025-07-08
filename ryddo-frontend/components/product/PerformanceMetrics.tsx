'use client';
import React from 'react';
import { PerformanceMetricsProps } from '../../types/performance';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { getCurveOffset, getAnimationDelay, WHEEL_GEOMETRY } from '../../lib/utils/performanceCalculations';

export default function PerformanceMetrics({ 
  metrics, 
  isVisible: externalIsVisible,
  className = '' 
}: PerformanceMetricsProps) {
  // Use intersection observer if external visibility state is not provided
  const { ref, isVisible: internalIsVisible } = useIntersectionObserver<HTMLDivElement>();
  const isVisible = externalIsVisible ?? internalIsVisible;

  return (
    <div ref={ref} className={`space-y-4 ${className}`}>
      {metrics.map((metric, index) => (
        <div key={metric.id} className="mb-6 relative">
          {/* Desktop: Curved positioning (md and up) */}
          <div className="hidden md:block">
            <div
              className='font-bold text-gray-900 text-lg leading-tight'
              style={{ 
                position: 'relative', 
                left: getCurveOffset(index, metrics.length, -16) 
              }}
            >
              {metric.label}
            </div>
            <div
              className='text-base text-gray-500'
              style={{ 
                position: 'relative', 
                left: getCurveOffset(index, metrics.length, 0) 
              }}
            >
              {metric.sublabel}
            </div>
            <div
              className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mt-1"
              style={{
                position: 'relative',
                left: getCurveOffset(index, metrics.length, 16),
                width: `${WHEEL_GEOMETRY.barWidth}px`,
              }}
            >
              <div
                className="h-2 rounded-full transition-all duration-1000 ease-out"
                style={{
                  backgroundColor: metric.color,
                  width: isVisible ? `${metric.percentage}%` : '0%',
                  transitionDelay: `${getAnimationDelay(index)}ms`,
                }}
              ></div>
            </div>
          </div>

          {/* Mobile: Normal vertical layout (below md) */}
          <div className="block md:hidden">
            <div className='font-bold text-gray-900 text-lg leading-tight'>
              {metric.label}
            </div>
            <div className='text-base text-gray-500'>
              {metric.sublabel}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mt-1">
              <div
                className="h-2 rounded-full transition-all duration-1000 ease-out"
                style={{
                  backgroundColor: metric.color,
                  width: isVisible ? `${metric.percentage}%` : '0%',
                  transitionDelay: `${getAnimationDelay(index)}ms`,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
