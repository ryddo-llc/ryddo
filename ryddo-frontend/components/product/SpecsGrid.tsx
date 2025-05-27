import React from 'react';
import Image from 'next/image';

export default function SpecsGrid({
  range = '75+ mi.',
  speed = '28+ mph',
  breaks = '4 Piston',
  power = '2,000W',
  weight = '80 lbs.',
  tires = '20"x5"',
}) {
  const specs = [
    {
      label: 'Range',
      value: range,
    },
    {
      label: 'Speed',
      value: speed,
    },
    {
      label: 'Brakes',
      value: breaks,
    },
    {
      label: 'Power',
      value: power,
    },
    {
      label: 'Weight',
      value: weight,
    },
    {
      label: 'Tires',
      value: tires,
    },
  ];

  return (
    <div className='p-6'>
      <div className='flex gap-20 justify-center'>
        {specs.map((spec, index) => (
          <div key={index} className='text-center'>
            {/* Pink Icon Container */}
            <div>
              <Image
                src={`/images/icons/${spec.label.toLowerCase()}.png`}
                alt={spec.label}
                width={50}
                height={24}
                className=''
              />
            </div>

            {/* Label and Value */}
            <div className='space-y-1 py-2'>
              <p className='text-sm font-semibold text-gray-900 leading-tight'>
                {spec.label}
              </p>
              <p className='text-sm text-gray-600 leading-tight'>
                {spec.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
