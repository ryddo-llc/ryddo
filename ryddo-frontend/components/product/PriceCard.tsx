'use client';
import React, { useState } from 'react';

export default function PriceCard({
  price = '$3,695',
  paymentOptions = 'Pay as low as $138/mo.',
  paymentProviders = 'Klarna',
  learnMoreText = 'Learn more',
  colors = [
    { name: 'gray', bg: 'bg-gray-300', selected: true },
    { name: 'red', bg: 'bg-red-600', selected: false },
  ],
  onCompare = () => {},
  onAddToCart = () => {},
}) {
  const [selectedColor, setSelectedColor] = useState(
    colors.find((color) => color.selected)?.name || colors[0]?.name
  );

  const handleColorChange = (colorName: string): void => {
    setSelectedColor(colorName);
  };

  return (
    <div className='text-right p-2'>
      {/* Authorized Dealer Header */}
      <div className='mb-6'>
        <h3 className='text-sm font-bold text-gray-900 mb-1'>
          Authorized Dealer
        </h3>
        <p className='text-xs text-[#AE9D77] leading-relaxed'>
          Specializing in service
          <br />& custom modifications
        </p>
      </div>

      {/* Price Section */}
      <div className='mb-6'>
        <div className='text-4xl font-black text-gray-900 mb-2'>{price}</div>
        <div className='text-xs text-gray-600 leading-relaxed'>
          <span>{paymentOptions} </span>
          <span className='text-pink-500 font-medium'>{paymentProviders}</span>
          <br />
          <span className='text-pink-500 font-medium underline cursor-pointer'>
            {learnMoreText}
          </span>
        </div>
      </div>

      {/* Action Buttons - Side by Side */}
      <div className='flex gap-3 mb-6 justify-end'>
        <button
          onClick={onCompare}
          className='border-2 border-gray-400 text-gray-700 py-2 px-5 rounded-full font-semibold hover:border-pink-600 hover:text-[#F92F7B] transition-colors text-sm'
        >
          Compare
        </button>
        <button
          onClick={onAddToCart}
          className='bg-[#F92F7B] text-white py-2 px-5 rounded-full font-semibold hover:bg-pink-600 transition-colors text-sm'
        >
          Add to cart
        </button>
      </div>

      {/* Color Selection */}
      <div className='flex flex-col items-end'>
        <p className='text-sm font-bold text-gray-900 mb-3 tracking-wide'>
          COLOR
        </p>
        <div className='flex gap-3'>
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleColorChange(color.name)}
              className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                color.bg
              } ${
                selectedColor === color.name
                  ? 'border-pink-500 ring-2 ring-pink-200'
                  : 'border-gray-300'
              }`}
              aria-label={`Select ${color.name} color`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
