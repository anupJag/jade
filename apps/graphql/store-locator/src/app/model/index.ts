import { model, Schema } from 'mongoose';
import { SCHEMA_NAME } from '@jade/graphql/base';
import { IStore } from '../types';

const StoreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    address: {
      addressLine1: {
        type: String,
        required: true,
      },
      addressLine2: String,
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
    },
    contactNo: {
      type: [String],
      required: true,
    },
    location: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
    openHours: {
      mon: {
        openingTime: String,
        closingTime: String,
      },
      tue: {
        openingTime: String,
        closingTime: String,
      },
      wed: {
        openingTime: String,
        closingTime: String,
      },
      thu: {
        openingTime: String,
        closingTime: String,
      },
      fri: {
        openingTime: String,
        closingTime: String,
      },
      sat: {
        openingTime: String,
        closingTime: String,
      },
      sun: {
        openingTime: String,
        closingTime: String,
      },
    },
    openHourInfo: String,
    thumbnailImage: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<IStore>(SCHEMA_NAME.STORE, StoreSchema);
