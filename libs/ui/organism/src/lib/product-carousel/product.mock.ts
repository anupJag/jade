import {
  Product,
  ProductUoM,
  ProductPricingSpecial,
  ProductPricing,
} from '@jade/ui/organism/types';

const mockProductUoM: ProductUoM = {
  unitType: 'kg',
  minQty: 1,
  price: 1.99,
  displayText: '1.99$',
};
const mockSpecialPricing: ProductPricingSpecial = {
  price: 1.68,
  from: '1.99$',
  to: '1.68$',
  amountSavings: 0.31,
  percentageSavings: 15,
};
const mockPricing: ProductPricing = {
  list: 1.68,
  retail: 1.99,
  special: [mockSpecialPricing],
};
const mockProduct: Product = {
  id: '1234',
  sku: '23970',
  title: 'sample image',
  shortDescription: 'sample product',
  description: ['sample product'],
  images: [{ url: './sample/image', altText: 'sample image', isDefault: false }],
  pricing: mockPricing,
  unitOfMeasure: mockProductUoM,
  productUrl: '/p/101',
  rating: { value: 4, count: 100 },
};
const products = [mockProduct];

export default products;
