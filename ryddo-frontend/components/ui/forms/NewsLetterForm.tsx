'use client';
import React, { useState } from 'react';


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
    <div>
      {isSuccess ? (
        <div className='text-center py-6 text-green-600 font-medium'>
          Thanks for subscribing! We'll be in touch soon.
        </div>
      ) : (
        <form
          onSubmit={(e) => handleSubmit(e as React.FormEvent<HTMLFormElement>)}
        >
          <div className='flex flex-col space-y-5 px-8'>
            <div className='flex flex-col justify-center sm:flex-row gap-4'>
              <input
                type='text'
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-80 h-11 pl-5 pr-5 relative bg-white rounded-[10px] border-gray-200 py-1 px-1 focus:outline-none focus:ring-2 focus:ring-pink-500 text-neutral-500 text-sm font-semibold'
                required
              />
              <input
                type='email'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-80 h-11 pl-5 pr-5 relative bg-white rounded-[10px] border-gray-200 py-1 px-1 focus:outline-none focus:ring-2 focus:ring-pink-500 text-neutral-500
text-sm
font-semibold'
                required
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='rounded-[10px] bg-[#F92F7B] hover:bg-pink-600 py-1 px-1 text-center text-white text-sm font-bold leading-7 tracking-wide transition duration-200 ease-in-out'
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
