import React from 'react';
import Image from 'next/image';
import PerformanceMetrics from './PerformanceMetrics';
import PulseAnimation from '../ui/PulseAnimation';
import { super73RXPerformanceData } from '../../lib/data/performanceData';

// Unified positioning constants for pulse animation
const PULSE_POSITION = {
  mobile: {
    horizontalOffset: '-13%',
    verticalOffset: '-50%',
  },
  desktop: {
    horizontalOffset: '-14%',
    verticalOffset: '-50%',
  },
} as const;

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
      
      <div className="relative w-full flex flex-col lg:flex-row items-center lg:min-h-[700px]">
        <div className="relative w-full lg:absolute lg:left-1/2 h-[40vh] lg:h-[90vw] max-h-[500px] lg:max-h-[1200px] lg:w-[120vw] max-w-[1200px] overflow-visible z-10 lg:transform lg:-translate-x-[75%] flex-shrink-0">
          <div className="lg:hidden">
            <div
              className="absolute left-1/2 top-1/2 pointer-events-none z-20"
              style={{
                transform: `translate(${PULSE_POSITION.mobile.horizontalOffset}, ${PULSE_POSITION.mobile.verticalOffset})`,
                width: '230px',
                height: '230px',
                overflow: 'visible',
              }}
            >
              <PulseAnimation
                size={230}
                pulseIntensity="normal"
                colors={{
                  center: '#FFD600',
                  innerRing: '#FFD600',
                  middleRing: '#FFF59D',
                  outerRing: '#FFF9C4'
                }}
              />
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div
              className="absolute left-1/2 top-1/2 pointer-events-none z-20"
              style={{
                transform: `translate(${PULSE_POSITION.desktop.horizontalOffset}, ${PULSE_POSITION.desktop.verticalOffset})`,
                width: '600px',
                height: '600px',
                overflow: 'visible',
              }}
            >
              <PulseAnimation
                size={600}
                pulseIntensity="normal"
                colors={{
                  center: '#FFD600',
                  innerRing: '#FFD600',
                  middleRing: '#FFF59D',
                  outerRing: '#FFF9C4'
                }}
              />
            </div>
          </div>
          
          <Image
            src={bikeImagePerformance || 'https://res.cloudinary.com/dbhlq0sc4/image/upload/f_auto/q_auto/v1/super-73-performance?_a=BAVAZGE70'}
            alt="Super-73"
            fill
            className="object-contain object-center lg:object-right z-20"
            priority
          />
        </div>
        
        <div className="relative z-10 w-full lg:flex lg:flex-col lg:justify-center lg:max-w-[600px] lg:mx-auto lg:ml-auto lg:pr-4 lg:pl-48 mt-8 lg:mt-0">
          <div className="p-4 lg:p-0">
            <PerformanceMetrics metrics={super73RXPerformanceData.metrics} />
          </div>
        </div>
      </div>
    </section>
  );
}
