// @TODO: Export the base types from a BE/FE shared folder to reduce duplication
export type Product = {
  id: string;
  sku: string;
  title: string;
  shortDescription: string;
  description: [string];
  images: [ProductImages];
  pricing: ProductPricing;
  unitOfMeasure: ProductUoM;
  productUrl: string;
  categories: [Category];
  brand: Brand;
  shippingTags: string[];
  rating: ProductRating;
};

export type Category = {
  id: string;
  name: string;
};

export type Brand = {
  name: string;
  type: string;
  description: string;
  disclaimer: string;
  manufacturerDetails: string;
};

export type ProductImages = {
  url: string;
  altText: string;
  isDefault: boolean;
};

export type ProductPricing = {
  list: number;
  retail: number;
  special: [ProductPricingSpecial];
};

export type ProductPricingSpecial = {
  price: number;
  from: string;
  to: string;
  amountSavings: number;
  percentageSavings: number;
};

export type ProductUoM = {
  unitType: string;
  minQty: number;
  price: number;
  displayText: string;
};

export type ProductRating = {
  value: number;
  count: number;
};

export type CategoryTile = {
  name: string;
  categoryIdentifier: string;
  isRootCategory: boolean;
  parentId: string;
  image: string;
  children: [Category];
};
