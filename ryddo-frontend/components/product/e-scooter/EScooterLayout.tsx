import React from 'react';
import RelatedProducts from '../RelatedProducts';
import Addons from '../Addons';
import ScooterDetailPage from './ScooterDetailPage';
import PerformanceComparison from '../PerformanceComparison';
import TechSpecs from '../TechSpecs';
import ProductShowcase from '../ProductShowcase';
import ProductFeatures from '../ProductFeatures';
import { bikePowerSpecs } from '../../../lib/utils/techSpecs';

export default function EScooterLayout() {
  return (
    <>
      <ScooterDetailPage />
      <Addons name='E-Scooter' />
      <ProductShowcase />
      <PerformanceComparison />
      <ProductFeatures />
      <TechSpecs powerSpecs={bikePowerSpecs} />
      <RelatedProducts />
    </>
  );
}
