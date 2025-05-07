import React from 'react';
import porducts from '../../lib/data/products';
export default function PopularProducts() {
  return (
    <section
      aria-label='Popular Products'
      className='w-full h-[45vh] md:h-[50vh] lg:h-[65vh] p-10'
    >
      <div className='relative pr-20 pl-20 pt-10'>
        <div className=' p-4 inline-block'>
          <h2 className='text-5xl text-zinc-800 font-extrabold font-["Nunito"] leading-[57.60px]'>
            Popular Products
            <span className='w-4 h-16 justify-center text-[#F92F7B] text-6xl font-bold leading-9'>
              .
            </span>
          </h2>
          <p className='text-zinc-800 text-md font-semibold leading-loose'>
            View and learn more about our lastest products.
          </p>
        </div>
      </div>
    </section>
  );
}
