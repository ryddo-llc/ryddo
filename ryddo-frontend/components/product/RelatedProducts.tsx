import Image from 'next/image';
import { AiOutlineEye } from 'react-icons/ai';

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Rayolt Ambassador',
      price: '$4,200',
      originalPrice: null,
      image: '/api/placeholder/280/200',
      hasDiscount: false,
      gradient: 'from-green-100 to-purple-100',
    },
    {
      id: 2,
      name: 'Kalk INK5 - Demo',
      price: '$9,900',
      originalPrice: '$17,500',
      image: '/api/placeholder/280/200',
      hasDiscount: true,
      gradient: 'from-blue-100 to-gray-100',
    },
    {
      id: 3,
      name: 'Paul Smith Hummingbird',
      price: '$6,100',
      originalPrice: null,
      image: '/api/placeholder/280/200',
      hasDiscount: false,
      gradient: 'from-purple-100 to-pink-100',
    },
    {
      id: 4,
      name: 'MSPC Potential 2-Way',
      price: '$365',
      originalPrice: null,
      image: '/api/placeholder/280/200',
      hasDiscount: false,
      gradient: 'from-gray-100 to-blue-100',
    },
  ];

  return (
    <section className='w-full max-w-8xl mx-auto px-4 sm:px-10 lg:px-10 py-8 sm:py-14 lg:py-22 bg-[#F5F5F5]'>
      {/* Section Title */}
      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-gray-900'>
        <span className='text-pink-500'>Related</span> Products.
      </h2>

      {/* Products Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative'
          >
            {/* Sale Badge */}
            {product.hasDiscount && (
              <div className='absolute top-3 sm:top-4 left-3 sm:left-4 z-10'>
                <span className='bg-pink-500 text-white px-2 sm:px-3 py-1 rounded text-xs font-semibold'>
                  Sale!
                </span>
              </div>
            )}

            {/* Product Image Container */}
            <div
              className={`relative w-full h-40 sm:h-48 lg:h-44 xl:h-48 rounded-lg mb-3 sm:mb-4 bg-gradient-to-br ${product.gradient} overflow-hidden`}
            >
              {/* Placeholder for bike illustrations - you'll replace with actual images */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-24 sm:w-32 h-16 sm:h-20 bg-gray-800 rounded-lg opacity-20'></div>
              </div>

              {/* In real implementation, use Next.js Image component */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-contain p-4'
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
              />
            </div>

            {/* Product Info */}
            <div className='text-center space-y-2 sm:space-y-3'>
              <h3 className='font-semibold text-gray-900 text-sm sm:text-base leading-tight px-1'>
                {product.name}
              </h3>

              {/* Price */}
              <div className='flex items-center justify-center gap-2'>
                {product.originalPrice && (
                  <span className='text-gray-400 line-through text-sm'>
                    {product.originalPrice}
                  </span>
                )}
                <span className='font-bold text-gray-900 text-sm sm:text-base'>
                  {product.price}
                </span>
              </div>

              {/* Quick View Button */}
              <button className='w-full bg-pink-500 hover:bg-pink-600 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 group'>
                <AiOutlineEye className='text-sm sm:text-base' />
                <span className='hidden xs:inline'>Quick View</span>
                <span className='xs:hidden'>View</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
