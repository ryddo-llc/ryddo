export default function ProductsFilter() {
  return (
    <aside className='w-full md:w-[220px] bg-white p-5 rounded-lg shadow-sm'>
      <div className='mb-6'>
        <h3 className='font-bold text-lg mb-4'>Let's find you a scooter!</h3>
        <p className='text-sm mb-3'>
          Welcome back <span className='text-pink-500'>thomas</span>! Please
          tell us all about your ideal new e-scooter and we can make some
          suggestions.
        </p>
        <div className='flex mt-4 max-w-full overflow-hidden'>
          <input
            type='text'
            placeholder='Search'
            className='flex-1 min-w-0 border border-gray-300 rounded-l-md px-3 py-2 text-sm'
          />
          <button className='bg-pink-500 text-white px-3 py-2 rounded-r-md flex-shrink-0'>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Style Filter */}
      <div className='mb-6'>
        <h3 className='font-bold mb-3'>Style</h3>
        <div className='space-y-2'>
          {[
            'Adventure (3)',
            'Cargo (5)',
            'City (18)',
            'Cruiser (12)',
            'Lightweight (15)',
            'Motorbike (9)',
            'Mountain (5)',
          ].map((style) => (
            <div key={style} className='flex items-center'>
              <input type='checkbox' id={style} className='mr-2 h-4 w-4' />
              <label htmlFor={style} className='text-sm'>
                {style}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Range Filter */}
      <div className='mb-6'>
        <h3 className='font-bold mb-3'>Range</h3>
        <div className='space-y-2'>
          {['15 MPH (8)', '20 MPH (27)', '25 MPH (14)', '28+ MPH (12)'].map(
            (range) => (
              <div key={range} className='flex items-center'>
                <input type='checkbox' id={range} className='mr-2 h-4 w-4' />
                <label htmlFor={range} className='text-sm'>
                  {range}
                </label>
              </div>
            )
          )}
        </div>
      </div>

      {/* Price Filter */}
      <div className='mb-6'>
        <h3 className='font-bold mb-3'>Price</h3>
        <div className='space-y-2'>
          {[
            'Up to $1,499 (5)',
            '$500-$1,999 (7)',
            '$2,000-$4,999 (12)',
            '$5,000 and above (3)',
          ].map((price) => (
            <div key={price} className='flex items-center'>
              <input type='checkbox' id={price} className='mr-2 h-4 w-4' />
              <label htmlFor={price} className='text-sm'>
                {price}
              </label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
