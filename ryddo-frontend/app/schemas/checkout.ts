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
    province: z.string().min(1, 'Province is required'),

    // Payment
    paymentMethod: z.enum(['credit', 'paypal']),
    cardNumber: z.string().optional(),
    expirationDate: z.string().optional(),
    securityCode: z.string().optional(),
    nameOnCard: z.string().optional(),
    useShippingAddress: z.boolean().optional(),

    // Order
    discountCode: z.string().optional(),
  })
  .refine(
    (data) => {
      // If credit card is selected, require card fields
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

// Export the inferred type for use in components
export type CheckoutFormData = z.infer<typeof checkoutSchema>;
