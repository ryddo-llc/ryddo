import React from 'react';
import Image from 'next/image';
import PerformanceMetrics from './PerformanceMetrics';

export default function PerformanceComparison({ bikeImagePerformance }: { bikeImagePerformance: string }) {
  return (
    <section className="relative w-full min-h-[80vh] bg-[#f7f7f7] flex flex-col items-stretch overflow-hidden">
      {/* Title and description at the top */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Compare <span className="text-[#F92F7B]">Performance</span>
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          Compare the RX to its competition
        </p>
      </div>
      {/* Main content: bike image and metrics */}
      <div className="relative w-full flex items-center min-h-[700px]">
        {/* Bike image absolutely positioned, anchored right, shifted left responsively */}
        <div className="absolute right-0 h-full w-[1000px] md:w-[1200px] overflow-hidden z-0 translate-x-[-100px] md:translate-x-[-350px]">
          <Image
            src={bikeImagePerformance || 'https://res.cloudinary.com/dbhlq0sc4/image/upload/f_auto/q_auto/v1/super-73-performace?_a=BAVAZGE70'}
            alt="Super-73"
            fill
            className="object-cover object-right z-[5]"
            priority
          />
        </div>
        {/* Metrics container in normal flow, fixed width, right-aligned */}
        <div className="relative z-10 flex flex-col justify-center w-full max-w-[420px] ml-auto pr-4">
          <PerformanceMetrics />
        </div>
      </div>
    </section>
  );
}
