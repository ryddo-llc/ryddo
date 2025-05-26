'use client';
import React, { useEffect, useState } from 'react';
import ProductsGrid from './ProductsGrid';
import { usePathname } from 'next/navigation';
import api from '../../lib/api/mockAPI';
import { Products } from '../../app/types/products';
import Loading from '../ui/Loading';
import ProductsFilterDropdown from './ProductsFilterDropdown';
import Pagination from '../ui/Pagination';

export default function ProductLayout() {
  const productsPerPage = 9;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const pathname = usePathname();

  // Get current page products

  const currentNumberOfProducts = products.length;

  // Handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Optional: scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Show loading state
        setLoading(true);
        const pathParts = pathname.split('/').filter((part) => part !== '');
        const currentPathname = pathParts[1];
        // Call the mock API
        const response = await api.getProductsByType(currentPathname);

        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = Math.min(
          startIndex + productsPerPage,
          response.data.length
        );

        setProducts(response.data.slice(startIndex, endIndex));
        setTotalItems(response.data.length);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
        setLoading(false);
      }
    };
    fetchProducts();
  }, [pathname, currentPage]);

  if (loading)
    return (
      <div className='w-full flex justify-center items-center'>
        <Loading />
      </div>
    );

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex justify-between w-full'>
        <h3 className='text-zinc-800 text-sm font-medium leading-loose'>
          Showing {currentNumberOfProducts} results
        </h3>
        <ProductsFilterDropdown />
      </div>
      <ProductsGrid products={products.slice(0, productsPerPage)} />
      {error && <div>{error}</div>}
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={productsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
