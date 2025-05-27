import React from 'react';
import { notFound } from 'next/navigation';
import BikeDetailPage from '../../../../components/product/e-bikes/BikeDetailPage';
import ScooterDetailPage from '../../../../components/product/e-scooter/ScooterDetailPage';
import AccessoriesDetailPage from '../../../../components/product/accessories/AccessoriesDetailPage';
import mockAPI from '../../../../lib/api/mockAPI';

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await params before using its properties
  const { id } = await params;

  // Convert string id to number
  const productId = parseInt(id, 10);

  // Check if id is a valid number
  if (isNaN(productId)) {
    notFound();
  }

  try {
    // Fetch product data based on ID
    const data = await mockAPI.getProductById(productId);
    const product = data.data;

    console.log(product);

    // Render appropriate component based on product type
    const renderProductDetail = () => {
      switch (product.type) {
        case 'e-bikes':
          return <BikeDetailPage />;
        case 'e-scooters':
          return <ScooterDetailPage />;
        case 'accessories':
          return <AccessoriesDetailPage />;
      }
    };

    return <div>{renderProductDetail()}</div>;
  } catch (error) {
    console.error('Error fetching product:', error);
    notFound();
  }
}
