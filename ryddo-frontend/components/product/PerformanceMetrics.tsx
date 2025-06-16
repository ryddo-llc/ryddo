'use client';
import React, { useEffect, useState, useRef } from 'react';

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
      label: 'Breaking Power - 90%',
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
    <>
      {performanceMetrics.map((metric, index) => (
        <div ref={ref} key={index} className='space-y-3'>
          <div className='flex justify-between items-start'>
            <h3 className='font-bold text-gray-900 text-sm leading-tight max-w-xs'>
              {metric.label}
            </h3>
          </div>
          <p className='text-xs text-gray-500'>{metric.sublabel}</p>

          {/* Progress bar container */}
          <div className='w-full bg-gray-200 rounded-full h-1.5 overflow-hidden'>
            <div
              className={`h-1.5 ${metric.color} rounded-full transition-all duration-1000 ease-out`}
              style={{
                width: isVisible ? `${metric.percentage}%` : '0%',
                transitionDelay: `${index * 150}ms`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
}
