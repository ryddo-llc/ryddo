import React from 'react';
import CategoryItem from '../ui/CategoryItem';
import { categories } from '../../lib/utils/categories';

export default function CategoryShowcase() {
  const topRowCategories = categories.slice(0, 3);
  const bottomRowCategories = categories.slice(3, 5);
  return (
    <section
      aria-labelledby='categories'
      className='w-full py-2 md:py-4 lg:py-6'
    >
      <div className='max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8'>
        <div className='space-y-6'>
          {/* Top Row - First item 50%, other two 25% each */}
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6'>
            {topRowCategories[0] && (
              <div className='lg:col-span-2'>
                <CategoryItem {...topRowCategories[0]} />
              </div>
            )}
            {topRowCategories[1] && (
              <div className='lg:col-span-1'>
                <CategoryItem {...topRowCategories[1]} />
              </div>
            )}
            {topRowCategories[2] && (
              <div className='lg:col-span-1'>
                <CategoryItem {...topRowCategories[2]} />
              </div>
            )}
          </div>

          {/* Bottom Row - Two items, equal width */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6'>
            {bottomRowCategories.map((category, index) => (
              <CategoryItem key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
