type CategoriesData = {
  name: string;
  link: string;
  image: string;
};

export const createCategories = (): CategoriesData[] => {
  const categoryNames = [
    'e-scooters',
    'e-bikes',
    'gear',
    'accessories',
    'ev-servicing',
  ];

  return categoryNames.map((name) => ({
    name,
    link: `/products/${name}`,
    image: `/images/categories/${name}.png`,
  }));
};

export const categories = createCategories();
