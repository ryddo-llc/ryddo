import { z } from 'zod';

export const checkoutSchema = z
  .object({
    email: z.string().email('Please enter a valid email address'),
    newsOffers: z.boolean().optional(),
    country: z.string().min(1, 'Country is required'),
    firstName: z.string().optional(),
    lastName: z.string().min(1, 'Last name is required'),
    address: z.string().min(1, 'Address is required'),
    apartment: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    province: z.string().min(1, 'Province is required'),
    paymentMethod: z.enum(['credit', 'paypal']),
    cardNumber: z.string().optional(),
    expirationDate: z.string().optional(),
    securityCode: z.string().optional(),
    nameOnCard: z.string().optional(),
    useShippingAddress: z.boolean().optional(),
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
      message: 'Credit card information is required when paying by card',
      path: ['cardNumber'],
    }
  );
