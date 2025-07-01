// types/checkout.ts
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';

// We'll define this here to avoid circular imports
export interface CheckoutFormData {
  email: string;
  newsOffers?: boolean;
  country: string;
  firstName?: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  province: string;
  paymentMethod: 'credit' | 'paypal';
  cardNumber?: string;
  expirationDate?: string;
  securityCode?: string;
  nameOnCard?: string;
  useShippingAddress?: boolean;
  discountCode?: string;
}

export interface FormProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  watch?: UseFormWatch<CheckoutFormData>;
}

// Specific interface for PaymentForm that requires watch
export interface PaymentFormProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  watch: UseFormWatch<CheckoutFormData>;
}

// Specific interface for OrderSummary that only needs register
export interface OrderSummaryProps {
  register: UseFormRegister<CheckoutFormData>;
}

export interface OrderItemProps {
  name: string;
  description: string;
  price: string;
  quantity: number;
  image: string;
}

export interface FormInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  placeholder: string;
  type?: string;
  register: UseFormRegister<CheckoutFormData>;
  name: keyof CheckoutFormData;
  error?: string;
  className?: string;
}

export interface FormSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'name'> {
  label?: string;
  register: UseFormRegister<CheckoutFormData>;
  name: keyof CheckoutFormData;
  error?: string;
  children: React.ReactNode;
}
