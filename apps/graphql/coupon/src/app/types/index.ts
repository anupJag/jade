import { Document, Types } from 'mongoose';

export interface IObject {
  [key: string]: any;
}

enum PromoGroup {
  'ORDER' = 'ORDER',
  'SHIPPING' = 'SHIPPING',
  'PRODUCT' = 'PRODUCT',
}

enum PromoType {
  'AmountOff' = 'AmountOff',
  'PercOff' = 'PercOff',
}

export interface IReward {
  percOff?: Number;
  amountOff?: Number;
}

export interface ICondition {
  minimumOrderAmount?: Number;
  maximumDiscountAmount?: Number;
}

export interface IPromotion extends Document {
  id: Types.ObjectId;
  startDate: Date;
  endDate: Date;
  shortDescription: String;
  longDescription: String;
  promoGroup: keyof typeof PromoGroup;
  promoType: keyof typeof PromoType;
  condition: ICondition;
  reward: IReward;
}
