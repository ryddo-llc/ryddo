'use client';
import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

type SectionKey = 'power' | 'components' | 'safety' | 'other';

const TechSpecs = () => {
  const [expandedSections, setExpandedSections] = useState({
    power: true,
    components: false,
    safety: false,
    other: false,
  });

  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const powerSpecs = [
    {
      title: 'Battery',
      content: '960 watt-hours, 21700 cells',
    },
    {
      title: 'Range',
      content: '40+ Miles (Varies by user and conditions)',
    },
    {
      title: 'Charge Time',
      content:
        '3A (5-7 hour charge time) / Optional: 5A (3-4 hour charge time)',
    },
    {
      title: 'Speed',
      content:
        'Class II: 20mph, Class III: 28mph, Class III (throttle deactivated, pedal-assist only)',
    },
    {
      title: 'Class',
      content:
        'Class II, Class-3 Mode: 28mph (throttle deactivated, pedal assist only) Unlimited Mode: 28mph +',
    },
    {
      title: 'Pedal Assist',
      content: '4 modes (ECO, TOUR, SPORT, SUPER)',
    },
    {
      title: 'Motor/s',
      content:
        'Class II/III: 750 watts nominal, 1,200 peak. Unlimited Mode: 1,200 watt nominal, 2,000 watt peak',
    },
  ];

  const allSections: { key: SectionKey; title: string; hasContent: boolean }[] =
    [
      { key: 'power', title: 'Power', hasContent: true },
      { key: 'components', title: 'Components', hasContent: false },
      { key: 'safety', title: 'Safety / Security', hasContent: false },
      { key: 'other', title: 'Other Specs', hasContent: false },
    ];

  return (
    <div className='bg-gray-100 p-6 sm:p-8 md:p-10 lg:p-16 max-w-8xl mx-auto'>
      {/* Header */}
      <div className='mb-8 md:mb-12'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
          <span className='text-pink-500'>Tech</span>
          <br />
          <span className='text-black'>Specs.</span>
        </h1>
      </div>

      {/* All Sections */}
      <div className='space-y-0'>
        {allSections.map((section) => (
          <div key={section.key}>
            <button
              onClick={() => toggleSection(section.key)}
              className='w-full flex items-center justify-between py-4 md:py-6 text-left hover:bg-gray-50 transition-colors duration-200'
            >
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-black'>
                {section.title}
              </h2>
              <div className='flex-1 h-px bg-gray-300 mx-6'></div>
              <div className='flex items-center'>
                {expandedSections[section.key] ? (
                  <AiOutlineMinus className='w-6 h-6 md:w-8 md:h-8 text-black' />
                ) : (
                  <AiOutlinePlus className='w-6 h-6 md:w-8 md:h-8 text-black' />
                )}
              </div>
            </button>

            {expandedSections[section.key] && (
              <div className='pb-6 md:pb-8'>
                {section.key === 'power' ? (
                  /* Power Grid */
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
                    {powerSpecs.map((spec, specIndex) => (
                      <div key={specIndex} className='space-y-2 md:space-y-3'>
                        <h3 className='text-sm md:text-base font-bold text-black'>
                          {spec.title}
                        </h3>
                        <p className='text-xs md:text-sm text-gray-600 leading-relaxed'>
                          {spec.content}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Other sections placeholder content */
                  <div className=' p-4 md:p-6 rounded-lg'>
                    <p className='text-gray-600 text-sm md:text-base'>
                      Content for {section.title} would go here. This is where
                      you would add the specific details for each section.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSpecs;
