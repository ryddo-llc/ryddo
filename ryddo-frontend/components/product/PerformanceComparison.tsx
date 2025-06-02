'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface PerformanceComparisonProps {
  bikeImagePerformance: string;
}

export default function PerformanceComparison({
  bikeImagePerformance,
}: PerformanceComparisonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
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
      percentage: 92,
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
    <div className=' bg-white  w-full min-h-[40vh] md:min-h-[50vh] lg:min-h-[80vh] max-h-screen relative overflow-hidden'>
      {/* Gray diagonal background element */}
      <div className='absolute top-0 left-0 w-96 h-full bg-gray-200 transform -skew-x-12 -translate-x-32'></div>

      {/* Image positioned at left edge of screen */}
      <div className='absolute left-0 bottom-0 z-5'>
        <Image
          src={bikeImagePerformance}
          alt='Super-73'
          width={1100}
          height={2000}
          priority
          className='object-cover'
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto p-8'>
        {/* Title at the top */}
        <div className='text-center mb-12'>
          <h1 className='text-7xl font-bold text-gray-900 leading-tight'>
            Compare <span className='text-[#F92F7B]'>Performance</span>
          </h1>
          <p className='text-gray-600 text-xl mt-4'>
            Compare the RX to its competition
          </p>
        </div>

        <div className='flex justify-end'>
          {/* Right side - Performance Metrics */}
          <div className='w-1/3 space-y-6 pr-8'>
            {performanceMetrics.map((metric, index) => (
              <div key={index} className='space-y-3'>
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
          </div>
        </div>
      </div>
    </div>
  );
}
