import { Types } from 'mongoose';
import { IUser } from '../types';
import UserModel from '../model';

export const getUserById = async (id: Types.ObjectId): Promise<IUser | null> => {
  const result = UserModel.findById(id);
  return result;
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  const result = UserModel.findOne({ email });
  return result;
};
