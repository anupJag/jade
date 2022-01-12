import { Document, Types } from 'mongoose';

export { Types } from 'mongoose';

export interface IObject {
  [key: string]: any;
}

export interface IPLP {
  filters: any;
  products: any;
}

export interface IProduct extends Document {
  id: Types.ObjectId;
  sku: string;
  title: string;
  shortDescription: string;
  description: [string];
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
  rating: IProductRating,
}

// Sub-interfaces
interface IProductPricing {
  list: number; // 1000
  retail: number; // 900
  special: [IProductPricingSpecial]
}

interface IProductPricingSpecial {
  price: number; // 900
  from: string; // 900
  to: string; // 100
  amountSavings: number; //
  percentageSavings: number; // 10
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

export interface IProductImage {
  url: string;
  altText: string;
  isDefault: boolean;
}

interface IProductRating {
  value: number;
  count: number;
}

interface IProductBrand {
  id: Types.ObjectId;
  name: string;
  brandType: string;
  description: string;
  disclaimer: string;
  manufacturerDetails: string;
  // could have more properties
}

export type IPLPUrlParsedQueries = {
  listCategory: string
  searchText?: string
  page?: number
  sortStyle?: number
  sortType?: string
  priceRange?: string
  rating?: string
  brands?: string
  deliveryType?: string
  discount: string
  reviewCount: string
}

export type IStartEndFilterRange = {
  start: string;
  end: string;
};