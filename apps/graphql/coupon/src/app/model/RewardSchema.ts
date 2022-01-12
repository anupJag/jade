import { Schema } from 'mongoose';

export const RewardSchema = {
  percOff: {
    type: Schema.Types.Number,
  },
  amountOff: {
    type: Schema.Types.Number,
  },
};
