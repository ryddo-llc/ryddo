'use client';
import React, { useEffect, useState, useRef } from 'react';

// Wheel geometry constants for offset calculation (tweak as needed)
const wheelCenterY = 180; // px
const wheelCenterX = 180; // px
const wheelRadius = 150; // px
const lineSpacing = 48; // px
const barWidth = 360; // px

function getCurveOffset(index: number, total: number, yAdjust = 0) {
  const y = wheelCenterY - ((total - 1) / 2 - index) * lineSpacing + yAdjust;
  const dx = Math.sqrt(Math.max(0, wheelRadius ** 2 - (y - wheelCenterY) ** 2));
  return wheelCenterX + dx - barWidth;
}

export default function PerformanceMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animation after when it comes on the screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing after first trigger
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px 0px -50px 0px', // Trigger 50px before entering viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const performanceMetrics = [
    {
      label: 'Maximum Range - 45+ Miles (pedal assist*)',
      sublabel: '960 watt-hours, 21700 cells',
      percentage: 85,
      color: 'bg-[#F92F7B]',
    },
    {
      label: 'Power - 2,000 Watts',
      sublabel: '48V Motor: 2,000W peak',
      percentage: 100,
      color: 'bg-[#F92F7B]',
    },
    {
      label: 'Top Speed - 28+ mph',
      sublabel: 'Based on ideal conditions',
      percentage: 88,
      color: 'bg-[#F92F7B]',
    },
    {
      label: 'Braking Power - 90%',
      sublabel: 'Quad Piston Hydraulic',
      percentage: 90,
      color: 'bg-[#F92F7B]',
    },
    {
      label: 'Portability - 50%',
      sublabel: 'Weight & Portability',
      percentage: 50,
      color: 'bg-[#F92F7B]',
    },
    {
      label: 'Comfort - 85%',
      sublabel: 'Suspension + Position + Seat',
      percentage: 85,
      color: 'bg-[#F92F7B]',
    },
    {
      label: 'Tech Features - 75%',
      sublabel: 'Apps, Lighting, Navigation, Electrical',
      percentage: 75,
      color: 'bg-[#F92F7B]',
    },
  ];
  return (
    <div ref={ref} className='space-y-4'>
      {performanceMetrics.map((metric, index) => (
        <div key={index} style={{ marginBottom: '24px', position: 'relative' }}>
          <div
            className='font-bold text-gray-900 text-lg leading-tight'
            style={{ position: 'relative', left: getCurveOffset(index, performanceMetrics.length, -16) }}
          >
            {metric.label}
          </div>
          <div
            className='text-base text-gray-500'
            style={{ position: 'relative', left: getCurveOffset(index, performanceMetrics.length, 0) }}
          >
            {metric.sublabel}
          </div>
          <div
            className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mt-1"
            style={{
              position: 'relative',
              left: getCurveOffset(index, performanceMetrics.length, 16),
              width: `${barWidth}px`,
            }}
          >
            <div
              className={`h-2 ${metric.color} rounded-full transition-all duration-1000 ease-out`}
              style={{
                width: isVisible ? `${metric.percentage}%` : '0%',
                transitionDelay: `${index * 150}ms`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
