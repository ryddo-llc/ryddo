import React from 'react';
import ProductGrid from '../product/PopularProductsGrid';

export default function PopularProducts() {
  return (
    <section aria-label='Popular Products' className='w-full'>
      <div className='pb-20 pt-20 px-4 sm:px-6 md:px-10 lg:px-15 max-w-screen-xl mx-auto '>
        {/* Make sure there's no extra margin/padding here */}
        <div className='pt-2 pb-4 sm:pb-6 w-full'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl text-zinc-800 font-extrabold font-["Nunito"] leading-tight sm:leading-[57.60px]'>
            Popular Products
            <span className='text-[#F92F7B] text-5xl sm:text-6xl font-bold leading-9'>
              .
            </span>
          </h2>
          <p className='text-zinc-800 text-sm sm:text-md font-semibold leading-relaxed sm:leading-loose mt-1'>
            View and learn more about our latest products.
          </p>
        </div>
        <ProductGrid />
      </div>
    </section>
  );
}
