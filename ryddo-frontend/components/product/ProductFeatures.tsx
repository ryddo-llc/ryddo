import Image from 'next/image';

const ProductFeatures = () => {
  const features = [
    {
      title: 'Headlight & Tail Light',
      description:
        'Stay safe with the Roxim 24E Elite, 600 Lumen LED headlight & the Roxim R3E LED brake light, both hardwired to your bikes battery for long lasting power.',
      image: '/api/placeholder/300/240',
      imageAlt: 'Electric bike headlight and controls',
    },
    {
      title: 'Adjustable Suspension',
      description:
        'Inverted front coil spring fork w/ air assist and rear mono shock; adjustable preload, compression, and rebound damping.',
      image: '/api/placeholder/300/240',
      imageAlt: 'Electric bike suspension system',

      layout: 'reverse',
    },
    {
      title: 'Powerful Braking',
      description:
        'Tektro Hydraulic, 4-piston calipers with 203mm front & 180mm rear extra thick 2.8mm rotors offer superior stopping power under heavy use.',
      image: '/api/placeholder/300/240',
      imageAlt: 'Electric bike brake disc and wheel',
    },
  ];

  return (
    <div className='w-full'>
      <div className='mx-auto'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='grid grid-cols-1 md:grid-cols-2 min-h-[350px] sm:min-h-[400px] lg:min-h-[450px]'
          >
            {/* Text Content */}
            <div
              className={`bg-[#FFFFFF] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center ${
                feature.layout === 'reverse' ? 'md:order-2' : ''
              }`}
            >
              <div className='max-w-md mx-auto md:mx-0 text-center md:text-left'>
                <h3
                  className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 text-[#F92F7B]`}
                >
                  {feature.title.split(' ')[0]}
                </h3>
                <h3 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 -mt-1 sm:-mt-2'>
                  {feature.title.split(' ').slice(1).join(' ')}
                </h3>
                <p className='text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-sm mx-auto md:mx-0'>
                  {feature.description}
                </p>
              </div>
            </div>

            {/* Image */}
            <div
              className={`bg-black relative overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-full ${
                feature.layout === 'reverse' ? 'md:order-1' : ''
              }`}
            >
              <div className='absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8'>
                <div className='relative w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-96'>
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className='object-contain'
                    sizes='(max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, 35vw'
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;
