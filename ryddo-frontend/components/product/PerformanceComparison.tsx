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

      <div className=' z-10 max-w-7xl mx-auto p-8'>
        {/* Title at the top */}
        <div className='text-center mb-12'>
          <h1 className='text-7xl font-bold text-gray-900 leading-tight'>
            Compare <span className='text-[#F92F7B]'>Performance</span>
          </h1>
          <p className='text-gray-600 text-xl mt-4'>
            Compare the RX to its competition
          </p>
        </div>

        <div className='flex justify-end pl-5'>
          {/* Right side - Performance Metrics */}
          <div className='w-1/3 space-y-6 pr-8'>
            <PerformanceMetrics />
          </div>
        </div>
      </div>
    </div>
  );
}
