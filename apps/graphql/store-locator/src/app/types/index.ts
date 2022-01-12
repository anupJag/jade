import { Document, Types } from 'mongoose';

export interface IObject {
  [key: string]: any;
}

export interface ILocation {
  latitude: number;
  longitude: number;
}

export interface WorkingHours {
  openingTime: string;
  closingTime: string;
}

export interface IOpenHours {
  mon: WorkingHours;
  tue: WorkingHours;
  wed: WorkingHours;
  thu: WorkingHours;
  fri: WorkingHours;
  sat: WorkingHours;
  sun: WorkingHours;
}

export interface IAddress {
  addressLine1;
  addressLine2;
  city;
  state;
  country;
  postalCode;
}

export interface IStore extends Document {
  id: Types.ObjectId;
  name: string;
  description: string;
  address: IAddress;
  contactNo: string[];
  location: ILocation;
  openHours: IOpenHours;
  openHourInfo: string;
  thumbnailImage: string;
  images: string[];
  timezone: string;
}

export interface IAddStore {
  name: string;
  description: string;
  address: IAddress;
  contactNo: string[];
  location: ILocation;
  openHours: IOpenHours;
  openHourInfo: string;
  thumbnailImage: string;
  images: string[];
  timezone: string;
}
