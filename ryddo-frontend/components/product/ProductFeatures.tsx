import Image from 'next/image';

interface ProductFeaturesProps {
  braking: string;
  headlight: string;
  suspension: string;
}

const ProductFeatures = ({
  braking,
  headlight,
  suspension,
}: ProductFeaturesProps) => {
  const features = [
    {
      title: 'Headlight & Tail Light',
      description:
        'Stay safe with the Roxim 24E Elite, 600 Lumen LED headlight & the Roxim R3E LED brake light, both hardwired to your bikes battery for long lasting power.',
      image: headlight,
      imageAlt: 'Electric bike headlight and controls',
    },
    {
      title: 'Adjustable Suspension',
      description:
        'Inverted front coil spring fork w/ air assist and rear mono shock; adjustable preload, compression, and rebound damping.',
      image: suspension,
      imageAlt: 'Electric bike suspension system',
      layout: 'reverse',
    },
    {
      title: 'Powerful Braking',
      description:
        'Tektro Hydraulic, 4-piston calipers with 203mm front & 180mm rear extra thick 2.8mm rotors offer superior stopping power under heavy use.',
      image: braking,
      imageAlt: 'Electric bike brake disc and wheel',
    },
  ];

  return (
    <div className='w-full'>
      <div className='mx-auto'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='grid grid-cols-1 md:grid-cols-2 min-h-[400px] sm:min-h-[450px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px] 2xl:min-h-[550px]'
          >
            {/* Text Content */}
            <div
              className={`bg-[#FFFFFF] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 flex flex-col justify-center ${
                feature.layout === 'reverse' ? 'md:order-2' : ''
              }`}
            >
              <div className='max-w-md mx-auto md:mx-0 text-center md:text-left'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#F92F7B]'>
                  {feature.title.split(' ')[0]}
                </h3>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 -mt-1 sm:-mt-2'>
                  {feature.title.split(' ').slice(1).join(' ')}
                </h3>
                <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-sm mx-auto md:mx-0 text-gray-700'>
                  {feature.description}
                </p>
              </div>
            </div>

            {/* Image - Full size matching container */}
            <div
              className={`bg-black relative overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px] ${
                feature.layout === 'reverse' ? 'md:order-1' : ''
              }`}
            >
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                fill
                className='object-cover object-center w-full h-full'
                sizes='(max-width: 768px) 100vw, 50vw'
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;
