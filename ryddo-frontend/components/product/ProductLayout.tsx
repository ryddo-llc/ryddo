'use client';
import React, { useEffect, useState } from 'react';
import ProductsGrid from './ProductsGrid';
import { usePathname } from 'next/navigation';
import api from '../../lib/api/mockAPI';
import { Products } from '../../app/types/products';
import Loading from '../ui/Loading';

export default function ProductLayout() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const pathname = usePathname();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Show loading state
        setLoading(true);
        const pathParts = pathname.split('/').filter((part) => part !== '');
        const currentPathname = pathParts[1];
        // Call the mock API
        const response = await api.getProductsByType(currentPathname);

        // Update your state with the response data
        setProducts(response.data);

        // Hide loading state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
        setLoading(false);
      }
    };
    fetchProducts();
  }, [pathname]);

  if (loading)
    return (
      <div className='w-full flex justify-center items-center'>
        <Loading />
      </div>
    );

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex justify-between  w-full'>
        <h3>Number of products</h3>
        <h3>Filter</h3>
      </div>
      <ProductsGrid products={products} />
      {error && <div>{error}</div>}
      <div>Pagination</div>
    </div>
  );
}
