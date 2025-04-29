'use client';
import React, { useState } from 'react';
import newletterformbackground from '../../../public/images/backgrounds/newsletterform-background.svg';
import Image from 'next/image';
export default function NewsLetterForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Replace with your actual API endpoint
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email }),
      // });

      // if (!response.ok) throw new Error('Subscription failed');

      // Mock successful subscription
      setTimeout(() => {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setIsSubmitting(false);
      }, 1000);
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className='rounded-lg bg-white  py-8 w-full max-w-3xl mx-auto'>
      <div className='absolute inset-0'></div>
      <div className='text-center mb-6 '>
        <h2 className='text-3xl font-bold text-gray-800 mb-2'>
          Let's stay in touch<span className='text-pink-500'>.</span>
        </h2>
        <p className='text-gray-600'>
          Sign up for our newsletter and receive special offers and discounts.
        </p>
      </div>

      {isSuccess ? (
        <div className='text-center py-6 text-green-600 font-medium'>
          Thanks for subscribing! We'll be in touch soon.
        </div>
      ) : (
        <form
          onSubmit={(e) => handleSubmit(e as React.FormEvent<HTMLFormElement>)}
        >
          <div className='flex flex-col space-y-3 px-8'>
            <div className='flex flex-col justify-center sm:flex-row gap-4'>
              <input
                type='text'
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=' bg-white rounded-md border-gray-200 py-1 px-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500'
                required
              />
              <input
                type='email'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=' bg-white rounded-md border-gray-200 py-1 px-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500'
                required
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='rounded-md bg-pink-500 hover:bg-pink-600 py-1 px-1 text-center text-white font-medium transition duration-200 ease-in-out'
            >
              {isSubmitting ? 'Subscribing...' : 'subscribe'}
            </button>

            {error && <p className='text-red-500 text-center'>{error}</p>}
          </div>
        </form>
      )}
    </div>
  );
}
