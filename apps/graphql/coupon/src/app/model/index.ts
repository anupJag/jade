import { model, Schema } from 'mongoose';
import { SCHEMA_NAME } from '@jade/graphql/base';

import { ConditionSchema } from './ConditionSchema';
import { RewardSchema } from './RewardSchema';

import { IPromotion } from '../types';

const PromotionSchema = new Schema({
  startDate: {
    type: Schema.Types.Date,
  },
  endDate: {
    type: Schema.Types.Date,
  },
  shortDescription: {
    type: Schema.Types.String,
  },
  longDescription: {
    type: Schema.Types.String,
  },
  promoGroup: {
    type: Schema.Types.String,
  },
  promoType: {
    type: Schema.Types.String,
  },
  condition: {
    type: ConditionSchema,
  },
  reward: {
    type: RewardSchema,
  },
  createdOn: {
    type: Schema.Types.Date,
  },
});

PromotionSchema.pre('save', function <IPromotion>(next) {
  const promotion = this;
  promotion.createdOn = new Date();
  next();
});

export const PromotionModel = model<IPromotion>(SCHEMA_NAME.PROMOTION, PromotionSchema);
