'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { usePathname } from 'next/navigation';

interface ProductProps {
  id: number;
  type: string;
  image: string;
  name: string;
  originalPrice?: string;
  salePrice?: string;
  price?: string;
  priceRange?: string;
  onSale?: boolean;
  new?: boolean;
  bestSeller?: boolean;
}
export default function ProductsGrid({
  products,
}: {
  products: ProductProps[];
}) {
  const [currentProducts, setCurrentProducts] = useState<ProductProps[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const pathParts = pathname.split('/').filter((part) => part !== '');
    const currentPathname = pathParts[1];

    const filteredProducts = products.filter(
      (product) => product.type === currentPathname
    );

    if (filteredProducts.length > 9) {
      filteredProducts.length = 9;
    }
    setCurrentProducts(filteredProducts);
  }, [pathname, products]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {currentProducts.map((product: ProductProps) => (
        <ProductCard product={product} key={product.id + product.image} />
      ))}
    </div>
  );
}
