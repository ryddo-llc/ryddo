// Create a file called mockApi.js
import products from '../data/products'; // Your existing products array

interface Product {
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
// Simulate network delay
const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  // Get all products
  getAllProducts: async () => {
    // Simulate network delay of 300-800ms
    await delay(300 + Math.random() * 500);
    return { data: products };
  },

  // Get products by type
  getProductsByType: async (type: string) => {
    await delay(300 + Math.random() * 500);
    const filteredProducts = products.filter(
      (product) => product.type === type
    );
    return { data: filteredProducts };
  },

  // Get product by id
  getProductById: async (id: number) => {
    await delay(300 + Math.random() * 500);
    const product = products.find((product) => product.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return { data: product };
  },

  // Search products
  searchProducts: async (query: string) => {
    await delay(500 + Math.random() * 800);
    const searchTerm = query.toLowerCase();
    const searchResults = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.type.toLowerCase().includes(searchTerm)
    );
    return { data: searchResults };
  },

  // Get featured products (bestsellers, new arrivals, on sale)
  getFeaturedProducts: async (feature: string, type?: string) => {
    await delay(400 + Math.random() * 400);
    let featuredProducts: Product[];
    let productsToSearch: Product[] = products;
    if (type) {
      productsToSearch = products.filter((product) => product.type === type);
    }
    switch (feature) {
      case 'bestSeller':
        featuredProducts = productsToSearch.filter(
          (product) => product.bestSeller
        );
        break;
      case 'new':
        featuredProducts = productsToSearch.filter((product) => product.new);
        break;
      case 'onSale':
        featuredProducts = productsToSearch.filter((product) => product.onSale);
        break;
      default:
        featuredProducts = [];
    }

    return { data: featuredProducts };
  },
};

export default api;
