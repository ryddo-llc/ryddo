import React from 'react';
import Image from 'next/image';
import PerformanceMetrics from './PerformanceMetrics';
import PulseAnimation from '../ui/PulseAnimation';
import { super73RXPerformanceData } from '../../lib/data/performanceData';

export default function PerformanceComparison({ bikeImagePerformance }: { bikeImagePerformance: string }) {
  return (
    <section className="relative w-full min-h-[80vh] bg-[#f7f7f7] flex flex-col items-stretch overflow-hidden">
      {/* Left-side background image for PERFORM */}
      <div className="absolute left-0 top-0 h-full w-1/2 z-0 pointer-events-none select-none">
        <Image
          src="/images/PERFORM.webp"
          alt="PERFORM"
          fill
          className="object-contain object-left opacity-40"
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center relative z-10 mb-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Compare <span className="text-[#F92F7B]">Performance</span>
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          Compare the RX to its competition
        </p>
      </div>
      <div className="relative w-full flex flex-col md:flex-row items-center min-h-[400px] md:min-h-[700px]">
        <div className="relative md:absolute md:left-1/2 h-[90vw] max-h-[1200px] w-full md:w-[120vw] max-w-[1200px] overflow-visible z-10 md:transform md:-translate-x-[75%] flex-shrink-0">
          {/* Pulse Animation Component */}
          <PulseAnimation
            size={600}
            pulseIntensity="normal"
            colors={{
              center: '#FFD600',
              innerRing: '#FFD600',
              middleRing: '#FFF59D',
              outerRing: '#FFF9C4'
            }}
            className="z-20"
          />
          <Image
            src={bikeImagePerformance || 'https://res.cloudinary.com/dbhlq0sc4/image/upload/f_auto/q_auto/v1/super-73-performace?_a=BAVAZGE70'}
            alt="Super-73"
            fill
            className="object-contain object-right z-20"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center w-full max-w-[600px] mx-auto md:ml-auto md:pr-4 md:pl-48 mt-8 md:mt-0">
          <PerformanceMetrics metrics={super73RXPerformanceData.metrics} />
        </div>
      </div>
    </section>
  );
}
