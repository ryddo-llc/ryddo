import React from 'react';
import Image from 'next/image';
import PerformanceMetrics from './PerformanceMetrics';

interface PerformanceComparisonProps {
  bikeImagePerformance: string;
}

export default function PerformanceComparison({
  bikeImagePerformance,
}: PerformanceComparisonProps) {
  return (
    <div className='bg-white w-full min-h-[40vh] md:min-h-[50vh] lg:min-h-[80vh] max-h-screen relative overflow-hidden'>
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

      {/* Title at the top */}
      <div className='relative z-10 max-w-7xl mx-auto p-8 sm:p-6 md:p-10'>
        <div className='text-center mb-6 sm:mb-8 md:mb-12'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight'>
            Compare <span className='text-[#F92F7B]'>Performance</span>
          </h1>
          <p className='text-gray-600 text-lg sm:text-xl mt-2 sm:mt-4'>
            Compare the RX to its competition
          </p>
        </div>
      </div>

      {/* Performance Metrics - Absolutely positioned */}
      <div className='absolute bottom-4 left-4 right-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-8 md:left-auto z-10 w-auto md:w-1/3'>
        <div className='space-y-6 md:pr-8'>
          <PerformanceMetrics />
        </div>
      </div>
    </div>
  );
}
