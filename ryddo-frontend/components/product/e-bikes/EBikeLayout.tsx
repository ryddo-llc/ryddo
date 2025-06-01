import React from 'react';
import BikeDetailPage from './BikeDetailPage';
import Addons from '../Addons';
import ProductShowcase from '../ProductShowcase';
import { getCldImageUrl } from 'next-cloudinary';

const backgroundURL = getCldImageUrl({
  src: 'detailpage',
});

const bikeImageURL = getCldImageUrl({
  src: 'super-73-detailpage-image',
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
    </>
  );
}
