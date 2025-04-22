import React from 'react';

type AnnouncmentBarProps = {
  announcment?: string;
};

export default function AnnouncmentBar({ announcment }: AnnouncmentBarProps) {
  const baseAnnouncment =
    'Get free Gear with an E-Bike or Scooter Purchase + Free Shipping over $150';
  return (
    <div className='bg-[#F92F7B] text-white text-center py-1 px-4 text-[12px] font-semibold'>
      {announcment ? announcment : baseAnnouncment}
    </div>
  );
}
