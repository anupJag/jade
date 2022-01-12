import { Document, Types } from 'mongoose';

export interface IObject {
  [key: string]: any;
}

export interface ICart extends Document {
  addedBy: Types.ObjectId;
  productId: String;
  quantity: number;
}

export interface ICartDetails {
  id: Types.ObjectId;
  addedBy: String;
  productId: String;
  quantity: number;
  itemTotal: number;
}

export interface IBag {
  bag: ICartDetails[];
  bagTotal: number;
  discountedPrice?: number;
  grandTotal: number;
}

export interface ICategoryType extends Document {
  id: string;
  name: string;
  categoryIdentifier: string;
  image: string;
  parentId: string;
  isRootCategory: boolean;
  children: ICategoryType[];
}

export interface IProductType extends Document {
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
  rating: IProductRating;
}

enum PromoType {
  AmountOff = 'AmountOff',
  PercOff = 'PercOff',
}

interface IReward {
  percOff?: number;
  amountOff?: number;
  maxDiscount?: number;
}

export interface IOffer {
  promotionType: keyof typeof PromoType;
  reward: IReward;
}

// Sub-interfaces
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
  id: Types.ObjectId;
  name: string;
  unitType: string;
  description: string;
  disclaimer: string;
  manufacturerDetails: string;
  // could have more properties
}
