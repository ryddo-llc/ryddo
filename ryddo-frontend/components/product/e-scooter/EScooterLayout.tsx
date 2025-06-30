import React from 'react';
import RelatedProducts from '../RelatedProducts';
import Addons from '../Addons';
import ScooterDetailPage from './ScooterDetailPage';
import PerformanceComparison from '../PerformanceComparison';
import TechSpecs from '../TechSpecs';
import ProductShowcase from '../ProductShowcase';
import ProductFeatures from '../ProductFeatures';
import { bikePowerSpecs } from '../../../lib/utils/techSpecs';
import { getCldImageUrl } from 'next-cloudinary';
export default function EScooterLayout() {
  const backgroundURL = getCldImageUrl({
    src: 'e-scooters-background',
  });

  const productImageURL = getCldImageUrl({
    src: 'dualtron-thunder-product',
  });

  const productShowcaseImageURL = getCldImageUrl({
    src: 'dualtron-thunder-product-showcase',
  });

  const performanceComparisonImageURL = getCldImageUrl({
    src: 'thunder-front-performance',
  });
  return (
    <>
      <ScooterDetailPage
        backgroundURL={backgroundURL}
        productImageURL={productImageURL}
      />
      <Addons name='E-Scooter' />
      <ProductShowcase name={'Thunder'} ImageURL={productShowcaseImageURL} />
      <PerformanceComparison
        bikeImagePerformance={performanceComparisonImageURL}
      />
      <ProductFeatures />
      <TechSpecs powerSpecs={bikePowerSpecs} />
      <RelatedProducts />
    </>
  );
}
