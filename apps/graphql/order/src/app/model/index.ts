import { model, Schema, Types } from 'mongoose';
import { SCHEMA_NAME } from '@jade/graphql/base';
import { ICart } from '../types';

const CartSchema = new Schema(
  {
    addedBy: {
      type: Types.ObjectId,
      ref: SCHEMA_NAME.USER,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<ICart>(SCHEMA_NAME.CART, CartSchema);
