import gql from 'graphql-tag';
import { Document } from 'mongoose';
import { PRODUCT_IMAGES, UNIT_OF_MEASURE, RATING, BRAND, PRICE } from '../fragments';

export const QUERY_PRODUCTS = gql`
  query GetProducts {
    products: fetchProducts {
      sku
      title
      shortDescription
      ...ProductImages
      ...UnitOfMeasure
      ...Brand
      ...Rating
      ...Price
      categories
      productUrl
      productType
      maxQuantityAllowed
      isForSale
      marketingTags
    }
  }
  ${PRODUCT_IMAGES}
  ${UNIT_OF_MEASURE}
  ${RATING}
  ${BRAND}
  ${PRICE}
`;

export const MUTATE_ADD_PRODUCTS = gql`
  mutation addProducts($details: AddProduct!) {
    addProduct(details: $details) {
      id
      title
    }
  }
`;

export interface AddProducts extends Document {
  sku: string;
  title: string;
  shortDescription: string;
  description: [IProductDescription];
  images: [IProductImage]; // considers the first as the default image, if flag not set explicitly
  pricing: IProductPricing;
  shipping: IProductShipping;
  unitOfMeasure: IProductUoM;
  brand: IProductBrand;
  categories: [string];
  productUrl: string;
  baseProductId: string;
  displayType: string;
  productType: string;
  maxQuantityAllowed: number;
  isForSale: boolean;
  marketingTags: string[]; // "New", "Special Buy", "Best Value"
  shippingTags: string[]; // "Free delivery", "Free pickup", "2 day delivery"
  rating: IProductRating;
}

// Sub-interfaces
interface IProductDescription {
  title: string;
  description: string;
}
interface IProductPricing {
  list: number;
  retail: number;
  special: [IProductPricingSpecial];
}

interface IProductPricingSpecial {
  price: number;
  from: string;
  to: string;
  amountSavings: number;
  percentageSavings: number;
}

interface IProductUoM {
  unitType: string; // ml, Box, Gram, Piece, Kilo, Liter, Pack
  minQty: number; // minimum orderable quantity per unit of measure. defaults to 1
  price: number;
  displayText: string; // "2x200 ml"
}

interface IProductShipping {
  weight: number;
  dimensions: IProductShippingDimensions;
}

interface IProductShippingDimensions {
  width: number;
  height: number;
  depth: number;
}

interface IProductImage {
  url: string;
  altText: string;
  isDefault: boolean;
}

interface IProductRating {
  value: number;
  count: number;
}

interface IProductBrand {
  id: string;
  name: string;
  brandType: string;
  description: string;
  disclaimer: string;
  manufacturerDetails: string;
}

export const addProductVarsFn = (product: AddProducts) => ({
  details: {
    ...product,
  },
});
