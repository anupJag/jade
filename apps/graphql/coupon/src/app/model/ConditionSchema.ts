import { Schema } from 'mongoose';

export const ConditionSchema = {
  minimumOrderAmount: {
    type: Schema.Types.Number,
  },
  maximumDiscountAmount: {
    type: Schema.Types.Number,
  },
};
