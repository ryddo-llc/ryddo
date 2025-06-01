import React from 'react';
import { notFound } from 'next/navigation';
import ScooterDetailPage from '../../../../components/product/e-scooter/ScooterDetailPage';
import AccessoriesDetailPage from '../../../../components/product/accessories/AccessoriesDetailPage';
import mockAPI from '../../../../lib/api/mockAPI';
import EBikeLayout from '../../../../components/product/e-bikes/EBikeLayout';

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

    // Render appropriate component based on product type
    const renderProductDetail = () => {
      switch (product.type) {
        case 'e-bikes':
          return <EBikeLayout />;
        case 'e-scooters':
          return <ScooterDetailPage />;
        case 'accessories':
          return <AccessoriesDetailPage />;
        default:
          console.error(`Unsupported product type: ${product.type}`);
          notFound();
      }
    };

    return <div>{renderProductDetail()}</div>;
  } catch (error) {
    console.error('Error fetching product:', error);
    notFound();
  }
}
