import React from 'react';

interface Offer {
  title: string;
  subtitle: string;
  highlightColor: string;
  subtitleColor: string;
}

interface OffersCardProps {
  offers?: Offer[];
}

export default function OffersCard({
  offers = [
    {
      title: 'Special Offers',
      subtitle: 'Free Assembly & 1-yr Service Credit',
      highlightColor: 'text-[#333333]',
      subtitleColor: 'text-[#AE9D77]',
    },
    {
      title: 'Adjustable Full Suspension',
      subtitle: 'Preload, compression, and rebound',
      highlightColor: 'text-[#F92F7B]',
      subtitleColor: 'text-[#333333]',
    },
    {
      title: 'Super73 App',
      subtitle: '(4) Ride Modes',
      highlightColor: 'text-[#333333]',
      subtitleColor: 'text-[#757575]',
    },
  ],
}: OffersCardProps) {
  return (
    <div className='max-w-sm'>
      <div className='space-y-6'>
        {offers.map((offer, index) => (
          <div
            key={`${offer.title}-${index}`}
            className='flex items-start justify-between'
          >
            <div className='flex-1'>
              <h3 className={`text-lg font-bold mb-1 ${offer.highlightColor}`}>
                {offer.title}
              </h3>
              <p className={`text-sm ${offer.subtitleColor} leading-relaxed`}>
                {offer.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
