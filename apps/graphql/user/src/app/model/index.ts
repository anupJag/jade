// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { model, Schema } from 'mongoose';
import { SCHEMA_NAME } from '@jade/graphql/base';
import { IUser } from '../types';

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: false,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 8,
      private: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    profilePicture: {
      type: String,
      trim: true,
    },
    provider: {
      type: [String],
      default: ['local'],
    },
    googleId: {
      type: String,
    },
    facebookId: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default model<IUser>(SCHEMA_NAME.USER, userSchema);
