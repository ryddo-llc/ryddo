export interface Products {
  id: number;
  type: string;
  image: string;
  name: string;
  originalPrice?: string;
  salePrice?: string;
  price?: string;
  priceRange?: string;
  onSale?: boolean;
  new?: boolean;
  bestSeller?: boolean;
}
