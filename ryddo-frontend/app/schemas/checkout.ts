import { z } from 'zod';

export const checkoutSchema = z
  .object({
    // Contact
    email: z.string().email('Please enter a valid email address'),
    newsOffers: z.boolean().optional(),

    // Delivery
    country: z.string().min(1, 'Country is required'),
    firstName: z.string().optional(),
    lastName: z.string().min(1, 'Last name is required'),
    address: z.string().min(1, 'Address is required'),
    apartment: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State/Province is required'),
    zipCode: z
      .string()
      .min(1, 'ZIP code is required')
      .regex(
        /^\d{5}(-\d{4})?$/,
        'Please enter a valid ZIP code (12345 or 12345-6789)'
      ),
    phone: z.string().optional(),

    // Payment
    paymentMethod: z.enum(['credit', 'paypal']),
    cardNumber: z.string().optional(),
    expirationDate: z.string().optional(),
    securityCode: z.string().optional(),
    nameOnCard: z.string().optional(),
    useShippingAddress: z.boolean().optional(),

    // Promo
    discountCode: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === 'credit') {
        return (
          data.cardNumber &&
          data.expirationDate &&
          data.securityCode &&
          data.nameOnCard
        );
      }
      return true;
    },
    {
      message: 'Credit card information is required',
      path: ['cardNumber'],
    }
  )
  .refine(
    (data) => {
      // ZIP code validation based on country
      if (data.country === 'United States') {
        return /^\d{5}(-\d{4})?$/.test(data.zipCode || '');
      } else if (data.country === 'Canada') {
        return /^[A-Z]\d[A-Z] \d[A-Z]\d$/.test(data.zipCode || '');
      }
      return true;
    },
    {
      message: 'Please enter a valid ZIP/Postal code',
      path: ['zipCode'],
    }
  );

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
