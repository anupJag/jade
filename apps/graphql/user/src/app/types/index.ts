import { Document } from 'mongoose';

export interface IObject {
  [key: string]: any;
}

export interface IUser extends Document {
  id: string;
  firstName: string;
  lastName?: string;
  password?: string;
  email: string;
  phoneNumber?: string;
  profilePicture?: string;
  provider?: [string];
  googleId?: string;
  facebookId?: string;
  role?: string;
  access: {
    token: string;
    expires: string;
  };
  refresh: {
    token: string;
    expires: string;
  };
}
