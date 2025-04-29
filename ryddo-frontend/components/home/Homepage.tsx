import React from 'react';
import HeroSection from './HeroSection';
import CategoryShowcase from './CategoryShowcase';
import PopularProducts from './PopularProducts';


export default function Homepage() {
  return (
    <div>
      Home Page
      <HeroSection />
      <CategoryShowcase />
      <PopularProducts />
    </div>
  );
}
