import React from 'react';
import BikeDetailPage from './BikeDetailPage';
import Addons from '../Addons';
import ProductShowcase from '../ProductShowcase';
import { getCldImageUrl } from 'next-cloudinary';
import PerformanceComparison from '../PerformanceComparison';
import ProductFeatures from '../ProductFeatures';
import TechSpecs from '../TechSpecs';
import { bikePowerSpecs } from '../../../lib/utils/techSpecs';
import RelatedProducts from '../RelatedProducts';

const backgroundURL = getCldImageUrl({
  src: 'detailpage',
});

const bikeImageURL = getCldImageUrl({
  src: 'super-73-detailpage-image',
});

const bikeImagePerformance = getCldImageUrl({
  src: 'super-73-performace',
});

const bikeBraking = getCldImageUrl({
  src: 'powerful-breaking',
});

const bikeSuspension = getCldImageUrl({
  src: 'headlight-taillight',
});
const bikeHeadlight = getCldImageUrl({
  src: 'adjustable-suspension',
});

/**
 * Renders the complete e-bike detail page layout, assembling all major sections including bike details, addons, product showcase, performance comparison, feature highlights, and technical specifications.
 */
export default function EBikeLayout() {
  return (
    <>
      <BikeDetailPage
        backgroundURL={backgroundURL}
        bikeImageURL={bikeImageURL}
      />
      <Addons />
      <ProductShowcase ImageURL={bikeImageURL} name={'Super73'} />
      <PerformanceComparison bikeImagePerformance={bikeImagePerformance} />
      <ProductFeatures
        braking={bikeBraking}
        suspension={bikeSuspension}
        headlight={bikeHeadlight}
      />
      <TechSpecs powerSpecs={bikePowerSpecs} />
      <RelatedProducts />
    </>
  );
}
