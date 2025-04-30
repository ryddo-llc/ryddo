import React from 'react';
import HeroSection from './HeroSection';
import CategoryShowcase from './CategoryShowcase';
import PopularProducts from './PopularProducts';
import PaymentOptions from './PaymentOptions';

export default function Homepage() {
  return (
    <div className='w-full'>
      <HeroSection />
      <CategoryShowcase />
      <PaymentOptions />
      <PopularProducts />
    </div>
  );
}
