'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Import schemas and types
import { checkoutSchema, CheckoutFormData } from '../../app/schemas/checkout';

// Import components
import { ExpressCheckout } from './ExpressCheckout';
import { ContactForm } from './ContactForm';
import { DeliveryForm } from './DeliveryForm';
import { ShippingMethod } from './ShippingMethod';
import { PaymentForm } from './PaymentForm';
import { OrderSummary } from './OrderSummary';

export default function CheckoutPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      country: 'United States',
      state: 'CA',
      paymentMethod: 'credit',
      useShippingAddress: true,
      newsOffers: false,
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    console.log('Form submitted:', data);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically:
      // 1. Process payment with Stripe/PayPal
      // 2. Save order to database
      // 3. Send confirmation email
      // 4. Update inventory
      // 5. Redirect to success page

      alert('Order submitted successfully!');
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error processing your order. Please try again.');
    }
  };

  return (
    <div className='min-h-screen'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
          {/* Left Column - Checkout Form  */}
          <div className='bg-white p-6 lg:p-12 order-2 lg:order-1'>
            <div className='max-w-lg mx-auto'>
              <ExpressCheckout />
              <ContactForm register={register} errors={errors} />
              <DeliveryForm register={register} errors={errors} />
              <ShippingMethod />
              <PaymentForm register={register} watch={watch} errors={errors} />

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-[#F92F7B] text-white py-4 px-6 rounded-md font-medium text-lg hover:bg-[#D81B60] transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Processing...' : 'Pay now'}
              </button>

              {/* Footer Links */}
              <div className='flex flex-wrap gap-4 text-sm text-blue-600'>
                <a href='#' className='underline'>
                  Return policy
                </a>
                <a href='#' className='underline'>
                  Privacy policy
                </a>
                <a href='#' className='underline'>
                  Terms of service
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary (Gray Background) */}
          <div className='bg-gray-50 order-1 lg:order-2 p-14'>
            <OrderSummary register={register} />
          </div>
        </div>
      </form>
    </div>
  );
}
