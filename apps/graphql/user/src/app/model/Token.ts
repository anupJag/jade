// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Schema, model, SchemaTypes } from 'mongoose';

const tokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
      index: true,
    },
    user: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: ['refresh', 'resetPassword'],
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

/**
 * @typedef Token
 */
const Token = model('Token', tokenSchema);

export default Token;
