import React from 'react';
import BikeDetailPage from './BikeDetailPage';
import Addons from '../Addons';
import ProductShowcase from '../ProductShowcase';
import { getCldImageUrl } from 'next-cloudinary';
import PerformanceComparison from '../PerformanceComparison';
import ProductFeatures from '../ProductFeatures';

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

export default function EBikeLayout() {
  return (
    <>
      <BikeDetailPage
        backgroundURL={backgroundURL}
        bikeImageURL={bikeImageURL}
      />
      <Addons />
      <ProductShowcase bikeImageURL={bikeImageURL} />
      <PerformanceComparison bikeImagePerformance={bikeImagePerformance} />
      <ProductFeatures
        braking={bikeBraking}
        suspension={bikeSuspension}
        headlight={bikeHeadlight}
      />
    </>
  );
}
